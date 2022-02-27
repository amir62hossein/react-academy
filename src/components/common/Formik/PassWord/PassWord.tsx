import React from "react";
import {Field,ErrorMessage} from "formik"
const PassWord=()=>{
    return(
        <div className="my-8 text-xs ">
        <Field
          className="shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="password"
          type="password"
          placeholder="رمز عبور را وارد کنید"
        />
        <span className="px-16 block mt-5 text-center text-red-600">
          <ErrorMessage name="password" />
        </span>
      </div>
    );
}
export default PassWord