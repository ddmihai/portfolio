import { Link, useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import { Project } from "../../components/Portfolio/Portfolio";






const ProjectIndividual = () => {
    const location = useLocation();
    const project: Project = location.state;


    return (
        <section className="mx-auto max-w-screen-xl px-4 md:px-8 mt-16 py-10 md:flex">
            <aside className="flex-1 basis-[450px] p-5">
                <div className="font-playfair">
                    <Title>{project.projectName}</Title>
                    <p className="-mt-8 mb-10 text-indigo-600 text-xl">Please checkout my project implementation</p>
                    <Link className="underline text-indigo-600" to={project.projectLink} >Watch live</Link>


                    <p className="mt-4 whitespace-pre-wrap font-sans text-slate-500">{project.projectDescription}</p>
                </div>


                <aside className="flex-1 basis-[450px] flex flex-col">
                    <div className="flex flex-wrap gap-4">
                        {project.projectTechnologies.map((tech, index) => {
                            return (
                                <div key={index} className="flex items-center space-x-2 text-xl bg-slate-100 rounded-xl py-2 px-6">
                                    <span>{tech.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </aside>
            </aside>

            <aside className="flex-1 basis-[450px] p-5">
                <img src={project.projectImage} alt={`${project.projectName} representation screenshot`} />
            </aside>
        </section>
    );
};

export default ProjectIndividual;
