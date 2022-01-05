import Link from 'next/link'
import React from 'react'

const Button = ({text, url, className, ...rest}) => {
    return (
        <Link href={`${url ? url : "/"}`}>
            <a className={`p-1 text-center px-4 border-2 font-semibold transition-all rounded-full ${className}`} {...rest} >
                {text} 
            </a>
        </Link>
    )
}

export default Button
