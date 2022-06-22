import { React, useState } from "react";
import NavBar from "../Navbar/NavBar";
import logo2 from "../../assets/BG.png"

import "./Index.css"
import About from "../About/About";
import Projects from "../Projects/Projects";

export default function Index() {
    const [theme, setTheme] = useState(false);
    
    return (
        <div className="container" >
            <NavBar theme={theme} setTheme={setTheme}/> 
            <div className="profile--Index">
            <About  theme={theme} setTheme={setTheme} />
            </div>
            <Projects theme={theme} setTheme={setTheme}/>
            <div className="bg--image">
            <img src={logo2} alt=""/>
            </div>
        </div>
    )
}

