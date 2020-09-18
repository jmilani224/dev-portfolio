import React from 'react'
import {
    List,
    ListItem,
    Link,
    Flex
} from '@chakra-ui/core'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from '../components/logo.js'


const Header = () => {
    return (

            <Flex
            justifyContent="space-between"
            alignItems='center'
            pt={6}
            px={{base: 6, md: 16}}

            >
            
                <Logo color='main' />

                <Flex alignItems='center'>

                    <Nav />

                    <ColorModeSwitcher />

                </Flex>

            </Flex>

    )
}
export default Header

const Nav = () => {
    const navItems = [
        {
            name: 'work',
            href: '#work'
        },
        {
            name: 'contact',
            href: 'mailto:jmilani224@gmail.com'
        },
    ]

    return (
        <List
        fontFamily="themeMono"
        pr={{base: 4, md: 8, lg: 12}}
        >
        {navItems.map(i => (
            <Link
            key={i}
            href={i.href}
            ml={{base: 4, md: 8, lg: 12}}
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