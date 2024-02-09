import Skill from "./Skill";
import StarSVG from "./StarSVG";

import projects from "../projectsData";

const Work = () => {
    return (
        <section id="work" className="bg-white">
            <Skill />
            <div className="container py-8 overflow-hidden">
                <div className="flex items-center gap-2">
                    <StarSVG />
                    <h4 className="text-xs sm:text-base">FEATURED PROJECTS</h4>
                </div>
                <h2 className="font-clash text-5xl my-6">Recent Works</h2>

                <section className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={project.name}
                                className="h-[600px] bg-black hover:bg-orange text-white p-8 md:p-14 rounded-3xl overflow-hidden"
                                data-aos={isEven ? "fade-right" : "fade-left"}
                                data-aos-duration="800"
                                data-aos-easing="ease-in-sine">
                                <h2 className="title text-4xl font-clash">{project.name}</h2>
                                <p className="description my-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-tertiary w-fit flex items-center gap-2">
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
                                <div className="mt-4 w-[650px] h-[450px] bg-white-darker rounded-2xl p-4">
                                    <div className="inner bg-black rounded-lg p-4 h-full w-full">
                                        <img
                                            src={project.image}
                                            className="h-full w-full object-cover"
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
