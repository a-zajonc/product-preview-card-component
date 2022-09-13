import { Img, useBreakpointValue } from "@chakra-ui/react";

export function ProductImage() {

    const responsiveImg = useBreakpointValue({
        desktop: 'image-product-desktop.jpg',
        base: 'image-product-mobile.jpg'
    })

    return <Img
        src={responsiveImg}
        width={{ base: "350px", desktop: "298px" }}
        height={{ base: "240px", desktop: "450px", }}
        borderTopLeftRadius={{ base: "10", desktop: "10" }}
        borderBottomLeftRadius={{ base: "0", desktop: "10" }}
        borderTopRightRadius={{ base: "10", desktop: "0" }}
        p={{ base: "0", desktop: "0" }}>
    </Img>
}