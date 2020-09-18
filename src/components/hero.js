import React from 'react'
import {
    Text, Button, useColorModeValue, Box
} from '@chakra-ui/core'
import { Heading1 } from './headings'

const Hero = () => {
    
    const buttonBg = useColorModeValue("#fff", "themeBlack")

    return (
        <Box pl={12}>
            <Text
            fontFamily='themeMono'
            fontSize='1.4rem'
            >
                hi! 👋
            </Text>

            <Heading1 text="I'm Joel Milani. <br /> I Make Websites and Other Things." />

            <Text
            fontFamily='themeMono'
            fontSize={{base: '1.1rem', md: '1.4rem'}}
            >
                i'm a frontend developer in lakewood, ohio. get in touch if you'd like to work together.
            </Text>

            <Button
            fontFamily='themeMono'
            backgroundColor={buttonBg}
            border='2px solid'
            borderColor='main'
            color='main'
            py={8}
            px={16}
            mt={8}
            _hover={{backgroundColor: 'main', color: '#fff'}}
            onClick={() => window.location.href = 'mailto:jmilani224@gmail.com'}
            >
                let's chat!
            </Button>
        </Box>
    )
}

export default Hero
