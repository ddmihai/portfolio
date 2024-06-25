
//  * WhatIdo

import { BsArrowRight } from "react-icons/bs"
import Title from "../../../components/Title/Title"
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BsDatabaseSlash } from "react-icons/bs";



const WhatIdo = () => {


    const services = [
        {
            title: "Front-End",
            icon: <RiReactjsFill className="text-indigo-600 text-5xl" />,
            description: "I have good Front-End experience consolidated by building beautifully crafted projects using HTML5/CSS3, SCSS, Tailwind, ReactJS with TypeScript"
        },

        {
            title: "Back-End",
            icon: <FaNodeJs className="text-indigo-600 text-5xl" />,
            description: "For functionality, I use NodeJS runtime to create APIs that will give my websites life. I am confortable using Express, TypeScript, and MongoDB, currently focusing in getting knowledge in Relational databases"
        },

        {
            title: "Databases",
            icon: <BsDatabaseSlash className="text-indigo-600 text-5xl" />,
            description: "Currently having experience in MongoDB, and exposure in MySQL databases, I'm curently expanding my knowledge in Relational databases and cloud providers like AWS by building personal projects and using the specified services"
        }
    ]



    return (
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-14 py-10">
            <div>
                <div className="font-playfair text-center md:text-left">
                    <Title>What I do</Title>
                </div>


                <aside className="text-center md:text-left md:flex md:flex-wrap md:justify-between md:items-center">
                    <p className="flex-1 max-w-4xl text-slate-500">
                        From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.
                        I specialize in creating web applications, server-side products, and designing websites for small businesses.
                    </p>
                    <BsArrowRight className="text-indigo-600 mx-auto mt-5 md:m-0" size={70} />
                </aside>


                <aside className="flex flex-wrap gap-4 mt-20">
                    {
                        services.map((element, index) => (
                            <figure key={index} className="border-b flex-1 border-slate-200 md:border-b-0 md:border-l flex flex-col items-center py-5 
                            max-w-[400px] mx-auto basis-[500px] px-5">
                                <span className="md:hidden">{element.icon}</span>
                                <div className="text-center md:text-left p-2">
                                    <div className="md:flex md:items-center gap-3 items-center">
                                        <p className="hidden md:block">{element.icon}</p>
                                        <p className="text-xl borde mt-4 uppercase md:m-0">{element.title}</p>

                                    </div>
                                    <p className="text-slate-500 mt-5">
                                        {element.description}
                                    </p>
                                </div>
                            </figure>
                        ))
                    }
                </aside>
            </div>
        </section>
    )
}

export default WhatIdo
