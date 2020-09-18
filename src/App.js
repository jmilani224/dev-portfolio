import React from 'react';
import {
  ChakraProvider,
  CSSReset,
} from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import { merge } from "@chakra-ui/utils"
import Layout from './components/layout'
import Hero from './components/hero';
import { Work } from './work';

export const customTheme = merge(theme, {
  fonts: {
    themeMono: "Space Mono,monospace",
    heading: "'Tinos', serif",
  },
  colors: {
    mainBlue: '#5393fe',
    lightBlue: '#73abff',
    themeBlack: '#1A202C'
  }
})

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />

      <Layout>

        <Hero />

        <Work />

      </Layout>

    </ChakraProvider>
  );
}

export default App;
