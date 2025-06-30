import StarSVG from "./StarSVG";
import profileImg from "../assets/profileImg.png";
import resume from "../assets/resume.pdf";
import { Button, buttonVariants } from "./ui/button";
import { FileDown, Mail } from "lucide-react";

// I didn’t wait for perfect conditions — I learned, built, and shipped. Now I help teams and brands bring ideas to life with modern, scalable frontends that feel as good as they look.

const Hero = () => {
    return (
        <header className="container grid items-center justify-between gap-6 pt-5 lg:grid-cols-2 lg:pt-0 ">
            <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 sm:justify-normal" data-aos="fade-right">
                    <StarSVG />
                    <h4 className="text-xs sm:text-base">FRONTEND DEVELOPER || CREATIVE DESIGNER</h4>
                </div>

                <h1 className="my-4 text-5xl font-bold text-center sm:text-6xl font-clash sm:text-left" data-aos="fade-right" data-aos-delay="300">
                    Hello! I&apos;m <br /> Samson Oderinwale
                </h1>
                <p data-aos="fade-right" data-aos-delay="400" className="text-base text-center sm:text-xl sm:text-left">
                    I am passionate about creating exceptional user experiences with modern web technologies. Specializing in React, TypeScript, and
                    cutting-edge frontend architectures.
                </p>
                <div data-aos="fade-right" data-aos-delay="500" className="flex flex-col gap-4 mt-6 sm:flex-row">
                    <Button size={"lg"}>
                        Say Hello <Mail />
                    </Button>

                    <a
                        href="https://drive.google.com/drive/folders/14E6HRSro8pxIWO3JcozsY6qGv-c6M5QE?usp=sharing"
                        className={`${buttonVariants({ variant: "outline", size: "lg" })}`}>
                        Get Resume <FileDown />
                    </a>
                </div>
                <div data-aos="fade-right" data-aos-delay="600" className="flex items-center justify-center gap-1 mt-10 sm:justify-normal sm:gap-4">
                    <p>Connect with me</p>

                    <hr className="w-10 border-t-2 dark:border-muted" />

                    <a
                        href="https://github.com/samzyconcepts"
                        className="flex items-center justify-center w-10 h-10 bg-black rounded-full dark:bg-muted hover:bg-orange dark:hover:bg-orange">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12.0002 0.571289C5.68915 0.571289 0.571533 5.81076 0.571533 12.2742C0.571533 17.4449 3.84619 21.8317 8.38715 23.3791C8.95832 23.4875 9.16801 23.1253 9.16801 22.8162C9.16801 22.5371 9.15742 21.6152 9.1525 20.6373C5.97303 21.3453 5.30212 19.2565 5.30212 19.2565C4.78224 17.9038 4.03318 17.5441 4.03318 17.5441C2.99625 16.8178 4.11134 16.8327 4.11134 16.8327C5.25897 16.9153 5.86326 18.0387 5.86326 18.0387C6.88258 19.8278 8.53685 19.3106 9.18902 19.0116C9.2916 18.2552 9.58778 17.7389 9.91462 17.4467C7.37616 17.1507 4.70768 16.1473 4.70768 11.663C4.70768 10.3853 5.15413 9.34134 5.88522 8.52177C5.76655 8.22701 5.37537 7.03671 5.99593 5.42472C5.99593 5.42472 6.95564 5.11019 9.13963 6.62431C10.0513 6.36502 11.0289 6.23498 12.0002 6.23052C12.9714 6.23498 13.9499 6.36502 14.8632 6.62431C17.0446 5.11019 18.003 5.42472 18.003 5.42472C18.625 7.03671 18.2337 8.22701 18.115 8.52177C18.8478 9.34134 19.2912 10.3853 19.2912 11.663C19.2912 16.1579 16.6176 17.1476 14.0727 17.4374C14.4826 17.8005 14.8479 18.5127 14.8479 19.6046C14.8479 21.1705 14.8347 22.4307 14.8347 22.8162C14.8347 23.1276 15.0404 23.4925 15.6197 23.3776C20.1582 21.8284 23.4287 17.4432 23.4287 12.2742C23.4287 5.81076 18.3118 0.571289 12.0002 0.571289ZM4.85194 17.2424C4.82677 17.3005 4.73744 17.318 4.65606 17.2781C4.57317 17.2399 4.52661 17.1606 4.55349 17.1023C4.57809 17.0424 4.66761 17.0257 4.75031 17.0658C4.83339 17.104 4.88071 17.1841 4.85194 17.2424ZM5.4141 17.756C5.3596 17.8078 5.25305 17.7838 5.18075 17.702C5.106 17.6204 5.09199 17.5113 5.14726 17.4588C5.20346 17.407 5.3068 17.4312 5.38174 17.5128C5.4565 17.5954 5.47107 17.7037 5.4141 17.756ZM5.79977 18.4132C5.72974 18.463 5.61525 18.4163 5.54447 18.3123C5.47444 18.2082 5.47444 18.0834 5.54598 18.0334C5.61695 17.9834 5.72975 18.0284 5.80147 18.1317C5.87131 18.2375 5.87131 18.3623 5.79977 18.4132ZM6.45201 19.1744C6.38937 19.2451 6.25594 19.2261 6.15829 19.1296C6.05836 19.0352 6.03054 18.9013 6.09338 18.8306C6.15678 18.7596 6.29096 18.7796 6.38937 18.8753C6.48854 18.9695 6.51882 19.1044 6.45201 19.1744ZM7.29497 19.4313C7.26734 19.523 7.13884 19.5646 7.00939 19.5257C6.88013 19.4856 6.79553 19.3782 6.82165 19.2856C6.84852 19.1933 6.97759 19.1499 7.10799 19.1916C7.23706 19.2315 7.32185 19.3381 7.29497 19.4313ZM8.2543 19.5403C8.25751 19.6368 8.14775 19.7169 8.01186 19.7186C7.87522 19.7217 7.7647 19.6436 7.76318 19.5486C7.76318 19.4512 7.87049 19.3719 8.00713 19.3696C8.14302 19.3669 8.2543 19.4444 8.2543 19.5403ZM9.19673 19.5033C9.213 19.5975 9.11856 19.6942 8.98363 19.72C8.85096 19.7448 8.72813 19.6866 8.71129 19.5932C8.69482 19.4967 8.79097 19.4 8.92344 19.375C9.05857 19.351 9.1795 19.4076 9.19673 19.5033Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samsonoderinwale/"
                        className="flex items-center justify-center w-10 h-10 bg-black rounded-full dark:bg-muted hover:bg-orange dark:hover:bg-orange">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path
                                d="M28.0469 28.0471H24.6602V22.7432C24.6602 21.4784 24.6376 19.8503 22.8988 19.8503C21.1348 19.8503 20.865 21.2283 20.865 22.6511V28.0468H17.4782V17.1398H20.7295V18.6303H20.775C21.1004 18.074 21.5705 17.6163 22.1354 17.306C22.7003 16.9958 23.3388 16.8446 23.9829 16.8685C27.4154 16.8685 28.0483 19.1263 28.0483 22.0637L28.0469 28.0471ZM13.6569 15.6488C13.2682 15.6489 12.8882 15.5337 12.5649 15.3178C12.2417 15.1019 11.9898 14.795 11.8409 14.4359C11.6921 14.0768 11.6531 13.6816 11.7289 13.3003C11.8046 12.9191 11.9918 12.5688 12.2666 12.2939C12.5414 12.019 12.8916 11.8317 13.2728 11.7558C13.654 11.6799 14.0492 11.7188 14.4083 11.8675C14.7675 12.0162 15.0745 12.268 15.2905 12.5912C15.5065 12.9144 15.6218 13.2944 15.6219 13.6831C15.6219 13.9412 15.5711 14.1968 15.4724 14.4352C15.3737 14.6737 15.229 14.8904 15.0465 15.0729C14.864 15.2555 14.6474 15.4003 14.409 15.4991C14.1705 15.5979 13.915 15.6488 13.6569 15.6488ZM15.3502 28.0471H11.96V17.1398H15.3502V28.0471ZM29.7353 8.57285H10.2582C9.81611 8.56786 9.39012 8.73859 9.07386 9.04752C8.75759 9.35645 8.57693 9.77831 8.57153 10.2204V29.779C8.57674 30.2213 8.7573 30.6434 9.07356 30.9527C9.38981 31.2619 9.8159 31.433 10.2582 31.4283H29.7353C30.1785 31.4339 30.6058 31.2633 30.9233 30.954C31.2408 30.6448 31.4225 30.2222 31.4287 29.779V10.219C31.4224 9.77602 31.2405 9.35368 30.923 9.04476C30.6054 8.73583 30.1783 8.56559 29.7353 8.57143"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://x.com/cre8veSam"
                        className="flex items-center justify-center w-10 h-10 bg-black rounded-full dark:bg-muted hover:bg-orange dark:hover:bg-orange">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_1065_884)">
                                <path
                                    d="M18.5635 0.571289H22.0517L14.4327 10.2729L23.4287 23.4284H16.3604L10.8527 15.4538L4.51875 23.4284H1.03051L9.20033 13.0665L0.571533 0.571289H7.8234L12.8263 7.88557L18.5635 0.571289ZM17.3243 21.0919H19.252L6.76775 2.75542H4.65644L17.3243 21.0919Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1065_884">
                                    <rect width="22.8571" height="22.8571" fill="white" transform="translate(0.571533 0.571289)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="relative place-self-center lg:place-self-end">
                {/* Background for image */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="503"
                    height="515"
                    viewBox="0 0 503 515"
                    fill="none"
                    className="absolute w-full -z-10"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <path
                        d="M305.566 264.331L464.113 212.917L502.391 200.156L469.274 119.914L432.95 138.315L284.661 214.22L319.419 51.3274L327.854 11.5133L241.044 0.162864L238.96 40.8075L230.669 207.16L106.88 95.6814L76.5084 68.5599L23.8738 137.59L57.5845 159.764L197.582 250.212L39.0362 301.626L0.757632 314.387L33.875 394.629L70.1991 376.228L218.488 300.323L183.73 463.216L175.294 503.03L262.105 514.38L264.189 473.735L272.48 307.383L396.268 418.861L426.64 445.983L479.275 376.953L445.564 354.779L305.566 264.331Z"
                        fill="#FD6303"
                    />
                </svg>
                <img
                    src={profileImg}
                    alt="Samson Oderinwale"
                    className="w-[508px]"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                />
            </div>
        </header>
    );
};
export default Hero;
