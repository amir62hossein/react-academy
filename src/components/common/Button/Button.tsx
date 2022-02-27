import React from 'react'

type ButtonProp = {
    text : string
}

const Button = (props : ButtonProp) => {
    return (
        <div className="text-center">
            <button className="p-2 pl-5 pr-5 transition-colors duration-700 transform bg-green-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300">{props.text}</button>
        </div>
    )
}
export default Button