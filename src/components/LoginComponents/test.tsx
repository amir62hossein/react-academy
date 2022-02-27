import { Formik, Form, Field, ErrorMessage } from "formik";
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
const initialValues: MyFormValues = {
    fullName: "",
    email: "",
    password: undefined,
    phoneNumber: undefined,
    birthDate: "",
    nationalId: ""
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("نام کاربری خود را وارد کنید")
      .min(2, "نام حدااقل دو کاراکتر")
      .max(15, "بیشتر از حد مجاز"),
    password: Yup.number().required("رمز عبور را وارد کنید").min(4, "رمز ضعیف"),
    repassword: Yup.number()
      .required("رمز عبور را وارد کنید")
      .min(4, "رمز ضعیف"),
    email: Yup.string().email().required("ایمیل را وارد کنید"),
    phoneNumber: Yup.number().required("شماره را وارد کنید"),
  });
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={(values, actions) => {
  // const res = await RegisterUser (values);
  console.log(values);
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
  actions.resetForm();
}}
>
<section className={`px-4 `}>

  <Form className=" w-5/6 px-2 mx-auto" >
    <section className="mx-auto rounded  bg-indigo-200">
      {/* *&^%$##$%^&*****************************************************************************/}
      <section className="flex w-5/6  mx-auto">
        <div className="flex-1 w-1/2 ">
          <div className="my-8 text-xs">
            <Field
              className="w-3/4 mx-auto block shadow appearance-none border rounded p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fullName"
              type="text"
              placeholder="نام کاربری خود را وارد کنید"
            />
            <span className="px-16 block mt-5 text-center text-red-600">
              <ErrorMessage name="fullName" />
            </span>
          </div>
          {/* <div className="my-8 text-xs ">
            <Field
              className="shadow mx-auto block appearance-none border rounded w-3/4 p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="ایمیل را وارد کنید"
            />
            <span className="px-16 block mt-5 text-center text-red-600">
              <ErrorMessage name="email" />
            </span>
          </div> */}

          {/* <div className="my-8 text-xs ">
            <Field
              className="shadow mx-auto block appearance-none border rounded w-3/4 p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="رمز عبور را وارد کنید"
            />
            <span className="px-16 block mt-5 text-center text-red-600">
              <ErrorMessage name="password" />
            </span>
          </div> */}

        </div>

        {/* *&^%$##$%^&*****************************************************************************/}
        {/* <div className="flex-1 w-1/2">
          <div className="my-8 text-xs ">
            <Field
              className="shadow mx-auto block appearance-none border rounded w-3/4 p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneNumber"
              type="text"
              placeholder="شماره تلفن را وارد کنید"
            />
            <span className="px-16 block mt-5 text-center text-red-600">
              <ErrorMessage name="phoneNumber" />
            </span>
          </div>
          <div className="my-8 text-xs ">
            <Field
              className="shadow mx-auto block appearance-none border rounded w-3/4 p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="birthDate"
              type="text"
              placeholder="تاریخ تولد را وارد کنید"
            />
            <span className="px-16 block mt-5 text-center text-red-600">
              <ErrorMessage name="birthDate" />
            </span>
          </div>

          
        </div> */}
      </section>

      <button
        type="submit"
        className="bg-blue-500 block  hover:bg-blue-700 mx-auto my-1 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline"
      >
        ارسال
      </button>
    </section>
  </Form>
  <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="nsaidvnf" className="border border-red-600" />
  <button onClick={() => alert(state)}>submit</button>
</section>
</Formik>