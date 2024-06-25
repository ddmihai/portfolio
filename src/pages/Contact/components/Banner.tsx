import Title from '../../../components/Title/Title';
import mask from '/mask.jpg';





const Banner = () => {
    return (
        <section className="relative max-h-[450px] overflow-hidden">
            <div className='flex-1 px-5 absolute z-20 inset-0 bg-white/30 flex flex-col items-center justify-center'>
                <div className='font-playfair'>
                    <Title>Contact me</Title>
                </div>
                <p className='text-slate-500'>Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
            </div>


            <img src={mask} alt="Abstract pricture" className='max-w-full max-h-full object-cover' />
        </section>
    )
}

export default Banner 
