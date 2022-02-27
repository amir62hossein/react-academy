interface NewsProps {
  id: number;
  imgUrl: string;
  title: string;
  des: string;
  publishT: any;
}

const NewsInformation: NewsProps[] = [
  {
    id: Math.round(Math.random() * 1000),
    imgUrl:
      require("../../assets/images/landing-screen/newAndAtricle/newss.png")
        .default,
    title: "دوره جامع ریئکت",
    des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
    publishT:"1400/01/01",

  },
  {
    id: Math.round(Math.random() * 1000),
    imgUrl:
      require("../../assets/images/landing-screen/newAndAtricle/newss.png")
        .default,
    title: "دوره جامع ریئکت",
    des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
    publishT:"1400/01/01",
  },
  {
    id: Math.round(Math.random() * 1000),
    imgUrl:
      require("../../assets/images/landing-screen/newAndAtricle/newss.png")
        .default,
    title: "دوره جامع ریئکت",
    des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
    publishT:"1400/01/01",
  },
];
export default NewsInformation;
