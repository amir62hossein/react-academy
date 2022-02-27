import React, { useState, useEffect } from "react";
import Course from "./newsComponent";
import Div from "../../../hok/Div";
import Input from "../../common/Input/Input";
import style from "./newsComponent.module.css";
import Pagination from "../../common/Pagination/Pagination";
import useFetch from "../../../hook/useFetch";
import ListGroup from "../../common/ListGroup/ListGroup";


const Courses = () => {
 // const { data, isPending, error } = useFetch('https://academy-kgb-react.herokuapp.com/api/news')


  const [news, setNews] = useState<any[]>([]);

  const [currentPage, setCurrentpage] = useState(1);
  const [postPerpage] = useState(8);



  // useEffect(() => {
  //   const apiResult = async () => {
  //     setLoading(true);
  //     const { result } = await NewsApi();
  //     console.log(result);
  //     setNews(result);
  //     setLoading(false);
  //   };
  //   apiResult();
  // }, []);
  useEffect(() => {
    const koft = async () => {
      await fetch('https://academy-kgb-react.herokuapp.com/api/news')
        .then(response => response.json())
        .then(data => setNews(data.result));
      console.log(news)
    }
    koft()
  }, [])
  

  //get currentPage
  const indexOfLastPost = currentPage * postPerpage;
  const indexOfFirstPost = indexOfLastPost - postPerpage;
  const currentPost = news.slice(indexOfFirstPost, indexOfLastPost);
  //changePage
  const paginate = (pageNumber: any) => setCurrentpage(pageNumber);

  return (
    <div>
      <Div>
        <div className={` my-4 `}> 
          <Course news={currentPost} />
          <Pagination
            postPerpage={postPerpage}
            totalPosts={news.length}
            paginate={paginate} currentPage={currentPage} setCurrentpage={setCurrentpage} />
        </div>
      </Div>
    </div>
  );
};

export default Courses;
