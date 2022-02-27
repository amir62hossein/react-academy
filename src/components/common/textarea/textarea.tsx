import React from 'react'

type TextAreaProps = {
    width ?: string
    placeholder : string
    margin ?: string
}


const TextArea = (props : TextAreaProps) => {
    return (
        <textarea className={`form-textarea mt-1 rounded-lg block ${props.width} ${props.margin}`} placeholder={props.placeholder}></textarea>
    )
}
export default TextArea




