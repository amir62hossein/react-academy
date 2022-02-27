import React, {Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Registers from "../../assets/images/register/Register.gif";
import RegisterUser from "../../core/services/api/register-student.api";
import Button from "../../components/common/Formik/Button/Button"


interface MyFormValues {
  fullName: string;
  email: string;
  password: number | any;
  phoneNumber: number | any;
  birthDate: any
  nationalId: number | any
}

const Registercomponent = () => {
  const [state, setState] = useState("")

  const initialValues: MyFormValues = {
    fullName: "",
    email: "",
    password: undefined,
    phoneNumber: undefined,
    birthDate: undefined,
    nationalId: undefined,
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required("نام کاربری خود را وارد کنید"),
    email: Yup.string().email().required(" ایمیل خود را وارد کنید"),
    password: Yup.number().required(" رمز عبور را وارد کنید"),
    phoneNumber: Yup.number().required("  شماره تماس خود را وارد کنید "),
    birthDate: Yup.number().required(" تاریخ تولد خود را وارد کنید"),
    nationalId: Yup.number().min(10).required("کد ملی خود را وارد کنید")
  })
  return (
    <div className="w-600 mx-auto">
      <div className=" h-auto rounded">
        <Formik

          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const result = await RegisterUser(values)
            console.log(result)
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();

          }}
        >
          <Form className="bg-white py-8 rounded shadow-2xl">

            <div className=" text-xs">
              <Field
                className="w-3/4 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="fullName"
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
              />
              <span className="px-16 block mt-0.5 text-center text-red-600">
                <ErrorMessage name="fullName" />
              </span>
            </div>

            <div className="my-5 text-xs">
              <Field
                className="w-3/4 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="w-3/4 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="text"
                placeholder="رمز را وارد کنید"
              />
              <span className="px-16 block mt-0.5 text-center text-red-600">
                <ErrorMessage name="password" />
              </span>
            </div>

            <div className="my-5 text-xs">
              <Field
                className="w-3/4 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phoneNumber"
                type="text"
                placeholder="تلفن را وارد کنید"
              />
              <span className="px-16 block mt-0.5 text-center text-red-600">
                <ErrorMessage name="phoneNumber" />
              </span>
            </div>

            <div className="my-5 text-xs">
              <Field
                className="w-3/4 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="birthDate"
                type="text"
                placeholder="تاریخ تولد را وارد کنید"
              />
              <span className="px-16 block mt-0.5 text-center text-red-600">
                <ErrorMessage name="birthDate" />
              </span>
            </div>

            <div className="my-5 text-xs">
              <Field
                className="w-3/4 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="nationalId"
                type="text"
                placeholder="کد ملی را وارد کنید"
              />
              <span className="px-16 block mt-0.5 text-center text-red-600">
                <ErrorMessage name="nationalId" />
              </span>
            </div>

            <Fragment>
                    <Button />
                  </Fragment>

          </Form>
        </Formik>
      </div>
      <span></span>
    </div>
  );
};
export default Registercomponent;
