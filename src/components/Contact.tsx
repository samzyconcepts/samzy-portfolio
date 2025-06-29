const Contact = () => {
    return (
        <section className="container">
            <div
                className="flex flex-col justify-between gap-4 p-12 my-12 bg-black lg:flex-row lg:items-center rounded-2xl md:p-24 dark:bg-muted"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine">
                <div>
                    <h1 className="text-4xl font-black text-white md:text-7xl">
                        Let’s work together <br /> on your next project
                    </h1>
                    <p className="mt-2 text-base text-white-darker md:text-xl">
                        So we can build something interesting together
                    </p>
                </div>
                <button className="flex items-center justify-center gap-2 btn-primary">
                    CONTACT
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
                </button>
            </div>
        </section>
    );
};
export default Contact;
