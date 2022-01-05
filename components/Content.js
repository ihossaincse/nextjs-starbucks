import Image from 'next/image'
import React from 'react'

const Content = ({ menu, title }) => {
    return (
        <div className="w-full md:w-9/12">
            <h2 className="mb-10 text-3xl font-bold text-center md:text-left">{title}</h2>
            <div className="">
            {menu.map(({cat, data}, index) => (
               <div className="mb-10" key={cat+index}>
                   <h4 className="pb-6 mb-4 text-2xl font-bold text-center border-b-2 border-gray-100 md:text-left">{cat}</h4>
                   <div className="flex flex-wrap">
                     {data.map(({title, img}, index) => (
                        <div key={title+index} className="flex items-center w-full p-4 space-x-6 md:w-1/2">
                            <Image src={img} width="120" height="120" objectFit="cover" className="rounded-full" alt={title} />
                            <h5 className="w-6/12 text-xl font-semibold text-gray-700">{title}</h5>
                        </div>
                     ))}  
                   </div>
               </div>
           ))}  
            </div>
        </div>
    )
}

export default Content
