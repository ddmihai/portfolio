import { Link } from "react-router-dom"



const Header = () => {

    const onButtonClick = () => {
        const pdfUrl = "/Daniel_Mihai_Romania.pdf"; // Updated path
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Daniel_Mihai_Romania.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        link.removeAttribute('download');
    };



    return (
        <header>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Daniel <span className="text-2xl font-semibold text-indigo-500">M.</span></span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to={'/about'} className="mr-5 hover:text-gray-900">About</Link>
                    <Link to={'/contact'} className="mr-5 hover:text-gray-900">Contact me</Link>
                    <button onClick={onButtonClick} className="mr-5 hover:text-gray-900 font-semibold text-indigo-500 underline">Download Resume</button>
                </nav>
            </div>
        </header>
    )
}

export default Header
