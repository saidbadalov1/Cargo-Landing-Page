import React from 'react';
import {IoIosLogIn} from "react-icons/io";
import {AiOutlineUserAdd} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='w-full h-16 hidden sm:block'>
            <div className="container mx-auto h-16 text-gray-500 px-3 flex justify-between">
                <ul className='flex gap-x-6 h-16 text-sm sm:text-lg items-center'>
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
                <div className='flex gap-x-6 h-16 items-center text-white text-sm font-medium'>
                    <button className='p-2 bg-orange-600 flex items-center justify-center gap-x-1 hover:bg-orange-800 transition-all rounded-lg w-[100px]'>
                        Giriş <span><IoIosLogIn size={18}/> </span>
                    </button>
                    <button className='p-2 bg-orange-600 flex items-center justify-center gap-x-1 rounded-lg w-[100px] hover:bg-orange-700 transition-all'>
                        Qeydiyyat <span><AiOutlineUserAdd size={18}/> </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar