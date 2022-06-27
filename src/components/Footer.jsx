import React from 'react'
import {BsTelephone} from "react-icons/bs";
import {GoLocation} from "react-icons/go"

const Footer = () => {
  return (
    <div className='bg-black w-full h-[310px]'>
        <div className="container mx-auto h-[300px] text-white">
            <div className='h-[300px] flex md:justify-between md:flex-row flex-col px-10'>
                <div className='flex flex-col md:py-16 py-4'>
                    <h1 className='text-3xl font-bold'>EXPRESS</h1>
                    <p className='py-4 text-gray-400'>
                        3-7 gün arasında qapınıza təslim!
                    </p>
                </div>
                <div className='flex-col hidden md:flex md:py-16'>
                    <ul className='md:mt-4 text-gray-400 flex flex-col gap-y-2 text-lg'>
                        <li className='flex gap-x-3 items-center hover:text-gray-100 transition-all'><a href="/">Tariflər</a> </li>
                        <li className='flex gap-x-3 items-center hover:text-gray-100 transition-all'><a href="/">Haqqımızda</a> </li>
                        <li className='flex gap-x-3 items-center hover:text-gray-100 transition-all'><a href="/">Xəbərlər</a> </li>
                        <li className='flex gap-x-3 items-center hover:text-gray-100 transition-all'><a href="/">Mağazalar</a> </li>
                        <li className='flex gap-x-3 items-center hover:text-gray-100 transition-all'><a href="/">Ələqə</a> </li>
                    </ul>
                </div>
                <div className='flex flex-col md:py-16 py-8'>
                    <ul className='md:mt-4 text-gray-300 flex flex-col gap-2'>
                        <li className='flex gap-x-3 items-center'><span><BsTelephone/></span> +99470 xxx xxxx</li>
                        <li className='flex gap-x-3 items-center'><span><GoLocation/></span> Baku </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer