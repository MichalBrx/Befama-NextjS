import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl" style={{scrollBehavior:'smooth'}}>
      <Head>

      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
	    <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
