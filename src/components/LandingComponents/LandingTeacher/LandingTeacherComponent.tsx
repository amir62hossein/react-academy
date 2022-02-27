import React from "react";
import styles from "./landingTeacher.module.css";

interface IProps {
  teacher: {
    imgUrl: string;
    Name: string;
    des: string;
  }[];
}

const LandingTeacher: React.FC<IProps> = ({ teacher }) => {

  const RenderTeachr = () => {
    return teacher.map((techer) => {
      return (
        <section
          className={`w-56 h-36 mx-6 my-16  float-right shadow-lg ${styles.bg}`}
        >
          <div className={` w-28 mx-auto rounded-full ${styles.imgs}`}>
            <img className="rounded-full" src={techer.imgUrl} alt="" />
          </div>
          <h2 className="text-center pt-2">{techer.Name}</h2>
          <p className="text-gray-500 text-center text-sm">{techer.des}</p>
        </section>
      );
    });
  };


  
  
  return(
  <div className="grid grid-cols-2">
    {RenderTeachr()}
</div>); 
};
export default LandingTeacher;
