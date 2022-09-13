import { Box, Container } from "@chakra-ui/react"
import { ProductCategory } from "./ProductCategory"
import { ProductName } from "./ProductName"
import { ProductDescription } from "./ProductDescription"
import { ProductPrice } from "./ProductPrice"
import { AddToCart } from "./AddToCart"


export function ProductInformation() {

    return <Box
        bg="white"
        width={{ base: "350px", desktop: "298px" }}
        height={{ base: "390px", desktop: "450px" }}
        borderTopRightRadius={{ base: "0px", desktop: "10px" }}
        borderBottomRightRadius={{ base: "10px", desktop: "10px" }}
        borderBottomLeftRadius={{ base: "10px", desktop: "0px" }}
    >
        <Container width="100%" height="100%" p={{ base: "5", desktop: "9" }} display="grid" alignContent="space-between">
            <ProductCategory />
            <ProductName />
            <ProductDescription />
            <ProductPrice />
            <AddToCart />
        </Container>
    </Box>
}