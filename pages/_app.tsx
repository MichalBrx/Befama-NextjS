import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useTranslation } from "react-i18next";

const MyHeadTags = () => {
  const { t } = useTranslation();
  return(
  <Head>
        <title>{t('Befama-przemysł')}</title>
        <meta
            name="description"
            content={t('Befama-opis')}
          />
        <meta name='keywords' content={t("Befama-keywords")} />
  </Head>
  )
};


function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <MyHeadTags />
    <Component {...pageProps} />
  </>
  )
}

export default appWithTranslation(App)