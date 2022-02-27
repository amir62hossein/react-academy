import React from "react";
import styles from "../landingNews.module.css";

interface Iprops {
  news: {
    id: number;
    imgUrl: string;
    title: string;
    des: string;
    publishT:any;
  }[];
}
const NewsComponent: React.FC<Iprops> = ({ news }) => {
  const RenderNews = () => {
    return news.map((news) => {
      return (
        <section
          className="mt-5 px-2 border max-w-sm mx-auto bg-white rounded-xl shadow-md"
        >
          <div className="flex mt-4">  
          <img
            className="flex-row mr-3"
            alt="React Face"
            src={news.imgUrl}
          />
          <div className=" flex-row w-72 mx-2 text-right pt-3">
            <div className=" text-right">
              <p className="text-sm text-black">{news.title}</p>
              <p className=" py-1 text-gray-600 text-xs">{news.des}</p>
            </div>
          </div>
          </div>
          <div className="flex mb-3 mt-1">
          <span className={`${styles.fontSi} block w-1/2 h-4 text-gray-500`}>تازیخ انتشار: {news.publishT}</span>
          <span className={` ${styles.fontSi} block w-1/2 h-4 text-left text-blue-800`}>ادامه مطلب</span>
          </div>
        </section>
      );
    });
  };
  return <div>{RenderNews()}</div>;
};
export default NewsComponent;
