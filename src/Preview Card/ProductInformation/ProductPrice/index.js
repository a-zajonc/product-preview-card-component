import { Box, Text } from "@chakra-ui/react";

export function ProductPrice() {
    return <Box fontFamily="Fraunces" display="flex" alignItems="center">
        <Text color="#3C8067" fontWeight="700" fontSize="40px" pr="20px">$149.99
        </Text>
        <Text as='s' color="#6C7289">$169.99</Text>
    </Box>
}