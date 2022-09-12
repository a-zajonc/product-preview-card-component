import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { PreviewCard } from './Preview Card';
import { theme } from '.';

function App() {
  return <ChakraProvider theme={theme}>
    <Box height="100%" witdh="100%" bgColor="#F2EBE3">
      <PreviewCard />
    </Box>

  </ChakraProvider>
}

export default App;
