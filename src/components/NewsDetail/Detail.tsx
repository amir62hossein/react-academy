import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Spinner from "../common/Spinner/Spinner";
const Detail = () => {
  const [newArticle, setNewArticle] = useState<any>();

  const { id } = useParams<any>();
  useEffect(() => {
    const apiResult = async () => {
      await fetch(`https://academy-kgb-react.herokuapp.com/api/news/${id}`)
        .then((response) => response.json())
        .then((data) => setNewArticle(data.result));
    };
    apiResult();
    console.log(id);
    console.log(newArticle);
  }, []);
  return (
    <React.Fragment>
      {newArticle ? (
        <div>
          <img
            src={newArticle.image}
            alt=""
            className="w-400 h-400 rounded-full mx-auto pt-8"
          />
          <section>
            <header className="text-center mt-8 text-2xl">  {newArticle.title}</header>
            <article className="w-700 mx-auto mt-2 text-justify text-gray-700 leading-loose text-base">
              {newArticle.text}
            </article>
            <div className="flex w-800 h-10">
              <div className="flex-row mr-5 pt-2 text-xs text-gray-500 ">
                ناریخ انتشار:1400/01/01
              </div>
              <div className="flex-row mr-530 pt-2 text-gray-500 text-xs ">
                نظرات ثبت شده :15{" "}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};
export default Detail;
