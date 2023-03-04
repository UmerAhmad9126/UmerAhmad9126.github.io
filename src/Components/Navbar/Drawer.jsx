import { Button, Drawer, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Divider, Box, } from "@chakra-ui/react"
import React from "react"
import { RxHamburgerMenu } from 'react-icons/rx';


export default function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

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
                        <Text onClick={onClose} padding="10px">HOME</Text>
                        <Divider />
                        <Text onClick={onClose} padding="10px">ABOUT</Text>
                        <Divider />
                        <Text onClick={onClose} padding="10px">SKILLS</Text>
                        <Divider />
                        <Text onClick={onClose} padding="10px">PROJECTS</Text>
                        <Divider />
                        <Text onClick={onClose} padding="10px">CONTACT ME</Text>
                        <Divider />
                        <Text onClick={onClose} padding="10px">RESUME</Text>
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