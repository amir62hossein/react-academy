import React, { useEffect } from "react";
import styles from "../landingNews.module.css";
import aos from "aos";
import "aos/dist/aos.css";
interface IProps {
  items: {
    id: number;
    imgUrl: string;
    title: string;
    des: string;
    publishT:any;
  }[];
}

const ArticleComponent: React.FC<IProps> = ({ items }) => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);
  const RenderItems = () => {
    return items.map((item) => {
      return (
        <section
          className=" mt-5 px-2 border  max-w-sm mx-auto bg-white rounded-xl shadow-md"
        >
          <div className="flex mt-4">
          <img
            className="flex-row mr-3"
            alt="React Face"
            src={item.imgUrl}
          />
          <div className=" flex-row w-72 mx-2 pt-3 text-right">
            <div className=" text-right">
              <p className="text-sm text-black">{item.title}</p>
              <p className=" py-1 text-gray-600 text-xs">{item.des}</p>
            </div>
          </div>
          </div>
          <div className="flex mb-3 mt-1">
          <span className={`${styles.fontSi} block w-1/2 h-4 text-gray-500`}>تازیخ انتشار: {item.publishT}</span>
          <span className={` ${styles.fontSi} block w-1/2 h-4 text-left text-blue-800`}>ادامه مطلب</span>
          </div>
        </section>
      );
    });
  };
  return <section>{RenderItems()}</section>;
};
export default ArticleComponent;
