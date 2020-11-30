import React, { useState } from 'react';
import {
  ChakraProvider,
  CSSReset,
} from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import { merge } from "@chakra-ui/utils"
import Layout from './components/layout'
import Hero from './components/hero';
import { Work } from './components/work'
import ColorPickerPackage from './components/colorPicker';

function App() {

  const [mainColor, setMainColor] = useState('#635bff');

  const colorPickerPackage = (<ColorPickerPackage mainColor={mainColor} setMainColor={setMainColor} />)

  const customTheme = merge(theme, {
    fonts: {
      themeMono: "Space Mono,monospace",
      heading: "'Tinos', serif",
    },
    colors: {
      main: mainColor,
      accent: '#b1f5b7',
      accentTrans: '#b1f5b7ba',
      themeBlack: '#1A202C'
    }
  })

  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />

      <Layout
      colorPickerPackage={colorPickerPackage}
      >

        <Hero />

        <Work />

      </Layout>

    </ChakraProvider>
  );
}

export default App;