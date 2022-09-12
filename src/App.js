import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { PreviewCard } from './Preview Card';

function App() {
  return <ChakraProvider>
    <Box width="1440px" height="1440px" bgColor="#F2EBE3">
      <PreviewCard />
    </Box>
  </ChakraProvider>
}

export default App;
