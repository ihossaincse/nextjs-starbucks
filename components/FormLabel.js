import React from 'react'

const FormLabel = ({ text }) => {
    return (
        <div className="mb-5">
            <label className="text-xl font-semibold">
                {text}  
            </label>
        </div>
    )
}

export default FormLabel
