import React from 'react'
import robot from "../assets/img/robot.png";
import card from "../assets/img/card_img2.png";

const Sucess = () => {
  return (
    <div className=' px-4'>
        <div className="container mx-auto max-w-[1320px] mt-[20px] md:mt-28 lg:mt-44">
            <div className=' flex flex-wrap items-center mb-9 xl:mb-16'>
                <div className=' w-[100%] xl:w-[40%] flex justify-center xl:justify-between'>
                    <img src={robot} alt="" />
                </div>
                <div className=' w-[100%] xl:w-[60%] mt-8'>
                   <div className=' text-center xl:text-start'>
                        <p className=' text-[16px] font-normal ff_light text-[#868687]'>HAVE YOU SEEN OUR MASCOT?</p>
                        <h2 className=' font-normal text-[48px] text-black ff_konexy'>Success Guides</h2>
                   </div>
                    <div className=' flex gap-[8px] sm:gap-[15px] mt-[20px]'>
                        <button className=' hover:text-white text-[#6022ea] hover:border-transparent duration-700 text-[16px] font-semibold ff_light hover:bg-[#6022ea] px-[10px] sm:px-[16px] md:px-[16px] py-[8px] rounded-full border border-[#6022ea] '>Category-1</button>
                        <button className=' hover:text-white text-[#6022ea] hover:border-transparent duration-700 text-[16px] font-semibold ff_light hover:bg-[#6022ea] px-[10px] sm:px-[16px] md:px-[16px] py-[8px] rounded-full border border-[#6022ea] '>Category-2</button>
                        <button className=' hover:text-white text-[#6022ea] hover:border-transparent duration-700 text-[16px] font-semibold ff_light hover:bg-[#6022ea] px-[10px] sm:px-[16px] md:px-[16px] py-[8px] rounded-full border border-[#6022ea] '>Category-3</button>
                        <button className=' hidden sm:block hover:text-white text-[#6022ea] hover:border-transparent duration-700 text-[16px] font-semibold ff_light hover:bg-[#6022ea] px-[16px] py-[8px] rounded-full border border-[#6022ea] '>Category-4</button>
                    </div>
                    <div className=' flex flex-wrap mt-[33px] gap-[24px]'>
                        <div className=' w-[100%] sm:w-[48%] md:w-[48%] lg:w-[32%] md:h-[20%] xl:h-[20%] xl:w-[30%] rounded-[16px] border border-[#e3e3e3] shadow-4xl px-[16px] py-[15px] cursor-pointer boxShadow_6'>
                            <img className=' w-[100%]' src={card} alt="" />
                            <p className=' text-[24px] font-semibold text-black ff_medium pt-[17px]'>Sit diam metus</p>
                            <p className=' text-[#4d4d4d] text-[16px] font-normal ff_light'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                            <ul>
                                <li><a href="" className=' text-[#6022ea] text-[16px] font-semibold ff_medium pt-[8px] relative after:left-[50%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Read More....</a></li>
                            </ul>
                        </div>
                        <div className=' w-[100%] sm:w-[48%] md:w-[48%] lg:w-[32%] md:h-[20%] xl:h-[20%] xl:w-[30%] rounded-[16px] border border-[#e3e3e3] shadow-4xl px-[16px] py-[15px] cursor-pointer boxShadow_6'>
                            <img className=' w-[100%]' src={card} alt="" />
                            <p className=' text-[24px] font-semibold text-black ff_medium pt-[17px]'>Sit diam metus</p>
                            <p className=' text-[#4d4d4d] text-[16px] font-normal ff_light'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                            <ul>
                                <li><a href="" className=' text-[#6022ea] text-[16px] font-semibold ff_medium pt-[8px] relative after:left-[50%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Read More....</a></li>
                            </ul>
                        </div>
                        <div className=' w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31%] md:h-[20%] xl:h-[20%] xl:w-[30%] rounded-[16px] border border-[#e3e3e3] shadow-4xl px-[16px] py-[15px] cursor-pointer boxShadow_6'>
                            <img className=' w-[100%]' src={card} alt="" />
                            <p className=' text-[24px] font-semibold text-black ff_medium pt-[17px]'>Sit diam metus</p>
                            <p className=' text-[#4d4d4d] text-[16px] font-normal ff_light'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                            <ul>
                                <li><a href="" className=' text-[#6022ea] text-[16px] font-semibold ff_medium pt-[8px] relative after:left-[50%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Read More....</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[100%] h-[200px] md:h-[180px] lg:h-[200px] rounded-[17px] bg-gradient-radial py-[10px] md:py-[25px] px-[20px] md:px-[38px] translate-y-0 md:translate-y-16 shadow-5xl mb-6'>
                <div className=' flex flex-wrap justify-between items-center'>
                    <div>
                        <p className=' font-normal text-[38px] md:text-[48px] text-white ff_konexy'>Have you</p>
                        <p className=' font-medium md:font-semibold text-[16px] lg:text-[24px] text-white ff_medium'>read our study about Speed and Performance in <span className=' lg:block'> WordPress?</span></p>
                    </div>
                    <div className=' mt-4 md:mt-0'>
                        <button className=' px-[38px] py-[15px] text-[16px] font-semibold text-[#6022ea] ff_inter rounded-[100px] bg-white hover:bg-[#6022ea] duration-700 hover:text-white'>Check It Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sucess