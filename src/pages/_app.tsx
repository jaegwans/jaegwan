import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}
