import React from 'react'
import imgmy from "../assets/img/image6.png";
import imgmy1 from "../assets/img/image7.png";
import imgmy2 from "../assets/img/image8.png";
import imgmy3 from "../assets/img/image9.png";
import imgmy4 from "../assets/img/image10.png";
import imgmy5 from "../assets/img/image11.png";
import Slider from "react-slick";

const Long = () => {
    const settings = {
        dots: false,
        arrows:false,
        slidesToShow: 6,
        autoplay:true,
        cssEase:"linear",
        speed:3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false
            }
          }
        ]
      };
  return (
    <div className='bg-[#f6f6f6] px-4'>
        <div className="container mx-auto max-w-[1320px]">
            <h2 className=' text-[23px] md:text-[34px] lg:text-[48px] font-normal text-black  ff_konexy pt-[20px] md:pt-[40px] lg:pt-[69px]'>Long Term <span className=' xl:block'>WordPress Partner</span></h2>
            <p className=' text-[#313131] font-normal text-[16px] ff_light pt-[20px]'>Our motto is the long-term partnership – we will not only develop your perfect website, but will <span className=' lg:block'>be behind you through the whole process. They already trusted us:</span></p>
            <Slider {...settings} className=' flex items-center justify-between mt-[20px] md:mt-[68px] pb-[20px] md:pb-[50px] lg:pb-[92px]'>
                <div>
                    <img src={imgmy} alt="" />
                </div>
                <div>
                    <img src={imgmy1} alt="" />
                </div>
                <div>
                    <img src={imgmy2} alt="" />
                </div>
                <div>
                    <img src={imgmy3} alt="" />
                </div>
                <div>
                    <img src={imgmy4} alt="" />
                </div>
                <div>
                    <img src={imgmy5} alt="" />
                </div>
                <div>
                    <img src={imgmy} alt="" />
                </div>
                <div>
                    <img src={imgmy1} alt="" />
                </div>
                <div>
                    <img src={imgmy2} alt="" />
                </div>
                <div>
                    <img src={imgmy3} alt="" />
                </div>
                <div>
                    <img src={imgmy4} alt="" />
                </div>
                <div>
                    <img src={imgmy5} alt="" />
                </div>
            </Slider>
        </div> 
    </div>
  )
}

export default Long