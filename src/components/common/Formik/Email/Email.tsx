import React from "react";
import {Field,ErrorMessage} from "formik";

const Email =()=>{
    return(
        <div className=" text-xs">
        <Field
          className="block xl:w-80 lg:w-96 md:w-80 sm:w-72 h-8 mx-auto px-4 rounded text-xs border-solid border-2 border-gray-500 "
          name="email"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
        />
        <span className="block xl:w-80 lg:w-96 md:w-80 pt-1 sm:w-72 px-4 mx-auto text-red-600">
            <ErrorMessage name="email" />
        </span>
      
      </div>

    );
}
export default Email;