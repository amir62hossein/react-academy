import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../common/Spinner/Spinner';
const Article = () => {

  const [newArticle, setNewArticle] = useState<any>();
  const { id } = useParams<any>()
  useEffect(() => {
    const apiResult = async () => {
      await fetch(`https://academy-kgb-react.herokuapp.com/api/news/${id}`)
        .then(response => response.json())
        .then(data => setNewArticle(data.result));
      console.log(newArticle);
    }
    apiResult()
  }, [])
  return (
    <div className="border">

      {newArticle ? <div><img
        className="mx-auto my-5"
        src={
          newArticle.image
        }
        alt=""
      />
        <h1 className="text-center text-3xl my-5">مقاله جامع ری اکت</h1>
        <h3 className="text-center text-gray-400 my-5">
          منتشر کننده : حسین نوریان
        </h3>
        <div className="container mx-auto w-5/6">
          <p className="text-justify leading-loose text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
            زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
            زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
            زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
            زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="flex justify-between w-5/6 mx-auto mt-10 text-gray-400">
          <p>تاریخ انتشار : 1400/03/02</p>
          <p>نظرات : 15نظر</p>
        </div></div> : <Spinner />}
    </div>


  );
}
export default Article;