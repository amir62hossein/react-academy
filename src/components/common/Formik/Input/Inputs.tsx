import React from "react";
import {Field,ErrorMessage} from "formik";

const Input=()=>{
    return(
        <div className="my-8 text-xs">
        <Field
          className=" shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="username"
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
        />
        <span className="px-16 block mt-5 text-center text-red-600">
          <ErrorMessage name="username" />
        </span>
      </div>
    );
}
export default Input;