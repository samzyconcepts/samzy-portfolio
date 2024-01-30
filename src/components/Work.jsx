import Skill from "./Skill";
import StarSVG from "./StarSVG";
import agrocap from "../assets/agrocap.png";

const Work = () => {
    return (
        <section className="bg-white">
            <div className="container py-8">
                <Skill />
                <div className="flex items-center gap-2">
                    <StarSVG />
                    <h4>FEATURED PROJECTS</h4>
                </div>
                <h2 className="font-clash text-5xl my-6">Recent Works</h2>

                <div className="w-1/2 h-[600px] bg-black hover:bg-orange text-white p-14 rounded-3xl overflow-hidden">
                    <h2 className="title text-4xl font-clash">Agrocap Token</h2>
                    <p className="description my-4">
                        AgroCap token is a project seeking to transform the outdated and
                        exclusionary agric financial infrastructure, by utilizing blockchain
                        technology.
                    </p>
                    <a href="#" className="btn-tertiary w-fit flex items-center gap-2">
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
                                src={agrocap}
                                className="h-full w-full object-cover"
                                alt="agrocap"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Work;
