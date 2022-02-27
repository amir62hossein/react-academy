interface NewsProps {
    id: number;
    imgUrl: string;
    title: string;
    des: string;
    dataReleased : string;
  }
  
  const NewsPageData: NewsProps[] = [
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "Ruby",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "Node js",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "ASP.NET",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "Golang",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "React Native",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "php",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "Vue",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
    {
      id: Math.round(Math.random() * 1000),
      imgUrl:
        require("../../assets/images/landing-screen/newAndAtricle/newss.png")
          .default,
      title: "React",
      des: "ریئکت یک کتاب خانه است که توسط شرکت فیس بوک ارائه شده...",
      dataReleased : "1400/03/18"
    },
  ];
  export default NewsPageData;
  