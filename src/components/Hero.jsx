import React from 'react'
import Plane from "../assets/plane.png"
const Hero = () => {

  return (
    <div className='w-full bg-gradient-to-r from-purple-500 to-pink-600 h-[600px]'>
      <div className='container mx-auto p-3 h-[600px] w-full justify-center items-center'>
          <div className='flex flex-col sm:flex-row sm:justify-between text-white items-center'>
              <div className='flex justify-center  sm:h-[600px] flex-col sm:w-[500px] px-4 '>
                <h1 className='sm:text-[36px] mb-2 text-3xl font-medium'>Sürətli Çatdırılma</h1>
                <hr className='sm:w-[300px] sm:pb-2 mb-8 rounded-md'/>
                <p className='flex text-center sm:text-left items-center text-gray-200 text-md sm:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nisi suscipit cupiditate molestiae. Perferendis atque labore illo. Iusto perspiciatis vel distinctio illo? Voluptates minus hic dicta, maxime aliquam sit. Quibusdam deserunt alias, nobis sit atque dolorum quo earum amet vel?</p>
              </div>
              <div className='flex justify-center items-center sm:h-[600px] mt-16'>
                <img src={Plane} className='w-[500px] px-4' alt="plane" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero