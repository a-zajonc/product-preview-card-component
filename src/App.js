import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { PreviewCard } from './Preview Card';
import { theme } from '.'

function App() {
  return <ChakraProvider theme={theme}>
    <Box width="100%" height="1000px" bgColor="#F2EBE3">
      <PreviewCard />
    </Box>
  </ChakraProvider>
}

export default App;
