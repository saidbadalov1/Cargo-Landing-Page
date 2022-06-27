import React, { useState } from 'react'

const Calculator = () => {

    const [kg, setKg] = useState("0");
    const [price, setPrice] = useState("0.00");

    const calculate = () => {
        setPrice(kg * 4.99)
    }

  return (
    <div className='w-full h-[500px] bg-orange-600'>
        <div className='container mx-auto h-[500px] px-3'>
            <div className='flex justify-between items-center h-[500px] py-auto'>
                <div className='w-[300px] hidden md:block'>
                    <h1 className='text-3xl text-white py-6'>Öncədən Hesabla!</h1>
                    <p className='text-gray-100'>Türkiyədən çatdırılma qiyməti 4.99$ təşkil edir! Qİymət 1 kq üçün nəzərdə tutulub.</p>
                </div>
                <div className='calculator w-[300px] mx-auto md:mx-1 flex flex-col h-[400px] border-0 rounded-lg overflow-hidden'>
                    <div className='calc text-center py-4 text-black bg-white'>
                        <h1 className='text-center text-xl opacity-40'>Cəmi məbləğ</h1>
                        <p className='py-2 text-3xl'>{Number(price).toFixed(3)}$</p>
                    </div>
                    <div className='calc py-4 text-white bg-black px-5 h-[300px] py-auto flex flex-col gap-6 justify-center items-center text-center'>
                        <input type="number" placeholder='En (m)' className='border-0 outline-none w-full rounded-lg p-1 mt-3 text-black' />
                        <input value={kg} onChange={e => setKg(e.target.value)} type="number" placeholder='Kg' className='border-0 outline-none w-full rounded-lg p-1 text-black' />
                        <button onClick={calculate} className='font-semibold bg-red-500 p-2 rounded-md w-full hover:bg-red-700'>Hesabla</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Calculator