import React from 'react';

import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import Navbar from "../components/Navbar";

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box
            minH="100vh"
            bg={useColorModeValue("brand.100", "brand.50")}
        >
            <Navbar />
            {children}
        </Box>
    );
}