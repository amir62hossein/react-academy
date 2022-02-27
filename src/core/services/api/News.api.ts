import React from "react";
import axios from "axios";
const NewsApi=async ()=>{
    
    try{ 
        const courseResult = await axios.get('https://academy-kgb-react.herokuapp.com/api/news');
        return courseResult.data;
        
    }catch(error){
        console.log(error);
    }
}
export default NewsApi;