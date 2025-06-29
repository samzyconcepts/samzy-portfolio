import Skill from "./Skill";
import StarSVG from "./StarSVG";

import projects from "../projectsData";

const Work = () => {
    return (
        <section id="work" className="bg-white dark:bg-black">
            <Skill />
            <div className="container py-8 overflow-hidden">
                <div className="flex items-center gap-2">
                    <StarSVG />
                    <h4 className="text-xs sm:text-base">FEATURED PROJECTS</h4>
                </div>
                <h2 className="my-6 text-5xl font-clash">Recent Works</h2>

                <section className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={project.name}
                                className="p-8 overflow-hidden text-white bg-black h-fit hover:bg-orange md:p-14 rounded-3xl dark:bg-muted dark:hover:bg-orange"
                                data-aos={isEven ? "fade-right" : "fade-left"}
                                data-aos-duration="800"
                                data-aos-easing="ease-in-sine">
                                <h2 className="text-4xl title font-clash">{project.name}</h2>
                                <p className="my-4 description">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 btn-tertiary w-fit">
                                    VISIT SITE
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M5.33333 0V2.13333H12.3627L0 14.496L1.504 16L13.8667 3.63733V10.6667H16V0H5.33333Z"
                                            fill=""
                                            className="fill-current"
                                        />
                                    </svg>
                                </a>
                                <div className="w-full p-4 mt-4 h-fit bg-white-darker rounded-xl">
                                    <div className="w-full h-full overflow-hidden bg-black rounded">
                                        <img
                                            src={project.image}
                                            className="object-cover w-full h-full"
                                            alt={project.name}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
        </section>
    );
};
export default Work;
