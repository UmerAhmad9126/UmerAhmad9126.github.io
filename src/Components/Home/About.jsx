import { Box, SimpleGrid, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import img from "./profile-pic.png"
import styles from "./about.module.css"

const About = () => {
    return (
        <Box w="90%" margin={"auto"} mt={"40px"}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2, "2xl": 2 }} spacing={8}>
                <Box>

                    <Box mt="20px">
                        <Text fontWeight="bold" fontSize="1.8rem" color={"#64d87d"}>Hello,I am Umer Ahmad</Text>
                    </Box>

                    <Box mt="20px">
                        <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=30&pause=1000&color=64D87D&width=500&lines=A+Full+Stack+Web+Developer.;A+MERN+Stack+Web+Developer." alt="Typing SVG" />
                    </Box>

                    <Box maxW={"100%"} >
                        <Text lineHeight={"28.8px"} textAlign={"left"} fontSize="1.2rem" color={"#64d87d"}>
                            An enthusiastic learner and A Full Stack Web Developer
                            with skilled in React Js and Java Script.1300+ hours of hands-on
                            experience in coding and curiosity for exploring new boundaries
                            and manifesting skills for use in solving problems. A thirst to
                            learn and work with new technologies.
                        </Text>
                    </Box>

                    <Box mt="20px">
                        <Button className={styles.button} w={"230px"} colorScheme='green' variant='outline' fs="16px" fontWeight={600}>Download Resume</Button>
                    </Box>
                </Box>

                <Box borderRadius={"5px"} margin={"auto"} maxw="400px">
                    <Image className={styles.img} w="400px" borderRadius={"5px"} src={img} alt="profile-pic" />
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default About