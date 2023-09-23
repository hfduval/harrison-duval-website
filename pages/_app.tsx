import type { AppProps } from 'next/app';
import '../css/globals.css';
import {ChakraProvider} from '@chakra-ui/react';
import theme from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <title>Harrison's Personal Website</title>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
