import React from "react";
import {motion} from "framer-motion";

interface IProp {
  services: {
    imgUrl: string;
    title: string;
    bg?: string;
    mt?:string
  }[];
}
const LandingServiseComponent: React.FC<IProp> = ({ services }) => {
  const RenderServises = () => {
    return services.map((service) => {
      return (
          <motion.div
           whileHover={{scale:1.04}}
           transition={{ type: "spring", stiffness: 120 }}
          className="2xl:pt-3 lg:w-42 lg:h-42 lg:pt-4 xl:pt-4  md:w-40 md:h-40 sm:w-40 sm:h-40 sm:p-5  xl:mr-4  md:mx-auto md:pt-7 sm:mx-auto sm:my-4 sm:shadow-xl rounded md:shadow-2xl">
            <figure className="lg:w-30 lg:h-28 md:w-28 sm:w-28 sm:h-28 md:h-20  mx-auto">
               <img className="w-full h-full rounded" src={service.imgUrl} alt="" />
            </figure>
            <p className="text-center md:pt-2 sm:pt-1 sm:text-sm">{service.title}</p>
          </motion.div>
      
      );
    });
  };

  return <div className="xl:flex xl:fex-row  lg:grid lg:grid-cols-2 lg:px-10  md:grid md:grid-cols-2 md:px-10   sm:grid sm:grid-cols-2 sm:pt-0 sm:px-24">{RenderServises()}</div>;
};
export default LandingServiseComponent;