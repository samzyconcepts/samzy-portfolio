import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwindcss.png";
import reactjs from "../assets/reactjs.png";
import reduxLogo from "../assets/redux.png";
import sass from "../assets/sass.png";

const Skill = () => {
    return (
        <div className="container">
            <div
                className="hidden sm:flex justify-between h-[160px] bg-black text-white-darker py-8 px-6 md:px-12 rounded-2xl relative -top-16"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-back">
                <div className="grid grid-rows-2">
                    <img
                        className="block self-center justify-self-center w-20"
                        src={html}
                        alt="html"
                    />
                    <p className="text-center text-xs lg:text-base font-semibold font-clash uppercase self-end">
                        HTML
                    </p>
                </div>
                <div className="grid grid-rows-2">
                    <img
                        className="block self-center justify-self-center w-20"
                        src={css}
                        alt="css"
                    />
                    <p className="text-center text-xs lg:text-base font-semibold font-clash uppercase self-end">
                        css
                    </p>
                </div>
                <div className="grid grid-rows-2">
                    <img
                        className="block self-center justify-self-center w-20"
                        src={javascript}
                        alt="javascript"
                    />
                    <p className="text-center text-xs lg:text-base font-semibold font-clash uppercase self-end">
                        javascript
                    </p>
                </div>
                <div className="grid grid-rows-2">
                    <img
                        className="block self-center justify-self-center w-20"
                        src={tailwindcss}
                        alt="tailwindcss"
                    />
                    <p className="text-center text-xs lg:text-base font-semibold font-clash uppercase self-end">
                        tailwindcss
                    </p>
                </div>
                <div className="grid grid-rows-2">
                    <img
                        className="block self-center justify-self-center w-20"
                        src={sass}
                        alt="sass"
                    />
                    <p className="text-center text-xs lg:text-base font-semibold font-clash uppercase self-end">
                        sass
                    </p>
                </div>
                <div className="grid grid-rows-2">
                    <img
                        className="block self-center justify-self-center w-20"
                        src={reactjs}
                        alt="reactjs"
                    />
                    <p className="text-center text-xs lg:text-base font-semibold font-clash uppercase self-end">
                        reactjs
                    </p>
                </div>
                <div className="grid grid-rows-2">
                    <img
                        className="block self-center justify-self-center w-20"
                        src={reduxLogo}
                        alt="redux state management"
                    />
                    <p className="text-center text-xs lg:text-base font-semibold font-clash uppercase self-end">
                        redux
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Skill;
