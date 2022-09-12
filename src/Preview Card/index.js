import { Center } from "@chakra-ui/react";
import { ProductImage } from "./Image";
import { ProductInformation } from "./ProductInformation";

export function PreviewCard() {
    return <Center display="flex" flexDirection={{ base: "column", sm: "row" }}>
        <ProductImage />
        <ProductInformation />
    </Center>
}