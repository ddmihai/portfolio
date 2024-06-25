import Title from '../../../components/Title/Title';
import { TimeLine, data } from '../../Home/components/Skills';



const Projects = () => {
    return (
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-14 py-10">
            <div className="font-playfair">
                <Title>Projects</Title>
            </div>
            <div>
                <TimeLine {...data[0]} />
                <TimeLine {...data[1]} />
                <TimeLine {...data[2]} />
                <TimeLine {...data[3]} />
            </div>
        </section>
    )
}

export default Projects
