import React from 'react'

import { Flex } from '@chakra-ui/react'

import NavItem from './NavItem'

import { routes } from './routes'

const NavLinks = () => {
    return (
        <Flex
            alignItems={{base: 'center'}}
            flexDirection={{base: 'row'}}
            gap={{base: 4, md: 0, sm: 0}}
        >
            {
                routes.map((route) => (
                    <NavItem
                        key={route.href}
                        route={route}
                    />
                ))
            }
        </Flex>
    )
}

export default NavLinks