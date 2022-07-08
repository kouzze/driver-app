import React from 'react'
import './assets/global/global.css'

import { ChakraProvider, theme } from '@chakra-ui/react'
import MapCompleteComponent from './components/MapCompleteComponent'

const App = () => {
  return (
      <ChakraProvider theme={theme} >
        <MapCompleteComponent />
      </ChakraProvider>
  )
}

export default App