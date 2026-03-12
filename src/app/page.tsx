import Hero from "@/components/home/Hero"
import ProjectsGrid from "@/components/home/ProjectsGrid"
import Methodology from "@/components/home/Methodology"
import FadeUp from "@/components/ui/FadeUp"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeUp>
        <ProjectsGrid />
      </FadeUp>
      <FadeUp>
        <Methodology />
      </FadeUp>
    </>
  )
}
