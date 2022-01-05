import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { actionTypes } from "../reducer";
import { useStateValue } from '../StateProvider';
import Button from './Button';
import LineShadow from './LineShadow';
import MenuItem from './MenuItem';

const menu = [
    { 
        name: "Menu",
        url: "/menu"
    }, 
    { 
        name: "Rewards",
        url: ""
    },
    { 
        name: "Gift Cards",
        url: ""
    }
];

const Header = () => {
    const [{user}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleClick = () => {
        dispatch({
            type: actionTypes.LOGGED_IN,
            user: false
        })
    }

    return (
        <div className="mb-8">
            <div className="flex flex-col items-center justify-between px-4 py-6 md:px-10 md:flex-row">
                <div className="flex flex-col items-center md:flex-row">
                    <Link href="/">
                        <a className="flex items-center">
                            <Image src="/images/logo.png" alt="logo" width="150" height="35" />
                        </a>
                    </Link>
                    <ul className="flex items-center py-4 pl-0 space-x-4 font-bold uppercase md:pl-10 md:space-x-6 md:py-0">
                    {menu.map(({name, url}, index) => (
                        <MenuItem key={name+index} name={name} url={url} />
                    ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center space-x-4 md:flex-row">
                    <Link href="/">
                        <a className="flex items-center mr-5 space-x-2 font-semibold transition-all hover:text-green-700">
                            <MdLocationPin size={25} />
                            <span>Find a store</span>
                        </a>
                    </Link>
                    {user ? 
                        (
                            <Button text="Logout" url="/" className="text-white bg-black border-black hover:bg-gray-700" onClick={handleClick} />  
                        ) : (
                            <div className="flex flex-col items-center space-x-4 md:flex-row">
                                <Button text="Sign In" url="/account/signin" className="my-4 bg-white border-black hover:bg-gray-200 md:my-0" />
                                <Button text="Join Now" url="/account/create" className="text-white bg-black border-black hover:bg-gray-700" />
                            </div>  
                        )
                    }
                    
                </div>
            </div>
            <LineShadow />
        </div>
    )
}

export default Header
