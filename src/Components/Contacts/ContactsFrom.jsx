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
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsLinkedin, BsPerson} from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';



export default function ContactFormWithSocialButtons() {
    const { hasCopied, onCopy } = useClipboard('ahmadumer9126@gmail.com');

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
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<BsPerson />} />
                                            <Input type="text" name="name" placeholder="Your Name" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<MdOutlineEmail />} />
                                            <Input
                                                type="email"
                                                name="email"
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

                                    <Button
                                        fontSize={"20px"} color="#e21717" colorScheme={"yellow"}
                                        width={"100%"}
                                    >
                                        Send Message
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}