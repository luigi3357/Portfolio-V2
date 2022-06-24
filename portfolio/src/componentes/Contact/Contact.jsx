import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
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
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact({theme}){
  const { text } = useTypewriter({
    words: [
        "Fullstack Web Developer.",
        "Backend Web Developer.",
        "Frontend Web Developer.",
    ],
    loop: 0,
    typeSpeed: 25,
    deleteSpeed: 25,
    delaySpeed: 3000,
});
    return (
      <Stack
      fontFamily={"'Nuosu SIL', serif"}
      minH={"90vh"}
      maxH={"90vh"}
      id="home"
      alignItems={"flex-end"}
      justifyContent={{ base: "flex-end", lg: "center" }}
      p={"2rem"}
      position={"relative"}
      mt={"0 !important"}
  >
      <Stack
          w={"100%"}
          h={"100%"}
          position={"absolute"}          
          left="0"
          top="0"
          mt="0 !important"
          justifyContent={"center"}
          alignItems={"center"}
          bg={theme === true ? "blackAlpha.400" : "whiteAlpha.600"}
          p={{ base: "2rem 1rem", md: "2rem 3rem 0 3rem" }}
          // opacity="0"
      >
          <Stack
              w={"fit-content"}
              h={"fit-content"}
              // color={"white"}
              id="imagecontainer"
              position={"relative"}
              alignItems={"center"}
          >
              {/* <Image
                  display={{ base: "none", md: "flex" }}
                  src={computer}
                  alt={"Picture of a computer"}
                  w={{ md: "fit-content", lg: "70vw" }}
                  h={"auto"}
                  top={"0"}
                  left={"0"}
                  zIndex={0}
              /> */}
              {/* <Image
                  borderRadius={"10px"}
                  boxShadow={"xl"}
                  display={{ base: "flex", md: "none" }}
                  alt={"Picture of a phone"}
                  src={phone}
                  h={"80vh"}
                  top={"0"}
                  left={"0"}
                  zIndex={0}
              /> */}
              <Stack
                  w={"150%"}
                  h={"100%"}
                  // position={"absolute"}
                  color="black"
                  // fontWeight="extrabold"
                  p={{ base: "15% 5%", md: "5.8% 15% 10% 15%" }}
                  justifyContent={"space-between"}
              >
                  <Heading
                      fontFamily={"'Nuosu SIL', serif"}
                      userSelect={"none"}
                      flexDir={"row"}
                      fontSize={{ base: "l", md: "4xl" }}
                      fontWeight={"bold"}
                      textAlign={"start"}
                      as={"h1"}
                  >
                      {">"} Hola! 👋 Yo soy Luis Cataldo, <br />
                      <span style={{ color: "transparent" }}>{"> "}</span>
                      {text}
                  </Heading>
                  <Center><Link
                      href="#about"
                      _hover={{ textDecor: "none" }}
                      mt={"0 !important"}
                  >
                      <Button
                          className="solidbuttonfillbottom"
                          minW={"7rem"}
                          _hover={{ bg: "purple.600" }}
                          bg={"purple.200"}
                          color={"paramount"}
                          bgGradient='linear(to-l, rgba(49,59,131,1)0%, rgba(103,93,171,1) 35%, rgba(152,126,208,1) 56%, rgba(160,133,190,1) 83%, rgba(187,151,208,1) 100%)'
                          _focus={{ outline: "none" }}
                          fontWeight={"bold"}
                          borderRadius={"full"}
                      >
                          Saber Más
                      </Button>
                  </Link></Center>
                  <Stack
                      w={"100%"}
                      flexDir={"row"}
                      justifyContent={"space-evenly"}
                      justifySelf={"flex-end"}
                      alignSelf={"flex-end"}
                      //     display={{ base: "none", sm: "flex" }}
                  >
                      <Link
                          href="https://www.linkedin.com/in/luis-cataldo/"
                          target={"_blank"}
                          _hover={{ textDecor: "none" }}
                      >
                          <IconButton
                              display={{ base: "flex", md: "none" }}
                              icon={<FaLinkedin />}
                              aria-label="linkedin"
                              className="outlinecomputerfillbottom"
                              _focus={{ outline: "none" }}
                              bg={"transparent"}
                              border={"1px"}
                              borderColor={"purple.300"}
                              borderRadius={"full"}
                              _hover={{ bg: "purple.100" }}
                          />

                          <Button
                              display={{ base: "none", md: "flex" }}
                              className="outlinecomputerfillbottom"
                              _focus={{ outline: "none" }}
                              leftIcon={<FaLinkedin />}
                              bg={"transparent"}
                              border={"1px"}
                              borderColor={"purple.300"}
                              borderRadius={"full"}
                              minW={{ lg: "8rem" }}
                              _hover={{ bg: "purple.100" }}
                          >
                              LinkedIn
                          </Button>
                      </Link>
                      <Link
                          href="https://github.com/luigi3357"
                          target={"_blank"}
                          mt={"0 !important"}
                          _hover={{ textDecor: "none" }}
                      >
                          <IconButton
                              display={{ base: "flex", md: "none" }}
                              icon={<i class="fab fa-linkedin icon"></i>}
                              aria-label="linkedin"
                              className="outlinecomputerfillbottom"
                              _focus={{ outline: "none" }}
                              bg={"transparent"}
                              border={"1px"}
                              borderColor={"purple.300"}
                              borderRadius={"full"}
                              _hover={{ bg: "purple.100" }}
                          />
                          <Button
                              display={{ base: "none", md: "flex" }}
                              className="outlinecomputerfillbottom"
                              _focus={{ outline: "none" }}
                              mt={"0 !important"}
                              leftIcon={<FaGithub />}
                              bg={"transparent"}
                              border={"1px"}
                              borderColor={"purple.300"}
                              borderRadius={"full"}
                              minW={"8rem"}
                              _hover={{ bg: "purple.100" }}
                          >
                              Github
                          </Button>
                      </Link>
                      <Link
                          href="mailto:luigi33579@gmail.com"
                          target={"_blank"}
                          mt={"0 !important"}
                          _hover={{ textDecor: "none" }}
                      >
                          <IconButton
                              display={{ base: "flex", md: "none" }}
                              icon={<SiGmail />}
                              aria-label="linkedin"
                              className="outlinecomputerfillbottom"
                              _focus={{ outline: "none" }}
                              bg={"transparent"}
                              border={"1px"}
                              borderColor={"purple.300"}
                              borderRadius={"full"}
                              _hover={{ bg: "purple.100" }}
                          />
                          <Button
                              display={{ base: "none", md: "flex" }}
                              className="outlinecomputerfillbottom"
                              _focus={{ outline: "none" }}
                              mt={"0 !important"}
                              leftIcon={<SiGmail />}
                              borderRadius={"full"}
                              bg={"transparent"}
                              border={"1px"}
                              borderColor={"purple.300"}
                              minW={"8rem"}
                              _hover={{ bg: "purple.100" }}
                          >
                              Gmail
                          </Button>
                      </Link>
                  </Stack>
              </Stack>
          </Stack>
      </Stack>
  </Stack>
    )
}
      // <div>
      //               <i class="fas fa-envelope icon"></i>
      //               <a href="mailto:Luigi33579@gmail.com">Luigi33579@gmail.com</a><br/>
      //               <i class="fas fa-phone-alt icon"></i>
      //               <a href="tel: +542612598338">+542612598338</a><br/>
      //               <i class="fab fa-linkedin icon"></i>
      //               <a href="https://www.linkedin.com/in/luis-cataldo/">https://www.linkedin.com/in/luis-cataldo/</a><br/>
      //               <i class="fa-brands fa-github icon"></i>
      //               <a href="https://github.com/luigi3357">https://github.com/luigi3357</a>   
      //             </div> 