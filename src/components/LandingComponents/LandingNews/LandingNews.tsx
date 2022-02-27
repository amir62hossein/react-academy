import React, {useState, useEffect } from "react";
import styles from "./landingNews.module.css";
import ArticleComponent from "./Articlecomponent/ArticleComponent";
import NewsComponent from "./Newscomponent/NewsComponent";
import ArticleInformation from "../../../core/fakeData/ArticleInformation";
import NewsInformation from "../../../core/fakeData/NewsInformation";
import {motion} from "framer-motion";



const LandingNews = () => {
  const [shouldShowActive, setSouldShowActive] = useState(false);

  const [lastYposs, setLastYPoss] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yPos1 = window.scrollY;
      const isScrollingUp = yPos1 < lastYposs;
      
      setSouldShowActive(isScrollingUp);
      setLastYPoss(yPos1);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.addEventListener("scroll", handleScroll, false);
    };
  }, [lastYposs]);
  return (
    <section className="2xl:max-w-full xl:max-w-6xl lg:max-w-5xl my-10">
      <header className="py-6 text-center bg-blue-100">
        <h1 className="text-2xl"> مقالات و اخبار  </h1>
      </header>
      <div className="flex">
        <motion.figure
         initial={{ x: -100, opacity: 0 }}
         animate={{
           x: shouldShowActive ? -100 : 0,

           opacity: shouldShowActive ? 0 : 1,
         }}
         transition={{ type: "spring", delay:1, stiffness: 400 }}
          className={` flex-row ${styles.rightLeft} pr-2 pt-48`}
        >
          <img
            src={require("../../../assets/images/landing-screen/news.svg").default}
            alt=""
          />
        </motion.figure>
        <div
          className={`lg:flex flex-row mx-auto`}
        >
          <div className={`lg:flex-row ${styles.news} md:block`}>
            <p className="w-96 mx-auto py-4 text-center text-xl border-b-4 border-blue-700 ">مقالات</p>
            <ArticleComponent items={ArticleInformation} />
          </div>

          <div
            className={`flex-row ${styles.news}`}
          >
                <p className="w-96 mx-auto py-4 text-center text-xl border-b-4 border-blue-700">اخبار</p>
              <NewsComponent news={NewsInformation} />
          </div>
        </div>
        <motion.figure
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: shouldShowActive ? -100 : 0,
   
              opacity: shouldShowActive ? 0 : 1,
            }}
            transition={{ type: "spring", delay:1, stiffness: 400 }} 
          className={` flex-row ${styles.rightLeft} pl-2 pt-48`}
        >
          <img
            src={
              require("../../../assets/images/landing-screen/article.svg").default
            }
            alt=""
          />
        </motion.figure>
      </div>
    </section>
  );
};
export default LandingNews;
