import Marquee from "react-fast-marquee";

// import logo of tech skill used
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwindcss.png";
import reactjs from "../assets/reactjs.png";
import reduxLogo from "../assets/redux.png";
import sass from "../assets/sass.png";
import python from "@/assets/python.png";
import express from "@/assets/express-js.png";
import vuejs from "@/assets/icons8-vue-js-240.png";
import nextjs from "@/assets/nextjs.png";
import fastapi from "@/assets/FastAPI.png";

// Add new skills here
const skills = [
    { img: html, label: "HTML" },
    { img: css, label: "CSS" },
    { img: javascript, label: "JavaScript" },
    { img: tailwindcss, label: "TailwindCSS" },
    { img: sass, label: "Sass" },
    { img: reactjs, label: "ReactJS" },
    { img: reduxLogo, label: "Redux" },
    { img: nextjs, label: "NextJs" },
    { img: vuejs, label: "VueJs" },
    { img: express, label: "ExpressJs" },
    { img: python, label: "Python" },
    { img: fastapi, label: "FastAPI" },
];

const Skill = () => {
    return (
        <div className="container">
            <div
                className="h-24 flex items-center sm:h-[160px] bg-black dark:bg-secondary text-white-darker rounded-2xl relative -top-16 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-back">
                <Marquee gradient={false} speed={100} pauseOnHover={false} className="py-8 overflow-hidden" autoFill={true}>
                    {skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col items-center mx-8 md:min-w-[100px]">
                            <img className="w-10 mb-2 sm:w-20" src={skill.img} alt={skill.label} />
                            <p className="text-xs font-semibold text-center uppercase lg:text-base font-clash">{skill.label}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};
export default Skill;
