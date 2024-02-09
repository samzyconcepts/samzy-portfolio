import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init({ once: true });
    });

    return (
        <>
            <Navbar />
            <Hero />
            <Work />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
