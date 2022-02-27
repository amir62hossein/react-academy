interface ServicesProps {
  imgUrl: string;
  title: string;
}

const ServicesInformaiton: ServicesProps[] = [
  {
    imgUrl: require("../../assets/images/landing-services/teamwork.png").default,
    title: "فرصت شغلی",
  },
  {
    imgUrl: require("../../assets/images/landing-services/doc.png").default,
    title: "مدارک معتبر",
  },
  {
    imgUrl: require("../../assets/images/landing-services/servicse.png").default,
    title: " مشاوره رایگان",
  },
  {
    imgUrl: require("../../assets/images/landing-services/exam.png")
      .default,
    title: "  امتحانات",
  },
];
export default ServicesInformaiton;
