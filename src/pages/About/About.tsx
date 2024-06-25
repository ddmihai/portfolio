import AboutMe from "../Home/components/AboutMe"
import Contact from "../Home/components/Contact"
import AboutBanner from "./components/AboutBanner"
import Projects from "./components/Projects"
import Skills from "./components/Skills"



const About = () => {
    return (
        <section>
            <AboutBanner />
            <AboutMe />

            <Skills />
            <Projects />
            <Contact />
        </section>
    )
}

export default About
