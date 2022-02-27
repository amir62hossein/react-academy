import React from "react";
import {MyFormValues} from "./interface";
interface CmdProps {
 value:MyFormValues
}
const CommentAnswer = ({value}:CmdProps) => {
  
  return (
    <div>
      <div className="flex mt-2 px-9 border border-black">
        <figure
          className={`flex-row w-14 h-14 mt-7  rounded-full bg-gray-400`}
        >
        
        </figure>
        <div className="flex-row w-96 h-20 mr-2  rounded-t-2xl rounded-l-2xl  bg-white">
          <p>{value.email}</p>
          <p>{value.des}</p>
        </div>
      </div>
    </div>
  );
};
export default CommentAnswer;
