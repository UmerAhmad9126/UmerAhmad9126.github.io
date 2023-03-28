import React from 'react'
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react"
import GitHubCalendar from 'react-github-calendar';
import styles from "./github.module.css"

const Github = () => {
    return (
        <Box className={styles.github} w="90%" margin={"auto"} mt={"40px"} height="auto">
            <Box borderBottom={"3px solid #f4e16a"}>
                <Text textAlign={"center"} fontSize="50px" fontWeight={700} color="#f4e16a">Github Stats</Text>
            </Box>
            <Box className={styles.calender} display={"flex"} justifyContent="center" alignContent={"center"} mt="40px" borderRadius={"20px"} border={"5px solid #f4e16a"} >
                <GitHubCalendar color={"#0fe4af"} fontSize={16} blockMargin={4} blockSize={18} username="UmerAhmad9126" />
            </Box>

            <SimpleGrid mt="40px" columns={{ base: 1, sm: 1, md: 3, lg: 3, xl: 3, "2xl": 3 }} spacing={8}>
                <Box className={styles.calender} borderRadius={"20px"} bg="#282828" >
                    <Image id="github-top-langs" borderRadius={"20px"} border={"5px solid #f4e16a"} w="100%" h="100%" src="https://github-readme-stats.vercel.app/api?username=UmerAhmad9126&theme=gruvbox&show_icons=true&hide_border=true&count_private=true" alt="github-stats" />
                </Box>
                <Box className={styles.calender} borderRadius={"20px"} bg="#282828">
                    <Image id="github-streak-stats" borderRadius={"20px"} border={"5px solid #f4e16a"} w="100%" h="100%" src="https://github-readme-streak-stats.herokuapp.com/?user=UmerAhmad9126&theme=gruvbox&hide_border=true" alt="github-stats" />
                </Box>
                <Box className={styles.calender} borderRadius={"20px"} bg="#282828">
                    <Image id="github-stats-card" borderRadius={"20px"} border={"5px solid #f4e16a"} w="100%" h="100%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=UmerAhmad9126&theme=gruvbox&show_icons=true&hide_border=true&layout=compact" alt="github-stats" />
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default Github