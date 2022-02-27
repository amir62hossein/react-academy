import { comment } from "postcss";
import React from "react";
type TapProps = {
    article: boolean,
    setArticle: React.Dispatch<React.SetStateAction<boolean>>,
    comment: boolean,
    setComment: React.Dispatch<React.SetStateAction<boolean>>
}

const TAbComponent =({article,setArticle,comment,setComment}:TapProps)=>{
    const articleHandler=()=>{
        setArticle(true);
        setComment(false);
    }
    const commentHandler=()=>{
        setComment(true);
        setArticle(false);
    }
    return(
        <div style={{cursor : "pointer"}} className="h-10 flex mx-9">
            <div 
            onClick={articleHandler}
            className={`w-20  flex-row px-5 pt-2  bg-blue-100 ${article && "border-2 border-blue-300"}`}>مقاله </div>
            <div 
            onClick={commentHandler}
            className={`w-20  flex-row px-5 pt-2 bg-blue-100 ${comment && "border-2 border-blue-300"}`}>نظرات</div>
        </div>
    );
}
export default TAbComponent;