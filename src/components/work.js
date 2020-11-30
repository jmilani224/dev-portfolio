import React from 'react'
import { Heading1 } from './headings.js'
import { Box, Flex, Heading, Text, Button, useColorModeValue, Image, Link } from '@chakra-ui/core'
import { GithubIcon, LinkIcon } from '../svgs/icons'
import { projects } from '../data/projects.js'

export const Work = () => {
    return (
        <>
        <Box h={24} />
        
        <Heading1 id='work' text='Selected Projects' />

        <ProjectInfo />

        </>
    )
}

const ProjectInfo = () => {

    return projects.map(i => (

        <Flex
        key={i.name}
        direction={{base: "column", md: "row"}}
        mt={12}
        alignItems='center'
        justifyContent='space-between'
        >
            <Flex
            direction="column"
            >
                <Heading
                as='h2'
                fontFamily='themeMono'
                fontSize={{base: '1.7rem', md: '2rem'}}
                mb={8}
                >
                    {i.name}
                </Heading>

                <Box display={{base: 'block', md: 'none'}}>
                    <ScreenShot href={i.live} imgSrc={i.imgSrc} />
                </Box>

                <Text
                fontFamily='themeMono'
                >
                    {i.desc}
                </Text>

                
                    <SmallButton text='demo' icon={<LinkIcon />} href={i.live}/>
                
                    <SmallButton text='github' icon={<GithubIcon />} href={i.gitHub}/>

                <Text
                fontWeight='600'
                fontSize='0.8rem'
                fontFamily='themeMono'
                mt={8}
                >
                    stack
                </Text>
                <Flex
                direction='row'
                flexWrap='wrap'
                mt={4}
                >
                    {i.tools.map(x => (
                    <Text
                    key={x}
                    mr={6}
                    fontWeight='400'
                    fontSize='0.8rem'
                    fontFamily='themeMono'
                    color='#a9aaab'
                    >
                        {x}
                    </Text>
                    ))}
                </Flex>
            </Flex>
            

            <Box display={{base: 'none', md: 'block'}}>
                    <ScreenShot href={i.live} imgSrc={i.imgSrc} />
            </Box>
        </Flex>

        ))
    }


const ButtonOverlay = ({ text }) => (
    <Button
    fontFamily='themeMono'
    backgroundColor='white'
    border='1px solid'
    borderColor='main'
    color='main'
    fontSize={{base: '0.8rem', md:'1rem'}}
    fontWeight='400'
    h={{base: 10, md: 12}}
    px={{base: 6, md: 8}}
    _hover={{backgroundColor: 'white'}}
    >
        {text}
    </Button>
)

const SmallButton = ({ text, icon, href }) => {
    const hoverButtonBg = useColorModeValue('white', 'themeBlack')
    return (
        <Button
        leftIcon={icon}
        fontFamily='themeMono'
        fontSize={{base: '0.8rem', md:'1rem'}}
        fontWeight='400'
        backgroundColor='main'
        border='2px solid'
        borderColor='main'
        color='white'
        _hover={{backgroundColor: hoverButtonBg, color: 'main'}}
        h='2.5rem'
        w='7rem'
        mt={4}
        onClick={() => window.open(href, "_blank") || window.location.replace(href)}
        >
            {text}
            
        </Button>
    )
}

const ScreenShot = ({ href, imgSrc }) => (
    <Link
    href={href}
    target="blank"
    >
    <Box
    position='relative'
    w={{base: '90vw', md: '52.5vw'}}
    h={{base: '53vw', md: '30vw'}}
    border='15px solid white'
    boxShadow='0 17px 56px rgba(125,127,129,.17)'
    borderRadius='5px'
    ml={{base: 0, md: 8}}
    mt={{base: 0, md: 10}}
    mb={{base: 4, md: 0}}
    overflow='hidden'
    >
        <Image src={imgSrc} />
            <Flex
            justifyContent='center'
            alignItems='center'
            position='absolute'
            opacity='0'
            top='0'
            left='0'
            w={{base: '90vw', md: '52.5vw'}}
            h={{base: '53vw', md: '30vw'}}
            zIndex='2'
            backgroundColor='accentTrans'
            transition='0.3s ease all'
            _hover={{opacity: '1', transition: '0.3s ease all'}}
            >
                <ButtonOverlay text='visit demo' />
            </Flex>
        </Box>
    </Link>
)