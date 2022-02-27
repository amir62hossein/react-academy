import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import Email from "../../components/common/Formik/Email/Email";
import TextArea from "../../components/common/Formik/TextArea/TexrArea";
import Button from "../../components/common/Formik/Button/Button";
import * as Yup from "yup";
import Style from "./comment.module.css";
import {MyFormValues} from "./interface"
import CommentAnswer from "./CommentAnswer";




const Comment: React.FC<{}> = () => {
 
  const initialValues: MyFormValues = { email: "", des: "" };
  const [comment , setComment]= useState<MyFormValues[]>([]);
  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("آدرس ایمیل اشتباه است")
      .required("ایمیل خود را وارد کنید"),
    des: Yup.string()
      .max(20, "تعداد کاراکتر ها بیشتر از حد مجاز است")
      .required("نظرات خود را وارد کنید"),
  });
  return (
    <div className="border border-black">
      <header className="text-xl text-gray-800 text-center">
        <p>ثبت نظرات</p>
      </header>
      <div className="flex">
        <div className="flex-row my-8 w-600 border border-green-400">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions):void => { 
              setComment((prevstate:MyFormValues[]):MyFormValues[]=>[...prevstate,values]);
              console.log(comment)
              values.email="";
              values.des="";
              actions.setSubmitting(false);
            }}
          >
            <section className={`flex`}>
              <Form className="flex-1 xl:w-700 py-10 px-4 border border-blue-400">
                <section className=" xl:w-96 lg:w-1/2 md:w-96 sm:w-96 mx-10 h-96 pt-5 rounded border-solid border-2 bg-white border-gray-500">
                  <Fragment>
                    <Email />
                  </Fragment>

                  <Fragment>
                    <TextArea />
                  </Fragment>

                  <Fragment>
                    <Button />
                  </Fragment>
                </section>
              </Form>
            </section>
          </Formik>
        </div>
        <figure className="flex-row my-8 w-600 xl:block  md:hidden sm:hidden border border-green-400">
          <img
            src={require("../../assets/images/news-items/cmnt.png").default}
            alt=""
          />
        </figure>
      </div>
      <div>
        {/* /*key is just an index */}
        {
          comment.map((value:MyFormValues,key:number) => {
              return<CommentAnswer key={key} value={value} />
          })
        }
      </div>
    </div>
  );
};
export default Comment;
