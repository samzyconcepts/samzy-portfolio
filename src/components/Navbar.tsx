import React, { useState } from "react";
import resume from "../assets/resume.pdf";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="container sticky z-50 top-2">
            <div className="flex items-center justify-between h-20 px-5 m-auto my-3 border border-foreground/15 xl:w-3/6 sm:px-12 rounded-2xl backdrop-blur-md bg-background/50">
                <h1 className="flex items-center font-semibold font-clash">
                    <svg className="w-6" width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.408 24.008L0.792 17.608V13.992L16.408 7.624V11.24L5.048 15.816L16.408 20.392V24.008ZM21.0995 27.432L17.5475 26.376L25.8675 0.519999L29.4195 1.576L21.0995 27.432Z"
                            fill="#FD6303"
                        />
                    </svg>{" "}
                    Cre8veSam
                </h1>

                <div className="flex items-center gap-4 text-sm md:text-base">
                    <a href="#work" className="hidden hover:text-orange md:block">
                        Projects
                    </a>
                    <a href={resume} className="hidden hover:text-orange md:block" download>
                        Download Resume
                    </a>
                    <ModeToggle />
                    <Button variant="outline" size="icon" aria-label="Toggle menu" className="sm:hidden" onClick={() => setMenuOpen((open) => !open)}>
                        <Menu className={`${menuOpen ? "hidden" : ""}`} />
                        <X className={`${!menuOpen ? "hidden" : ""}`} />
                    </Button>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col items-center w-full gap-6 py-6 border rounded-2xl top-20 bg-background/50 backdrop-blur-md sm:hidden border-foreground/10">
                    <a href="#work" className="text-base font-semibold hover:text-orange" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                    <a href={resume} className="text-base font-semibold hover:text-orange" download onClick={() => setMenuOpen(false)}>
                        Download Resume
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
