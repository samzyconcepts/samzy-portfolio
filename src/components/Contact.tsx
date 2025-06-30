import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
    return (
        <section className="container">
            <div
                className="flex flex-col justify-between gap-4 p-6 my-12 bg-black lg:flex-row lg:items-center rounded-2xl md:p-24 dark:bg-muted"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine">
                <div>
                    <h1 className="text-3xl font-black text-center text-white md:text-7xl md:text-left">
                        Let’s work together <br /> on your next project
                    </h1>
                    <p className="mt-2 text-base text-center md:text-left text-white-darker md:text-xl">
                        So we can build something interesting together
                    </p>
                </div>

                <Button size="lg" className="flex items-center justify-center gap-2 uppercase md:px-12 md:py-7">
                    Contact
                    <Mail />
                </Button>
            </div>
        </section>
    );
};
export default Contact;
