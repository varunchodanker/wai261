import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading, Center, Input, 
  Box, Button, Text } from '@chakra-ui/react'

import Message from './Message';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Center>
        <Box>
          <Heading>ChakraUI Heading</Heading>
          <Message />
          <Message />
          <Message />
          <Message />
          <Input onChange={(event) => {
            console.log(event.target.value);
          }} />
          <Button onClick={() => {
            console.log("Test")
          }}>Send Message</Button>
        </Box>
      </Center>
    </ChakraProvider>
  )
}
export default App;