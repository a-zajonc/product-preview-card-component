import { Img, useBreakpointValue } from "@chakra-ui/react";

export function ProductImage() {

    const responsiveImg = useBreakpointValue({
        desktop: 'image-product-desktop.jpg',
        base: 'image-product-mobile.jpg'
    })

    return <Img
        src={responsiveImg}
        width={{ base: "350px", destkop: "298px" }}
        height={{ base: "220px", desktop: "450px", }}
        borderLeftRadius={{ base: "0", desktop: "10" }}
        borderTopRadius={{ base: "10", desktop: "0" }}>
    </Img>
}