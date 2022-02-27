import React from "react";
import TeacherInformation from "../../../core/fakeData/TeacherInformation";
import TeacherMangmentInfo from "../../../core/fakeData/TeacherMangmentInfo";
import LandingTeacherComponent from "./LandingTeacherComponent";
import LandingTManger from "./LandingTManger";

const LandingTeachers = () => {
  return (
    <section className="my-10">
      <header className="py-6 text-center bg-blue-100">
        <h2 className="text-2xl">مدرسین برتر</h2>
      </header>
      <div className=" 2xl:flex 2xl:max-w-full 2xl:pr-2 xl:flex xl:max-w-7xl lg:flex lg:max-w-5xl lg:pr-20 lg:mt-8 md:max-w-4xl">
        <div className=" 2xl:flex-row 2xl:mr-20 xl:flex-row lg:flex-row p-4">
         <LandingTManger teacher={TeacherMangmentInfo}/>
        </div>
        <div className=" 2xl:flex-row 2xl:px-10 xl:flex-row xl:px-1 lg:flex-row lg:pr-0 md:px-20">
          <LandingTeacherComponent teacher={TeacherInformation} />
        </div>
        <div className="w-96 pt-28 2xl:flex-row xl:flex-row xl:block lg:hidden md:hidden sm:hidden">
          <img src={require("../../../assets/images/landing-teacher/teacher.svg").default} alt=""/>
        </div>
      </div>
    </section>
  );
};
export default LandingTeachers;
