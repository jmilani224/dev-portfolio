import React from 'react'
import {
    Text, Button, useColorModeValue, Box
} from '@chakra-ui/core'
import { Heading1 } from './headings'

const Hero = () => {

    const buttonBg = useColorModeValue("#fff", "themeBlack")

    return (
        <Box pl={{ base: 4, md: 0 }}>
            <Text
                fontFamily='themeMono'
                fontSize='1.4rem'
            >
                hi! 👋
            </Text>

            <Heading1 text="I'm Joel Milani." />

            <Text
                fontFamily='themeMono'
                fontSize={{ base: '1.1rem', md: '1.4rem' }}
                mt={6}
            >
                i'm a developer in lakewood, ohio. I build accessible, intuitive user interfaces, websites, and applications using modern web technologies. reach out if you'd like to work together!
            </Text>

            <Button
                fontFamily='themeMono'
                backgroundColor={buttonBg}
                border='2px solid'
                borderColor='main'
                color='main'
                h={16}
                px={16}
                mt={8}
                _hover={{ backgroundColor: 'main', color: '#fff' }}
                onClick={() => window.location.href = 'mailto:jmilani224@gmail.com'}
            >
                let's chat!
            </Button>
        </Box>
    )
}

export default Hero
