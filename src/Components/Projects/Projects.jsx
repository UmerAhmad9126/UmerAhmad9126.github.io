import React from 'react'
import { Box, SimpleGrid, Text, Image, Button } from "@chakra-ui/react"


import myntraImg from "./projectsImg/myntra.png"
import gymwolfImg from "./projectsImg/gymwolf.png"
import bestbuy from "./projectsImg/bestbuy.png"
import meesho from "./projectsImg/meesho.png"
import Fade from 'react-reveal/Fade';




import html from "../Skills/skillsImg/html.png"
import css from "../Skills/skillsImg/css.png"
import js from "../Skills/skillsImg/js.png"
import react from "../Skills/skillsImg/react.png"
import redux from "../Skills/skillsImg/redux.png"
import chakraui from "../Skills/skillsImg/chakraui.png"
import vercel from "../Skills/toolsImg/vercel.png"
import git from "../Skills/toolsImg/git.png"
import netlify from "../Skills/toolsImg/netlify.png"
import express from "../Skills/skillsImg/express.png"
import mongodb from "../Skills/skillsImg/mongo.png"

import { BsGithub } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

import styles from "./projects.module.css";




export const Projects = () => {
    return (

        <Box className={styles.projectsAnime} id="projects" w="90%" margin={"auto"} mt={"40px"} height="auto">

            {/* <Fade left cascade> */}
            <Box borderBottom={"3px solid #f4e16a"}>
                <Text textAlign={"center"} fontSize="50px" fontWeight={700} color="#f4e16a">Projects</Text>
            </Box>
            {/* </Fade> */}

            <SimpleGrid mt="40px" columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2, "2xl": 2 }} spacing={8}>

                <Fade left cascade>
                    <Box className='project-card'>
                        <Box className={styles.boxShadow} border={"5px solid #f4e16a"} cursor={"pointer"} w="100%" height={"auto"} borderRadius="20px">
                            <Box>
                                <Image className={styles.img} margin={"auto"} mt="30px" w="90%" src={meesho} alt="meesho-img" />
                            </Box>

                            <Box>
                                <Text className='project-title' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Meesho.com</Text>
                                <Text className='project-description' margin={"auto"} mt="10px" w="90%" fontSize={"17px"} fontWeight={500} textAlign={"center"} color={"#0fe4af"}>Meesho is a social E- commerce platform based in India that
                                    allows individuals to start their own online businesses by
                                    selling products to their social network.</Text>
                                <Text className='project-tech-stack' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Tech Stack</Text>
                            </Box>

                            <SimpleGrid className='skills-card' margin={"auto"} w="90%" mt="20px" columns={{ base: 3, sm: 3, md: 4, lg: 5, xl: 5, "2xl": 5 }} spacing={2}>
                                <Box className={styles.img} w="auto" h="auto"  >
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={react} alt="react" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >REACT</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={redux} alt="redux" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >REDUX</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={chakraui} alt="chakraui" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >CHAKRA UI</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={express} alt="express" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >EXPRESS JS</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={mongodb} alt="mongodb" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >MONGO DB</Text>
                                </Box>

                            </SimpleGrid>

                            <Box mb={"10px"} mt="10px" display={"flex"} justifyContent="center" alignContent={"center"} gap="20px">
                                <Box className='project-github-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://github.com/puja2795/meesho"
                                        )
                                    } leftIcon={<BsGithub />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>GITHUB</Button>
                                </Box>

                                <Box className='project-deployed-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://frontend-ochre-beta.vercel.app/"
                                        )
                                    } leftIcon={<FaEye size={23} />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>LIVE</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fade>

                <Fade left cascade>
                    <Box className='project-card'>
                        <Box className={styles.boxShadow} border={"5px solid #f4e16a"} cursor={"pointer"} w="100%" height={"auto"} borderRadius="20px">
                            <Box>
                                <Image className={styles.img} margin={"auto"} mt="30px" w="90%" src={myntraImg} alt="myntra-img" />
                            </Box>

                            <Box>
                                <Text className='project-title' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Myntra.com</Text>
                                <Text className='project-description' margin={"auto"} mt="10px" w="90%" fontSize={"17px"} fontWeight={500} textAlign={"center"} color={"#0fe4af"}>Myntra.com is one of the largest fashion e-commerce stores in India that deals with the fashion and lifestyle products for men, women, and kids.</Text>
                                <Text className='project-tech-stack' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Tech Stack</Text>
                            </Box>

                            <SimpleGrid className='skills-card' margin={"auto"} w="90%" mt="20px" columns={{ base: 3, sm: 3, md: 4, lg: 5, xl: 5, "2xl": 5 }} spacing={2}>
                                <Box className={styles.img} w="auto" h="auto"  >
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={react} alt="react" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >REACT</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={redux} alt="redux" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >REDUX</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={chakraui} alt="chakraui" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >CHAKRA UI</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={css} alt="css" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >CSS</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={vercel} alt="vercel" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >VERCEL</Text>
                                </Box>
                            </SimpleGrid>

                            <Box mb={"10px"} mt="10px" display={"flex"} justifyContent="center" alignContent={"center"} gap="20px">
                                <Box className='project-github-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://github.com/madhurn29/gold-kick-1985"
                                        )
                                    } leftIcon={<BsGithub />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>GITHUB</Button>
                                </Box>

                                <Box className='project-deployed-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://myntra-clone-iota.vercel.app/"
                                        )
                                    } leftIcon={<FaEye size={23} />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>LIVE</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fade>

                <Fade right cascade>
                    <Box className='project-card'>
                        <Box className={styles.boxShadow} border={"5px solid #f4e16a"} cursor={"pointer"} w="100%" height={"auto"} borderRadius="20px">
                            <Box>
                                <Image className={styles.img} margin={"auto"} mt="30px" w="90%" src={gymwolfImg} alt="gymwolf-img" />
                            </Box>

                            <Box>
                                <Text className='project-title' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Gymwolf.com</Text>
                                <Text className='project-description' margin={"auto"} mt="10px" w="90%" fontSize={"17px"} fontWeight={500} textAlign={"center"} color={"#0fe4af"}>Gymwolf is a community platform to get to know about various workout plans. A health app to keep track of your health. A list of various exercies. A profile section to maintain your personal data.</Text>
                                <Text className='project-tech-stack' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Tech Stack</Text>
                            </Box>

                            <SimpleGrid className='skills-card' margin={"auto"} w="90%" mt="20px" columns={{ base: 3, sm: 3, md: 4, lg: 5, xl: 5, "2xl": 5 }} spacing={2}>
                                <Box className={styles.img} w="auto" h="auto"  >
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={html} alt="html" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >HTML</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={css} alt="css" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >CSS</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={js} alt="js" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >JAVASCRIPT</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={git} alt="git" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >GIT</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={netlify} alt="netlify" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >NETLIFY</Text>
                                </Box>

                            </SimpleGrid>

                            <Box mb={"10px"} mt="10px" display={"flex"} justifyContent="center" alignContent={"center"} gap="20px">
                                <Box className='project-github-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://github.com/LokeshVyavhare/Gym-workout-tracker"
                                        )
                                    } leftIcon={<BsGithub />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>GITHUB</Button>
                                </Box>

                                <Box className='project-deployed-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://envious-cactus-6437.netlify.app/"
                                        )
                                    } leftIcon={<FaEye size={23} />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>LIVE</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fade>

                <Fade right cascade>
                    <Box className='project-card'>
                        <Box className={styles.boxShadow} border={"5px solid #f4e16a"} cursor={"pointer"} w="100%" height={"auto"} borderRadius="20px">
                            <Box>
                                <Image className={styles.img} margin={"auto"} mt="30px" w="90%" src={bestbuy} alt="bestbuy-img" />
                            </Box>

                            <Box>
                                <Text className='project-title' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Bestbuy.com</Text>
                                <Text className='project-description' margin={"auto"} mt="10px" w="90%" fontSize={"17px"} fontWeight={500} textAlign={"center"} color={"#0fe4af"}>Best Buy's purpose is to enrich lives through technology. Best Buy do that by leveraging our unique combination of tech expertise and human touch to meet our customers’ everyday needs.</Text>
                                <Text className='project-tech-stack' mt="10px" fontSize={"25px"} fontWeight={500} textAlign={"center"} color={"#f4e16a"}>Tech Stack</Text>
                            </Box>

                            <SimpleGrid className='skills-card' margin={"auto"} w="90%" mt="20px" columns={{ base: 3, sm: 3, md: 4, lg: 5, xl: 5, "2xl": 5 }} spacing={2}>
                                <Box className={styles.img} w="auto" h="auto"  >
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={react} alt="react" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >REACT</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={chakraui} alt="chakraui" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >CHAKRA UI</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={css} alt="css" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >CSS</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={git} alt="git" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >GIT</Text>
                                </Box>

                                <Box className={styles.img} w="auto" h="auto">
                                    <Image className="skills-card-img" margin={"auto"} w="50px" h="50px" src={vercel} alt="vercel" />
                                    <Text className="skills-card-name" fontSize={"14px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="10px" >VERCEL</Text>
                                </Box>

                            </SimpleGrid>

                            <Box mb={"10px"} mt="10px" display={"flex"} justifyContent="center" alignContent={"center"} gap="20px">
                                <Box className='project-github-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://github.com/UmerAhmad9126/silent-hammer-5552"
                                        )
                                    } leftIcon={<BsGithub />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>GITHUB</Button>
                                </Box>

                                <Box className='project-deployed-link'>
                                    <Button className={styles.img} onClick={() =>
                                        window.open(
                                            "https://shopping-hub.vercel.app/"
                                        )
                                    } leftIcon={<FaEye size={23} />} w="140px" color={"#f4e16a"} colorScheme="yellow" variant={"outline"}>LIVE</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fade>

            </SimpleGrid>

        </Box>
    )
}
