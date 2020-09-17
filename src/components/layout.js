import React from 'react'
import Header from './header'
import { Box, Flex } from '@chakra-ui/core'
import './layout.css'
import SocialIcons from './socialIcons'
import { customTheme } from '../App'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            
            <Box
            as='main'
            pt='5rem'
            px='15vw'
            h="200vh"
            >
                {children}
            </Box>

            <Flex
            position="fixed"
            left={16}
            bottom={0}
            alignItems="center"
            flexDirection="column"
            >
                <SocialIcons />

                <Box
                h={16}
                w={0}
                mt={10}
                borderLeft="3px solid"
                borderColor={customTheme.colors.mainBlue}
                />
            </Flex>
        </>
    )
}

export default Layout
