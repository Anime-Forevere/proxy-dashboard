import Head from 'next/head';
import config from '../config';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                {/* <script async src='https://arc.io/widget.min.js#sqvWfDKJ'></script> */}
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta property='og:title' content={`${config.site.name} - Proxy manager`} />
                <meta property='og:image' content={config.site.icon} />
                <meta property='og:type' content='website' />
                <meta name='theme-color' content='#e93b59' />
                <title>
                    {config.site.name} - Proxy manager
                </title>
                <link rel='shortcut icon' type='image/x-icon' href={config.site.icon} />
            </Head>
            <Component {...pageProps} />
        </>
    );
};