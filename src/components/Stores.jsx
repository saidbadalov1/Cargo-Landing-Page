import React from 'react'
import Slider from "react-slick"

const Stores = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      

    return (
        <div className='w-full py-16 overflow-hidden'>
            <div className='container mx-auto text-black px-3'>
            <h1 className='mb-10 text-3xl font-extrabold'>Mağazalar</h1>
            <p className='mt-[-30px] text-gray-400'>155 fərqli mağaza!</p>
            <div className=''>
            <Slider {...settings}>
          <div>
            <img src="https://trendex.az/frontend/web/uploads//images/store/store-1.png" className='w-[200px]' alt="trendyol" />
          </div>
          <div>
            <img src="https://trendex.az/frontend/web/uploads//images/store/store-1.png" className='w-[200px]' alt="trendyol" />
          </div>
          <div>
            <img src="https://trendex.az/frontend/web/uploads//images/store/store-1.png" className='w-[200px]' alt="trendyol" />
          </div>
          <div>
            <img src="https://trendex.az/frontend/web/uploads//images/store/store-1.png" className='w-[200px]' alt="trendyol" />
          </div>
          <div>
            <img src="https://trendex.az/frontend/web/uploads//images/store/store-1.png" className='w-[200px]' alt="trendyol" />
          </div>
          <div>
            <img src="https://trendex.az/frontend/web/uploads//images/store/store-1.png" className='w-[200px]' alt="trendyol" />
          </div>
        </Slider>
            </div>
            </div>
        </div>
    )
}

export default Stores