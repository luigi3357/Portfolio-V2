import { React, useState } from "react";
import profileImg from "../../assets/luis.jpg"
import resume from "../../assets/Luis-Cataldo-Resumen.pdf"
import { Center, Text } from "@chakra-ui/react";

import "./About.css"

export default function About({ setTheme, theme }) {

  return (
    <div id="about">
      <div className="container-about">
      <Center bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="5xl" fontFamily="'Nuosu SIL', serif" fontWeight="extrabold">Sobre Mi</Center>
       <div className={theme === true ? "profile--dark" : "profile--ligth"} >
          <div className="profile--img" >
            <img src={profileImg} alt="profile" />
          </div>
          <div className="profile--text">
            <h1 fontFamily="'Nuosu SIL', serif">Luis Cataldo</h1>
            <h3 fontFamily="'Nuosu SIL', serif">Full Stack Developer</h3>
            <p>
              Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales.
              Siempre tengo la mejor disposición para la realización de mis labores. <br />
              Busco un puesto de trabajo desafiante donde pueda aprender nuevas tecnologías y hacer crecer mis conocimientos profesionales.<br />
              Mi proposito es poder dominar el desarrollo web con buenas practicas y a la perfeccion para luego avanzar a otro sector como el desarrollo de aplicaciones o de video juegos. En definitiva poder desarrollarme profesionalmente en todo lo que es el desarrollo.
            </p>
            <Center> <div className="project--button">
              <a href={resume} target="_blank" className="button button--primary">Ver Resumen</a>
            </div></Center>
          </div>
        </div>
      </div>
    </div>
  )
}

