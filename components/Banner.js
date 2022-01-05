import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Banner = ({ title, text, btnText, img, directionClass, colorClass, btnClass, bgClass }) => {
    return (
        <div className={`mb-8 ${bgClass}`}>
            <div className={`flex md:flex-row flex-col items-center justify-center m-auto text-center max-w-7xl ${directionClass}`}>
                <div className="w-full px-8 py-10 md:w-6/12 md:py-20 md:px-20">
                    <h2 className={`mb-6 text-3xl lg:text-6xl font-bold tracking-widest ${colorClass}`}>{title}</h2>
                    <p className={`text-2xl ${colorClass}`}>{text}</p>
                    <Button text={btnText} className={`mt-10 inline-block ${btnClass}`} />
                </div>
                <div className="relative w-full md:w-6/12">
                    <Image src={img} alt={title} width="100%" height="100%" layout="responsive" objectFit="contain" />
                </div>
            </div>
        </div>
    )
}

export default Banner
