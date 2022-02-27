import { ErrorMessage, Field} from "formik";
import style from "./textarea.module.css";
const TextArea = () => {
  return (
    <section className="pt-2">
      <label htmlFor="textarea" className="px-7 text-gray-700">
        متن نظرات
      </label>
      <Field as="textarea" name="des" placeholder="متن نظرات خود را وارد کنید.." className="block w-650 max-w-650 h-64 rounded outline-none mx-auto text-xs" />
      <span className="block w-650 h-6 mx-auto text-red-500 text-xs px-1">
        <ErrorMessage name="des"/>
      </span>
    </section>
  );
};
export default TextArea;
