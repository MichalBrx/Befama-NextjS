import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'

const AboutUs = () => {
  const { t } = useTranslation();
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true });

  return (
    <div className="p-5 pt-8 " id="aboutus">
      {/*  ---------------> MOBILE <--------------- */}
      <div id="mobile" className="md:hidden text-lg max-w-xs">
        <h1 className="text-4xl font-semibold p-5 text-center">
          {" "}
          {t("about_us")}{" "}
        </h1>
        <div className="py-2 flex flex-wrap">
          <Image
            className="rounded-lg h-44 w-full"
            height={176}
            width={264}
            src="/types/OB1E.webp"
            alt="Machine-OB1E"
            loading="lazy"
          />
          <p className="px-1">{t("fact1")}</p>
        </div>
        <div className="py-2 flex flex-wrap ">
          <Image
            className="rounded-lg h-44 w-full"
            height={176}
            width={264}
            src="/types/AB6.webp"
            alt="Machine-ukladacz"
            loading="lazy"
          />
          <h2 className="font-semibold text-xl p-1 mt-3">
            {" "}
            {t("specialization")}{" "}
          </h2>
          <p className="px-1">{t("fact2")}</p>
        </div>
        <div className="py-2 flex flex-wrap ">
          <Image
            className="rounded-lg h-44 w-full"
            height={176}
            width={264}
            src="/types/teeth.webp "
            alt="Machine-CU661"
            loading="lazy"
          />
          <h2 className="font-semibold text-xl p-1 mt-3">
            {" "}
            {t("offer_head")}{" "}
          </h2>
          <p className="px-1">{t("fact3")}</p>
        </div>
        <div className="py-2 flex flex-wrap ">
          <Image
            className="rounded-lg h-44 w-full"
            height={176}
            width={264}
            src="/types/zgrzeblarki_tlo.webp"
            alt="Machine-rozciagarka"
            loading="lazy"
          />
          <h2 className="font-semibold text-xl p-1 mt-3"> {t("help")} </h2>
          <p className="px-1">{t("fact4")}</p>
        </div>
        <div className="py-2 flex flex-wrap " >
          <Image
            className="rounded-lg h-44 w-full"
            height={176}
            width={264}
            src="/types/AB6-2.webp"
            alt="Machine-control"
            loading="lazy"
          />
          <h2 className="font-semibold text-xl p-1 mt-3"> {t("guarantee")} </h2>
          <p className="px-1">{t("fact5")}</p>
        </div>
      </div>
      {/*  ---------------> DESKTOP <--------------- */}
      <div id="desktop" className="hidden md:block ">
        <div className="mt-5 ">
          <div
            className="card card-side bg-white shadow-xl flex border-t my-5 lg:mr-96 py-3"
            ref={ref1}
            style={{
              transform: isInView1 ? "none" : "translateX(-50px)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <figure>
              <Image
                className="rounded-lg m-2 ml-5 self-center h-64 w-96"
                height={176}
                width={264}
                src="/types/OB1E.webp"
                alt="OB1E"
                loading="lazy"
              />
            </figure>
            <div className="card-body w-80 self-center">
              <h2 className="card-title"> {t("about_us")} </h2>
              <p className="h-auto">{t("fact1")}</p>
            </div>
          </div>
          <div
            className="card card-side bg-white shadow-xl flex border-t my-5 lg:ml-96 pr-5"
            ref={ref2}
            style={{
              transform: isInView2 ? "none" : "translateX(50px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <div className="card-body w-80 self-center">
              <h2 className="card-title"> {t("specialization")} </h2>
              <p className="h-auto">{t("fact2")}</p>
            </div>
            <figure>
              <Image
                className="rounded-lg self-center h-auto w-96"
                height={176}
                width={264}
                src="/types/AB6.webp"
                alt="AB6"
                loading="lazy"
              />
            </figure>
          </div>
          <div
            className="card card-side bg-white shadow-xl flex border-t my-5 lg:mr-96 items-center"
            ref={ref3}
            style={{
              transform: isInView3 ? "none" : "translateX(-50px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <figure>
              <Image
                className="rounded-lg m-2 ml-5 self-center h-64 w-96"
                height={176}
                width={264}
                src="/types/teeth.webp"
                alt="Teeth Machine"
                loading="lazy"
              />
            </figure>
            <div className="card-body w-80 self-center">
              <h2 className="card-title"> {t("offer_head")} </h2>
              <p className="h-auto">{t("fact3")}</p>
            </div>
          </div>
          <div
            className="card card-side bg-white shadow-xl p-3 flex border-t my-5 lg:ml-96"
            ref={ref4}
            style={{
              transform: isInView4 ? "none" : "translateX(50px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <div className="card-body w-80 self-center">
              <h2 className="card-title"> {t("help")} </h2>
              <p className="h-auto">{t("fact4")}</p>
            </div>
            <figure>
              <Image
                className="rounded-lg m-2 ml-5 self-center h-64 w-96"
                height={176}
                width={264}
                src="/types/zgrzeblarki_tlo.webp"
                alt="Machine"
                loading="lazy"
              />
            </figure>
          </div>
          <div
            className="card card-side bg-white shadow-xl flex border-t my-5 lg:mr-96 items-center py-2"
            ref={ref5}
            style={{
              transform: isInView5 ? "none" : "translateX(-50px)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <figure>
              <Image
                className="rounded-lg m-2 ml-5 self-center h-auto w-96"
                height={176}
                width={264}
                src="/types/AB6-2.webp"
                alt="AB-6"
                loading="lazy"
              />
            </figure>
            <div className="card-body w-80 self-center">
              <h2 className="card-title"> {t("guarantee")} </h2>
              <p className="h-auto">{t("fact5")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
