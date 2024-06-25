import { Link } from "react-router-dom"
import IntroText from "../../../components/IntroText/IntroText"
import Title from "../../../components/Title/Title"





const AboutMe = () => {
    return (
        <section className="bg-slate-50">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-14 py-14">
                <IntroText>About me</IntroText>
                <div className="font-playfair">
                    <Title>I am an enthusiastic web developer, with a rich experience in building websites from scratch. </Title>
                </div>


                <section className="md:flex">
                    <div className="flex-1 w-full md:max-w-lg">
                        <p className="font-playfair text-3xl text-indigo-600 font-extralight">I design and build professional & beautiful websites</p>
                    </div>
                    <div className="flex-1 px-5 py-10 md:py-0">
                        <p className="text-slate-500 flex flex-col gap-4 mb-10">
                            <span>
                                I'm Daniel, a passionate web developer with extensive experience in JavaScript, ReactJS, NodeJS with Express, and Tailwind. I am also proficient
                                in working with databases like MongoDB and am currently expanding my expertise in relational databases. Additionally, I have solid experience with
                                TypeScript, which enhances my ability to write robust and scalable code.
                            </span>

                            <span>
                                As a self-reliant individual who excels in team settings, I am result-oriented and dedicated to providing the best experience for my clients. My focus is
                                always on delivering high-quality, reliable software that clients can trust for their business needs.
                            </span>

                            <span>
                                With a Bachelor's degree in Computer Science, I understand the importance of building dependable and robust software solutions. While I don’t have
                                previous experience in a tech-based job, I am committed to investing time and effort into acquiring one. Throughout my career, I have consistently
                                strived to enhance my skills and stay updated with the latest industry trends to ensure that I deliver top-notch services to my clients.
                            </span>
                        </p>
                        <Link to={'/about'} className="text-indigo-600 mt-10">READ MORE</Link>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default AboutMe
