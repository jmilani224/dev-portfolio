import React from 'react'
import { Box } from '@chakra-ui/core'

const Logo = ({color}) => {

    return (
        <Box
        h="55px"
        w="65px"
        border="2px solid"
        borderColor={color}
        borderRadius="5px"
        paddingTop="20px"
        paddingLeft="10px"
        fontFamily="themeMono"
        color={color}
        fontSize="1.1rem"
        transition="0.2s all ease"
        >
            jm
        </Box>
    )
}

export default Logo
