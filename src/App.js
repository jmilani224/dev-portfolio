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

function App() {

  const [mainColor, setMainColor] = useState('#635bff');

  const handleColor = e => {
    setMainColor(e.target.value)
  }

  const ColorPicker = () => <input type="color" className='colorPicker' value={mainColor} onChange={handleColor} />

  const colorPicker = (<ColorPicker />)

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
      colorPicker={colorPicker}
      >

        <Hero />

        <Work />

      </Layout>

    </ChakraProvider>
  );
}

export default App;