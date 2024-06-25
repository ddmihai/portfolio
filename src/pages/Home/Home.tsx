import Portfolio from "../../components/Portfolio/Portfolio"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import ImageMask from "./components/Imagebackground"
import Skills from "./components/Skills"
import WhatIdo from "./components/WhatIdo"



const Home = () => {
    return (
        <main>
            <Hero />
            <AboutMe />
            <WhatIdo />
            <ImageMask />
            <Skills />
            <Portfolio />
            <Contact />
        </main>
    )
}

export default Home
