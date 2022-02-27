import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { NewsDetailForm } from "./interface";
import Button from "../common/FormikDetail/Button/Button";
import Email from "../common/FormikDetail/Email/Email";
import TextArea from "../common/FormikDetail/TextArea/TextArea";
import UserComment from "./UsersComment";


function NewsComment() {
  const initialValues: NewsDetailForm = { email: "", des: "" };
  const [val, setVal] = useState<NewsDetailForm[]>([]);
  console.log("length:", val.length);
  const validateYupSchema = Yup.object({
    email: Yup.string()
      .email("آدرس ایمیل اشتباه است")
      .required("آدرس ایمیلی وارد نشده است"),
    des: Yup.string()
      .max(200, "تعداد کلمات بیشتر از حد مجاز است")
      .required("متنی وارد نشده است"),
  });

  return (
    <div className="py-2">
      <Formik
        validationSchema={validateYupSchema}
        initialValues={initialValues}
        onSubmit={(values: NewsDetailForm, { setStatus, resetForm }) => {
          setVal((prevsate: NewsDetailForm[]): NewsDetailForm[] => [
            ...prevsate,
            values,
          ]);
          try {
            resetForm({});
            setStatus({ success: true });
          } catch (error) {
            setStatus({ success: false });
          }
        } }
      >
        <Form className="w-700 py-2 pt-4 mx-auto rounded-xl border">
          <Email />
          <TextArea />
          <Button />
        </Form>
      </Formik>
      <section className="w-700  mx-auto mt-2">
       
         { val.map((value: NewsDetailForm, key: number) => {
              return <UserComment value={value} key={key} />;
            }) } 
      </section>
    </div>
  );
}
export default NewsComment;
