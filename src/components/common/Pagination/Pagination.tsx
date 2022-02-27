import React from 'react';
import style from "./pagination.module.css";
interface Props {
    postPerpage: number,
    totalPosts: number,
    paginate: any,
    currentPage: number,
    setCurrentpage : any
}

const currentPageStyle = `px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-400 hover:text-white mx-2`
const otherPages = `px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white mx-2`




const Pagination: React.FC<Props> = ({ postPerpage, totalPosts, paginate, currentPage , setCurrentpage}) => {
    const pageNumber: any = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++) {
        pageNumber.push(i);
    }
    let pageCurrentPage = currentPage;

    const changePage = (status : string) => {
        if(status === 'back' && pageCurrentPage > 1){
            pageCurrentPage -= 1
            setCurrentpage(pageCurrentPage)
        }else if(status === "next" && currentPage <= pageNumber.length - 1){
            pageCurrentPage += 1
            setCurrentpage(pageCurrentPage)
        } 
    }
    return (
        <nav>
            <ul className=" mx-auto w-40 h-10 mt-5 flex justify-around items-center">
                <button onClick={() => changePage('back')} className={currentPageStyle}>قبلی</button>
                {pageNumber.map((number: number | any) => {
                    return <li style={{ cursor: "pointer" }} onClick={() => paginate(number)} key={number} className={currentPage === number ? currentPageStyle : otherPages}>{number}</li>
                })}
                <button onClick={() => changePage('next')} className={currentPageStyle}>بعدی</button>
            </ul>
        </nav>
    );
}
export default Pagination;
