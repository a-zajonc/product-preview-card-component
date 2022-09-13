import { Img, useBreakpointValue } from "@chakra-ui/react";

export function ProductImage() {

    const responsiveImg = useBreakpointValue({
        base: 'image-product-mobile.jpg',
        sm: 'image-product-mobile.jpg',
        md: 'image-product-mobile.jpg',
        xl: 'image-product-desktop.jpg',
        '2xl': 'image-product-desktop.jpg'
    })

    return <Img objectFit="cover" alt="Zdjęcie perfum Chanel"
        src={responsiveImg}
        width={{ base: "350px", sm: "350px", xl: "298px" }}
        height={{ base: "240px", sm: "340px", xl: "450px", }}
        borderTopLeftRadius={{ base: "10", sm: "10", xl: "10" }}
        borderBottomLeftRadius={{ base: "0", sm: "0", xl: "10" }}
        borderTopRightRadius={{ base: "10", sm: "10", xl: "0" }}
    >
    </Img>
}