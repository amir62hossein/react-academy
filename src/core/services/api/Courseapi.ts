import axios from "axios";
const CourseApi=async ()=>{
    
    try{ 
        const courseResult = await axios.get('https://academy-kgb-react.herokuapp.com/api/course');
        return courseResult.data;
        
    }catch(error){
        console.log(error);
    }
}
export {CourseApi}