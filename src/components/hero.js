import React from 'react'
import {
    Text, Button, useColorModeValue
} from '@chakra-ui/core'


const Hero = () => {
    
    const buttonBg = useColorModeValue("#ffffffeb", "#1A202C")

    return (
        <>
            <Text
            fontFamily='themeMono'
            fontSize='1.4rem'
            >
                Hi! 🥑
            </Text>

            <Text
            fontFamily='heading'
            fontSize='5.35rem'
            lineHeight='5rem'
            letterSpacing='-1px'
            py='2rem'
            >
                I'm Joel Milani. <br />
                I Make Websites and Other Things.
            </Text>

            <Text
            fontFamily='themeMono'
            fontSize='1.4rem'
            >
                I'm a frontend developer in Lakewood, Ohio. Get in touch if you'd like to work together - I'm open to freelance projects and full-time opportunities.
            </Text>

            <Button
            fontFamily='themeMono'
            backgroundColor={buttonBg}
            border='2px solid'
            borderColor='mainBlue'
            color='lightBlue'
            py={8}
            px={16}
            _hover={{backgroundColor: 'mainBlue', color: '#fff'}}
            mt={8}
            
            >
                Let's Chat!
            </Button>
        </>
    )
}

export default Hero
