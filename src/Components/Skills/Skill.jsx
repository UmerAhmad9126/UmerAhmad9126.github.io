import React from 'react'
import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react"
import styles from "./skills.module.css"

//tecnical skills img
import html from "./skillsImg/html.png"
import css from "./skillsImg/css.png"
import js from "./skillsImg/js.png"
import reactimg from "./skillsImg/react.png"
import redux from "./skillsImg/redux.png"
import chakraui from "./skillsImg/chakraui.png"
import ts from "./skillsImg/ts.png"
import jest from "./skillsImg/jest.png"
import cypress from "./skillsImg/cypress.png"
import nodejs from "./skillsImg/nodejs.png"
import expressjs from "./skillsImg/express.png"
import mongdb from "./skillsImg/mongo.png"

//othertools img

import canva from "./toolsImg/canva.png"
import git from "./toolsImg/git.png"
import github from "./toolsImg/github.png"
import jsonserver from "./toolsImg/jsonserver.png"
import netlify from "./toolsImg/netlify.png"
import npm from "./toolsImg/npm.png"
import postman from "./toolsImg/postman.png"
import vercel from "./toolsImg/vercel.png"
import vscode from "./toolsImg/vscode.png"


const Skills = () => {
    return (
        <Box id="skills" w="90%" margin={"auto"} mt={"40px"} height="auto">
            <Box borderBottom={"3px solid #f4e16a"}>
                <Text textAlign={"center"} fontSize="50px" fontWeight={700} color="#f4e16a">Technical Skills</Text>
            </Box>

            <SimpleGrid className={styles.skillsAnime} mt="40px" columns={{ base: 2, sm: 3, md: 3, lg: 6, xl: 6, "2xl": 6 }} spacing={8}>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"} >
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={html} alt="html" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >HTML</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"} >
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={css} alt="css" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >CSS</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"} >
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={js} alt="js" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >JAVASCRIPT</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={reactimg} alt="reactimg" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >REACT JS</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={redux} alt="redux" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >REDUX</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={chakraui} alt="chakraui" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >CHAKRA UI</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={ts} alt="ts" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >TYPESCRIPT</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={jest} alt="jest" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >JEST</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="" w="80px" h="80px" src={cypress} alt="cypress" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >CYPRESS</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={nodejs} alt="nodejs" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >NODE JS</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={expressjs} alt="express" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >EXPRESS JS</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={mongdb} alt="mongdb" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >MONGO DB</Text>
                </Box>
            </SimpleGrid>

            <Box borderBottom={"3px solid #f4e16a"} mt="40px">
                <Text textAlign={"center"} fontSize="50px" fontWeight={700} color="#f4e16a">Other Tools</Text>
            </Box>

            <SimpleGrid className={styles.skillsAnime} mt="40px" columns={{ base: 2, sm: 3, md: 3, lg: 6, xl: 6, "2xl": 6 }} spacing={8}>
                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"} >
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={canva} alt="canva" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >CANVA</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"} >
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={git} alt="git" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >GIT</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"} >
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={github} alt="github" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >GITHUB</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={npm} alt="npm" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >NPM</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={jsonserver} alt="jsonserver" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >JSON SERVER</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={postman} alt="postman" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >POSTMAN</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={vercel} alt="vercel" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >VERCEL</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={vscode} alt="vscode" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >VSCODE</Text>
                </Box>

                <Box className={`skills-card ${styles.skillbox}`} w="150px" h="150px" borderRadius={"20px"} margin={"auto"} cursor="pointer" border={"5px solid #f4e16a"}>
                    <Image margin={"auto"} mt="10px" className="skills-card-img" w="80px" h="80px" src={netlify} alt="netlify" />
                    <Text className="skills-card-name" fontSize={"20px"} fontWeight={500} color={"#0fe4af"} textAlign="center" mt="20px" >NETLIFY</Text>
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default Skills