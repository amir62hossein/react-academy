
import React from 'react'
import Div from '../../../hok/Div'


type InputProps = {
    type: string
    placeholder: string
    value?: string | any
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    width?: string
    margin ?: string
}


const Input = (props: InputProps) => {
    return (
        <div className={`mx-auto ${props.width} ${props.margin}`}>
            <input autoComplete="off" onChange={props.onChange} value={props.value} className="shadow appearance-none border  w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-3 rounded-full" id="username" type={props.type} placeholder={props.placeholder} />

        </div>
    )
}
export default Input