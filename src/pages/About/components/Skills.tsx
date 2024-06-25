import Title from '../../../components/Title/Title';
import { SkillBar } from '../../Home/components/Skills';
import mask from '/mask.jpg';




const Skills = () => {
    return (
        <div>
            <div className='max-h-[300px] overflow-hidden'>
                <img src={mask} alt="Image abstract" className='object-cover max-h-full object-bottom w-full' />
            </div>


            <section className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-14 py-10 lg:flex">
                <div className='font-playfair flex flex-1 justify-center flex-col py-14'>
                    <Title>My Skills</Title>
                    <p className='text-slate-500'>
                        I believe in the fact that learning never stops and I am interested in learning new technologies and programming languages that will
                        help me design and develop a better output in less time.
                    </p>
                </div>

                <div className='bg-slate-50 p-5 rounded-xl flex-1'>
                    <SkillBar title="HTML5/CSS3" percentage={70} />
                    <SkillBar title="ReactJS" percentage={70} />
                    <SkillBar title="JavaScript" percentage={60} />
                    <SkillBar title="MongoDB" percentage={60} />
                    <SkillBar title="NodeJS" percentage={50} />
                    <SkillBar title="TypeScript" percentage={40} />
                </div>
            </section>
        </div>
    )
}

export default Skills
