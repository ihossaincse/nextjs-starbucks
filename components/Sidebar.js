import React from 'react'
import MenuItem from './MenuItem'

const Sidebar = ({ menu }) => {
    return (
        <div className="w-full mb-10 text-center md:w-3/12 md:text-left">
           {menu.map(({cat, data}, index) => (
               <div className="" key={cat+index}>
                   <h4 className="text-xl font-semibold">{cat}</h4>
                   <ul className="my-2">
                     {data.map(({title, img}, index) => (
                         <MenuItem key={title+index} name={title} url="/menu" className="py-2 text-gray-500" />
                     ))}  
                   </ul>
               </div>
           ))} 
        </div>
    )
}

export default Sidebar
