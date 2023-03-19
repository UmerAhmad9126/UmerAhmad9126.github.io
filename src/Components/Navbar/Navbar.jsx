import {
    Box,
    useColorMode,
    Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import DrawerComponent from './Drawer';
import styles from "./Navbar.module.css";
import resume from "../Home/Umer_Ahmad_Resume.pdf"




export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box id="nav-menu" position={"sticky"} top="0px" zIndex={1000} bg="#b0c0bc">
            {/* Desktop Navbar */}
            <Box className={styles.desktop_navbar} padding={"20px"} w="100%" display="flex" justifyContent={"space-between"}>

                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Text fontSize={"22px"} fontWeight={700} color="#f4e16a">UMER</Text>
                    <Text fontSize={"22px"} fontWeight={700} color="#e21717">AHMAD</Text>
                </Box>


                <Box display={"flex"} gap="50px" justifyContent="center" alignItems={"center"}>
                    <Box className='nav-link home'>
                        <Text fontSize={"15px"} fontWeight={500}>HOME</Text>
                    </Box>

                    <Box className='nav-link about'>
                        <Text fontSize={"15px"} fontWeight={500}>ABOUT</Text>
                    </Box>

                    <Box className='nav-link skills'>
                        <Text fontSize={"15px"} fontWeight={500}>SKILLS</Text>
                    </Box>

                    <Box className='nav-link projects'>
                        <Text fontSize={"15px"} fontWeight={500}>PROJECT</Text>
                    </Box>

                    <Box className='nav-link contact'>
                        <Text fontSize={"15px"} fontWeight={500}>CONTACT ME</Text>
                    </Box>

                    <Box className='nav-link resume'
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1nvptm9d35XdSoHzWJkNmpZcC1r9MnHuW/view?usp=sharing"
                            )
                        }
                    >
                        <a id="resume-link-1" href={resume} download target="_blank" rel="noreferrer">
                            <Text fontSize={"15px"} fontWeight={500}>RESUME</Text>
                        </a>
                    </Box>

                    <Box onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Box>
                </Box>
            </Box>



            {/* Mobile and Tab Navbar */}
            <Box bg="#b0c0bc" className={styles.mobile_navbar} justifyContent="space-between" position={"sticky"} top="0px" zIndex={1000} display={"flex"} padding={"13px"} width="100%" margin={"auto"}>

                <Box display={"flex"}>
                    <Text fontSize={"22px"} fontWeight={700} color="#f4e16a">UMER</Text>
                    <Text fontSize={"22px"} fontWeight={700} color="#e21717">AHMAD</Text>
                </Box>

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