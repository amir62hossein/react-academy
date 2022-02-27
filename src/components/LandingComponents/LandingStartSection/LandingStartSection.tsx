import React from "react";
import startSec from "./landingStartSection.module.css";
import { motion } from "framer-motion";

const LandingStartSection = () => {
  const scrollToService = () =>
    window.scrollTo({ top: 735, behavior: "smooth" });
  return (
    <section
      className="mx-auto 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl  2xl:mt-8 xl:mt-12 lg:mt-6"
    >
      <div className={`flex ${startSec.top} `}>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40 }}
          className={`flex-row ${startSec.txt}`}
        >
          <header>
            <h4 className="mt-24 mx-20 text-2xl 2xl:text-right xl:text-right lg:text-right md:text-center sm:text-center">
              می خوایی شروع کنی؟
            </h4>
          </header>
          <p className="w-96  text-gray-500 text-lg tracking-wider leading-loose my-8 lg:mx-1 md:mx-auto sm:mx-auto">
            ما شما را هم جهت با علایقتان پرورش می دهیم و در همین سو راه را برای
            پیشرفت و کسب و کار برای شما باز خواهیم کرد و با اساتید مجرب شما را
            برای آینده ای روشن آماده می کنیم می خوایی شروع کنی پس همین حالا ثبت
            نام کن و با ما همراه شو
          </p>
          <motion.button
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="block py-2 px-8 bg-green-100 hover:bg-blue-700 text-black hover:text-white font-bold rounded-full lg:mx-28 md:mx-auto sm:mx-auto"
          >
            شروع دوره
          </motion.button>
        </motion.div>
        <motion.figure
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40 }}
          className={`flex-row mt-10 lg:block md:hidden sm:hidden ${startSec.pic} float-left `}
        >
          <img
            src={
              require("../../../assets/images/landing-screen/strt.svg").default
            }
            alt=""
          />
        </motion.figure>
      </div>
      <div className={`py-2 ${startSec.botm}  `}>
        <span
          className="animate-bounce block w-10 h-10 mx-auto py-2 rounded-full bg-blue-400  lg:block sm:hidden md:hidden "
          onClick={scrollToService}
        >
          <span className="block w-4 h-4 mx-auto transform rotate-45 border-solid border-b-4 border-r-4 border-white "></span>
        </span>
      </div>
    </section>
  );
};
export default LandingStartSection;
