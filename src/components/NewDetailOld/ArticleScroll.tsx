import React from "react";
 const ArticleScroll=()=>{
        return(
            <div className=' bg-blue-100 rounded-md'>
            <div className=' w-5/6 border border-red-600 mx-auto p-10 rounded-md flex my-5'>
                <div className=' w-2/3'>
                    <p>مقاله جامعه ری اکت</p>
                    <p className='text-gray-500 mt-2'>کتابخانه از پیش نوشته شده با جاوااسکریپت</p>
                   
                </div>
                <div className=' w-1/3'>
                    <img src={require("../../assets/images/landing-bests/react.png").default} alt="" />
                    <span></span>
                </div>
            </div>
        </div>
        );
 }
 export default ArticleScroll;