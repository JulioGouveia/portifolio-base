import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyle from '../src/theme/GlobalStyle'
import theme from '../src/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portifolio - Julio Gouveia</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>

      </Head>
           
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
