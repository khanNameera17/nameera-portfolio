import About from "@/components/about";
import Hero from "@/components/home";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="skills">
        <Skills />
      </section> */}
      {/* <section id="projects">
        <Projects />
      </section> */}
      {/* <section id="contact">
        <Contact />
      </section> */}
    </>
  )
}
