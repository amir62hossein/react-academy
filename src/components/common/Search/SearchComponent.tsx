import console from 'console';
import {useState} from 'react';
import Courses from '../../CourseComponents/Courses';
import Input from '../Input/Input';
import Style from "./searchComponent.module.css";

interface CourseIProp{
    courses:any,
    
}
const SearchComponent: React.FC<CourseIProp>=({courses})=>{
    const [searchTerm , setSearchTerm] = useState("");
    //const result = cours.filter((val:any)=>{})
    
    return(
          <div className="Container h-20 my-4">
              <div className={`w-400 h-20 mx-auto my-8`}>
                  <Input type='text' placeholder='جستوجو' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
              </div>

          </div>
    );
 

}
export default SearchComponent;