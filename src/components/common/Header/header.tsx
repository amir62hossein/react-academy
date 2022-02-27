import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

interface HeaderProp {
  menu: boolean | any;
}

//import { motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState<HeaderProp["menu"]>(false);

  return (
    <nav className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-5">
      <div className="flex text-center justify-between h-16">
        <div className="flex text-center">
          <div className={` ${styles.main} flex flex-shrink-0`}>
            <img
              className="flex-row mt-3 h-14 w-14"
              src={require("../../../assets/images/logo.png").default}
              alt="logo"
            />
            <div className="flex-row px-3 pt-5 hidden md:block">
              <ul className="ml-10 flex  text-baseline space-x-4">
                <Link to="/">
                  <li className={`${styles.lineb} text-gray-700 px-3 py-2 rounded-md text-sm font-medium`}>
                    خانه
                  </li>
                </Link>
                <Link to="/courses">
                <li className={`${styles.lineb} text-gray-700 px-3 py-2 rounded-md text-sm font-medium`}>
                  دوره ها
                </li>
                </Link>
                <Link to="/news">
                <li className={`${styles.lineb} text-gray-700 px-3 py-2 rounded-md text-sm font-medium`}>
                  اخبار و مقالات
                </li>
                </Link>
              </ul>
            </div>
            <Link to="/login">
            <div
              className={`${styles.login} flex h-10 text-white bg-blue-600  mt-5 px-4 py-2.5 rounded-md text-sm font-medium lg:block md:hidden  sm:hidden `}
            >
              ورود / ثبت نام
            </div>
            </Link>
          </div>
        </div>
        <div onClick={() => setMenu(!menu)} className="-mr-2 flex lg:hidden">
          {menu && <Menu menu={menu} />}
          <BurgerMenu menu={menu} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
