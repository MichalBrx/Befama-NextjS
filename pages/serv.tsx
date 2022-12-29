import React from "react";
import { useTranslation } from "react-i18next";

import Footer from "../components/Footer";
import SubNavbar from "../components/SubNavbar";

import { FaScrewdriver } from "react-icons/fa"
import { TbTruckDelivery, TbGauge,TbRecycle } from "react-icons/tb"
import { MdControlCamera } from "react-icons/md"
import { BiCylinder } from "react-icons/bi"
import { GiMechanicalArm } from "react-icons/gi"

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

import Slider from '../components/slider'

const Serv = () => {
  const { t } = useTranslation();


  return (
    <div className="bg-white">

      <SubNavbar />

      <div className="">
        <div className="bg-gradient-to-b from-slate-600 via-slate-400 mt-14 sm:mt-20 pt-18 px-4 flex flex-wrap justify-center ">
          <div className="w-full flex justify-center">
          <h1 className="text-4xl text-white font-semibold w-full max-w-md text-center my-8 sm:mt-12 sm:text-left sm:ml-14 md:max-w-3xl">
            {t("serv_title")}
          </h1>
          </div>
          <div className="flex flex-wrap justify-center md:flex-nowrap">

            <Slider />

            <div className="flex justify-around mt-4 max-w-xl md:grid md:ml-5 md:justify-between md:mt-1 md:gap-3">
              <Image src="/./lejki.webp" alt="img" width={128} height={128} className="w-1/4 md:w-36"/>
              <Image src="/./tasma.webp" alt="img" width={128} height={128} className="w-1/4 md:w-36"/>
              <Image src="/./Szarpak.webp" alt="img" width={128} height={128} className="w-1/4 md:w-36"/>
            </div>
          </div>
        </div>
        <div className="w-full justify-center flex mt-20">
        <div className="my-10 mx-4 flex flex-wrap gap-3 font-medium md:bg-stone-100 md:max-w-4xl md:justify-self-center md:rounded-md md:py-7">
          <div className="w-full flex-wrap flex items-center justify-center my-4"><BiCylinder className="w-7 h-7" /><h2 className="w-full text-center">{t("serv1")}</h2></div>
          <div className="w-full flex-wrap flex items-center justify-center my-4"><GiMechanicalArm className="w-7 h-7" /><h2 className="w-full text-center">{t("serv2")}</h2></div>
          <div className="w-full flex-wrap flex items-center justify-center my-4"><TbTruckDelivery className="w-7 h-7" /><h2 className="w-full text-center">{t("serv3")}</h2></div>
          <div className="w-full flex-wrap flex items-center justify-center my-4"><TbRecycle className="w-7 h-7" /><h2 className="w-full text-center">{t("serv4")}</h2></div>
          <div className="w-full flex-wrap flex items-center justify-center my-4"><TbGauge className="w-7 h-7" /><h2 className="w-full text-center">{t("serv5")}</h2></div>
          <div className="w-full flex-wrap flex items-center justify-center my-4"><FaScrewdriver className="w-7 h-7" /><h2 className="w-full text-center">{t("serv6")}</h2></div>
          <div className="w-full flex-wrap flex items-center justify-center my-4"><MdControlCamera className="w-7 h-7" /><h2 className="w-full text-center">{t("serv7")}</h2></div>
        </div>
        </div>
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

export default Serv;


export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}