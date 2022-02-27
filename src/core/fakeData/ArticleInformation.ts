interface ArticleProps {

      id: number;
      imgUrl: string;
      title: string;
      des: string;
      publishT:any;

  }
  const ArticleInformation:ArticleProps[] =[
    {
        id: Math.round(Math.random() * 1000),
        imgUrl:
          require("../../assets/images/landing-screen/newAndAtricle/bootstrap.png")
            .default,
        title: "دوره جامع ریئکت",
        des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
        publishT:"1400/01/01",
      },
      {
          id: Math.round(Math.random() * 1000),
          imgUrl:
            require("../../assets/images/landing-screen/newAndAtricle/react.png")
              .default,
          title: "دوره جامع ریئکت",
          des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
          publishT:"1400/01/01",
        },
        {
          id: Math.round(Math.random() * 1000),
          imgUrl:
            require("../../assets/images/landing-screen/newAndAtricle/sass.png")
              .default,
          title: "دوره جامع ریئکت",
          des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
          publishT:"1400/01/01",
        },
  ]
  export default ArticleInformation; 
