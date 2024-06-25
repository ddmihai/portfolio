import React from 'react'

const IntroPharagraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className='leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg'>
            {children}
        </p>
    )
}

export default IntroPharagraph
