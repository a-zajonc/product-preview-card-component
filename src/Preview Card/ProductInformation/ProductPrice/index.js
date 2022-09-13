import { Box, Text } from "@chakra-ui/react";

export function ProductPrice() {
    return <Box fontFamily="Fraunces" display="flex" alignItems="center">
        <Text color="#3C8067" fontWeight="700" fontSize="31px" pr="20px">$149.99
        </Text>
        <Text as='s' fontFamily="Montserrat" fontWeight="500" color="#6C7289" fontSize="14px">$169.99</Text>
    </Box>
}