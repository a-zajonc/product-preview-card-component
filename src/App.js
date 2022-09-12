import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { PreviewCard } from './Preview Card';

function App() {
  return <ChakraProvider>
    <Box height="100%" witdh="100%" bgColor="#F2EBE3">
      <PreviewCard />
    </Box>

  </ChakraProvider>
}

export default App;
