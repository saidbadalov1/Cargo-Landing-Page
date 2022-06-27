import React from 'react'
import {TbDiscount} from "react-icons/tb"

const Announcement = () => {
    return (
        <div className='w-full h-8 bg-orange-600'>
            <div className="container mx-auto header text-xs flex justify-center  items-center sm:text-[15px] text-white h-8 gap-x-2 text-center">
                <p>
                    01.10.2022 tarixinə qədər kargo qiymətlərinə 50% endirim!
                </p>
                <span>
                    <TbDiscount size={20}/>
                </span>
            </div>
        </div>
    )
}

export default Announcement