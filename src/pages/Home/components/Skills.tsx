import Title from "../../../components/Title/Title"
import React from 'react';


export const data = [
    {
        dateFrame: "MAY - MAY (2024)",
        company: "EasyBank",
        position: 'Front-end',
        description: "EasyBank is a meticulously crafted landing page highlighting the benefits of online banking. Developed as part of Frontendmentor challenges, it utilizes SASS for maintainable CSS and BEM methodology for scalable and manageable code. This project showcases my ability to write clean, organized, and scalable code using modern web development tools and methodologies."
    },
    {
        dateFrame: "MAY - MAY (2024)",
        company: "Omlette Recipe",
        position: 'Front-end',
        description: "Please check out my first Frontend Mentor challenge. Using HTML5 and CSS3, I developed this project based on a provided mockup. I employed flexbox for responsive layouts and semantic HTML for accessibility. This challenge enhanced my knowledge of semantic HTML, flexbox, and mobile-first design. It was an excellent warm-up for future projects and new technologies."
    },
    {
        dateFrame: "MAY - JUNE (2024)",
        company: "AUDIOPHILLE",
        position: 'Front-end',
        description: "Audiophile is an advanced eCommerce platform for music lovers, featuring Home, Headphones, Speakers, Earphones, and Checkout pages. Built as a SPA with ReactJS, TypeScript, Vite.js, and Tailwind CSS, it includes dynamic cart functionalities, JSON-based image rendering, and local storage for cart data persistence. Hosted on Heroku, it offers seamless navigation and a superior shopping experience."
    },

    {
        dateFrame: "JUNE - JUNE (2024)",
        company: "TutorialX",
        position: 'Full-stack',
        description: "TutorialX is a comprehensive web application for learning from expert-curated free resources. Utilizing ReactJS, TypeScript, Tailwind, NodeJS, ExpressJS, and MongoDB, it enables teachers to compile resources into structured chapters and share them with students. This project showcases my ability to develop efficient educational platforms using modern web technologies."
    }
];



const Skills = () => {



    return (
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-14 py-10 lg:flex">
            <article className="flex-1">
                <div className="font-playfair">
                    <Title>Skills</Title>
                </div>
                <SkillBar title="HTML5/CSS3" percentage={70} />
                <SkillBar title="ReactJS" percentage={70} />
                <SkillBar title="JavaScript" percentage={60} />
                <SkillBar title="MongoDB" percentage={60} />
                <SkillBar title="NodeJS" percentage={50} />
                <SkillBar title="TypeScript" percentage={40} />
            </article>



            <article className="flex-1 mt-14 lg:mt-0">
                <div className="font-playfair">
                    <Title>Projects</Title>
                </div>
                <div>
                    <TimeLine {...data[0]} />
                    <TimeLine {...data[1]} />
                    <TimeLine {...data[2]} />
                    <TimeLine {...data[3]} />
                </div>
            </article>
        </section>
    )
}


interface ITimeLine {
    dateFrame: string,
    company: string,
    description: string,
    position: string
}

export const TimeLine: React.FC<ITimeLine> = ({ dateFrame, company, description, position }) => {
    return (
        <article className="p-2 md:flex bg-slate-50 rounded-xl my-4">
            <div className="text-slate-500 uppercase text-sm max-w-fit relative md:flex-1 ">
                <p className="p-2">{dateFrame}</p>
                <p className="border-t p-2">{company}</p>
            </div>

            <div className="flex-1 md:ml-4">
                <p className="uppercase text-indigo-600 font-semibold font-playfair text-xl mt-4 md:mt-0">{position}</p>
                <p className="text-slate-500 mt-2">
                    {description}
                </p>
            </div>
        </article>
    )
}











export interface SkillBarProps {
    title?: string;
    percentage: number;
}




export const SkillBar: React.FC<SkillBarProps> = ({ title, percentage }) => {
    const beforeWidth = `max-w-${percentage}`;

    return (
        <article className="mt-5 m-2 max-w-lg">
            <p className="ml-1 mb-1 text-sm">{title}</p>
            <div className="h-6 relative rounded-xl bg-indigo-50 overflow-hidden flex items-center">
                <div
                    className={`absolute inset-0 before:absolute before:inset-0 before:bg-indigo-500 ${beforeWidth}`}
                    style={{ width: `${percentage}%` }}
                />
                <div className="absolute left-5 text-white">{percentage}%</div>
            </div>
        </article>
    );
};




export default Skills
