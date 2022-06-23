import { React, useState } from "react";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import { Image, Link, Stack } from "@chakra-ui/react";
import "./NavBar.css"




export default function NavBar({setTheme, theme}) {

    function handleDark() {
        setTheme(!theme)
    }
    return (
        <div className={theme === true ? "container--dark" : "container--ligth"}>
            <div className="switches">
            <div className="toggle--logo">
                <img src={theme === true ? logo1 : logo2} alt="Logo Personal" />
            </div>
            
                        <div onClick={e => handleDark(e)} className="toggle-theme2">
                            <img src={theme===true?moon: sun} alt="icon theme" className="toggle-theme__icon" />
                            <p className="toggle-theme__text">{theme===true ? "Dark Mode":"Light Mode"}</p>
                        </div>
                    </div>

            <div className="items">

                    <Link className="items--space" href="#">INICIO</Link>

                    <Link className="items--space" href="#about">SOBRE MI</Link>

                    <Link className="items--space" href="#projects">PROYECTOS</Link>

                    <Link className="items--space"href="#skills">HABILIDADES</Link>

                    <Link className="items--space"href="#">CONTACTO</Link>


                </div>

            <div className="switches" onClick={e => handleDark(e)}>
                        <div className="toggle-theme">
                            <img src={theme===true?moon: sun} alt="icon theme" className="toggle-theme__icon" />
                            <p className="toggle-theme__text">{theme===true ? "Modo Oscuro":"Modo de Luz"}</p>
                        </div>
                    </div>
        </div>
    )
}

