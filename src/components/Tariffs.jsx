import React from 'react'

const Tariffs = () => {
  return (
    <div className='w-full pt-8 pb-4'>
        <div className='container mx-auto text-black px-3'>
            <h1 className='mb-10 text-3xl font-extrabold'>Tariflərimiz</h1>
            <p className='mt-[-30px] mb-[30px] text-gray-400'>4 fərqli tarif!</p>
            <div className='grid lg:grid-cols-4 grid-cols-1 text-center justify-center md:pb-10 gap-8'>
                <div className='border-2 h-[300px] lg:h-[400px] py-4 text-xl border-gray-200 font-bold rounded-xl relative overflow-hidden'>
                    <h1>Econom</h1>
                    <hr className='py-1 border-bg-gradient-to-r from-purple-500 to-pink-600 border-0 bg-gradient-to-r from-purple-500 to-pink-600 mt-3' />
                    <p className='text-sm py-4 text-center md:pb-6 px-4 font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, voluptates error aliquam qui deleniti provident! Alias architecto eos veritatis assumenda placeat libero aliquid asperiores, velit, dolores eaque ab? Sequi temporibus nihil minima, distinctio voluptate qui quos veritatis aliquid ducimus ea?</p>
                    <button className='border-0 absolute hover:opacity-100 opacity-90 transition-all bottom-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-600 p-2 py-4 text-md font-medium text-white'>Tarifi seç</button>
                </div>
                <div className='border-2 h-[300px] lg:h-[400px] py-4 text-xl border-gray-200 font-bold rounded-xl relative overflow-hidden'>
                    <h1>Standart</h1>
                    <hr className='py-1 border-bg-gradient-to-r from-pink-600 border-0 to-purple-500 bg-gradient-to-r from-pink-600 to-purple-500 mt-3' />
                    <p className='text-sm py-4 text-center md:pb-6 px-4 font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, voluptates error aliquam qui deleniti provident! Alias architecto eos veritatis assumenda placeat libero aliquid asperiores, velit, dolores eaque ab? Sequi temporibus nihil minima, distinctio voluptate qui quos veritatis aliquid ducimus ea?</p>
                    <button className='border-0 absolute bottom-0 hover:opacity-100 opacity-90 transition-all left-0 w-full bg-gradient-to-r from-pink-600 to-purple-500 p-2 py-4 text-md font-medium text-white'>Tarifi seç</button>
                </div>
                <div className='border-2 h-[300px] lg:h-[400px] py-4 text-xl border-gray-200 font-bold rounded-xl relative overflow-hidden'>
                    <h1>Exclusive</h1>
                    <hr className='py-1 border-bg-gradient-to-r from-purple-500 to-pink-600 border-0 bg-gradient-to-r from-purple-500 to-pink-600 mt-3' />
                    <p className='text-sm py-4 text-center md:pb-6 px-4 font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, voluptates error aliquam qui deleniti provident! Alias architecto eos veritatis assumenda placeat libero aliquid asperiores, velit, dolores eaque ab? Sequi temporibus nihil minima, distinctio voluptate qui quos veritatis aliquid ducimus ea?</p>
                    <button className='border-0 absolute bottom-0 hover:opacity-100 opacity-90 transition-all left-0 w-full bg-gradient-to-r from-purple-500 to-pink-600 p-2 py-4 text-md font-medium text-white'>Tarifi seç</button>
                </div>
                <div className='border-2 h-[300px] lg:h-[400px] py-4 text-xl border-gray-200 font-bold rounded-xl relative overflow-hidden'>
                    <h1>Korperativ</h1>
                    <hr className='py-1 border-bg-gradient-to-r from-pink-600 to-purple-500 border-0 bg-gradient-to-r from-pink-600 to-purple-500 mt-3' />
                    <p className='text-sm py-4 text-center md:pb-6 px-4 font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, voluptates error aliquam qui deleniti provident! Alias architecto eos veritatis assumenda placeat libero aliquid asperiores, velit, dolores eaque ab? Sequi temporibus nihil minima, distinctio voluptate qui quos veritatis aliquid ducimus ea?</p>
                    <button className='border-0 absolute bottom-0 left-0 w-full bg-gradient-to-r from-pink-600 to-purple-500 p-2 py-4 text-md font-medium text-white'>Tarifi seç</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tariffs