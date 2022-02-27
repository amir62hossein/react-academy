import { useState } from "react";
import Detail from "./Detail";
import CommentArchive from "./CommentArcive";
import DownLoadLink from "./DownLoadLink";
import NewsComment from "./NewsComment";
import PublisherInfo from "./PublisherInfo";
import Publishe from "./Pulishe";
import TabBtn from "./TabBtn";

const NewsDetail = () => {
  const [category, setCategory] = useState<boolean>(true);
  const [comment, setComment] = useState<boolean>(false);
  const [archive, setArchive] = useState<boolean>(false);
  return (
    <div className="container mx-auto">
      <section className="flex mx-auto w-1300">
        <div className="flex-row w-80 h-full mx-4 pt-20">
          <section className="w-80 h-60 pt-4 rounded-3xl bg-gray-50">
            <PublisherInfo />
          </section>
          <section className="w-80 h-20 mt-4 pt-3 rounded-3xl bg-gray-50">
            <Publishe />
          </section>
          <section className="w-80 h-10 mt-4 pt-2 rounded-3xl bg-gray-50">
            <DownLoadLink />
          </section>
        </div>
        <div className="flex-row w-1000 py-14">
          <span className="block w-800 min-h-950 mx-auto rounded-3xl transform rotate-6 bg-blue-100">
            <section className="flex w-800 h-8 mx-auto mr-10 px-10 transform -rotate-6">
              <TabBtn
                category={category}
                setCategory={setCategory}
                comment={comment}
                setComment={setComment}
                archive={archive}
                setArchive={setArchive}
              />
            </section>
            <section className="w-800  min-h-900 mx-auto transform -rotate-6 rounded-3xl  bg-gray-50">
              {category && <Detail />}
              {comment && <NewsComment />}
              {archive && <CommentArchive />}
            </section>
          </span>
        </div>
      </section>
    </div>
  );
};
export default NewsDetail;
