import React from "react";
import styles from "./landingTeacher.module.css";

interface MangerProps {
  teacher: {
    imgUrl: string;
    Name: string;
    des: string;
  }[];
}

const LandingTeacher: React.FC<MangerProps> = ({ teacher }) => {
  const RenderTeachrManger = () => {
    return teacher.map((techer) => {
      return (
        <div className="w-72 h-72 rounded bg-blue-100 lg:mt-28 md:mt-16 md:mx-auto sm:mt-16 sm:mx-auto border border-white">
          <div className={` w-28 mx-auto rounded-full ${styles.imgs}`}>
            <img className="rounded-full" src={techer.imgUrl} alt="" />
          </div>
          <h2 className="text-center pt-2">{techer.Name}</h2>
          <p className="text-gray-500 w-60 mx-auto mt-2 text-center text-sm">{techer.des}</p>
        </div>
      );
    });
  };

  return <div>{RenderTeachrManger()}</div>;
};
export default LandingTeacher;
