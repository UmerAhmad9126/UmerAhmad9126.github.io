import { Box, SimpleGrid, Image, Text, UnorderedList, ListItem, } from '@chakra-ui/react'
import React from 'react'
import img from "./about.gif"


const About = () => {
    return (
        <Box id="about" className='about section' w="90%" margin={"auto"} mt={"40px"} height="auto">

            <Text textAlign={"center"} fontSize="50px" fontWeight={700} color="#f4e16a">About Me</Text>

            <SimpleGrid mt="40px" columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2, "2xl": 2 }} spacing={8}>
                <Box >
                    <Box maxW={"100%"} >

                        <UnorderedList fontSize={"20px"} fontWeight={500} color={"#0fe4af"}>

                            <ListItem mt="5px">An enthusiastic learner and A Full Stack Web Developer
                                with skilled in React Js and Java Script.
                            </ListItem>

                            <ListItem mt="5px">1300+ hours of hands-on
                                experience in coding and curiosity for exploring new boundaries
                                and manifesting skills for use in solving problems.
                            </ListItem>

                            <ListItem mt="5px">A thirst to
                                learn and work with new technologies.
                            </ListItem>

                            <ListItem mt="5px">
                                I built a number of web applications and 5 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.
                            </ListItem>

                        </UnorderedList>
                    </Box>
                </Box>

                <Box borderRadius={"5px"} margin={"auto"} >
                    <Image className="" w="100%" height={"100%"} borderRadius={"5px"} src={img} alt="gifs" />
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default About