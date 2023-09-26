import React from 'react';

import Link from 'next/link';

import {
    Flex,
    Image,
    Box
} from '@chakra-ui/react'

import NavLinks from './NavLinks';

export const navbarHeight = 20;

const Navbar : React.FC = () => {
    return (
        <Flex
            position='absolute'
            top={0}
            left={0}
            right={0}
            zIndex={100}
            height={navbarHeight}
            w='100%'
            gap={8}
            alignItems='center'
            p={4}
        >
            <Link
                href='/'
            >
                <Image
                    src="/logo.jpg"
                    height={12}
                    width={12}
                    alt='personal logo'

                />
            </Link>
            <Box
                display={{ base: 'flex' }}
            >
                <NavLinks />
            </Box>
        </Flex>
    );
};

export default Navbar