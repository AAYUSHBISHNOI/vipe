import React from 'react'
import men from "../assets/img/card_img.png";

const Agile = () => {
  return (
    <div className=' px-4'>
        <div className="container mx-auto max-w-[1320px] mb-[30px] md:mb-[40px] lg:mb-[110px]">
            <div className=' flex flex-wrap mt-[20px] md:mt-[67px] items-center'>
                <div className=' w-[100%] lg:w-[50%]'>
                    <img className=' w-[90%]' src={men} alt="" />
                </div>
                <div className=' w-[100%] lg:w-[50%] mt-5'>
                    <h2 className=' text-black font-normal text-[17px] md:text-[28px] lg:text-[36px] xl:text-[48px] ff_konexy leading-normal'><span className=' text-[#6022ea]'>Agile WordPress</span><span className=' lg:block'> Development Project</span> <span className=' lg:block'>management</span></h2>
                    <p className=' text-[#4c4c4c] font-normal txt-[16px] ff_light pt-[12px]'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus <span className=' xl:block'>bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu </span><span className=' xl:block'>dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in</span><span className=' xl:block'> bibendum turpis.</span></p>
                    <button className=' font-semibold text-[16px] boxShadow_4 text-white ff_light px-[24px] py-[10px] bg-[#6022ea] rounded-[100px] mt-[32px] border-transparent hover:border-[#6022ea] hover:border border hover:shadow-5xl duration-1000 hover:bg-transparent hover:text-black'>Explore</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agile