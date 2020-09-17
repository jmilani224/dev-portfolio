import React from 'react'
import { VStack, useColorModeValue } from '@chakra-ui/core'
import { MailIcon, GithubIcon, CodepenIcon } from '../svgs/icons'
import { customTheme } from '../App.js'


const SocialIcons = () => {

    const iconColor = useColorModeValue(customTheme.colors.themeBlack, "white")

    return (
        <VStack spacing={10}>
            <GithubIcon
            style={{transition: "0.3s ease all"}}
            boxSize={5}
            color={iconColor}
            _hover={{color: customTheme.colors.mainBlue, transform: "translateY(-3px)", transition: "0.3s ease all"}}
            />

            <CodepenIcon
            style={{transition: "0.3s ease all"}}
            boxSize={5}
            color={iconColor}
            _hover={{color: customTheme.colors.mainBlue, transform: "translateY(-3px)", transition: "0.3s ease all"}}
            />
            
            <MailIcon
            style={{transition: "0.3s ease all"}}
            boxSize={5}
            color={iconColor}
            _hover={{color: customTheme.colors.mainBlue, transform: "translateY(-3px)", transition: "0.3s ease all"}}
            />
    
        </VStack>
    )
}

export default SocialIcons