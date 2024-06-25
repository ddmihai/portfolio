
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";




export interface Technology {
    name: string;
    icon: string;
}

export interface Project {
    projectName: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    projectTechnologies: Technology[];
};


export const data: Project[] = [
    {
        projectName: 'Audiophille',
        projectDescription: `
            Audiophile: Elevating Music Enthusiasts' Experience
            Introducing Audiophile, a cutting-edge eCommerce platform designed for music aficionados seeking unparalleled audio experiences. Our project boasts five meticulously crafted pages: Home, Headphones, Speakers, Earphones, and Checkout, each tailored to enhance user navigation and purchase journeys.

            At the heart of our project lies the Cart Element, a powerhouse of functionality that streamlines shopping experiences. Features include:

            Dynamic quantity adjustments, price manipulations, and item selections within the cart.
            Image rendering powered by paths from a JSON file, ensuring visual fidelity.
            Flexibility to modify product quantities directly from the cart.
            Efficient removal of products once their quantities hit zero.
            Accurate calculation of total prices for seamless transactions.
            Developed as a Single Page Application (SPA) with Vite.js, we leveraged ReactJS with TypeScript for robustness and efficiency. Tailwind CSS was chosen for its utility-first styling, promoting rapid UI development and adherence to modern design principles.

            Challenges & Solutions

            Mobile-First Design: Overcoming the challenge of a mobile-first approach required extensive research and the strategic use of breakpoints, ensuring a seamless experience across devices.
            Cart Data Persistence: Utilizing Local Storage eliminated the need for prop drilling, preserving cart data sessionlessly without compromising performance.
            Static Assets Management: Recognizing Vite's asset handling, we shifted static assets to the public folder, ensuring their availability without optimization, thus enhancing production readiness.
            Hosted on Heroku, Audiophile stands as a testament to innovative eCommerce solutions, blending aesthetics with functionality. Explore our live project at Audiophile Live Site.
        `,
        projectImage: '/audiophille.png',
        projectLink: 'https://audiophille-0d2647532e37.herokuapp.com/',
        projectTechnologies: [
            {
                name: 'ReactJS', icon: 'FaReact'
            },
            {
                name: 'TypeScript', icon: 'SiTypescript'
            },
            {
                name: 'TailwindCSS', icon: 'FaSass'
            },
        ]
    },


    {
        projectName: 'EasyBank',
        projectImage: '/Easybank.png',
        projectLink: 'https://ddmihai.github.io/Easybank/',
        projectDescription: `
            EasyBank is a meticulously crafted landing page that highlights the benefits of using an online banking system. Developed as my second project from the Frontendmentor challenges, this project allowed me to incorporate several advanced technologies and methodologies.
            For this project, I utilised the SASS preprocessor, a superset of CSS3, which offers numerous features to enhance the clarity and maintainability of CSS3. My styling strategy involved creating separate folders for different functionalities, such as resets, variables, and mixins, distinct from the components folder. This approach ensures clean, organised code and facilitates easier maintenance and scalability.
            I also implemented the BEM (Block, Element, Modifier) styling methodology for the first time. BEM is a naming convention that breaks down the UI into independent blocks, significantly improving the scalability and manageability of large projects. By combining BEM with SASS, I was able to leverage nested styling, strategically divide component styles, reuse mixins, and effectively separate concerns.
            This project not only demonstrates my ability to use modern web development tools and methodologies but also reflects my commitment to writing clean, scalable, and maintainable code. I am excited to continue applying these practices in future projects.
`,
        projectTechnologies: [
            {
                name: 'HTML5', icon: 'FaHtml5'
            },
            {
                name: 'CSS3', icon: 'FaCss3Alt'
            },
            {
                name: 'SASS', icon: 'FaSass'
            },
        ]
    },


    {
        projectName: 'TutorialX',
        projectImage: '/tutorialx.png',
        projectLink: 'https://tutorialx-a759317e325f.herokuapp.com/',
        projectDescription: `
            TutorialX is a web application designed to empower developers by enabling them to compile comprehensive tutorials, organized into distinct chapters, and list these resources to eager learners. Unlike the other tutorials available online, TutorialX focuses on identifying and showcasing tutorials that offer substantial value at no cost.
            Once a tutorial has been developed, users have the capability to append chapters to it. These chapters necessitate a well-structured text format facilitated by Markdown, which can incorporates YouTube video links or other freely accessible resources. Upon completing the creation of chapters in sequential order, users are then equipped to generate a link for the tutorial, facilitating easy distribution among their student base.
            The realization of this project was made possible through the utilization of a modern technology stack comprising ReactJS, TypeScript, NodeJS with ExpressJS, MongoDB, and Tailwind CSS. A significant hurdle encountered during the development process was the implementation of an authentication system and the integration of structured text within the chapters. To address the authentication challenge, sessions were employed, simplifying the process and providing valuable insights into setting up cookies and sessions for both development and production environments. Additionally, the incorporation of Markdown in React served to enhance the document structure, offering a richer and more organized text presentation.
            Deployment of the project was efficiently managed through Heroku, streamlining the transition from development to production.
        `,
        projectTechnologies: [
            {
                name: 'ReactJS', icon: 'FaReact'
            },
            {
                name: 'TypeScript', icon: 'SiTypescript'
            },
            {
                name: 'TailwindCSS', icon: 'FaSass'
            },
            {
                name: 'NodeJS', icon: 'FaNodeJs'
            },
            {
                name: 'ExpressJS', icon: 'SiExpress'
            }
            ,
            {
                name: 'MongoDB', icon: 'FaReact'
            }
        ]
    },

    {
        projectName: 'Omlette Receipe',
        projectImage: 'omlette.png',
        projectLink: 'https://ddmihai.github.io/omlette-html-css/',
        projectDescription: `
            Please check out my first Frontend Mentor challenge. I developed this straightforward project by adhering to a mockup provided by the challenge, utilizing HTML5 and CSS3 for styling.
            For responsiveness, I employed flexbox due to its ease of use and efficiency in creating simple layouts. Additionally, I incorporated semantic HTML to enhance the site's accessibility for screen readers and browsers' comprehension.
            Despite being a relatively simple initial challenge, I significantly expanded my knowledge regarding semantic HTML, flexbox, and adopting a mobile-first approach to web design. Overall, I find this challenge to be an excellent warm-up for the subsequent ones. Moving forward, I intend to continue pushing my boundaries by exploring new technologies and principles.
        `,
        projectTechnologies: [
            {
                name: 'HTML5', icon: 'FaHtml5'
            },
            {
                name: 'CSS3', icon: 'FaCss3Alt'
            },
            {
                name: 'SCSS', icon: 'FaSass'
            }
        ]
    }
]





const Portfolio = () => {

    const navigate = useNavigate();



    return (
        <section className="mx-auto max-w-screen-xl px-4 md:px-8 mt-16 py-10">
            <div className="font-playfair mb-16">
                <Title>
                    Portfolio
                </Title>
            </div>

            <article className="flex flex-wrap gap-4 align-top">
                {
                    data.map((element, index) => (
                        <button role="button" key={index} onClick={() => navigate('/project-individual', { state: element })}
                            className="h-fit" >
                            <img src={element.projectImage} alt={element.projectName} className="flex-1 max-w-sm basis-[400px]" />
                        </button>
                    ))
                }
            </article>
        </section>
    )
}

export default Portfolio
