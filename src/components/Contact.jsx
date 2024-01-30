const Contact = () => {
    return (
        <section className="container flex items-center justify-between bg-black rounded-2xl my-12 p-12">
            <div>
                <h1 className="text-6xl font-bold text-white">
                    Let’s work together on your next project
                </h1>
                <p className="text-white-darker">So we can build something interesting together</p>
            </div>
            <button className="btn-primary flex items-center gap-2">
                RESUME
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
        </section>
    );
};
export default Contact;
