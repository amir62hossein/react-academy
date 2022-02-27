import Yekan from "../../hok/Yekan/Yekan";

const CourseTitle = () => {
  return (
    <div className="w-500 mx-auto">
      <div className="flex pr-32">
        <p className="my-2  text-xl">عنوان دوره : </p>
        <p className="my-2 px-5 text-gray-600">
          {" "}
          دوره جامع ری اکت
        </p>
      </div>
      <div className="flex pr-32">
        <p className="my-2  text-xl">مدرس دوره : </p>
        <p className="my-2 px-5 text-gray-600">
          {" "}
          شبنم بهرامیان
        </p>
      </div>
      <div className="flex pr-32">
        <p className="my-2  text-xl">شروع دوره : </p>
        <Yekan>
          {" "}
          <p className="my-2 px-5 text-gray-600">
            1400/07/25
          </p>{" "}
        </Yekan>
      </div>
      <div className="flex pr-32">
        <p className="my-2  text-xl">پایان دوره : </p>
        <Yekan>
          {" "}
          <p className="my-2 px-5 text-gray-600">
            1400/07/25
          </p>{" "}
        </Yekan>
      </div>
      <div className="flex pr-32">
        <p className="my-2  text-xl">قیمت دوره : </p>
        <Yekan>
          {" "}
          <p className="my-2 px-5 text-red-600">
           4000000 ریال 
          </p>{" "}
        </Yekan>
      </div>
      <div className="flex pr-32">
        <p className="my-2  text-xl">ظرفیت دوره : </p>
        <Yekan>
          {" "}
          <p className="my-2 px-5 text-gray-600">
              20 نفر
          </p>{" "}
        </Yekan>
      </div>
     
    </div>
  );
};
export default CourseTitle;
