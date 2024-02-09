import resume from "../assets/resume.pdf";

function Navbar() {
    return (
        <nav className="container sticky top-2 z-50 flex items-center justify-between  xl:w-2/6 h-20 px-5 sm:px-12 rounded-2xl border-white border-2 bg-transparent backdrop-blur-md my-3 m-auto">
            <h1 className="font-clash font-semibold flex items-center">
                <svg
                    className="w-6"
                    width="30"
                    height="28"
                    viewBox="0 0 30 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.408 24.008L0.792 17.608V13.992L16.408 7.624V11.24L5.048 15.816L16.408 20.392V24.008ZM21.0995 27.432L17.5475 26.376L25.8675 0.519999L29.4195 1.576L21.0995 27.432Z"
                        fill="#FD6303"
                    />
                </svg>{" "}
                Cre8veSam
            </h1>

            <div className="flex gap-4 text-sm md:text-base">
                <a href="#work" className="hover:text-orange">Work</a>
                <a href={resume} className="hover:text-orange" download>
                    Download Resume
                </a>
            </div>
        </nav>
    );
}
export default Navbar;
