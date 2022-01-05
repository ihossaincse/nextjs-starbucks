import React from 'react'

const FormInput = ({ type, placeholder, value, className }) => {
    return (
        <div className="text-right mb-7">
            <input type={type} placeholder={placeholder} value={value} className={`w-full px-4 py-2 text-xl border-2 border-black rounded-md outline-none ${className}`} />    
        </div>
    )
}

export default FormInput
