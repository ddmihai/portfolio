import React from 'react'

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className='text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-5xl'>{children}</h1>
    )
}

export default Title
