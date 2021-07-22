import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import '../../public/css/app.css'

const themeConfig = {
    useSystemColorMode: true,
}

const theme = extendTheme({ themeConfig })

class Blog extends React.Component<AppProps> {
    render() {
        return (
            <ChakraProvider theme={theme}>
                <this.props.Component {...this.props.pageProps} />
            </ChakraProvider>
        )
    }
}

export default Blog
