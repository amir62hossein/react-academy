import React from "react";
import {Field,ErrorMessage} from "formik";
import style from "./textArea.module.css";
const TextArea =()=>{
    return(
        <div className="xl:w-80 lg:w-96 md:w-80 sm:w-72 h-60 mx-auto my-4  xl:px-4 sm:px-0 py-2 rounded text-xs border-solid border-2 border-gray-500">
        <span className="text-gray-400">نظرات خود را وارد کنید</span>
        <Field as="textarea" name="des" className={style.txtarea} />
        <span className=" block pt-1  text-red-600">
        <ErrorMessage name="des" />
        </span>
      </div>
    );
}
export default TextArea;