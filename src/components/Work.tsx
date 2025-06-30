import Skill from "./Skill";
import StarSVG from "./StarSVG";
import projects from "../projectsData";
import { MoveRight } from "lucide-react";

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
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                key={project.name}
                                className="overflow-hidden border-b-2 rounded-t-xl bg-white-dark hover:border-orange h-fit hover:bg-orange/15 dark:bg-muted dark:hover:bg-orange/30 md:rounded-t-3xl"
                                data-aos={isEven ? "fade-right" : "fade-left"}
                                data-aos-duration="800"
                                data-aos-easing="ease-in-sine">
                                <div className="w-full overflow-hidden bg-black h-60  md:h-[420px]">
                                    <img src={project.image} className="object-cover w-full h-full" alt={project.name} />
                                </div>

                                <div className="px-8 py-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold md:text-4xl font-clash">{project.name}</h2>
                                        <MoveRight />
                                    </div>
                                    <p className="my-4 md:text-xl text-muted-foreground">{project.description}</p>
                                </div>
                            </a>
                        );
                    })}
                </section>
            </div>
        </section>
    );
};
export default Work;
