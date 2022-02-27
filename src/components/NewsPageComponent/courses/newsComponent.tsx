import { Link } from "react-router-dom";
import Spinner from "../../common/Spinner/Spinner";
import React, { useState } from "react";
import Input from "../../common/Input/Input";
//import ListGroup from "../../common/ListGroup/ListGroup";
//import { type } from "os";

interface NewsProps {
  news: {
    id?: number;
    image?: string | any;
    title?: string;
    text?: string;
    data?: string;
    category?: any;
  }[];
  loading?: any;
  type?: any;
}

const Course: React.FC<NewsProps> = ({ news, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("all");

  if (loading) {
    return <Spinner />;
  }

  const newsRender = () => {
    return news
      .filter((y) => {
        if (type === "all") {
          return y;
        } else if (y.category === type) {
          return y;
        }
      })
      .filter((val: any) => {
        if (searchTerm === "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })
      .map((x: any) => {
        return (
          <div className="w-72 bg-blue-50 my-3 rounded-3xl transform rotate-6">
            <section className="w-72  bg-gray-50 mx-auto my-2 pb-11 px-3 text-justify rounded-3xl transform -rotate-6">
              <figure className={` p-3 mx-auto mt-2 w-32 h-32`}>
                <img
                  className=" w-full h-full mx-auto rounded-full"
                  src={x.image}
                  alt=""
                />
              </figure>
              <div className=" text-center">
                <p className="w-60 mx-auto my-1 text-2xl border-b border-gray-200">
                  {x.title}
                </p>
                <p className="my-3 text-md">{x.category}</p>
                <p className="text-sm my-4 text-sm  text-gray-600">{x.text.substring(0, 71)}...</p>
                <p className="text-gray-500 text-xs my-3">
                  تاریخ انتشار :1400/01/01
                </p>
                <Link to={`/newsInfo/${x._id}`}>
                  <span className="block float-right w-1/2 h-8  pt-1.5 pr-2 text-right text-xs text-blue-500 mt-2 mb-1">
                    جزئیات بیشتر
                  </span>
                </Link>
                <span className="block float-left w-1/2 h-8  pt-1.5 pl-2  text-left text-gray-400 text-xs hover:text-blue-500 mt-2 mb-1 cursor-pointer">
                  12نظر
                </span>
              </div>
            </section>
          </div>
        );
      });
  };
  return (
    <div>
      <div className="flex py-4 mx-20">
        <div className="flex-row  w-700 px-10">
          <Input
            type="text"
            placeholder="جستوجو..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <div className="flex-row w-700 ">
          <select
            className="w-96 focus:outline-none focus:shadow-outline h-full shadow border rounded-full mx-64"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all">کلیات </option>
            <option value="اخبار">اخبار</option>
            <option value="مقاله">مقالات</option>
          </select>
        </div>
      </div>

      <section
        className={`grid 2xl:grid-cols-4  xl:grid-cols-3 xl:px-28 lg:grid-cols-2 lg:px-40 md:grid-cols-2 sm:grid-cols-2 py-5 -mx-10 mr-6`}
      >
        {newsRender()}
      </section>
    </div>
  );
};

export default Course;
