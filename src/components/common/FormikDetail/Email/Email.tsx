import { Field, ErrorMessage } from "formik";
const Email = () => {
  return (
    <section>
       <label htmlFor="email"  className="px-7 text-gray-700">ایمیل</label> 
      <Field
        className="block w-650 px-2 py-2  mx-auto text-xs border"
        name="email"
        type="email"
        placeholder="لطفا ایمیل خود را وارد کنید...."
      />
      <span className="block w-650 h-6 mx-auto text-xs text-red-500">
           <ErrorMessage name="email" />
      </span>
     
    </section>
  );
};
export default Email;
