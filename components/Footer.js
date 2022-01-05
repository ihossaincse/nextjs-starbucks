import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsPinterest, BsSpotify } from 'react-icons/bs';
import { FiTwitter } from "react-icons/fi";
import LineShadow from './LineShadow';
import MenuItem from './MenuItem';
import SocialItem from './SocialItem';

const menu1 = ["Our Company", "Our Coffee", "Stories and News", "Starbucks Archive", "Investor Relations", "Customer Service"];
const menu2 = ["Culture and Values", "Inclusion, Diversity, and Equity", "College Achievement Plan", "Alumni Community", "U.S. Careers", "International Careers"];
const menu3 = ["People", "Planet", "Environmental and Social Impact Reporting"];
const menu4 = ["Landlord Support Center", "Suppliers", "Corporate Gift Card Sales", "Office and Foodservice Coffee"];
const menu5 = ["Order on the App", "Order on the Web", "Delivery", "Order and Pickup Options", "Explore and Find Coffee for Home"];
const menu6 = ["Privacy Policy", "Terms of Use", "CA Supply Chain Act", "Cookie Preferences"];

const Footer = () => {
    return (
        <div className="px-4">
            <LineShadow />
            <div className="flex flex-col justify-between px-4 py-8 m-auto md:px-0 md:space-x-4 md:flex-row max-w-7xl">
                <div className="mb-6 text-center md:mb-0 md:text-left">
                    <h4 className="mb-4 text-xl font-medium">About Us</h4>
                    <ul>
                    {menu1.map((item, index) => (
                        <MenuItem key={item+index} name={item} url="/" className="py-2 text-gray-600 hover:text-black" />
                    ))}
                    </ul>
                </div>
                <div className="mb-6 text-center md:mb-0 md:text-left">
                    <h4 className="mb-4 text-xl font-medium">Careers</h4>
                    <ul>
                    {menu2.map((item, index) => (
                        <MenuItem key={item+index} name={item} url="/" className="py-2 text-gray-600 hover:text-black" />
                    ))}
                    </ul>
                </div>
                <div className="mb-6 text-center md:mb-0 md:text-left">
                    <h4 className="mb-4 text-xl font-medium">Social Impact</h4>
                    <ul>
                    {menu3.map((item, index) => (
                        <MenuItem key={item+index} name={item} url="/" className="py-2 text-gray-600 hover:text-black" />
                    ))}
                    </ul>
                </div>
                <div className="mb-6 text-center md:mb-0 md:text-left">
                    <h4 className="mb-4 text-xl font-medium">For Business Partners</h4>
                    <ul>
                    {menu4.map((item, index) => (
                        <MenuItem key={item+index} name={item} url="/" className="py-2 text-gray-600 hover:text-black" />
                    ))}
                    </ul>
                </div>
                <div className="mb-6 text-center md:mb-0 md:text-left">
                    <h4 className="mb-4 text-xl font-medium">Order and Pickup</h4>
                    <ul>
                    {menu5.map((item, index) => (
                        <MenuItem key={item+index} name={item} url="/" className="py-2 text-gray-600 hover:text-black" />
                    ))}
                    </ul>
                </div>
            </div>  
            <LineShadow />  
            <div className="px-4 py-12 m-auto max-w-7xl md:px-0">
                <ul className="flex items-center justify-center space-x-2 md:justify-start md:space-x-4">
                    <SocialItem Icon={BsSpotify} url="#" />
                    <SocialItem Icon={BsFacebook} url="#" />
                    <SocialItem Icon={BsPinterest} url="#" />
                    <SocialItem Icon={BsInstagram} url="#" />
                    <SocialItem Icon={AiOutlineYoutube} url="#" />
                    <SocialItem Icon={FiTwitter} url="#" />
                </ul>  
                <ul className="flex flex-col items-center py-6 md:flex-row">
                {menu6.map((item, index) => (
                    <div key={item+index} className="flex items-center">
                        <MenuItem name={item} url="/" className="py-2 font-medium hover:text-black" /> {index < (menu6.length-1) && <span className="hidden px-4 md:inline-block">|</span>}
                    </div>
                ))}
                </ul>    
                <div className="text-center text-gray-500 md:text-left">
                    © 2022 Starbucks Coffee Company. All rights reserved.    
                </div>         
            </div>
        </div>
    )
}

export default Footer
