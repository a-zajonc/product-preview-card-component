import { Box } from "@chakra-ui/react"
import { ProductCategory } from "./ProductCategory"
import { ProductName } from "./ProductName"
import { ProductDescription } from "./ProductDescription"
import { ProductPrice } from "./ProductPrice"
import { AddToCart } from "./AddToCart"


export function ProductInformation() {

    return <Box bg="white" width="400px" height="600px" borderRightRadius="10">
        <ProductCategory />
        <ProductName />
        <ProductDescription />
        <ProductPrice />
        <AddToCart />
    </Box>
}