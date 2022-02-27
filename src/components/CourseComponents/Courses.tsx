import React, { useState, useEffect } from "react";
//import style from "./courses.module.css";
import CoursesComponent from "./CoursesComponent";
import Pagination from "../common/Pagination/Pagination";
//import SearchComponent from "../common/Search/SearchComponent";

const Courses = () => {
  const [courses, setCourses] = useState<any[]>([]);
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerpage] = useState(8);



  useEffect(() => {
    const apiResult = async () => {
      await fetch('https://academy-kgb-react.herokuapp.com/api/course')
        .then(response => response.json())
        .then(data => setCourses(data.result));
      console.log(courses);
    }
    apiResult()
  }, [])

  //get currentPage
  const indexOfLastPost = currentPage * postPerpage;
  const indexOfFirstPost = indexOfLastPost - postPerpage;
  const currentPost = courses.slice(indexOfFirstPost, indexOfLastPost);
  //changePage
  const paginate = (pageNumber: any) => setCurrentpage(pageNumber);

  return (



    <div className={` container my-2 mx-auto`}>

      <CoursesComponent courses={currentPost}/>
      <Pagination
        postPerpage={postPerpage}
        totalPosts={courses.length}
        paginate={paginate} currentPage={currentPage} setCurrentpage={setCurrentpage} />

    </div>


  );
};
export default Courses;
