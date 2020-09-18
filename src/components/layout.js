import React from 'react'
import Header from './header'
import { Box, Flex } from '@chakra-ui/core'
import './layout.css'
import SocialIcons from './socialIcons'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            
            <Box
            as='main'
            pt='5rem'
            pl={{base: 4, md: '9rem'}}
            pr={{base: 4, md: '6rem'}}
            >
                {children}
            </Box>

            <Flex
            position="fixed"
            left={16}
            bottom={0}
            alignItems="center"
            flexDirection="column"
            display={{base: 'none', md: 'flex'}}
            >
                <SocialIcons />

                <Box
                h={16}
                w={0}
                mt={10}
                borderLeft="3px solid"
                borderColor="mainBlue"
                />
            </Flex>
        </>
    )
}

export default Layout
