const Contact = () => {
    return (
        <section className="container">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between rounded-2xl bg-black my-12 p-12 md:p-24 gap-4">
                <div>
                    <h1 className="text-4xl md:text-7xl font-black text-white">
                        Let’s work together <br /> on your next project
                    </h1>
                    <p className="text-white-darker text-base md:text-xl mt-2">
                        So we can build something interesting together
                    </p>
                </div>
                <button className="btn-primary flex items-center justify-center gap-2">
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
