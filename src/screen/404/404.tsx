import React from "react";
import Div from "../../hok/Div";
import {motion} from "framer-motion"
import { useHistory } from "react-router";
type NotfoundProps = {

}
const NotFound = () => {
  const history = useHistory()
  return (
    <Div>
      <motion.div initial={{opacity : 0}} animate={{opacity : 1}} className="h-screen bg-purple-600 bg-opacity-75">
        <div className="my-30">
          <h1 className="text-center 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-base pt-10 text-white text-opacity: 1 md:font-bold">
            متاسفم، با خطا مواجه شدید. صفحه مورد نظر یافت نشد!
          </h1>
          <h3 style={{cursor : "pointer"}} onClick={() => history.push("/")} className="text-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm pt-10 text-white text-opacity: 1 md:font-bold">
            بازگشت به صفحه اصلی 
          </h3>
        </div>
        <div className=" w-1/2 mx-auto my-40">
          <img
            src={require("../404/logo.svg/BackgroundLogo.svg").default}
            className="mx-auto"
          />
         
        
        </div>
        
      </motion.div>
      
    </Div>
  );
};

export default NotFound;
