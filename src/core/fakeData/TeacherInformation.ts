interface TeacherProps {
  imgUrl: string;
  Name: string;
  des: string;
}

const TeacherInformation: TeacherProps[] = [
  {
    imgUrl: require("../../assets/images/landing-teacher/01.jpg").default,
    Name: "دکتر بحرالعلوم",
    des: "مدرس دوره وب و مدرس دانشگاه های برتر",
  },
  {
    imgUrl: require("../../assets/images/landing-teacher/02.jpg").default,
    Name: "دکتر بحرالعلوم",
    des: "مدرس دوره وب و مدرس دانشگاه های برتر",
  },
  {
    imgUrl: require("../../assets/images/landing-teacher/salar.jpg").default,
    Name: "دکتر بحرالعلوم",
    des: "مدرس دوره وب و مدرس دانشگاه های برتر",
  },
  {
    imgUrl: require("../../assets/images/landing-teacher/mehdi.jpg").default,
    Name: "دکتر بحرالعلوم",
    des: "مدرس دوره وب و مدرس دانشگاه های برتر",
  },
];

export default TeacherInformation;
