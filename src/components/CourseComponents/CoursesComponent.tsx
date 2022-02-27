import React, { useState } from "react";
import style from "./courses.module.css";
import { Link } from "react-router-dom";
import Input from '../common/Input/Input';
interface CourseIProp {
    courses: {
      _id: number;
      image: string;
      courseName: string;
      teacherName: string;
      price: string;
      sDate: string;
      capacity: number;
      style?: any;
      description?:string,
      createDate:any
    }[]
  }


const CoursesComponent: React.FC<CourseIProp> = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const RenderCoursesPage = () => {
    return courses.filter((val: any)=>{
      if(searchTerm === ""){
        return val
      }else if(val.courseName.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((course , key:number) => {
      return (
        <div key={key} className="w-72 my-4 rounded-3xl bg-blue-50 transform rotate-6">
        <section
          className={`w-72 pb-12 my-4 shadow-2xl rounded-3xl bg-gray-50 transform -rotate-6`}
        >
          <figure className={`p-3 mx-auto w-40 h-40`}>
            <img
              className=" w-full h-full mx-auto rounded-full"
              src={course.image}
              alt=""
            />
          </figure>
          <div className=" text-center">
            <p className=" w-64 mx-auto border-b text-2xl">{course.courseName}</p>
            <p className="mt-2 px-8 text-justify text-sm text-gray-600">
              {" "}
               {course.description?.substring(0,100)}...
            </p>
           
            <p className="mt-1 text-sm text-green-600">
               تاریخ شروع: 1400/01/01
            </p>
            <p className="mt-1 text-sm text-red-600">
              قیمت دوره:400000تومان
            </p>
            <Link to={`/courseDetail/${course._id}`}>
              <span
                className="block float-right w-1/2 h-8  pt-1.5 pr-2 text-right text-xs text-blue-500 mt-2 mb-1"
              >
                جزئیات دوره
              </span>
            </Link>
            <span className="block float-left w-1/2 h-8  pt-1.5 pl-2  text-left text-gray-400 text-xs hover:text-blue-500 mt-2 mb-1 cursor-pointer">
                12نظر
              </span>
            <span
              className={`${style.fonts} block float-left w-1/2 h-8 mt-3 pt-1.5 pl-2 text-left`}
            >
              {course.capacity}
            </span>
          </div>
        </section>
        </div>
      );
    });
  };
  return (
    <div>
      <div className={`w-400 h-20 mx-auto my-8`}>
        <Input
          type="text"
          placeholder="جستوجو"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <div
        className={`grid 2xl:grid-cols-4 xl:grid-cols-3 xl:px-28 lg:grid-cols-2 lg:px-40 md:grid-cols-2 sm:grid-cols-2  mx-auto`}
      >
        {RenderCoursesPage()}
      </div>
    </div>
  );
};
export default CoursesComponent;
