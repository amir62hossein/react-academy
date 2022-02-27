import React from "react";
import styles from "./landingBestCourses.module.css";
import Yekan from "../../../hok/Yekan/Yekan";




interface BestCourseProsComp {
  bestCourses: {
    imgUrl: string;
    title: string;
    teacherName: string;
    price: string;
    sDate: string;
    capacity: number;
    mt ?: string
  }[];
  
}
const LandingBestCourseComponent: React.FC<BestCourseProsComp> = ({
  
  bestCourses,
}) => {
  const RenderBestCourse = () => {
    return bestCourses.map((course) => {
      return(
        <section
        className={`w-64 h-60 mx-8 shadow-2xl rounded border ${course.mt} bg-white `}>
        <figure className={`${styles.pic} p-3 mx-auto w-40 h-40`}>
          <img
            className=" w-full h-full mx-auto rounded-full"
            src={course.imgUrl}
            alt=""
          />
        </figure>
        <div className=" text-center">
          <p className=" text-2xl">{course.title}</p>
          <p className="mt-0.5 text-sm text-gray-600">مدرس :{course.teacherName}</p>
          <Yekan>
          <p className="mt-0.5 text-sm text-gray-600">قیمت: {course.price}</p>
          <p className="mt-0.5 text-sm text-gray-600">تاریخ: {course.sDate}</p>
          </Yekan>
        <span className={`${styles.fonts} block float-right w-1/2 h-8 mt-3 pt-1.5 pr-2 text-right text-sm text-blue-500`}>
            جزئیات بیشتر
          </span>
          <Yekan>
          <span className={`${styles.fonts} block float-left w-1/2 h-8 mt-3 pt-1.5 pl-2 text-left`}>
            {course.capacity}
          </span>
          </Yekan>
        </div>
      </section>
      );
      
    });
  };
 

  return <div className="2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:grid lg:grid-cols-2 lg:px-20 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 sm:mx-0  mx-8">{RenderBestCourse()}</div>;
};
export default LandingBestCourseComponent;
