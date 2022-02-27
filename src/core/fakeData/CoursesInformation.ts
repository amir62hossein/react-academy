interface BestCourseProp {
  id: number;
  imgUrl: string;
  title: string;
  teacherName: string;
  price: string;
  sDate: string;
  capacity: any;
  style?:any,
  mt ?: string

}

const CoursesInformation: BestCourseProp[] = [
  {
    id:1,
    imgUrl: require("../../assets/images/landing-screen/bestCourses/sass.png")
      .default,
    title: " sass",
    teacherName: "مهندس حامد نظری",
    price: "400,000 تومان ",
    sDate: "1400/01/01",
    capacity: "10/15",
    style:"relative top-11",
    mt : "2xl:mt-20 xl:mt-20 lg:mt-16 md:mt-16 sm:mt-16"
  },
  {
    id:2,
    imgUrl: require("../../assets/images/landing-screen/bestCourses/sass.png")
      .default,
    title: " React ",
    teacherName: "  مهندس مهدی اصغری",
    price: "500,000 تومان ",
    sDate: "1400/01/01",
    capacity:"3/20" ,
     mt: "2xl:mt-0 xl:mt-0 lg:mt-4 md:mt-4 sm:mt-4"
  },
  {
    id:2,
    imgUrl: require("../../assets/images/landing-screen/bestCourses/sass.png")
      .default,
    title: " Sass ",
    teacherName: "مهندس حامد نظری",
    price: "400,000 تومان ",
    sDate: "1400/01/01",
    capacity: "15/20",
    mt:"2xl:mt-0 xl:mt-0 lg:mt-16 md:mt-16 sm:mt-16"
  },
  {
    id:3,
    imgUrl: require("../../assets/images/landing-screen/bestCourses/sass.png")
      .default,
    title: "  NetCore.",
    teacherName: " دکتر بحرالعلوم ",
    price: "400,000 تومان ",
    sDate: "1400/01/01",
    capacity: "15/30" ,
    mt : " 2xl:mt-20 xl:mt-20 lg:mt-4 md:mt-4 sm:mt-4"
  },
];

export default CoursesInformation;
