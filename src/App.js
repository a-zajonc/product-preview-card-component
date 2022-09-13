import './App.css';
import { ChakraProvider, Box, Center } from '@chakra-ui/react'
import { PreviewCard } from './Preview Card';
import { theme } from '.';

function App() {
  return <ChakraProvider theme={theme}>
    <Box bgColor="#F2EBE3" height="100vh" display='flex' justifyContent='center' alignItems='center'>
      <PreviewCard />
    </Box>
  </ChakraProvider>
}

export default App;
