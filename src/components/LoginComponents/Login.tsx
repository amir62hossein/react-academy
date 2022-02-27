import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Div from "../../hok/Div";
import PassWord from "../common/Formik/PassWord/PassWord";
import Button from "../common/Formik/Button/Button";
import LoginUser from "../../core/services/api/login.api";
import Email from "../common/Formik/Email/Email";
import {Field,ErrorMessage} from "formik";

interface MyFormValues {
  email: string;
  password: number | null | undefined;
}

const Logincomponent = () => {
 
  const initialValues: MyFormValues = { email: "", password: undefined };

  const validationSchema = Yup.object({
    email: Yup.string().required(" ایمیل خود را وارد کنید"),
    password: Yup.number().required("رمز عبور را وارد کنید"),
  });
 
  return (
    <Div>
      <div className="2xl:w-600 xl:w-2/3 lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto ">
        <div className="shadow-2xl rounded bg-white">

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              const result = await LoginUser(values)
              console.log(result)
              console.log(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm();
  
            }}
            
          >
            <section className={`flex h-80 mx-auto px-4 `}>
           
              <Form  className="flex-1  h-96 px-2 ">
                <section className=" h-96 py-10 rounded ">
                <div className="my-8 text-xs">
              <Field
                className="w-550 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="text"
                placeholder="ایمیل را وارد کنید"
              />
              <span className="px-16 block mt-0.5 text-center text-red-600">
                <ErrorMessage name="email" />
              </span>
              </div>

              <div className="my-5 text-xs">
              <Field
                className="w-550 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="text"
                placeholder="رمز را وارد کنید"
              />
              <span className="px-16 block mt-0.5 text-center text-red-600">
                <ErrorMessage name="password" />
              </span>
            </div>
            <span className="block px-2 text-sm text-blue-600">رمز خود را فراموش کرده ای؟؟</span>

                  <Fragment>
                    <Button />
                  </Fragment>
                </section>
              </Form>
            </section>
          </Formik>
        </div>
      </div>
    </Div>
  );
};
export default Logincomponent;
