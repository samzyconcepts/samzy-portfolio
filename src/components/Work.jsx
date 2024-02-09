import Skill from "./Skill";
import StarSVG from "./StarSVG";
import agrocap from "../assets/agrocap.png";
import instaskool from "../assets/instaskool.png";
import shortly from "../assets/shortly.png";
import ageCalc from "../assets/age-calc.png";

const Work = () => {
    return (
        <section id="work" className="bg-white">
            <div className="container py-8">
                <Skill />
                <div className="flex items-center gap-2">
                    <StarSVG />
                    <h4 className="text-xs sm:text-base">FEATURED PROJECTS</h4>
                </div>
                <h2 className="font-clash text-5xl my-6">Recent Works</h2>

                <section className="grid grid-cols-2 gap-8">
                    <div className="h-[600px] bg-black hover:bg-orange text-white p-14 rounded-3xl overflow-hidden">
                        <h2 className="title text-4xl font-clash">Agrocap Token</h2>
                        <p className="description my-4">
                            AgroCap token is a project seeking to transform the outdated and
                            exclusionary agric financial infrastructure, by utilizing blockchain
                            technology.
                        </p>
                        <a
                            href="https://agrocaptoken.com"
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
                                    src={agrocap}
                                    className="h-full w-full object-cover"
                                    alt="agrocap"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-[600px] bg-black hover:bg-orange text-white p-14 rounded-3xl overflow-hidden">
                        <h2 className="title text-4xl font-clash">Instaskool</h2>
                        <p className="description my-4">
                            Instaskool is an online educational platform, that provides educational
                            contents from basic to secondary school level.
                        </p>
                        <a
                            href="https://instaskool.com"
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
                                    src={instaskool}
                                    className="h-full w-full object-cover"
                                    alt="instaskool"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-[600px] bg-black hover:bg-orange text-white p-14 rounded-3xl overflow-hidden">
                        <h2 className="title text-4xl font-clash">Shortly</h2>
                        <p className="description my-4">
                            Link shortener app. It is a single page web app for shorting links. The
                            website make use of API request to shorting link.
                        </p>
                        <a
                            href="https://url-shortening-api-landing-page-rho.vercel.app/"
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
                                    src={shortly}
                                    className="h-full w-full object-cover"
                                    alt="shortly"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-[600px] bg-black hover:bg-orange text-white p-14 rounded-3xl overflow-hidden">
                        <h2 className="title text-4xl font-clash">Get your age</h2>
                        <p className="description my-4">
                            This a platform that you use to calculate how old I am in terms of days,
                            weeks and years.
                        </p>
                        <a
                            href="https://kibo-web-dev-fundamentals-july-23.github.io/wdf-jul-23-final-project-code-addicts/"
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
                                    src={ageCalc}
                                    className="h-full w-full object-cover"
                                    alt="age calculator"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};
export default Work;
