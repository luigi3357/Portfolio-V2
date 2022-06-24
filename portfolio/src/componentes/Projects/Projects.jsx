import React from "react";
import LibraryDogs from "../../assets/LibraryDogs.jpg"
import petcare from "../../assets/PetCare.jpg"
import {
    Link,
    Image,
    Stack,
    Text,
    IconButton,
    Box,
    Button,
    Heading,
    Center,
  } from "@chakra-ui/react";
// import portfolio from "../../assets/portfolio.png"

import "./Projects.css"
export default function Projects({ theme }) {
    return (
        <div id="projects" className={theme === true ? "project--dark" : "project--ligth"}>
            <div className="container--allprojects">
      <Center bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="5xl" fontFamily="'Nuosu SIL', serif" fontWeight="extrabold">Mis Proyectos</Center>
                <div className="container--Projects">
                    <article className="project" >
                        <h1>Library Dogs:</h1>                        
                        <div className={theme === true ? "project_tag--dark" : "project_tag--ligth"}>
                            <span>JavaScript</span>
                            <span>NodeJS</span>
                            <span>Sequelize</span>
                            <span>Express </span>
                            <span>PostgreSQL</span>
                            <span>React</span>
                            <span>Redux</span>
                            <span>CSS</span>
                        </div>
                        <img src={LibraryDogs} alt="Landing page" className="card__image2" />
                        <div className="project--button">
                            <a href="https://library-dogs.vercel.app/Home" target="_blank" className="button button--primary">Demo</a>
                            <a href="https://github.com/luigi3357/pi-Dogs" target="_blank" className="button button--ghost">Codigo</a>
                        </div>
                        <p> Es una SPA (Single Page Aplication) que utiliza React para el Front End y Redux como gestión de estado.<br />
                            El SPA consume datos de una API (pokeapi.co) a través de un Back End desarrollado en NodeJS usando Express, agregando nuevas funcionalidades a la API original.
                        </p>

                    </article>

                    <article className="project" >

                        <h1>Pet Care:</h1>
                       
                        <div className={theme === true ? "project_tag--dark" : "project_tag--ligth"}>
                            <span>NodeJS</span>
                            <span>Express</span>
                            <span>Sequelize</span>
                            <span>PostgreSQL </span>
                            <span>Java Script</span>
                            <span>React</span>
                            <span>Redux</span>
                            <span >CSS</span>
                            <span >Auth0</span><br />
                            <span >Nodemailer</span>
                            <span >Mercado Pago</span>
                        </div>
                        <img src={petcare} alt="Landing page" className="card__image2" />
                        <div className="project--button">
                            <a href="https://demopetcare.vercel.app/" target="_blank" className="button button--primary">Demo</a>
                            <a href="https://github.com/luigi3357/Pet-Care-React-Js" target="_blank" className="button button--ghost">Codigo</a>
                        </div>
                        <p>Es una web que esta destinada a conectar personas que
                            ofrecen servicio de cuidado de mascotas con personas que requieran
                            ese mismo servicio.<br />
                            En este proyecto trabaje con un grupo de 8 personas mas enfocado al Back-End
                            donde trabajamos con Nodejs, PostgreSQL, Exprés, Sequelize, Nodemailer, Auth0, Mercado Pago. Además
                            ayude en la resolución de problemas y creacion de componentes en el Front-End. </p>
                    </article>  
                     </div>
            </div>
        </div>

    )
}