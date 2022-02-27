import React, { Fragment, useState } from "react";
import Article from "./Article";
import ArticleScroll from "./ArticleScroll";
import Comment from "./Comment";
import TAbComponent from "./TabComponent";

const NewsDetail = () => {
  const [article, setArticle] = useState<boolean>(true);
  const [comment, setComment] = useState<boolean>(false);
  return (
    <section className=" my-5 border border-black">
      <div className="w-3/4 border mx-auto">
        <Fragment>
          <TAbComponent
            article={article}
            setArticle={setArticle}
            comment={comment}
            setComment={setComment}
          />
          <div className="bg-blue-100 rounded-md mx-1 py-8 w-full">
         
            {article && <Article />}
            {comment && <Comment />}
          </div>
        </Fragment>
      </div>
    </section>
  );
};
export default NewsDetail;
