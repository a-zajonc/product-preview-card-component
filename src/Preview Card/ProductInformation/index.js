import { Box, Container } from "@chakra-ui/react"
import { ProductCategory } from "./ProductCategory"
import { ProductName } from "./ProductName"
import { ProductDescription } from "./ProductDescription"
import { ProductPrice } from "./ProductPrice"
import { AddToCart } from "./AddToCart"


export function ProductInformation() {

    return <Box bg="white" width="298px" height="450px" borderRightRadius="10">
        <Container width="100%" height="100%" p="9" display="grid" alignContent="space-between">
            <ProductCategory />
            <ProductName />
            <ProductDescription />
            <ProductPrice />
            <AddToCart />
        </Container>
    </Box>
}