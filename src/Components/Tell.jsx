import React from 'react'
import { Refresh, Search } from './Mysvg'

const Tell = () => {
  return (
    <div className=' bg-[#000] opacity-[0.98] px-4'>
        <div className=' container mx-auto max-w-[1320px] pt-6 md:pt-[64px] pb-[35px] md:pb-[63px]'>
            <div className=' flex flex-wrap items-center justify-between'>
                <div className=' w-[100%] md:w-[50%] lg:w-[45%]'>
                    <h2 className=' text-white text-[36px] font-normal ff_konexy'>Tell us more....</h2>
                    <p className=' text-white text-[16px] font-normal ff_medium'>Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue in quis. <span className=' xl:block'>Magna vel orci sem neque fringilla et lectus laoreet.</span></p>
                </div>
                <div className=' w-[100%] md:w-[50%] lg:w-[48%] mt-5'>
                    <div className="max-w-[520px] w-full bg-[#252525] py-5 ps-[33px] pe-[31px] rounded-[80px] flex">
                        <input type="text" placeholder="What do you need assistance with?" className=" bg-transparent outline-0 placeholder:text-[#BDBDBE] ff-gilroy-regular leading-[150%] w-full  text-white opacity-[0.7] pe-[24px]" /><Search />
                    </div>
                    <div className=' flex gap-[20px] lg:gap-[80px] xl:gap-48 pt-3'>
                        <p className=' font-normal text-[14px] md:text-[16px] text-white ff_medium flex items-center gap-2'><Refresh/>or send us an inquire?	</p>
                        <ul>
                            <li><a href="learn" className=' font-normal text-white text-[14px] md:text-[16px] ff_medium relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Learn more about...</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Tell