import React from 'react'
import { VStack, useColorModeValue, Link } from '@chakra-ui/core'
import { MailIcon, GithubIcon, CodepenIcon } from '../svgs/icons'

const SocialIcons = () => {

    const iconColor = useColorModeValue("themeBlack", "white")

    return (
        <VStack
        spacing={10}
        >
            <Link href="https://github.com/jmilani224" target="blank">
                <GithubIcon
                transition="0.3s ease all"
                boxSize={5}
                color={iconColor}
                _hover={{color: "main", transform: "translateY(-3px)", transition: "0.3s ease all"}}
                />
            </Link>
            
            <Link href="https://codepen.io/jmilani224" target="blank">
                <CodepenIcon
                transition="0.3s ease all"
                boxSize={5}
                color={iconColor}
                _hover={{color: "main", transform: "translateY(-3px)", transition: "0.3s ease all"}}
                />
            </Link>
            
            <Link href="mailto:jmilani224@gmail.com" target="blank">
                <MailIcon
                transition="0.3s ease all"
                boxSize={5}
                color={iconColor}
                _hover={{color: "main", transform: "translateY(-3px)", transition: "0.3s ease all"}}
                />
            </Link>
    
        </VStack>
    )
}

export default SocialIcons