import maskingImage from '/mask.jpg';




// imageContainer
// imageObject
const ImageMask = () => {
    return (
        <section className='relative mx-auto mt-14 py-10'>
            <img src={maskingImage} alt="Landscape image" className='relative z-20 object-cover object-center w-full max-h-[300px]' />
        </section>
    )
}

export default ImageMask
