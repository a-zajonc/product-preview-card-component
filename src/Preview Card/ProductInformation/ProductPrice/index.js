import { Box, Text } from "@chakra-ui/react";

export function ProductPrice() {
    return <Box>
        <Text color="#3C8067" fontWeight="700" fontSize="40px">$149.99
        </Text>
        <Text as='s' color=" ">$169.99</Text>
    </Box>
}