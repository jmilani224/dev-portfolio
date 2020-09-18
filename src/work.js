import React from 'react'
import { Heading1 } from './components/headings.js'
import { Box, Flex, Heading, Text, Button, useColorModeValue, Image, Link } from '@chakra-ui/core'
import redRadish from './images/redradish.jpg'

export const Work = () => {
    return (
        <>
        <Box h={24} />
        <Heading1 text='Selected Projects' />

        <ProjectInfo />


        </>
    )
}

const ProjectInfo = () => {
    const hoverButtonBg = useColorModeValue('white', 'themeBlack')

    return (
        <Flex
        direction={{base: "column", lg: "row"}}
        my={24}
        alignItems='center'
        justifyContent='space-between'
        >
            <Flex
            direction="column"
            >
                <Heading
                as='h2'
                fontFamily='themeMono'
                fontSize='2rem'
                mb={8}
                >
                    Project Name
                </Heading>

                <Text
                fontFamily='themeMono'
                >
                    Here's some information about the project.
                </Text>

                <Button
                fontFamily='themeMono'
                fontSize='1rem'
                fontWeight='400'
                backgroundColor='mainBlue'
                border='2px solid'
                borderColor='mainBlue'
                color='white'
                _hover={{backgroundColor: hoverButtonBg, color: 'mainBlue'}}
                h='3rem'
                w='9rem'
                py={4}
                px={8}
                mt={4}
                >
                    Visit Demo
                </Button>

                <Text
                fontWeight='600'
                fontSize='0.8rem'
                fontFamily='themeMono'
                mt={12}
                >
                    TOOLS
                </Text>
                <Flex
                direction='row'
                mt={4}
                >
                    {['REACT', 'CHAKRA UI', 'NETLIFY'].map(i => (
                    <Text
                    mr={6}
                    fontWeight='400'
                    fontSize='0.8rem'
                    fontFamily='themeMono'
                    color='#a9aaab'
                    >
                        {i}
                    </Text>
                    ))}
                </Flex>
            </Flex>

            <Box
            position='relative'
            w='680px'
            h='400px'
            border='15px solid white'
            boxShadow='0 17px 56px rgba(125,127,129,.17)'
            borderRadius='5px'
            >
                <Image src={redRadish} />
                <Link
                href='#'
                >
                    <Flex
                    justifyContent='center'
                    alignItems='center'
                    position='absolute'
                    opacity='0'
                    top='-15px'
                    left='-15px'
                    w='700px'
                    h='400px'
                    borderRadius='5px'
                    zIndex='2'
                    backgroundColor='#aecbfedf'
                    transition='0.3s ease all'
                    _hover={{opacity: '1', transition: '0.3s ease all'}}
                    >
                        <Button
                        fontFamily='themeMono'
                        backgroundColor='white'
                        border='1px solid'
                        borderColor='mainBlue'
                        color='lightBlue'
                        fontSize='1rem'
                        fontWeight='400'
                        py={6}
                        px={8}
                        >
                            Visit Demo
                        </Button>
                    </Flex>
                </Link>
            </Box>
        </Flex>
    )
}
