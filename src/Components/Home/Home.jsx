import { Box, SimpleGrid, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import img from "./profile-pic.png"
import styles from "./home.module.css"
import resume from "./Umer_Ahmad_Resume.pdf"

const Home = () => {
    return (
        <Box id="home" w="90%" margin={"auto"} mt={"40px"}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2, "2xl": 2 }} spacing={8}>
                <Box >
                    <Box mt="50px">
                        <Text fontSize="33px" fontWeight={700} color={"#0fe4af"}>Hello,My Name is</Text>
                    </Box>

                    <Box mt="10px">
                        <Text id='user-detail-name' fontSize="50px" fontWeight={700} color={"#f4e16a"}>Umer Ahmad</Text>
                    </Box>

                    <Box mt="30px">
                        <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=33&pause=1000&color=0fe4af&width=600&lines=A+Full+Stack+Web+Developer.;A+MERN+Stack+Web+Developer." alt="Typing SVG" />
                    </Box>

                    <Box mt="30px"
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1nvptm9d35XdSoHzWJkNmpZcC1r9MnHuW/view?usp=sharing"
                            )
                        }
                    >
                        <a id="resume-button-2" href={resume} download target="_blank" rel="noreferrer">
                            <Button className={styles.button} w={"230px"} colorScheme='green' variant='outline' fs="16px" fontWeight={600}>
                                Download Resume
                            </Button>
                        </a>
                    </Box>
                </Box>

                <Box className={styles.img} borderRadius={"5px"} margin={"auto"} maxw="400px">
                    <Image className="home-img" id={styles.profile} w="400px" borderRadius={"5px"} src={img} alt="profile-pic" />
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default Home