import { createGlobalStyle } from 'styled-components'

export const theme = {
    title: '#6600FF',
    bgSecondary: '#eaeaea',
    bgPrimary: '#fafafa'
}

const GlobalStyle = createGlobalStyle`
    body {
        background: ${theme.bgPrimary};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`

export default GlobalStyle
