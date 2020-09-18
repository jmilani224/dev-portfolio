import React from 'react'
import {
    Text, Button, useColorModeValue
} from '@chakra-ui/core'
import { Heading1 } from './headings'

const Hero = () => {
    
    const buttonBg = useColorModeValue("#fff", "themeBlack")

    return (
        <>
            <Text
            fontFamily='themeMono'
            fontSize='1.4rem'
            >
                Hi! 🥑
            </Text>

            <Heading1 text="I'm Joel Milani. <br /> I Make Websites and Other Things." />

            <Text
            fontFamily='themeMono'
            fontSize={{base: '1.1rem', md: '1.4rem'}}
            >
                I'm a frontend developer in Lakewood, Ohio. Get in touch if you'd like to work together.
            </Text>

            <Button
            fontFamily='themeMono'
            backgroundColor={buttonBg}
            border='2px solid'
            borderColor='mainBlue'
            color='lightBlue'
            py={8}
            px={16}
            mt={8}
            _hover={{backgroundColor: 'mainBlue', color: '#fff'}}
            
            >
                Let's Chat!
            </Button>
        </>
    )
}

export default Hero
