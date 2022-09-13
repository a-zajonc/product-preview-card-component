import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import { PreviewCard } from './Preview Card';
import { theme } from '.';

function App() {
  return <ChakraProvider theme={theme}>
    <Box height="100%" bgColor="#F2EBE3" p={{ base: '2', desktop: '10' }}>
      <PreviewCard />
    </Box>
  </ChakraProvider>
}

export default App;
