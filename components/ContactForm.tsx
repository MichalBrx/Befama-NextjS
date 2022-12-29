import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, setState] = useState();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  function handleChange(e: any) {
    setState(e.target.value);
  }

  return (
    <div
      id="contact"
      className="max-w-sm z-10"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <h1 className="w-full text-center text-2xl font-semibold py-3">
        {" "}
        {t("questions")}{" "}
      </h1>
      <h2 className="w-full text-center text-lg font-medium">
        {" "}
        {t("write_us")}{" "}
      </h2>

      <form
        action="https://formsubmit.co/info@befama.com.pl"
        method="POST"
        className="p-3 flex flex-wrap justify-center"
      >
        <input
          className="input input-bordered input-primary w-full max-w-xs my-1 bg-white"
          type="text"
          name="name"
          required
          placeholder={t("names")}
        />
        <input
          className="input input-bordered input-primary w-full max-w-xs my-1 bg-white"
          type="email"
          name="email"
          required
          placeholder={t("e-mail")}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className="textarea textarea-primary w-full max-w-xs max-h-40 my-3 bg-white"
          name="message"
          placeholder={t("question_content")}
        ></textarea>
        <div className="justify-end flex w-4/5">
          <button
            type="submit"
            className="btn btn-primary my-2 disabled:btn-disabled "
            disabled={!state}
          >
            {" "}
            {t("send")}{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
