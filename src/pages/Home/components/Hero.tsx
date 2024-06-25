import { Link } from "react-router-dom"
import IntroPharagraph from "../../../components/IntroPharagraph/IntroPharagraph"
import Title from "../../../components/Title/Title"
import { IoCall } from "react-icons/io5"
import { ImInfo } from "react-icons/im"



const Hero = () => {
    return (
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-14">
            <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">

                <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                    <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                        WHO I AM?
                    </p>

                    <div className="font-playfair">
                        <Title>I'm Daniel, a passionate web developer.</Title>
                    </div>

                    <IntroPharagraph>
                        I can bring your ideas to life with innovative web applications. From designing
                        user-friendly interfaces to developing robust backend systems, I'm here to help.
                    </IntroPharagraph>

                    <div className="flex flex-col gap-2.5 sm:justify-center lg:justify-start">
                        <div className="flex items-center">
                            <IoCall size={24} className="text-indigo-600" />
                            <span className="ml-2">United Kingdom - 07887637239</span>
                        </div>

                        <div className="flex items-center">
                            <IoCall size={24} className="text-indigo-600" />
                            <span className="ml-2">Romania - 0727967474</span>
                        </div>

                        <div className="flex items-center">
                            <ImInfo size={24} className="text-indigo-600" />
                            <Link to={'/about'} className="
                            underline ml-2
                            ">About me</Link>
                        </div>

                    </div>
                </div>



                <div className="h-48 overflow-hidden bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 ">
                    <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&amp;q=75&amp;fit=crop&amp;w=1000" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center " />
                </div>

            </section>
        </div>
    )
}

export default Hero
