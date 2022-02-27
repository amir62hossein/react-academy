import React, { useEffect, useState } from "react";
import LandingBestCourseComponent from "./LandingBestCourseComponent";
import Styles from "./landingBestCourses.module.css";
import CoursesInformation from "../../../core/fakeData/CoursesInformation";
import useFetch from "../../../hook/useFetch";

const LandingBestCourses = () => {
  const [news, setNews] = useState()
  useEffect(() => {
    fetch('https://academy-kgb-react.herokuapp.com/api/news')
      .then(response => response.json())
      .then(data => setNews(data.result));
    console.log(news)

  }, [])
  return (
    <section className="container">
      <header className="py-6 text-center bg-blue-100">
        <h2 className="text-2xl"> دوره های برتر</h2>
      </header>
      <div className={Styles.bg}>
        <div className={` mx-auto 2xl:py-28 xl:py-20 lg:py-14 md:py-14 sm:py-14 px-8`}>
          <LandingBestCourseComponent bestCourses={CoursesInformation} />
        </div>
      </div>
    </section>
  );
};
export default LandingBestCourses;
