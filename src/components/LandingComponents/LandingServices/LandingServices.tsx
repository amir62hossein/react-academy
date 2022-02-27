import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./landingServices.module.css";
import ServicesInformaiton from "../../../core/fakeData/ServicesInformation";
import LandingServiseComponent from "./LandingServiseComponent";
import react from "react";
const LandingServices = () => {
  const [shouldShowActive, setSouldShowActive] = useState(false);

  const [lastYpos, setLastYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYpos;
      
      setSouldShowActive(isScrollingUp);
      setLastYPos(yPos);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.addEventListener("scroll", handleScroll, false);
    };
  }, [lastYpos]);

  return (
    <section className="relative container my-10">
      <svg
        className="absolute z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2d9ff"
          fillOpacity="0.5"
          d="M0,288L24,288C48,288,96,288,144,256C192,224,240,160,288,117.3C336,75,384,53,432,53.3C480,53,528,75,576,74.7C624,75,672,53,720,37.3C768,21,816,11,864,32C912,53,960,107,1008,160C1056,213,1104,267,1152,288C1200,309,1248,299,1296,266.7C1344,235,1392,181,1416,154.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
      <header className=" text-center">
        <h2 className="py-5 text-3xl"> خدمات</h2>
      </header>
      <div className="mt-6 2xl:max-w-7xl 2xl:mx-auto 2xl:h-3/4 xl:block lg:max-w-4xl lg:flex lg:mx-auto">
        <div className="h-1/2 xl:mt-1 lg:mt-20 z-50">
          <div>
            <motion.h4
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: shouldShowActive ? -100 : 0,
                opacity: shouldShowActive ? 0 : 1,
              }}
              transition={{ type: "spring", delay: 0.2, stiffness: 300 }}
              className="w-1/2 mx-auto mt-16 text-xl text-center lg:block md:hidden sm:hidden"
            >
              خدمات ما!!!!
            </motion.h4>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: shouldShowActive ? -100 : 0,
                opacity: shouldShowActive ? 0 : 1,
              }}
              transition={{ type: "spring", delay: 0.4, stiffness: 300 }}
              className="w-96 mx-auto text-center text-gray-500 text-md tracking-wider leading-loose my-1  lg:block md:hidden sm:hidden"
            >
              ما شما را هم جهت با علایقتان پرورش می دهیم و در همین سو راه را
              برای پیشرفت و کسب و کار برای شما باز خواهیم کرد و با اساتید مجرب
              شما را
            </motion.p>
          </div>
        </div>
        <div className="h-1/2 2xl:w-3/4 2xl:mx-auto xl:w-3/4 xl:mx-6 lg:w-1/2 lg:px-2 md:px-40 z-50 ">
          <LandingServiseComponent services={ServicesInformaiton} />
        </div>
      </div>
    </section>
  );
};
export default LandingServices;
