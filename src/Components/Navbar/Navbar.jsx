import {
    Box,
    useColorMode,
    Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import DrawerComponent from './Drawer';
import styles from "./Navbar.module.css";
import resume from "../Home/Umer_Ahmad_Resume.pdf";
import { Link } from "react-scroll"





export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box id="nav-menu" position={"sticky"} top="0px" zIndex={1000} bg="#b0c0bc">
            {/* Desktop Navbar */}
            <Box className={styles.desktop_navbar} padding={"20px"} w="100%" display="flex" justifyContent={"space-between"}>


                <Link className='nav-link home' to="home" spy={true} smooth={true} offset={-130} duration={500}>
                    <Box cursor={"pointer"} display={"flex"} justifyContent="center" alignItems={"center"}>
                        <Text fontSize={"22px"} fontWeight={700} color="#f4e16a">UMER</Text>
                        <Text fontSize={"22px"} fontWeight={700} color="#e21717">AHMAD</Text>
                    </Box>
                </Link>



                <Box display={"flex"} gap="50px" justifyContent="center" alignItems={"center"}>

                    <Link to="home" spy={true} smooth={true} offset={-130} duration={500} >
                        <Box cursor={"pointer"}>
                            <Text fontSize={"15px"} fontWeight={500}>HOME</Text>
                        </Box>
                    </Link>

                    <Link className='nav-link about' to="about" spy={true} smooth={true} offset={-80} duration={500}>
                        <Box cursor={"pointer"}>
                            <Text fontSize={"15px"} fontWeight={500}>ABOUT</Text>
                        </Box>
                    </Link>

                    <Link className='nav-link skills' to="skills" spy={true} smooth={true} offset={-80} duration={500}>
                        <Box cursor={"pointer"}>
                            <Text fontSize={"15px"} fontWeight={500}>SKILLS</Text>
                        </Box>
                    </Link>


                    <Link className='nav-link projects' to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                        <Box cursor={"pointer"} >
                            <Text fontSize={"15px"} fontWeight={500}>PROJECT</Text>
                        </Box>
                    </Link>

                    <Link className='nav-link contact' to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                        <Box cursor={"pointer"} >
                            <Text fontSize={"15px"} fontWeight={500}>CONTACT ME</Text>
                        </Box>
                    </Link>


                    <Box className='nav-link resume'
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1nvptm9d35XdSoHzWJkNmpZcC1r9MnHuW/view?usp=sharing"
                            )
                        }
                    >
                        <Text fontSize={"15px"} fontWeight={500}>
                            <a id="resume-button-1" href={resume} download target="_blank" rel="noreferrer">
                                RESUME
                            </a>
                        </Text>

                        {/* <Text className='nav-link resume' fontSize={"15px"} fontWeight={500}>
                            <a id="resume-button-1" href='https://drive.google.com/uc?export=download&id=1nvptm9d35XdSoHzWJkNmpZcC1r9MnHuW' download={resume} target="_blank" rel="noreferrer">
                                RESUME
                            </a>
                        </Text> */}
                    </Box>

                    <Box onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Box>
                </Box>
            </Box>



            {/* Mobile and Tab Navbar */}
            <Box bg="#b0c0bc" className={styles.mobile_navbar} justifyContent="space-between" position={"sticky"} top="0px" zIndex={1000} display={"flex"} padding={"13px"} width="100%" margin={"auto"}>

                <Link cursor="pointer" to="home" spy={true} smooth={true} offset={-160} duration={500}>
                    <Box display={"flex"}>
                        <Text fontSize={"22px"} fontWeight={700} color="#f4e16a">UMER</Text>
                        <Text fontSize={"22px"} fontWeight={700} color="#e21717">AHMAD</Text>
                    </Box>
                </Link>


                <Box display={"flex"} justifyContent="center" gap={"20px"} alignItems={"center"}>
                    <Box onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Box>
                    <DrawerComponent size={20} />
                </Box>

            </Box>

        </Box>
    );
}