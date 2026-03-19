import Hero from "@/components/home/Hero"
import ProjectsGrid from "@/components/home/ProjectsGrid"
import About from "@/components/home/About"
import Contact from "@/components/home/Contact"
import FadeUp from "@/components/ui/FadeUp"
import SectionTracker from "@/components/analytics/SectionTracker"
import SectionDivider from "@/components/ui/SectionDivider"

export default function HomePage() {
  return (
    <>
      <SectionTracker name="hero">
        <Hero />
      </SectionTracker>
      
      <SectionDivider />
      
      <SectionTracker name="projects">
        <FadeUp>
          <ProjectsGrid />
        </FadeUp>
      </SectionTracker>

      <SectionDivider />

      <SectionTracker name="about">
        <About />
      </SectionTracker>

      <SectionDivider />

      <SectionTracker name="contact">
        <Contact />
      </SectionTracker>
    </>
  )
}
