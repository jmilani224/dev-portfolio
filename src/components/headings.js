import React from 'react'
import {
    Text,
} from '@chakra-ui/core'

export const Heading1 = ({ id, text }) => {
    return (
        <Text
            id={id}
            as='h1'
            fontFamily='heading'
            fontSize={{base: '3rem', md:'5.35rem'}}
            lineHeight={{base: '3rem', md:'5rem'}}
            letterSpacing='-1px'
            pt='2rem'
            pb='1rem'
            dangerouslySetInnerHTML={{__html: text}}
            />
    )
}