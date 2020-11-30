import React, {useState } from 'react'
import {
    Box,
    useColorModeValue
  } from '@chakra-ui/core';
import { XIcon } from '../svgs/icons.js'
import { ChromePicker } from 'react-color';

const ColorPickerPackage = ({mainColor, setMainColor}) => {
    const [colorPickerToggle, setColorPickerToggle] = useState(false);

    const handleColor = color => {
        setMainColor(color.hex)
    }

    const hoverBg = useColorModeValue("#EDF2F7", "rgba(255,255,255,0.08)")
    const xColor = useColorModeValue("#000", "#fff");
    const xBg = useColorModeValue("#fff", "#000");

    return (
    <>
    <Box
    _hover={{background: hoverBg}}
    borderRadius="0.25rem"
    h={10}
    w={10}
    ml={2}
    display="grid"
    placeItems="center"
    cursor="pointer"
    onClick={() => setColorPickerToggle(true)}
    >
        <Box
        bg={mainColor}
        h={4}
        w={4}
        />
    </Box>
    {colorPickerToggle && 
    <Box
    position="absolute"
    top={16}
    right={24}
    overflow="visible"
    >
        <XIcon
        onClick={() => setColorPickerToggle(false)}
        w={8}
        h={8}
        cursor="pointer"
        color={xColor}
        position="relative"
        mb={-4}
        ml={-4}
        zIndex="2"
        fill={xBg}
        />
        <ChromePicker
        color={mainColor}
        onChangeComplete={handleColor}
        />
    </Box>
    }
    </>
    )
}

  export default ColorPickerPackage
