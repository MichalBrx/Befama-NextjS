import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'

const Hero = () => {
  const { t } = useTranslation("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-black">
      <div id="home" className="grid justify-center content-center isolate">
        <div className="w-full">
          <div className="carousel-item relative w-full">
            <div>
              <Image
                src={"/main.webp"}
                alt="Machine Image"
                height={1080}
                width={1920}
                className="saturate-50 h-screen object-cover w-screen opacity-70"
              />
            </div>
          </div>
        </div>
        <span
          className="z-10 absolute pt-16 p-5 w-full md:mt-32 mt-16  justify-center"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          <div id="tittle">
            <p className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-medium  justify-center">
              {" "}
              {t("welcome")}{" "}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white text-center font-medium flex mt-2 justify-center">
              {" "}
              {t("subtitle")}{" "}
            </p>
          </div>
        </span>
      </div>
      <div className="flex items-end" id="machines"></div>
    </div>
  );
};



export default Hero;
