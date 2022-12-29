import {
  MdBuild,
  MdControlCamera,
  MdOutlineDesignServices,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Services = () => {
  const { t } = useTranslation();


  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      id="services"
      className="flex justify-center border-y  roudned-lg bg-zinc-100"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <div className="p-5 ">
        <h1 className="text-4xl font-bold p-5 text-center mb-2">
          {" "}
          {t("offer_title")}{" "}
        </h1>
        <div className="flex gap-2 flex-wrap text-center justify-center">
          <div className="flex justify-center p-3">
            <MdOutlineDesignServices className="w-8 h-8 self-center" />
            <p className="w-4/5 text-left pl-5"> {t("offer1")} </p>
          </div>
          <div className="flex justify-center p-3">
            <AiOutlineLineChart className="w-8 h-8 self-center" />
            <p className="w-4/5 text-left pl-5"> {t("offer2")} </p>
          </div>
          <div className="flex justify-center p-3">
            <FaTools className="w-8 h-8 self-center" />
            <p className="w-4/5 text-left pl-5"> {t("offer3")} </p>
          </div>
          <div className="flex justify-center p-3">
            <MdControlCamera className="w-8 h-8 self-center" />
            <p className="w-4/5 text-left pl-5"> {t("offer4")} </p>
          </div>
          <div className="flex justify-center p-3">
            <MdOutlineMiscellaneousServices className="w-8 h-8 self-center" />
            <p className="w-4/5 text-left pl-5 "> {t("offer5")} </p>
          </div>
          <div className="flex justify-center p-3">
            <MdBuild className="w-8 h-8 self-center" />
            <p className="w-4/5 text-left pl-5"> {t("offer6")} </p>
          </div>
          <div className="flex justify-center p-3">
            <GrMapLocation className="w-8 h-8 self-center" />
            <p className="w-4/5 text-left pl-5"> {t("offer7")} </p>
          </div>

          <div className="w-full mt-5" id="aboutUs">
            <Link href={"/serv"}>
            <button
              className="btn btn-primary mt-3"
            >
              {" "}
              {t("learn_more")}{" "}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
