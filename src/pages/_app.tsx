import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../../public/css/app.css'

const themeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}
const theme = extendTheme({ themeConfig })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
