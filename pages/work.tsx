import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";

import {
  MdBuild,
  MdControlCamera,
  MdOutlineDesignServices,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Work = () => {
  return (
    <div className="bg-stone-100">

      <div className="h-16 mb-1">
        <SubNavbar />
      </div>

      <div className="pt-5 lg:mt-10 ">
        <h1 className="text-4xl  text-center">Oferty Pracy</h1>
        <h3 className="text-xl text-center my-3">
          Poszukujemy osób do pracy na stanowiskach:
        </h3>
      </div>

      <div className="flex flex-wrap justify-center mb-10 pt-10 pb-40">
        <div className="flex justify-center p-5 flex-wrap max-w-sm ">
          <div className="py-2 flex flex-wrap justify-center">
            <h3 className="flex gap-2 text-xl  font-semibold">
              <MdBuild className="w-6 h-6" />
              Konstruktor mechanik
            </h3>
            <p className="pl-8 pt-5 text-lg underline-offset-2 decoration-auto underline">
              Osoba zatrudniona na stanowisku odpowiedzialna będzie za:
            </p>
            <ul className="list-disc pl-12 ">
              <li>projektowanie maszyn</li>
              <li>wykonywanie dokumentacji produkcyjnej</li>
              <li>nadzór nad montażem</li>
            </ul>
            <p className=" w-full pt-5 pl-8 text-lg underline-offset-2 decoration-auto underline">
              Od kandydata oczekujemy:
            </p>
            <ul className="list-disc pl-12 ">
              <li>wykształcenia wyższego technicznego, kierunek mechanika</li>
              <li>znajomości oprogramowania SolidWorks</li>
              <li>prawo jazdy kat. B</li>
              <li>znajomości języka niemieckiego ( lub angielskiego )</li>
              <li>gotowości do wyjazdów zagranicznych</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center p-5 flex-wrap max-w-sm ">
          <div className="py-2 flex flex-wrap justify-center">
            <h3 className="flex gap-2 text-xl  font-semibold">
              <MdControlCamera className="w-6 h-6" />
              Monter elektryk
            </h3>
            <p className="pl-8 pt-5 text-lg underline-offset-2 decoration-auto underline">
              Osoba zatrudniona na stanowisku odpowiedzialna będzie za:
            </p>
            <ul className="list-disc pl-12 ">
              <li>montaż kabli, rozdzielnic, aparatury elektrycznej</li>
              <li>montaż aparatów automatyki na maszynach</li>
              <li>
                uruchamianie, serwis, diagnostyka, automatyki, silników i
                falowników, sterowników PLC
              </li>
            </ul>
            <p className=" w-full pt-5 pl-8 text-lg underline-offset-2 decoration-auto underline">
              Od kandydata oczekujemy:
            </p>
            <ul className="list-disc pl-12 ">
              <li>
                wykształcenia zawodowego lub średniego technicznego o
                specjalności elektryka lub pokrewne
              </li>
              <li>uprawnień SEP min. do 1 kV mile widziane</li>
              <li>zdolności do pracy na wysokości</li>
              <li>
                doświadczenie w pracy na podobnym stanowisku będzie dodatkowym
                atutem
              </li>
              <li>odpowiedzialności, sumienności, rzetelności</li>
              <li>gotowość do wyjazdów zagranicznych</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center p-5 flex-wrap max-w-sm">
          <div className="py-2 flex flex-wrap justify-center">
            <h3 className="flex gap-2 text-xl  font-semibold">
              <MdOutlineMiscellaneousServices className="w-6 h-6" />
              Monter mechanik
            </h3>
            <p className="pl-8 pt-5 text-lg underline-offset-2 decoration-auto underline">
              Osoba zatrudniona na stanowisku odpowiedzialna będzie za:
            </p>
            <ul className="list-disc pl-12 ">
              <li>montaż/demontaż maszyn</li>
              <li>prace serwisowe</li>
              <li>wykonywanie remontów maszyn i usządzeń</li>
            </ul>
            <p className=" w-full pt-5 pl-8 text-lg underline-offset-2 decoration-auto underline">
              Od kandydata oczekujemy:
            </p>
            <ul className="list-disc pl-12 ">
              <li>
                wykształcenia zawodowego lub średniego technicznego o
                specjalności mechanik lub pokrewne
              </li>
              <li>umiejętność posługiwania się rysunkiem technicznym</li>
              <li>odpowiedzialności, sumienności, rzetelności</li>
              <li>zdolności do pracy na wysokośc</li>
              <li>gotowość do wyjazdów zagranicznych</li>
              <li>
                mile widziane uprawnienia do prowadzenia wózków widłowych oraz
                zwyżek
              </li>
              <li>
                doświadczenie w pracy na podobnym stanowisku będzie dodatkowym
                atutem
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center p-5 flex-wrap max-w-sm items-start">
          <div className="py-2 flex flex-wrap justify-center">
            <div className="h-7">
              <h3 className="flex gap-2 text-xl  font-semibold">
                <MdOutlineDesignServices className="w-6 h-6" />
                Poza tym oferujemy:
              </h3>
            </div>
            <ul className="list-disc pl-12 my-5  ">
              <li>
                Zatrudnienie na podstawie umowy o pracę lub inną formę
                zatrudnienia
              </li>
              <li>Premie miesięczne oraz świąteczne</li>
              <li>
                Możliwość zdobycia doświadczenia w procesach: tworzenia,
                produkcji, montażu i serwisowaniu, nowoczesnych maszyn o wysokim
                stopniu automatyzacji procesów technologicznych
              </li>
              <li>
                Specjalistyczne szkolenia wewnętrzne i zewnętrzne, w zależności
                od stanowiska i potrzeb, np. z systemów sterowania, sterowników
                PLC Siemensa - Lence, kurs mechaniki i konstrukcji maszyn , kurs
                operatora wózków widłowych
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Work;


export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}