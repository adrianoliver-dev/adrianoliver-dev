interface CaseStudyLayoutProps {
  children: React.ReactNode
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <article className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        {children}
      </div>
    </article>
  )
}
