import { Box, Container } from "@chakra-ui/react"
import { ProductCategory } from "./ProductCategory"
import { ProductName } from "./ProductName"
import { ProductDescription } from "./ProductDescription"
import { ProductPrice } from "./ProductPrice"
import { AddToCart } from "./AddToCart"


export function ProductInformation() {

    return <Box bg="white" width="400px" height="600px" borderRightRadius="10">
        <Container width="100%" height="100%" p="10" border="1px" borderColor="black" borderStyle="solid" display="grid">
            <ProductCategory />
            <ProductName />
            <ProductDescription />
            <ProductPrice />
            <AddToCart />
        </Container>
    </Box>
}