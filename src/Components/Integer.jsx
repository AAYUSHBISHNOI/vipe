import React from 'react'
import { Card1, Card2, Card3 } from './Mysvg'

const Integer = () => {
  return (
    <div className=' px-4'>
        <div className="container mx-auto max-w-[1320px]">
            <h2 className=' text-black ff_konexy text-[28px] md:text-[48px] font-normal pt-[10px] md:pt-[40px] lg:pt-[97px]'>Integer et nisl non</h2>
            <div className=' flex flex-wrap justify-between pt-[20px] md:pt-[54px] pb-[50px] lg:pb-[129px]'>
                <div className='w-[100%] sm:w-[48%] lg:w-[31%]'>
                    <div className=' pt-[40px] pb-[38px] px-[18px] lg:h-[92%] flex flex-col items-center justify-center text-center rounded-[16px] border-[1px] border-[#e5e5e5] cursor-pointer hover:border-transparent boxShadow_5 duration-700'>
                        <Card1/>
                        <p className=' font-semibold text-[24px] lg:text-[20px] text-[#0d0d0d] ff_inter pt-[41px]'>Enterprise WordPress <span className=' block'>Solutions</span></p>
                        <p className=' text-[#4d4d4d] text-[16px] font-normal ff_medium pt-[15px]'>Pretium, a et sapien non nunc libero. Id dolor <span className=' xl:block'> sed quis convallis turpis purus feugiat nibh eu.</span> <span className=' xl:block'>Auctor cras hac ac, sociis diam montes, turpis</span><span className=' xl:block'>commodo elit .</span></p>
                        <ul>
                            <li><a href="" className=' font-semibold text-[16px] text-[#6022ea] ff_medium pt-[20px] relative after:left-[50%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Learn More</a></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[100%] sm:w-[48%] lg:w-[31%] mt-5 sm:mt-0 '>
                    <div className=' pt-[40px] pb-[38px] px-[18px] h-[100%] lg:h-[92%] flex flex-col items-center justify-center text-center rounded-[16px] border-[1px] border-[#e5e5e5] cursor-pointer hover:border-transparent boxShadow_5 duration-700'>
                        <Card2/>
                        <p className=' font-semibold text-[19px] md:text-[24px] lg:text-[20px] text-[#0d0d0d] ff_inter pt-[41px]'>Small to Mid Size Business <span className=' block'>Development</span></p>
                        <p className=' text-[#4d4d4d] text-[16px] font-normal ff_medium pt-[15px]'>Et nunc fermentum id amet<span className=' xl:block'>elementum. Eget ac ultrices </span> <span className=' xl:block'> blandit aenean amet. </span><span className=' xl:block'> aliquam neque, cursus.</span></p>
                        <ul>
                            <li><a href="" className=' font-semibold text-[16px] text-[#6022ea] ff_medium pt-[20px] relative after:left-[50%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Learn More</a></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[100%] sm:w-[48%] lg:w-[31%] mt-5 lg:mt-0 '>
                    <div className=' h-[400px] pt-[40px] pb-[18px] px-[18px] lg:h-[92%] flex flex-col items-center justify-center text-center rounded-[16px] border-[1px] border-[#e5e5e5] cursor-pointer hover:border-transparent boxShadow_5 duration-700'>
                        <Card3/>
                        <p className=' font-semibold text-[24px] lg:text-[20px] text-[#0d0d0d] ff_inter pt-[41px]'>Support & Maintenance</p>
                        <p className=' text-[#4d4d4d] text-[16px] font-normal ff_medium pt-[15px]'>Ac donec ipsum fringilla tortor, consectetur <span className=' xl:block'> etiam sociis amet quis. Viverra volutpat</span> <span className=' xl:block'> pretium non in fusce tellus sed urna. Pharetra</span><span className=' xl:block'>ullamcorper et donec aliquam.</span></p>
                        <ul>
                            <li><a href="" className=' font-semibold text-[16px] text-[#6022ea] ff_medium pt-[20px] relative after:left-[50%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Learn More</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Integer