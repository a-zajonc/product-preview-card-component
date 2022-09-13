import { Button, Img } from "@chakra-ui/react";

export function AddToCart() {

    return <Button bg="#3C8067" width="100%" height="30px" p={{ base: "6", xl: "5" }} _hover={{
        bgColor: "#1a4031",
    }} color="white" fontFamily="Montserrat" fontWeight="700" fontSize="14">
        <Img src="icons8-shopping-cart-24.png" alt="Wózek zakupowy" height="17px" pr="3" />
        Add to Cart
    </Button>
}