import React from 'react'
import {
    Box,
    List,
    ListItem,
    Link,
    Flex
} from '@chakra-ui/core'
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Header = () => {
    return (

            <Flex
            justifyContent="space-between"
            alignItems='center'
            pt={6}
            px={16}

            >
            
                <Logo />

                <Flex alignItems='center'>

                    <Nav />

                    <ColorModeSwitcher />

                </Flex>

            </Flex>

    )
}
export default Header

const Logo = () => {

    return (
        <Box
        h="51px"
        w="60px"
        bgColor="mainBlue"
        borderRadius="5px"
        paddingTop="20px"
        paddingLeft="10px"
        fontFamily="themeMono"
        color="#fff"
        fontSize="1.1rem"
        fontWeight="bold"
        _hover={{bgColor: '#ff8075'}}
        cursor="pointer"
        transition="0.2s all ease"
        >
            J
        </Box>
    )
}

const Nav = () => {
    const navItems = [
        {
            name: 'Work',
            href: '/'
        },
        {
            name: 'Bookshelf',
            href: '/'
        },
        {
            name: 'Contact',
            href: '/'
        },
    ]

    return (
        <List
        fontFamily="themeMono"
        pr={10}
        >
        {navItems.map(i => (
            <Link
            key={i}
            href={i.href}
            ml={8}
            >
                <ListItem
                display="inline-block"
                _hover={{color: '#7d7f81'}}
                >
                    {i.name}
                </ListItem>
            </Link>
        ))}
        </List>
    )
}