import React from "react";
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import redux from "../../assets/redux.png"
import HTML from "../../assets/html.png"
import css from "../../assets/css.png"
import bootstrap from "../../assets/bootstrap.png"
import node from "../../assets/nodejs.png"
import express from "../../assets/express.png"
import sequelize from "../../assets/sequelize.png"
import postgress from "../../assets/postgresql.png"
import visual from "../../assets/vscode.png"
import git from "../../assets/git.png"
import firebase from "../../assets/firebase.jpg"
import java from "../../assets/java.png"
import chakra from "../../assets/chakra.svg"
import netbeans from "../../assets/netbeans.jpg"
import { Image, Text, Center, useMediaQuery, Grid, GridItem } from '@chakra-ui/react'

import "./Skills.css"
export default function Skills({ setTheme, theme }) {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    return (
        <div id="skills">
        <div className={theme === true ? "skills--dark" : "skills--ligth"}>
            <Center bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Back End</Center>
            <Center p="3">
            <Grid templateColumns={isLargerThan600 ?'repeat(5,7rem)':'repeat(2, 7rem)'} gap={6}>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={node} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">NodeJs</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={express} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Express</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={sequelize} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Sequelize</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={postgress} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">PostgresSQL</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={firebase} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Firebase</Text>
                    </Center>
                </GridItem>  
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={java} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="l" fontWeight="extrabold">Java(NetBeans)</Text>
                    </Center>
                </GridItem>              
            </Grid>            
            </Center>  
            <Center bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Front End</Center>
            <Center p="3">
            <Grid templateColumns={isLargerThan600?'repeat(5,7rem)':'repeat(2, 7rem)'} gap={6}>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={HTML} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">HTML</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={css} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">CSS</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={js} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">JavaScript</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={react} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">React</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={redux} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Redux</Text>
                    </Center>
                </GridItem>    
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={bootstrap} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Bootstrap</Text>
                    </Center>
                </GridItem> 
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={chakra} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Chakra-ui</Text>
                    </Center>
                </GridItem>            
            </Grid>            
            </Center>   
            <Center bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Herramientas</Center>
            <Center p="3">
            <Grid templateColumns={isLargerThan600?'repeat(5,7rem)':'repeat(2, 7rem)'} gap={6}>
            <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={git} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Git</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={visual} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">Visual Studio</Text>
                    </Center>
                </GridItem>
                <GridItem boxShadow='outline' p="3" rounded='md' bgColor={theme === true ? "#232C4C" : "#e4e1e1"}>
                    <Center>
                        <Image boxSize='70px' objectFit='cover' src={netbeans} alt='Dan Abramov' />
                    </Center>
                    <Center>
                        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">NetBeans</Text>
                    </Center>
                </GridItem>
            </Grid>            
            </Center>          
        </div>
        </div>
    )
}

{/* <div className={theme === true ? "skills--dark" : "skills--ligth"}>
            
            <h1>HABILIDADES</h1>
            <div className="container_all--skills">
                
                    <h2 >Otros</h2>
                <article className="container--skill">
                <div className="skill--item">
                    <img src={visual} alt="not found" />
                    <p >Visual Studio</p>
                    </div>
                <div className="skill--item">
                    <img src={git} alt="not found" />
                    <p >Git</p>
                    </div>
                <div className="skill--item">
                    <img src={java} alt="not found" />
                    <p >Java (NetBeans) </p>
                    </div>
                </article>
            </div>
        </div> */}