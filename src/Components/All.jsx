import React from 'react'
import { Tick, Tick1 } from './Mysvg'
import girl from "../assets/img/girl.png";

const All = () => {
  return (
    <div className=' bg-black px-4 relative'>
        <div className="container mx-auto max-w-[1320px] pb-[81px]">
            <div className=' flex flex-wrap justify-between pt-[30px] md:pt-[81px] pb-[30px] md:pb-[50px] xl:pb-[150px]'>
                <div className=' w-[100%] lg:w-[35%]'>
                    <h2 className=' font-normal text-[24px] md:text-[40px] lg:text-[30px] xl:text-[40px] text-white ff_konexy'>All Vipe Studio <span className=' xl:block'>WordPress</span> <span className=' xl:block'>services	include:</span></h2>
                </div>
                <div className=' w-[100%] md:w-[50%] lg:w-[25%] mt-5 lg:mt-0'>
                    <p className=' text-white text-[16px] md:text-[24px] font-semibold ff_medium'>By Industry</p>
                    <div className=' flex items-center gap-[10px] pt-[10px] md:pt-[23px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Lorem in elementum pellentesque</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Molestie cursus praesent mi</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Leo sed viverra cras</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Laoreet feugiat ut at</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Risus aliquam molestie viverra</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Diam enim pulvinar velit</p>
                    </div>
                </div>
                <div className=' w-[100%] md:w-[50%] lg:w-[25%] mt-5 lg:mt-0'>
                    <p className=' text-white text-[16px] md:text-[24px] font-semibold ff_medium'>By Services</p>
                    <div className=' flex items-center gap-[10px] pt-[10px] md:pt-[23px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Accumsan, dui a semper</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Interdum malesuada vulputate neque</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Nullam non a, morbi</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Arcu morbi leo eu</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Viverra venenatis, in ornare</p>
                    </div>
                    <div className=' flex items-center gap-[10px] pt-[10px]'>
                        <Tick/>
                        <p className=' text-[16px] text-white font-normal ff_light mb-0'>Erat id aliquam habitant</p>
                    </div>
                </div>
            </div>
            <div className='w-[187px] h-[187px] bg-[#FA00FF] absolute rounded-full blur-[90px] leftt-[0%] top-[53%] hidden sm:block'></div>
            <div className='w-[187px] h-[187px] bg-[#6022ea] absolute rounded-full blur-[90px] leftt-[0%] top-[43%] hidden sm:block'></div>
            <div className='w-[187px] h-[187px] bg-[#FA00FF] absolute rounded-full blur-[90px] right-[12%] bottom-[10%] hidden sm:block'></div>
            <div className='w-[187px] h-[187px] bg-[#6022ea] absolute rounded-full blur-[90px] right-[15%] bottom-[6%] hidden sm:block'></div>
            <div className=' w-[100%] h-[650px] sm:h-[400px] md:h-[500px] lg:h-[520px] relative xl:h-[358px] bg-black rounded-[25px] px-[20px] md:px-[32px] py-[30px] z-20'>
               <div className=' flex flex-wrap justify-between'>
                    <div className=' w-[100%] xl:w-[30%]'>
                        <p className=' text-[18px] md:text-[26px] lg:text-[35px] text-white font-normal ff_konexy'>Not Sure <span className=' xl:block'> which service</span><span className=' xl:block'> you need</span> <span className=' xl:block'>yet?</span></p>
                        <button className=' text-[16px] font-semibold text-white ff_light px-[24px] py-[10px] rounded-[100px] bg-[#6022ea] mt-[15px] md:mt-[38px] border-transparent hover:border-[#6022ea] hover:border border hover:shadow-5xl duration-700 hover:bg-transparent'>Schedule An Appointment</button>
                    </div>
                    <div className=' mt-5 xl:mt-0 w-[100%] sm:w-[50%] md:w-[70%] xl:w-[30%] '>
                        <p className=' text-[24px] font-bold text-white ff_light'>20-m free consultation that will <span className=' lg:block'>help us identifyif  you need</span></p>
                        <div className=' flex items-center gap-[10px] pt-4 md:pt-[25px]'>
                            <Tick1/>
                            <p className=' font-normal text-[16px] text-white ff_light mb-0'>Technical Description & Discovery</p>
                        </div>
                        <div className=' flex items-center gap-[10px] pt-[8px] md:pt-[15px]'>
                            <Tick1/>
                            <p className=' font-normal text-[16px] text-white ff_light mb-0'>Custom WordPress Development</p>
                        </div>
                        <div className=' flex items-center gap-[10px] pt-[8px] md:pt-[15px]'>
                            <Tick1/>
                            <p className=' font-normal text-[16px] text-white ff_light mb-0'>Support & Maintenance</p>
                        </div>
                        <div className=' flex items-center gap-[10px] pt-[8px] md:pt-[15px]'>
                            <Tick1/>
                            <p className=' font-normal text-[16px] text-white ff_light mb-0'>Other WordPress Service	</p>
                        </div>
                    </div>
                    <div className=' mt-5 xl:mt-0 w-[100%] sm:w-[47%] md:w-[30%] xl:w-[25%]'>
                        <img className=' rounded-[24px]' src={girl} alt="" />
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default All