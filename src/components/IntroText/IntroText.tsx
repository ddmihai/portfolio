import React from "react"




const IntroText = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl uppercase">
            {children}
        </p>
    )
}

export default IntroText
