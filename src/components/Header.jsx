import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsCart2 } from "react-icons/bs"
import { BsTelephoneFill } from "react-icons/bs"

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className='w-full h-24 sm:border-b-2 sticky '>
            <div className="container mx-auto header flex justify-between h-24">
                <div className='flex items-center justify-center p-3 gap-5'>
                    <div onClick={handleClick} className='sm:hidden cursor-pointer outline-none z-30'>
                        <GiHamburgerMenu size={30} color={open ? "orange" : "black"}  />
                    </div>
                    <img src={Logo} className="sm:w-44 w-24 z-40 hidden sm:block" alt="Logo" />
                </div>
                <div className='flex items-center justify-center p-3'>
                    <img src={Logo} className="sm:w-48 w-24 sm:hidden" alt="Logo" />
                </div>
                <div className='flex items-center justify-center p-3 gap-x-10'>
                    <div className='hidden items-center justify-center gap-x-1 sm:flex cursor-pointer outline-none'>
                        <span className='text-orange-600'><BsTelephoneFill size={20} /></span>
                        <h1 className='phone sm:text-lg flex font-medium sm:block text-orange-600'>+994 xx xxx xxxx</h1>
                    </div>
                    <div className='flex cursor-pointer outline-none'>
                        <BsCart2 size={30} />
                        <span className='badge bg-orange-300 text-xs rounded-full h-5 p-2 w-5 flex justify-center items-center text-bold text-white'>0</span>
                    </div>
                    <div className='hidden sm:flex'>
                        <button className='p-2 bg-orange-600 font-medium outline-none hover:bg-orange-700 transition-all duration-900 text-white rounded-lg'>Sifariş et</button>
                    </div>
                </div>

                {/* Sidebar */}

                <div className={open ? "bg-white absolute z-20  left-0 bottom-0 top-0 h-[100vh] w-full flex flex-col items-center overflow-hidden" : "hidden"}>
                    <div className='absolute top-[10%] flex flex-col gap-y-5 justify-center items-center'>
                    <img src={Logo} className="w-48 mb-10" alt="Logo" />
                        <div className='login flex gap-x-10'>
                            <button className='p-2 w-[100px] border-2 border-orange-600 text-black text-semibold rounded-md'>
                                Qeydiyyat
                            </button>
                            <button className='p-2 w-[100px] border-2 border-orange-600 text-black text-semibold rounded-md'>
                                 Giriş
                            </button>
                        </div>
                        <hr className='border-2 mt-2 border-orange-600 w-full' />
                        <div>
                            <ul className='flex flex-col justify-center text-gray-500 items-center mt-10 text-3xl p-3 gap-y-10'>
                                <li>
                                    <a className='hover:text-gray-800 transition-all' href="/">Tariflər</a>
                                </li>
                                <li>
                                    <a className='hover:text-gray-800 transition-all' href="/">Haqqımızda</a>
                                </li>
                                <li>
                                    <a className='hover:text-gray-800 transition-all' href="/">Xəbərlər</a>
                                </li>
                                <li>
                                    <a className='hover:text-gray-800 transition-all' href="/">Mağazalar</a>
                                </li>
                                <li>
                                    <a className='hover:text-gray-800 transition-all' href="/">Əlaqə</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header