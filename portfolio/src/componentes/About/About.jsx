import { React, useState } from "react";
import profileImg from "../../assets/luis.jpg"

import "./About.css"

export default function About({ setTheme, theme }) {

  return (
    <div id="about">
      <div  className="container-about">
        <h1>Sobre Mi</h1>
        <div className={theme === true ? "profile--dark" : "profile--ligth"} >
          <div className="profile--img" >
            <img src={profileImg} alt="profile" />
          </div>
          <div className="profile--text">
            <h1>Luis Cataldo</h1>
            <h3>Full Stack Developer</h3>
            <p>
              Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales.
              Siempre tengo la mejor disposición para la realización de mis labores. <br />
              Busco un puesto de trabajo desafiante donde pueda aprender nuevas tecnologías y hacer crecer mis conocimientos profesionales.<br />
              Mi proposito es poder dominar el desarrollo web con buenas practicas y a la perfeccion para luego avanzar a otro sector como el desarrollo de aplicaciones o de video juegos. En definitiva poder desarrollarme profesionalmente en todo lo que es el desarrollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

