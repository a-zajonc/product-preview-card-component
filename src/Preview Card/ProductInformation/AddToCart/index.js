import { Button, Img, Text } from "@chakra-ui/react";

export function AddToCart() {


    return <Button bg="#3C8067" width="100%" height="30px" p={{ base: "6", xl: "5" }} _hover={{
        bgColor: "#1a4031",
    }}>
        <Img src="icons8-shopping-cart-24.png" alt="Shopping cart" height="17px" />
        <Text color="white" fontFamily="Montserrat" fontSize="14" p="3">
            Add to Cart
        </Text>
    </Button>
}