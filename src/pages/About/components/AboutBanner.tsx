import IntroText from "../../../components/IntroText/IntroText"
import profile from '/profile.jpg';





const AboutBanner = () => {
    return (
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-14  
        md:flex md:flex-row-reverse">
            <aside className="flex-1 max-w-[500px] mt-10 md:mt-0">
                <img src={profile} alt="Profile pic for portfolio" className="max-h-[500px] rounded-full overflow-hidden mx-auto md:m-0 md:mr-auto" />
            </aside>


            <aside className="flex-1 flex flex-col justify-center">
                <div className="">
                    <IntroText>WHY HIRE ME</IntroText>
                    <div className="font-playfair text-5xl md:text-8xl font-bold">
                        About me
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default AboutBanner
