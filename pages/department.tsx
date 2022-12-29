import React from "react";
import Footer from "../components/Footer";
import SubNavbar from "../components/SubNavbar";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";


import { MdLocationPin } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";

import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";


import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const Department = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="department"
      className="bg-stone-100"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <SubNavbar />
      <div className="pt-24 flex justify-center flex-wrap bg-white">
        <div className="flex justify-center text-2xl md:text-4xl text-center font-bold my-8 w-full">
          <h1>{t("dep_header")}</h1>
        </div>
        <div className="flex flex-wrap justify-center max-w-5xl lg:gap-8 md:gap-5 mb-10 ">
          <div className="card w-80 bg-white shadow-xl my-3 border-t">
            <div className="card-body">
              <h2 className="card-title text-2xl">{t("dep2")}</h2>
              <h3 className="my-1 text-lg font-semibold">Czesław Krupa</h3>
              <h5 className="my-1">
                <p className="font-semibold">{t("phone")}</p>+48 605 216 970
              </h5>
              <h5 className="my-1">
                <p className="font-semibold">e-mail:</p>cz.krupa@befama.com.pl
              </h5>
            </div>
          </div>
          <div className="card w-80 bg-white shadow-xl my-3 border-t">
            <div className="card-body">
              <h2 className="card-title text-2xl">{t("dep1")}</h2>
              <h3 className="my-1 text-lg font-semibold">Marek Janoszek</h3>
              <h5 className="my-1">
                <p className="font-semibold">{t("phone")}</p>+48 514 598 117
              </h5>
              <h5 className="my-1">
                <p className="font-semibold">e-mail:</p>m.janoszek@befama.com.pl
              </h5>
            </div>
          </div>
          <div className="card w-80 bg-white shadow-xl my-3 border-t">
            <div className="card-body">
              <h2 className="card-title text-2xl">{t("dep1")}</h2>
              <h3 className="my-1 text-lg font-semibold">Zbigniew Haj</h3>
              <h5 className="my-1">
                <p className="font-semibold">{t("phone")}</p>+48 796 150 368
              </h5>
              <h5 className="my-1">
                <p className="font-semibold">e-mail:</p>z.haj@befama.com.pl
              </h5>
            </div>
          </div>
          <div className="card w-80 bg-white shadow-xl my-3 border-t">
            <div className="card-body">
              <h2 className="card-title text-2xl">{t("dep3")}</h2>
              <h3 className="my-1 text-lg font-semibold">Kamil Żmijowski</h3>
              <h5 className="my-1">
                <p className="font-semibold">{t("phone")}</p>+48 600 005 479
              </h5>
              <h5 className="my-1">
                <p className="font-semibold">e-mail:</p>
                k.zmijowski@befama.com.pl
              </h5>
            </div>
          </div>
          <div className="card w-80 bg-white shadow-xl my-3 border-t">
            <div className="card-body">
              <h2 className="card-title text-2xl">{t("secretariat")}</h2>

              <h5 className="my-1">
                <p className="font-semibold">{t("phone")}</p>+48 33 8 611 760{" "}
              </h5>
              <h5 className="my-1">
                <p className="font-semibold">e-mail:</p>info@befama.com.pl
              </h5>
            </div>
          </div>
          <div className="card w-80 bg-white shadow-xl my-3 border-t">
            <div className="card-body">
              <h2 className="card-title text-2xl">{t("dep4")}</h2>
              <h5 className="my-1">
                <p className="font-semibold">e-mail:</p>zakupy@befama.com.pl
              </h5>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center flex-wrap border-t py-6 md:py-10 bg-stone-100">
          <div className=" w-full mx-3 sm:mx-10 ">
            <div className="flex flex-wrap justify-center gap-10 mb-3 md:mb-6">
              <div className="text-center ">
                <h2 className="text-2xl font-semibold mb-1 flex  justify-center items-center text-center">
                  {" "}
                  {t("adress")}
                  <MdLocationPin className="w-10 h-10" />
                </h2>
                <p className="">
                  <span className="font-semibold">{t("street")}</span> Północna
                  212 <br /> 43-376 Kalna
                </p>
              </div>
              <div className="text-center mb-3 md:mb-6">
                <h2 className="text-2xl font-semibold mb-1 flex justify-center items-center text-center">
                  {" "}
                  {t("hours")} <BsClockFill className=" ml-2 w-8 h-8" />
                </h2>
                <p className="">
                  <span className="font-semibold">{t("mon-fri")}</span> 8-16
                </p>
                <p className="">
                  <span className="font-semibold">{t("sat-sun")}</span>
                  {t("closed")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="max-w-lg w-full justify-center flex">
                <Map />
              </div>
              <div className="">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Department;


export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}