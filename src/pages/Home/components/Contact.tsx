import { BsArrowRight } from "react-icons/bs"
import Title from "../../../components/Title/Title"
import { useNavigate } from "react-router-dom"



const Contact = () => {

    const navigate = useNavigate();


    return (
        <div className="bg-slate-50">
            <section className="mx-auto max-w-screen-xl px-4 md:px-8 mt-16 py-10">
                <div className="font-playfair flex justify-between items-center">
                    <Title>Contact me</Title>
                </div>

                <div className="flex justify-between items-center -mt-10">
                    <p className="text-slate-500">
                        Interested in learning more about my services or hiring me? Please complete the contact form, email me directly, or call me on the next page.
                    </p>
                    <BsArrowRight onClick={() => navigate('/contact')} className="text-indigo-600 text-7xl" />
                </div>
            </section>
        </div>
    )
}

export default Contact
