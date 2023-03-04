import {
    Box,
    useColorMode,
    Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import DrawerComponent from './Drawer';
import styles from "./Navbar.module.css";




export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box className={styles.desktop_navbar} position={"sticky"} top="0px" zIndex={1000} bg="#b0c0bc" padding={"20px"} w="100%" margin={"auto"} display="flex" justifyContent={"space-between"}>

                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Text fontSize={"22px"} fontWeight={700} color="#0fe43d">UMER</Text>
                    <Text fontSize={"22px"} fontWeight={700} color="#e21717">AHMAD</Text>
                </Box>


                <Box display={"flex"} gap="50px" justifyContent="center" alignItems={"center"}>
                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>HOME</Text>
                    </Box>

                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>ABOUT</Text>
                    </Box>

                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>SKILLS</Text>
                    </Box>

                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>PROJECT</Text>
                    </Box>

                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>CONTACT ME</Text>
                    </Box>

                    <Box>
                        <Text fontSize={"15px"} fontWeight={500}>RESUME</Text>
                    </Box>

                    <Box onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Box>
                </Box>
            </Box>

            <Box bg="#b0c0bc" className={styles.mobile_navbar} justifyContent="space-between" position={"sticky"} top="0px" zIndex={1000} display={"flex"} padding={"13px"} width="100%" margin={"auto"}>

                <Box display={"flex"}>
                    <Text fontSize={"22px"} fontWeight={700} color="#0fe43d">UMER</Text>
                    <Text fontSize={"22px"} fontWeight={700} color="#e21717">AHMAD</Text>
                </Box>

                <Box display={"flex"} justifyContent="center" gap={"20px"} alignItems={"center"}>
                    <Box onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Box>
                    <DrawerComponent size={20} />
                </Box>

            </Box>

        </>
    );
}