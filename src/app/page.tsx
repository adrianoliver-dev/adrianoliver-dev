import Hero from "@/components/home/Hero"
import ProjectsGrid from "@/components/home/ProjectsGrid"
import Methodology from "@/components/home/Methodology"
import About from "@/components/home/About"
import Services from "@/components/home/Services"
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
      <SectionTracker name="methodology">
        <FadeUp>
          <Methodology />
        </FadeUp>
      </SectionTracker>
      <SectionDivider />
      <SectionTracker name="about">
        <About />
      </SectionTracker>
      <SectionDivider />
      <SectionTracker name="services">
        <Services />
      </SectionTracker>
      <SectionTracker name="contact">
        <Contact />
      </SectionTracker>
    </>
  )
}
