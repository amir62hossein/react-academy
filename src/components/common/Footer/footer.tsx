import React from "react";
import styles from "./footer.module.css";
import { BsGeoAlt } from "react-icons/bs";
import { IoMdCall, IoIosLink } from "react-icons/io";

function Footer() {
  return (

    <footer className=" flex flex-row  h-40 bg-blue-900 text-blue-300 text-center">
      <div className="container flex  mx-auto">
        <ul className="w-1/3 my-4">
          <li>
            <span className="text-blue-100 relative right-52 top-5">
              <IoIosLink />
            </span>
            <p className="text-blue-100">لینک ها</p>
          </li>
          <li>صفحه اصلی</li>
          <li>آموزش</li>
          <li>خدمات</li>
        </ul>

        <ul className="w-1/3 my-6">
          <li>
            <span className={`text-blue-100 relative ${styles.callus} top-5`}>
              <IoMdCall />
            </span>
            <p className="text-blue-100">ارتباط با ما</p>
          </li>
          <li>011-33111888</li>
          <li>BahrAcademi@gmail.com</li>
        </ul>

        <ul className="w-1/3 my-8">
          <li>
            <span className="text-blue-100 relative right-48 top-5">
              <BsGeoAlt />
            </span>
            <p className="text-blue-100">موقعیت مکانی</p>
          </li>
          <li>ساری-خیابان هیجده دی-کوچه مدرس-ساختمان مازیار-واحد 15</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
