import React from 'react';

const Form = ({handleForm, children}) => {
    return (
        <form onSubmit={(e) => handleForm(e)} className="px-20 py-12 text-left rounded-md shadow-lg">
           {children} 
        </form>
    )
}

export default Form
