import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://snowflake.vercel.app" />
                <meta name="twitter:title" content="Snowflake" />
                <meta name="twitter:description" content="Hello, its SnowflakeX." />
                <meta name="twitter:image" content="https://snowflake.vercel.app/logo.png" />
                <meta name="twitter:creator" content="@Snowflake107" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Snowflake" />
                <meta property="og:description" content="Hello, its SnowflakeX." />
                <meta property="og:site_name" content="SnowflakeX" />
                <meta property="og:url" content="https://snowflake.vercel.app" />
                <meta property="og:image" content="https://snowflake.vercel.app/logo.png" />

                <link rel="shortcut icon" href="/logo.png" />
                <title>Snowflake</title>

                {/* CSS */}
                <link rel="stylesheet" href="/styles/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles/stylesheet.css" />

                {/* JS */}
                <script src="/scripts/jquery.min.js"></script>
                <script src="/scripts/bootstrap.min.js"></script>
                <script src="/scripts/script.js" defer></script>
            </Head>

            <Component {...pageProps} />
        </>
    )
}