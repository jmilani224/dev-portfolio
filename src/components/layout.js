import React from 'react'
import Header from './header'
import { Box, Flex } from '@chakra-ui/core'
import './layout.css'
import SocialIcons from './socialIcons'
import Logo from './logo'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            
            <Box
            as='main'
            pt='5rem'
            w='100vw'
            pl={{base: 4, md: '9rem'}}
            pr={{base: 4, md: '4rem'}}
            >
                {children}
            </Box>

            <Footer />

            <Flex
            position="fixed"
            left={16}
            bottom={0}
            alignItems="center"
            flexDirection="column"
            display={{base: 'none', md: 'flex'}}
            >
                <Box
                h={10}
                w={0}
                mb={10}
                borderLeft="3px solid"
                borderColor="main"
                />

                <SocialIcons />

                <Box
                h={24}
                w={0}
                mt={10}
                borderLeft="3px solid"
                borderColor="main"
                />
            </Flex>
        </>
    )
}

export default Layout


const Footer = () => (
    <Flex
    h={24}
    w='100vw'
    mt={8}
    backgroundColor='main'
    justifyContent='center'
    alignItems='center'
    >
        <Logo color='#fff' />
    </Flex>
)