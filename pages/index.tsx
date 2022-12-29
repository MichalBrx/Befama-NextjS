import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Background />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
