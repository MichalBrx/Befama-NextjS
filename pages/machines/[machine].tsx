import React from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {
  BsLightning,
  BsArrowsFullscreen,
  BsSpeedometer2,
} from "react-icons/bs";
import { FaDrumSteelpan } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";
import Footer from "../../components/Footer";
import SubNavbar from "../../components/SubNavbar";
import { useRouter } from "next/router";
import Image from 'next/image'




const Machine = () => {

  const router = useRouter()
  const { machine } = router.query

  const { t } = useTranslation();

const machines = [
  {
    type: t("bale"),
    tag: [
      {
        name: "OB1, OB2",
        src: "/eachmachine/1.1-Otwieracze-bel-OB1_-OB2.webp",
        description: t("OB1"),
        parameters: [
          {
            szerokosc: ["1200 mm", "1400 mm ", "1600 mm"],
            moc: ["4,0 kW", "4,2 kW", "4,6 kW"],
          },
        ],
      },
      {
        name: "OB1-E, OB2-E",
        src: "/eachmachine/1.2-Zasilarki-wagowe-z-wagą-elektroniczną-OB1-E_-OB2-E.webp",
        description: t("OB2-E"),
        parameters: [
          {
            szerokosc: ["1400 mm", "1600 mm"],
            moc: ["4,2 kW", "4,6 kW"],
          },
        ],
      },
    ],
  },
  {
    type: t("transport"),
    tag: [
      {
        name: "TP, TPR",
        src: "/eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
        description: t("TP"),
        parameters: [
          {
            szerokosc: ["800 mm", "1000 mm"],
            moc: ["max 1,1 kW"],
          },
        ],
      },
    ],
  },
  {
    type: t("opening"),
    tag: [
      {
        name: "AB6N, AB6A",
        src: "/eachmachine/3-1-wilk-zgrzeblacy-ab6n.webp",
        description: t("AB6"),
        parameters: [
          {
            szerokosc: ["1000 mm", "1500 mm"],
            moc: ["21 kW", "30 kW"],
          },
        ],
      },
      {
        name: "AB19",
        src: "/eachmachine/2-wilk-rozluzniajacy-pickerab19a.webp",
        description: t("AB19"),
        parameters: [
          {
            szerokosc: ["1000 mm ", "1500 mm"],
            moc: ["14 kW", "20 kW"],
          },
        ],
      },
    ],
  },
  {
    type: t("mixing"),
    tag: [
      {
        name: "KMC",
        src: "/eachmachine/4-1-komory-mieszalnicze-kmc.webp",
        description: t("KMC"),
        parameters: [
          {
            szerokosc: ["1500 mm", "3000 mm"],
            moc: ["4,7 kW"],
          },
        ],
      },
      {
        name: "MW6",
        src: "/eachmachine/4-2-komora-sekcyjna-mw6.webp",
        description: t("MW6"),
        parameters: [
          {
            szerokosc: ["1200 mm"],
            moc: ["8 kW"],
          },
        ],
      },
    ],
  },
  {
    type: t("nonwoven"),
    tag: [
      {
        name: "CU611, CU612, CU641",
        src: "/eachmachine/5.1- zgrzeblarki-cu611-cu612.webp",
        description: t("CU611"),
        parameters: [
          {
            szerokosc: [
              "1800 mm",
              "2000 mm",
              "2200 mm",
              "2500 mm",
              "3000 mm",
            ],
          },
        ],
      },
      {
        name: "CU661, CU669",
        src: "/eachmachine/5.2-zgrzeblarki-dwuzbiera-cu661.webp",
        description: t("CU661"),
        parameters: [
          {
            szerokosc: [
              "1800 mm",
              "2000 mm",
              "2200 mm",
              "2500 mm",
              "3000 mm",
            ],
          },
        ],
      },
    ],
  },
  {
    type: t("carding"),
    tag: [
      {
        name: "CR",
        src: "/eachmachine/6.1-sys.zgrzebny.webp",
        description: t("CR"),
        parameters: [
          {
            szerokosc: [
              "1800 mm",
              "2000 mm",
              "2200 mm",
              "2500 mm",
              "3000 mm",
            ],
          },
        ],
      },
      {
        name: "CSW, CSP",
        src: "/eachmachine/6.2-sys.czesankowy.webp",
        description: t("CS"),
        parameters: [
          {
            szerokosc: [
              "1800 mm",
              "2000 mm",
              "2200 mm",
              "2500 mm",
              "3000 mm",
            ],
          },
        ],
      },
    ],
  },
  {
    type: t("lab"),
    tag: [
      {
        name: "CU121",
        src: "/eachmachine/7-1-linia-laboratoryjna-cu121.webp",
        description: t("CU121"),
        parameters: [
          {
            szerokosc: ["500 mm", "1000 mm"],
            moc: ["4 kW", "9 kW"],
            sredBebna: ["500 mm"],
            sredZbieracz: ["500 mm"],
          },
        ],
      },
      {
        name: "3AGK",
        src: "/eachmachine/7.2-zgrzeblarkadofilcu.webp",
        description: t("3AGK"),
        parameters: [
          {
            szerokosc: ["500 mm"],
            moc: ["9 kW"],
            sredBebna: ["1500 mm"],
            sredZbieracz: ["680 mm"],
          },
        ],
      },
    ],
  },
  {
    type: t("crosslappers"),
    tag: [
      {
        name: "5W50",
        src: "/eachmachine/8-1-uk197130adacz-serii-5w50.webp",
        description: t("5W50"),
        parameters: [
          {
            predkosc: ["50 m/min"],
            moc: ["19 kW"],
          },
        ],
      },
      {
        name: "5WN700",
        src: "/eachmachine/8-2-uk197130adacz-serii-5wn700.webp",
        description: t("5WN700"),
        parameters: [
          {
            predkosc: ["70 m/min"],
            moc: ["36 kW"],
          },
        ],
      },
    ],
  },
  {
    type: t("webdrafters"),
    tag: [
      {
        name: "WD3 - WD6",
        src: "/eachmachine/9-1-rozci196133garki-runa-wd3-wd5.webp",
        description: t("WD"),
        parameters: [
          {
            szerokosc: ["2600 mm", "3600 mm"],

            moc: ["4 kW", "8 kW"],
          },
        ],
      },
    ],
  },
  {
    type: t("recovery"),
    tag: [
      {
        name: t("szarparki"),
        src: "/eachmachine/10-1-szarparki-ac40-ac50.webp",
        description: t("AC40"),
        parameters: [
          {
            szerokosc: ["AC40 - 800 mm", "AC50-1000 mm", "AC50- 1500 mm"],
            moc: ["min 36 kW", "max 180 kW"],
          },
        ],
      },
      {
        name: t("otwieracz"),
        src: "/eachmachine/10.2-otwieracz-oz-poz.webp",
        description: t("POZ"),
        parameters: [
          {
            szerokosc: ["1000 mm", "1500 mm"],
            moc: ["24 kW", "38 kW"],
          },
        ],
      },
      {
        name: t("szarparki2"),
        src: "/eachmachine/10-3-szarparki-ac5-ab19.webp",
        description: t("AC5"),
        parameters: [
          {
            szerokosc: ["AC5 - 500 mm", "AB19- 1000 mm", "AB19- 1500 mm"],
            moc: ["14 kW", "28 kW", "36 kW"],
          },
        ],
      },
      {
        name: t("krajek") + " AC4B",
        src: "/eachmachine/10-4-szarparka-krajek-ac4b.webp",
        description: t("AC4B"),
        parameters: [
          {
            szerokosc: ["250 mm", "500 mm"],
            moc: ["7 kW", "12 kW"],
          },
        ],
      },
    ],
  },
  {
    type: t("filters"),
    tag: [
      {
        name: t("kondensery"),
        src: "/eachmachine/11-1-kondensery-odpylajace.webp",
        description: t("condensers"),
        parameters: [
          {
            szerokosc: ["1000 mm", "1200 mm", "1500 mm"],
            moc: ["1,5 kW", "2,2 kW", "2,8 kW"],
            sredBebna: ["548 mm"],
          },
        ],
      },
      {
        name: t("cyklony"),
        src: "/eachmachine/11-2-cyklony.webp",
        description: t("cyclones"),
      },
      {
        name: t("filtry"),
        src: "/eachmachine/11-3-filtry500x300.webp",
        description: t("filters2"),
        parameters: [],
      },
    ],
  },
  {
    type: t("pneumatic"),
    tag: [
      {
        name: t("pneumatic"),
        src: "/eachmachine/12.1-instalacje-transp-pneum.webp",
        description: t("pneumatic_desc"),
      },
    ],
  },
];

  return (
    <div className="bg-stone-100">

      <SubNavbar />

      <div className="mt-14 sm:mt-20 pt-7">
        {machines.map((maszyna, index) => {
          if (maszyna.type === machine) {
            return (
              <div key={index}>
                <div className="w-full justify-center flex gap-1 text-xl font-medium mb-10 sm:text-3xl md:text-4xl lg:my-12">
                  <label className="w-2 h-7 sm:h-8 md:h-9 bg-sky-700"></label>
                  <h1>{maszyna.type}</h1>
                </div>
                {maszyna.tag.map((thisMachine, index2) => (
                  <div key={index2}>
                    {/* ---> Mobile <--- */}

                    <div className="md:hidden">
                      <div className="flex w-full justify-center flex-wrap">
                        <Image
                          loading="lazy"
                          src={thisMachine.src}
                          alt="machines"
                          className="w-3/4 max-w-md z-20 h-auto drop-shadow-2xl"
                          width={600}
                          height={900}
                        ></Image>
                        <div className="z-10 bg-white justify-center flex max-w-xl w-11/12 py-16 -mt-24 pt-24 sm:py-20 sm:pt-44 sm:-mt-36 ">
                          <div className="z-10  max-w-md flex flex-wrap justify-center px-5 ">
                            <h2 className="text-xl font-medium my-4 w-full text-center">
                              {thisMachine.name}
                            </h2>
                            <p className="max-w-sm">
                              {thisMachine.description}
                            </p>
                          </div>
                        </div>
                        <div
                          id="background"
                          className="bg-white w-11/12 h-auto absolute z-0 mt-14 max-w-xl "
                        ></div>
                      </div>
                      <div className="mt-5  w-full z-10 mb-40">
                        <h2 className="text-lg sm:text-xl font-medium w-full text-center ">
                          {t("parameters")}
                        </h2>
                        <div className="mt-4 lg:mr-40">
                          {thisMachine.parameters?.map((param: any, index) => (
                            <div key={index}>
                              <div
                                id="paramas"
                                className="flex flex-wrap justify-center sm:mr-14"
                              >
                                {param?.szerokosc ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48 ">
                                    <AiOutlineColumnWidth className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center">
                                      Szerokość <br /> robocza [mm]
                                    </h3>
                                    <ul className="mt-2 sm:mt-4">
                                      {param.szerokosc.map(
                                        (width: any, index: any) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {width}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}

                                {param?.moc ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48">
                                    <BsLightning className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center sm:mt-4">
                                      Moc [kW]
                                    </h3>
                                    <ul className="mt-2 sm:mt-6">
                                      {param.moc.map((pwr: any, index: any) => (
                                        <li
                                          className="w-full text-center"
                                          key={index}
                                        >
                                          {pwr}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {param?.sredZbieracz ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48">
                                    <BsArrowsFullscreen className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center">
                                      Średnica <br /> zbieracza [mm]
                                    </h3>
                                    <ul className="mt-2 sm:mt-4">
                                      {param.sredZbieracz.map(
                                        (zbieracz: any, index: any) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {zbieracz}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}

                                {param?.sredBebna ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48">
                                    <FaDrumSteelpan className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center">
                                      Średnica <br /> bębna [mm]
                                    </h3>
                                    <ul className="mt-2 sm:mt-4">
                                      {param.sredBebna.map(
                                        (sred: any, index: any) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {sred}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}

                                {param?.predkosc ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48">
                                    <BsSpeedometer2 className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center sm:mt-4">
                                      Prędkość
                                    </h3>
                                    <ul className=" mt-2 sm:mt-6">
                                      {param.predkosc.map(
                                        (predkosc: any, index: any) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {predkosc}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* ---> Desktop <--- */}
                    <div className="hidden md:block">
                      <div className="flex w-full justify-center flex-wrap  mb-40">
                        <div className="bg-white w-full max-w-3xl lg:max-w-5xl p-10">
                          <div className="grid grid-cols-2">
                            <div className="lg:ml-10">
                              <label className="text-xl lg:text-2xl font-medium ">
                                Model:
                              </label>
                              <h2 className="text-xl lg:text-2xl font-medium mb-4 my-2">
                                {thisMachine.name}
                              </h2>
                              <p className="max-w-sm">
                                {thisMachine.description}
                              </p>
                              <div className="mt-4 lg:mr-40">
                                {thisMachine.parameters?.map(
                                  (param: any, index) => (
                                    <div key={index}>
                                      <h2 className="text-xl lg:text-2xl font-medium my-5 ">
                                        {t("parameters")}
                                      </h2>
                                      <div
                                        id="paramas"
                                        className="grid grid-cols-2 gap-7"
                                      >
                                        {param?.szerokosc ? (
                                          <div>
                                            <AiOutlineColumnWidth className="text-3xl  w-full" />
                                            <h3 className="text-lg w-full text-center">
                                              {t("width")}
                                            </h3>
                                            <ul className="mt-2">
                                              {param.szerokosc.map(
                                                (width: any, index: any) => (
                                                  <li
                                                    className="w-full text-center"
                                                    key={index}
                                                  >
                                                    {width}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        ) : null}

                                        {param?.moc ? (
                                          <div>
                                            <BsLightning className="text-3xl w-full mb-3" />
                                            <h3 className="text-lg w-full text-center">
                                              {t("power")} 
                                            </h3>
                                            <ul className=" mt-6">
                                              {param.moc.map(
                                                (pwr: any, index: any) => (
                                                  <li
                                                    className="w-full text-center"
                                                    key={index}
                                                  >
                                                    {pwr}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        ) : null}

                                        {param?.sredZbieracz ? (
                                          <div>
                                            <BsArrowsFullscreen className="text-3xl w-full" />
                                            <h3 className="text-lg w-full text-center">
                                              {t("doffer")} 
                                            </h3>
                                            <ul className=" mt-2">
                                              {param.sredZbieracz.map(
                                                (zbieracz: any, index: any) => (
                                                  <li
                                                    className="w-full text-center"
                                                    key={index}
                                                  >
                                                    {zbieracz}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        ) : null}

                                        {param?.sredBebna ? (
                                          <div>
                                            <FaDrumSteelpan className="text-3xl w-full" />
                                            <h3 className="text-lg w-full text-center">
                                              {t("cylinder")} 
                                            </h3>
                                            <ul className=" mt-2">
                                              {param.sredBebna.map(
                                                (sred: any, index: any) => (
                                                  <li
                                                    className="w-full text-center"
                                                    key={index}
                                                  >
                                                    {sred}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        ) : null}

                                        {param?.predkosc ? (
                                          <div>
                                            <BsSpeedometer2 className="text-3xl w-full mb-3" />
                                            <h3 className="text-lg w-full text-center">
                                              {t("speed")}
                                            </h3>
                                            <ul className=" mt-6">
                                              {param.predkosc.map(
                                                (predkosc: any, index: any) => (
                                                  <li
                                                    className="w-full text-center"
                                                    key={index}
                                                  >
                                                    {predkosc}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <Image
                              src={thisMachine.src}
                              loading="lazy"
                              alt="Machine"
                              className="relative max-w-md self-center lg:max-w-3xl lg:w-full lg:ml-32 shadow-xl"
                              width={600}
                              height={900}
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          }
        })}
        <div className="h-72 w-full bg-slate-600 my-32 items-center py-14">
          <h3 className="w-full text-center text-white text-4xl font-semibold my-5">
            {t("contact_with")}
          </h3>
          <p className="w-full text-center text-white text-xl">
            info@befama.com.pl
          </p>
          <p className="w-full text-center text-white text-xl">
            {t("street")} Północna 212
          </p>
          <p className="w-full text-center text-white text-xl">43-376 Kalna</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Machine;

export const getStaticPaths = ({ locales }:any) => {

  return {
    paths: [
    { params: { machine: 'Otwieracze bel' } }, { params: { machine: 'Transportery zbiorcze' } }, { params: { machine: 'Maszyny rozluźniające' } }, { params: { machine: 'Komory mieszalnicze' } }, 
    { params: { machine: 'Zgrzeblarki do produkcji włóknin' } }, { params: { machine: 'Zgrzeblarki do produkcji przędzy' } }, { params: { machine: 'Zgrzeblarki laboratoryjne i specjalne' } }, { params: { machine: 'Układacze poziome' } }, { params: { machine: 'Rozciągarki runa' } }, 
    { params: { machine: 'Maszyny do recyklingu' } }, { params: { machine: 'Kondensery obrotowe, cyklony, filtry' } }, { params: { machine: 'Instalacje transportu pneumatycznego' } }, { params: { machine: 'Bale openers' }, locale:'gb' }, { params: { machine: 'Collective transporters' }, locale:'gb' }, 
    { params: { machine: 'Opening machines' }, locale:'gb' }, { params: { machine: 'Mixing chambers' }, locale:'gb' }, { params: { machine: 'Nonwovens carding sets' }, locale:'gb' }, { params: { machine: 'Carding set for spining' }, locale:'gb' }, { params: { machine: 'Laboratory and special-purpose carding machines' }, locale:'gb' }, 
    { params: { machine: 'Crosslappers' }, locale:'gb' }, { params: { machine: 'Webdrafters' }, locale:'gb' }, { params: { machine: 'Machines for fibre recovery' }, locale:'gb' }, { params: { machine: 'Rotary condensers, cyclones, filters' }, locale:'gb' }, { params: { machine: 'Installations pneumatic transportation' }, locale:'gb' }, 
    { params: { machine: 'Ballenöffner' }, locale:'de' }, { params: { machine: 'Sammeltransporter' }, locale:'de' }, { params: { machine: 'Lockerungsmaschinen' }, locale:'de' }, { params: { machine: 'Mischkammern' }, locale:'de' }, { params: { machine: 'Vliesstoffkrempelsätze' }, locale:'de' }, 
    { params: { machine: 'Streichgarnkrempelsätze, kammgarnkrempeln' }, locale:'de' }, { params: { machine: 'Labor und Spezialkarden' }, locale:'de' }, { params: { machine: 'Kreuzleger' }, locale:'de' }, { params: { machine: 'Webdrafters' }, locale:'de' }, { params: { machine: 'Maschinen zur Faserrückgewinnung' }, locale:'de' },
    { params: { machine: 'Rotationskondensatoren, Zyklone, Filter' }, locale:'de' }, { params: { machine: 'Installationen pneumatischer transport' }, locale:'de' },
    { params: { machine: 'Kиповскрыватели' }, locale:'ru' }, { params: { machine: 'Tранспортеры' }, locale:'ru' }, { params: { machine: 'Paзpыxляющиe mашины' }, locale:'ru' }, { params: { machine: 'Cmecиteльныe kamepы' }, locale:'ru' }, { params: { machine: 'Чесальныe aппapaты для нетканых материалов' }, locale:'ru' },
    { params: { machine: 'Kардочесальный набор для шерстяной спиннинговой системы и камвольного прядения' }, locale:'ru' }, { params: { machine: 'Лабораторные и специальные чесальные машины' }, locale:'ru' }, { params: { machine: 'Xoлctooбpaзobateли серии' }, locale:'ru' }, { params: { machine: 'Bебдрафтеры серии' }, locale:'ru' }, { params: { machine: 'Mашины для переработки текстильных отходов' }, locale:'ru' }, 
    { params: { machine: 'Pоторные конденсаторы, циклоны, фильтры' }, locale:'ru' }, { params: { machine: 'Yстановки пневмотранспорта' }, locale:'ru' }
  ],
    fallback: true, 
  }
}

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}