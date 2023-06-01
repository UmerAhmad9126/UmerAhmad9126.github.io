import { Box, SimpleGrid, Text, Button } from '@chakra-ui/react'
import React from 'react'
// import contactsImg from "./contacts.gif"
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { BsBalloonHeartFill } from 'react-icons/bs';
import ContactForm from './ContactsFrom';


const Contacts = () => {
    return (
        <Box id="contact" w="90%" margin={"auto"} mt={"40px"} height="auto">
            <Box borderBottom={"3px solid #f4e16a"}>
                <Text textAlign={"center"} fontSize="50px" fontWeight={700} color="#f4e16a">Contact Me</Text>
            </Box>

            <SimpleGrid mt="40px" columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2, "2xl": 2 }} spacing={8}>
                <Box>
                    {/* <Image borderRadius={"5px"} src={contactsImg} alt="contact" /> */}
                    <ContactForm />
                </Box>

                <Box>
                    <Box id="contact-phone">
                        <Button mt="10px" leftIcon={<BiPhoneCall />} fontSize={"20px"} color="#e21717" colorScheme={"yellow"} h="60px" w="100%">+91 7903438621</Button>
                    </Box>

                    <Box id="contact-email">
                        <Button mt="30px" leftIcon={<HiOutlineMail />} fontSize={"19px"} color="#e21717" colorScheme={"yellow"} h="60px" w="100%">ahmadumer9126@gmail.com</Button>
                    </Box>

                    <Box>
                        <Button mt="30px" leftIcon={<MdLocationOn />} fontSize={"20px"} color="#e21717" colorScheme={"yellow"} h="60px" w="100%">Purnea, Bihar</Button>
                    </Box>

                    <Box id="contact-github">
                        <Button

                            onClick={() =>
                                window.open(
                                    "https://github.com/UmerAhmad9126"
                                )
                            }
                            mt="30px" leftIcon={<FaGithubSquare />} fontSize={"20px"} color="#e21717" colorScheme={"yellow"} h="60px" w="100%">Github</Button>
                    </Box>


                    <Box id="contact-linkedin">
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/umer-ahmad-515437217/"
                                )
                            }
                            mt="30px" leftIcon={<BsLinkedin />} fontSize={"20px"} color="#e21717" colorScheme={"yellow"} h="60px" w="100%">Linkedin</Button>
                    </Box>

                </Box>
            </SimpleGrid>

            <Button
                mt="20px" leftIcon={<BsBalloonHeartFill />} rightIcon={<BsBalloonHeartFill />} fontSize={"20px"} color="#e21717" colorScheme={"yellow"} h="60px" w="100%">Made by Umer Ahmad </Button>
        </Box>
    )
}

export default Contacts