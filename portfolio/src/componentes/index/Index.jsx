import { React, useState } from "react";
import NavBar from "../Navbar/NavBar";
import logo2 from "../../assets/BG.png"
import "./Index.css"
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";


export default function Index() {
    const [theme, setTheme] = useState(false);
    
    return (
        <div>
            <NavBar theme={theme} setTheme={setTheme}/> 
            <Contact theme={theme} setTheme={setTheme}/>
            <div className="profile--Index">
            <About  theme={theme} setTheme={setTheme} />
            </div>
            <div className="bg--image">
            <img src={logo2} alt=""/>
            </div>
            <Projects theme={theme} setTheme={setTheme}/>
            <Skills theme={theme} setTheme={setTheme}/>
        </div>
    )
}

