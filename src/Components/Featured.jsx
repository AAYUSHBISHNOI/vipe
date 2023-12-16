import React from 'react'
import imgme from "../assets/img/image.png";
import imgme1 from "../assets/img/image1.png";
import imgme2 from "../assets/img/image2.png";
import imgme3 from "../assets/img/image3.png";
import imgme4 from "../assets/img/image4.png";
import imgme5 from "../assets/img/image5.png";
import Slider from "react-slick";

const Featured = () => {
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
    <div className=' bg-[#f6f6f6] px-4'>
        <div className="container mx-auto max-w-[1320px]">
            <h2 className=' ff_konexy font-normal text-[40px] md:text-[48px] text-black pt-[30px] md:pt-[105px]'>Featured on</h2>
            <Slider {...settings} className=' flex items-center justify-between mt-[20px] md:mt-[88px] mb-[20px] md:pb-[92px]'>
            <div>
                    <img className=' cursor-pointer' src={imgme} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme1} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme2} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme3} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme4} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme5} alt="" />
                </div>
            <div>
                    <img className=' cursor-pointer' src={imgme} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme1} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme2} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme3} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme4} alt="" />
                </div>
                <div>
                    <img className=' cursor-pointer' src={imgme5} alt="" />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Featured