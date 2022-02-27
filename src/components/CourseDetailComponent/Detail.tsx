import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseTitle from "./CourseTitle";
import Description from "./Description";
import Spinner from "../common/Spinner/Spinner";
import CourseDetailValue from "./courseDInterface";

const Detail = () => {
  const [course, setCourse] = useState<CourseDetailValue>();
  const { id } = useParams<any>();
  useEffect(() => {
    const apiResult = async () => {
      await fetch(`https://academy-kgb-react.herokuapp.com/api/course/${id}`)
        .then((response) => response.json())
        .then((data) => setCourse(data.result));
    };
    apiResult();
    console.log(course);
    console.log(id);
  }, []);
  return (
    <div>
      {course ? (
        <div>
          <h2 className="my-5 mr-5 text-3xl text-center">جزئیات دوره</h2>
          <div className="flex">
            <div>
              <CourseTitle />
            </div>
            <div className=" p-8">
              <img className="mx-auto rounded" src={course.image} alt="" />
            </div>
          </div>
          <section>
            <Description course={course} />
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default Detail;
