import React from 'react';

import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box
            minH="100vh"
            bg={useColorModeValue("blue.50", "blackAlpha.900")}
        >
            {children}
        </Box>
    );
}