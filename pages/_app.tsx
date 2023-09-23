import type { AppProps } from 'next/app';
import '../css/globals.css';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import theme from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
