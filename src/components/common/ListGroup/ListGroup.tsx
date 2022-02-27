import { useState } from "react";
interface newsProps{
  type:any,
  setType: React.Dispatch<React.SetStateAction<boolean>>

}
const ListGroup= () => {
    
    //console.log(type);
    //console.log(news);
  
  return (
    <div>
      <select onChange={(e) => (e.target.value)}>
        <option value="all">کلیات </option>
        <option value="news">اخبار</option>
        <option value="article">مقالات</option>
      </select>

    </div>
  );
};
export default ListGroup;
