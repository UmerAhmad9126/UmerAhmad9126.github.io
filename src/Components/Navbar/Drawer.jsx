import { Button, Drawer, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Divider, Box, } from "@chakra-ui/react"
import React from "react"
import { RxHamburgerMenu } from 'react-icons/rx';
import resume from "../Home/Umer_Ahmad_Resume.pdf";
import { Link } from "react-scroll"




export default function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1nvptm9d35XdSoHzWJkNmpZcC1r9MnHuW/view?usp=sharing"
        )
    }

    return (
        <>
            <Text ref={btnRef} onClick={onOpen} cursor="pointer" fontWeight="500" fontSize="20px">
                <RxHamburgerMenu size={"25px"} />
            </Text>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box display={"flex"}>
                            <Text fontSize={"22px"} fontWeight={700} color="#0fe4af">UMER</Text>
                            <Text fontSize={"22px"} fontWeight={700} color="#e21717">AHMAD</Text>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody>
                        <Divider />
                        <Link cursor="pointer" className='nav-link home' to="home" spy={true} smooth={true} offset={-160} duration={500}>
                            <Text onClick={onClose} padding="10px">HOME</Text>
                        </Link>

                        <Divider />
                        <Link cursor="pointer" className='nav-link about' to="about" spy={true} smooth={true} offset={-80} duration={500}>
                            <Text onClick={onClose} padding="10px">ABOUT</Text>
                        </Link>

                        <Divider />
                        <Link cursor="pointer" className='nav-link skills' to="skills" spy={true} smooth={true} offset={-80} duration={500}>
                            <Text onClick={onClose} padding="10px">SKILLS</Text>
                        </Link>


                        <Divider />
                        <Link cursor="pointer" className='nav-link projects' to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                            <Text onClick={onClose} padding="10px">PROJECTS</Text>
                        </Link>

                        <Divider />
                        <Link cursor="pointer" className='nav-link contact' to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                            <Text onClick={onClose} padding="10px">CONTACT ME</Text>
                        </Link>


                        <Divider />
                        <Box onClick={handleClick} className='nav-link resume'>
                            <a id="resume-button-1" href={resume} download target="_blank" rel="noreferrer">
                                <Text onClick={onClose} padding="10px">RESUME</Text>
                            </a>
                        </Box>
                        <Divider />
                    </DrawerBody>


                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}