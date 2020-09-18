import React from 'react'
import {
    Text,
} from '@chakra-ui/core'

export const Heading1 = ({ text }) => {
    return (
        <Text
            as='h1'
            fontFamily='heading'
            fontSize={{base: '3rem', md:'5.35rem'}}
            lineHeight={{base: '3rem', md:'5rem'}}
            letterSpacing='-1px'
            py='2rem'
            dangerouslySetInnerHTML={{__html: text}}
            />
    )
}