import React from "react";

import { useTranslation } from "react-i18next";

import  Link  from "next/link";
import Image from 'next/image'

import { useInView } from "framer-motion";
import { useRef } from "react";

const Machnies = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const machines = [
    {
      type: t("bale"),
      src: "/machines/otwieracze.webp",
      tag: [{ name: "OB1" }, { name: "OB2" }],
    },
    {
      type: t("transport"),
      src: "/machines/zbiorczy_transport.webp",
      tag: [{ name: "TYP TP" }, { name: "TYP TPR" }],
    },
    {
      type: t("opening"),
      src: "/machines/rozluzniajace.webp",
      tag: [{ name: "AB6" }, { name: "AB19" }, { name: "AB19G" }],
    },

    {
      type: t("mixing"),
      src: "/machines/mieszalnicze.webp",
      tag: [{ name: "KMC1500" }, { name: "KMC3000" }, { name: "MW6" }],
    },
    {
      type: t("nonwoven"),
      src: "/machines/wloknin.webp",
      tag: [{ name: "CU611" }, { name: "CU641" }, { name: "CU661" }],
    },
    {
      type: t("carding"),
      src: "/machines/przedza.webp",
      tag: [{ name: "TYP CR" }, { name: "TYP CS" }],
    },
    {
      type: t("lab"),
      src: "/machines/labolatoryjne.webp",
      tag: [{ name: "3KA" }, { name: "3AGK" }],
    },
    { type: t("crosslappers"), src: "/machines/ukladacz.webp", tag: [] },
    {
      type: t("webdrafters"),
      src: "/machines/runo.webp",
      tag: [{ name: "5W50" }, { name: "5WN700" }, { name: "Seria WD" }],
    },
    {
      type: t("recovery"),
      src: "/machines/recykling.webp",
      tag: [
        { name: "Szarparki krajek AC4B" },
        { name: "Szarparka rdpadów AC5" },
        { name: "Agregaty rzarpiące AC40" },
        { name: "Krajarki rotacyjne AC39" },
      ],
    },
    {
      type: t("filters"),
      src: "/machines/kondensery.webp",
      tag: [{ name: "Kondensery obrotowe, cyklony, filtry" }],
    },
    {
      type: t("pneumatic"),
      src: "/machines/transporter.webp",
      tag: [{ name: "Instalacje transportu pneumatycznego" }],
    },
  ];

  return (
    <div
      className="h-auto w-full flex flex-wrap justify-center py-5"
      id="machines"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="w-full flex justify-center">
        <h1 className="md:text-5xl text-3xl text-center font-bold  py-5 my-5 mb-10 rounded-lg w-3/5 sm:w-2/5">
          {" "}
          {t("offer")}{" "}
        </h1>
      </div>

      <div className="flex justify-center flex-wrap gap-10 lg:gap-16 lg:gap-x-28 lg:w-4/5 max-w-6xl">
        {machines.map((machine: any, index: React.Key) => (
          <div
            key={index}
            className="card card-compact w-72 bg-white border-t shadow-xl p-3 overflow-visible"
          >
            <figure>
              <Image
                src={machine.src}
                alt="Machine"
                width={264}
                height={176}
                className="h-auto w-full rounded max-h-44 "
              />
            </figure>
            <div className="card-body overflow-visible">
              <h2 className="card-title">{machine.type}</h2>

              <div className="justify-end mt-auto z-20">
                <Link href={"/machines/" + machine.type}
                  className="btn hover:scale-110 duration-200 text-stone-300"
                  
                >
                  {" "}
                  {t("learn_more")}
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div id="serv"></div>
      </div>
    </div>
  );
};

export default Machnies;
