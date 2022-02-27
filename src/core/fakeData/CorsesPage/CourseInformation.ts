interface CourseProp {
    id: number;
    imgUrl: string;
    title: string;
    teacherName: string;
    price: string;
    sDate: string;
    capacity: any;
    style?:any
  }
  
  const CoursesInformation:CourseProp[] = [
    {
      id:1,
      imgUrl: require("../../../assets/images/landing-screen/bestCourses/sass.png")
        .default,
      title: " Asp.Net ",
      teacherName: "  دکتر بحرالعلوم",
      price: "400,000 تومان ",
      sDate: "1400/01/01",
      capacity: "15/20" ,
      style:"relative top-11"
    },
    {
      id:2,
      imgUrl: require("../../../assets/images/landing-screen/bestCourses/sass.png")
        .default,
      title: " React ",
      teacherName: "مهندس محسن نظری",
      price: "400,000 تومان ",
      sDate: "1400/01/01",
      capacity:"15/20" ,
    },
    {
      id:3,
      imgUrl: require("../../../assets/images/landing-screen/bestCourses/sass.png")
        .default,
      title: " sass",
      teacherName: "مهندس حامد نظری",
      price: "400,000 تومان ",
      sDate: "1400/01/01",
      capacity:"15/20",
    },
    {
      
        id:4,
        imgUrl: require("../../../assets/images/landing-screen/bestCourses/sass.png")
          .default,
        title: " Nodejs ",
        teacherName: "  دکتر بحرالعلوم",
        price: "400,000 تومان ",
        sDate: "1400/01/01",
        capacity: "15/20",
      },
      {
        id:4,
        imgUrl: require("../../../assets/images/landing-screen/bestCourses/sass.png")
          .default,
        title: " React ",
        teacherName: "مهندس سالاز نیلی  ",
        price: "400,000 تومان ",
        sDate: "1400/01/01",
        capacity:"15/20",
      },
      {
        id:4,
        imgUrl: require("../../../assets/images/landing-screen/bestCourses/sass.png")
          .default,
        title: " NetCore. ",
        teacherName: "  دکتر بحرالعلوم",
        price: "400,000 تومان ",
        sDate: "1400/01/01",
        capacity: "15/20",
      },
      {
        id:4,
        imgUrl: require("../../../assets/images/landing-screen/bestCourses/sass.png")
          .default,
        title: " Sass ",
        teacherName: "مهندس حامد نظری",
        price: "400,000 تومان ",
        sDate: "1400/01/01",
        capacity: "15/20"
      },
  ];
  
  export default CoursesInformation;
  