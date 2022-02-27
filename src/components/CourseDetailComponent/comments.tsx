import React from 'react';
import Div from '../../hok/Div';
import CommentItem from './CommentItem';
import { Formik,Form } from 'formik';
const Comments = () => {
    return (
        <div className=' w-3/4 my-5 mx-auto'>
            <Div>
                <h1 className='my-5 mr-5 text-3xl'>نظرات</h1>
              
                <CommentItem />
            </Div>
        </div>
    )
}
export default Comments