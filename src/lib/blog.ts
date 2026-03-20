import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  updated?: string
  excerpt: string
  author: string
  tags: string[]
  coverImage?: string
  readingTime: number
  content: string
}

export type BlogPostMeta = Omit<BlogPost, 'content'>

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  
  const files = fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.mdx'))
  
  return files
    .map(filename => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      
      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        updated: data.updated,
        excerpt: data.excerpt ?? '',
        author: data.author ?? 'Adrian Oliver',
        tags: data.tags ?? [],
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    updated: data.updated,
    excerpt: data.excerpt ?? '',
    author: data.author ?? 'Adrian Oliver',
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    readingTime: calculateReadingTime(content),
    content,
  }
}
