import { Button, Img, Text } from "@chakra-ui/react";

export function AddToCart() {


    return <Button bg="#3C8067" width="100%" height="60px" p="5" _hover={{
        bgColor: "#1a4031",
    }}>
        <Img src="icons8-shopping-cart-24.png" alt="Shopping cart" />
        <Text color="white" fontFamily="Montserrat" fontSize="16" p="3">
            Add to Cart
        </Text>
    </Button>
}