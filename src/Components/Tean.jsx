import React from 'react'
import girl from "../assets/img/business.png";

const Tean = () => {
  return (
    <div className=' bg-[#f6f6f6] px-4 pb-[60px] md:pb-[10px]'>
        <div className="container mx-auto max-w-[1320px] pt-[20px]">
            <div className=' flex flex-wrap items-center'>
                <div className=' w-[100%] lg:w-[50%] xl:w-[50%]'>
                    <h2 className=' text-[28px] md:text-[34px] lg:text-[38px] xl:text-[48px] font-normal text-black ff_konexy'>Team Full of Stars	</h2>
                    <p className=' text-[16px] font-normal text-black ff_light'>Suspendisse consequat egestas arcu et et. Viverra quis euismod <span className=' lg:block'>neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, </span> <span className=' lg:block'>ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor</span><span className=' lg:block'> sollicitudin risus eget euismod in bibendum turpis. </span></p>
                    <button className=' font-semibold text-[16px] boxShadow_4 text-white ff_light px-[24px] py-[10px] bg-[#6022ea] rounded-[100px] mt-[32px] border-transparent hover:border-[#6022ea] hover:border border hover:shadow-5xl duration-700 hover:bg-transparent hover:text-black'>Explore</button>
                </div>
                <div className=' w-[100%] lg:w-[50%] xl:w-[50%] flex justify-center'>
                    <img className=' rounded-[32px] w-[100%] md:w-[80%] translate-y-7 md:translate-y-16 lg:hover:scale-110 duration-700' src={girl} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tean