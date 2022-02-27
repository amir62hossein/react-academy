import React from 'react'
import Button from '../common/Button/Button'
import CourseDetailValue from './courseDInterface'
interface CourseDesProps{
    course:CourseDetailValue
}

const Description = ({course}:CourseDesProps) => {
    return (
        <div className='py-10'>
            <p className='my-5 text-2xl text-center'>درباره دوره  </p>
            <p className="px-6 text-justify text-gray-700 mx-auto">  
                {course.description}
            </p>ّ
            <div className='py-6'>
                 <Button text='ثبت نام' />
            </div>
           
        </div>
    )
}
export default Description