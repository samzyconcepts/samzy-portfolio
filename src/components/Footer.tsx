import StarSVG from "./StarSVG";

const Footer = () => {
    return (
        <footer className="container">
            <div className="flex flex-col-reverse items-center gap-4 py-4 md:justify-between md:flex-row">
                <div className="flex gap-2">
                    <StarSVG />
                    <h4>&copy; Cre8veSam 2025</h4>
                </div>

                <ul className="flex items-center gap-2 sm:gap-4">
                    <li>
                        <a href="https://www.instagram.com/oderinwalesamson/" className="hover:text-orange" target="_blank">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/samsonoderinwale/" className="hover:text-orange" rel="noreferrer" target="_blank">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/cre8veSam" className="hover:text-orange" rel="noreferrer" target="_blank">
                            X <span className="italic text-muted-foreground">(formerly Twitter)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;

// mailto:oderinwalesamson1@gmail.com?cc=samzyolufemi@gmail.com
