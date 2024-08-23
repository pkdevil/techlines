import { ChakraProvider } from "@chakra-ui/react";
import ProductsScreen from "./screens/productsScreen";

function App() {
  return (
    <>
      <ChakraProvider>
        <ProductsScreen />
      </ChakraProvider>
    </>
  );
}

export default App;
