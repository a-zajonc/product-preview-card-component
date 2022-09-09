import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { PreviewCard } from './Preview Card';

function App() {
  return <ChakraProvider>
    <PreviewCard />
  </ChakraProvider>
}

export default App;
