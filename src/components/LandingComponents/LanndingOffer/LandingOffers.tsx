import React, { Fragment, useEffect } from "react";
import offers from "./landingOffers.module.css";
import Email from "../../common/Formik/Email/Email";
import TextArea from "../../common/Formik/TextArea/TexrArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../common/Formik/Button/Button";


interface MyFormValues {
  email: string;
  des: string;
}

const LandingOffers: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: "", des: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("آدرس ایمیل اشتباه است")
      .required("ایمیل خود را وارد کنید"),
    des: Yup.string()
      .max(20, "تعداد کاراکتر ها بیشتر از حد مجاز است")
      .required("نظرات خود را وارد کنید"),
  });
  return (
    <div className="my-8">
      <header className="py-6 my-2 text-center bg-blue-100">
        <h1 className="text-2xl">انتقادات و پیشنهادات</h1>
      </header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <section className={`flex h-96 mx-auto px-4 mt-8 ${offers.main}`}>
          <figure className="flex-1 w-1/2 h-96 xl:block lg:hidden md:hidden sm:hidden">
            <img
              className="h-96"
              src={
                require("../../../assets/images/landing-screen/Group 74.svg")
                  .default
              }
              alt=""
            />
          </figure>
          <Form className="flex-1 xl:w-1/2  h-96 px-2">
            <section className="2xl:float-left xl:w-4/5 lg:w-1/2 md:w-96 sm:w-96 xl:mr-28 lg:mx-auto md:mx-40 sm:mx-28 h-96 py-6 rounded border-solid border-2 border-gray-500">
              <Fragment>
                <Email/>
              </Fragment>
                
              <Fragment>
                <TextArea/>
              </Fragment>
              
              <Fragment>
                <Button/>
              </Fragment>
             
            </section>
          </Form>
        </section>
      </Formik>
    </div>
  );
};
export default LandingOffers;
