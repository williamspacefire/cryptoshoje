import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/dist/shared/lib/router/router'
import React from 'react'
import '../../public/css/app.css'

const themeConfig = {
    useSystemColorMode: true,
}

const theme = extendTheme({ themeConfig })

class Blog extends React.Component<AppProps> {
    render() {
        const Component = this.props.Component

        return (
            <ChakraProvider theme={theme}>
                <Component {...this.props.pageProps} />
            </ChakraProvider>
        )
    }
}

export default Blog
