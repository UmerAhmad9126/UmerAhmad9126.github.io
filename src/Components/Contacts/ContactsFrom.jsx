import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    useToast,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




export default function ContactFormWithSocialButtons() {

    const { hasCopied, onCopy } = useClipboard('ahmadumer9126@gmail.com');
    const form = useRef();
    const toast = useToast();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_gfa9iqn', 'template_susy3db', form.current, 'xulTpJyLjOw3pnwX4')
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                toast({
                    position: 'top',
                    title: `Thank You! I will get back to you as soon as possible`,
                    status: "success",
                    isClosable: true,
                })
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                toast({
                    position: 'top',
                    title: `Something Went Wrong`,
                    status: "error",
                    isClosable: true,
                })
            });
    };

    return (
        <Flex
            align="center"
            justify="center"
            id="contact">
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 16, lg: 3 }}
                p={{ base: 0, lg: 0 }}>
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 0 }}>

                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}>
                            <Stack
                                align="center"
                                justify="space-around"
                                direction={{ base: 'row', md: 'column' }}>
                                <Tooltip
                                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                                    closeOnClick={false}
                                    hasArrow>
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: '#f4e16a',
                                            color: useColorModeValue('#e21717', '#e21717'),
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Link href="https://github.com/UmerAhmad9126">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: '#f4e16a',
                                            color: useColorModeValue('#e21717', '#e21717'),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="https://www.linkedin.com/in/umer-ahmad-515437217/">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: '#f4e16a',
                                            color: useColorModeValue('#e21717', '#e21717'),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>

                            <Box
                                bg={useColorModeValue('white', 'gray.700')}
                                borderRadius="lg"
                                p={6}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow="base">
                                <VStack spacing={2}>

                                    <form ref={form} onSubmit={sendEmail}>
                                        <FormControl isRequired>
                                            <FormLabel>Name</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<BsPerson />} />
                                                <Input type="text" name="to_name" placeholder="Your Name" />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel>Email</FormLabel>

                                            <InputGroup>
                                                <InputLeftElement children={<MdOutlineEmail />} />
                                                <Input
                                                    type="email"
                                                    name="from_name"
                                                    placeholder="Your Email"
                                                />
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel>Message</FormLabel>

                                            <Textarea
                                                name="message"
                                                placeholder="Your Message"
                                                rows={6}
                                                resize="none"
                                            />
                                        </FormControl>
                                        {
                                            loading ? (
                                                <Button
                                                    isLoading
                                                    fontSize={"22px"} color="#e21717" colorScheme={"yellow"}
                                                    width={"100%"}
                                                    cursor={"pointer"}
                                                >
                                                </Button>

                                            ) : (
                                                // <Button
                                                //     fontSize={"22px"} color="#e21717" colorScheme={"yellow"}
                                                //     width={"100%"}
                                                //     cursor={"pointer"}
                                                //     onClick={sendEmail}
                                                // >
                                                //     Send Message
                                                // </Button>
                                                <Input
                                                    type='Submit'
                                                    fontSize={"22px"}
                                                    color="#e21717"
                                                    bg={"#f4e16a"}
                                                    width={"100%"}
                                                    cursor={"pointer"}
                                                    value={"Send Message"}
                                                    textAlign="center"
                                                />
                                            )
                                        }
                                    </form>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>

            </Box>

        </Flex>
    );
}