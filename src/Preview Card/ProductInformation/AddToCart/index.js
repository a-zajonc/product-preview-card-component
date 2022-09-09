import { Button, Img, Text } from "@chakra-ui/react";

export function AddToCart() {
    return <Button bg="#3C8067">
        <Img src="icons8-shopping-cart-16.png" color="white" alt="Shopping cart" />
        <Text color="white" fontFamily="Montserrat">
            Add to cart
        </Text>
    </Button>
}