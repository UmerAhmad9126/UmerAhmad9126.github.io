import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box w="90%" margin={"auto"} mt={"40px"}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2, "2xl": 2 }} spacing={20}>
                <Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Box>

                <Box>

                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default About