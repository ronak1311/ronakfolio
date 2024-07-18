import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header"
import { Loader } from "./Loader";
import Projects from "./Projects";
import Skills from "./Skills";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    return <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
{   loading!==true?<>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer/>
        </>:
        <Loader/>}
    </div>
};
export default HomePage;