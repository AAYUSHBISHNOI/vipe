import React from 'react'
import { useState } from 'react'
import logo from "../assets/img/Logo.svg";
import { Dropdown, Earth, Search, Video } from './Mysvg';
import main from "../assets/img/hero_img.png";
import trust from "../assets/img/trust.png";
import star from "../assets/img/star.png";
import { Close, Open } from './Mysvg';

const Myheader = () => {
    const [show, setShow] = useState(false);
    if(show){
      document.body.classList.add("overflow-hidden")
    }else{
      document.body.classList.remove("overflow-hidden")
    }
  return (
    <div className=' bg-black flex flex-col px-4 relative'>
        <div className='w-[187px] h-[187px] bg-[#FA00FF] absolute rounded-full blur-[90px] right-[2%] lg:right-[2%] top-[50%] lg:top-[29%] hidden sm:block'></div>
        <div className='w-[187px] h-[187px] bg-[#6022ea] absolute rounded-full blur-[90px] right-[2%] lg:right-[2%] top-[50%] lg:top-[29%] hidden sm:block'></div>
        <nav className=' '>
            <div className="container mx-auto max-w-[1320px]">
                <div className=' flex items-center justify-between pt-2'>
                   <div className=' flex items-center gap-[48px]'>
                   <div>
                        <a href="headlogo"><img src={logo} alt="" /></a>
                    </div>
                    <div>
                    <ul className={`${show ? "end-0" : "right-[-100%]"} flex flex-col min-h-screen xl:min-h-fit fixed xl:static w-full xl:w-auto items-center justify-center top-0 bg-black z-[100] xl:bg-[unset] xl:flex-row right-0 gap-8 ps-0 duration-1000`}>                        
                        <li className="relative inline-block group">
                                <a href="#" aria-label="WordPresssolutionnav"
                                    className="flex gap-1 leading-6 text-white text-[16px] ff_medium font-normal mb-0">WordPress
                                    Solution <Dropdown/>
                                </a>
                                <a href="#" aria-label="dropdownone"
                                    className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start ">
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">WordPress
                                        Hosting</span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">Custom
                                        WordPress</span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 p-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">CMS
                                        to WordPress</span>
                                </a>
                        </li>
                        <li className="relative inline-block group">
                                <a href="#" aria-label="WordPresssolutionnav"
                                    className="flex gap-1 leading-6 text-white text-[16px] ff_medium font-normal mb-0">Services<Dropdown/>
                                </a>
                                <a href="#" aria-label="dropdownone"
                                    className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start">
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[7px] py-1 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">WordPress
                                        </span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[7px] py-1 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">
                                        WordPress</span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[7px] py-1 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">WordPress</span>
                                </a>
                        </li>
                        <li><a href="" className=' text-white text-[16px] ff_medium font-normal mb-0'>Portfolio</a></li>
                        <li className="relative inline-block group">
                                <a href="#" aria-label="WordPresssolutionnav"
                                    className="flex gap-1 leading-6 text-white text-[16px] ff_medium font-normal mb-0">About<Dropdown/>
                                </a>
                                <a href="#" aria-label="dropdownone"
                                    className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start">
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[7px] bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">Contact</span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[14px] bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">Gmail</span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[7px] bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">Address</span>
                                </a>
                        </li>
                        <li><a href="" className=' text-white text-[16px] ff_medium font-normal mb-0'>Blog</a></li>
                            <li className=' xl:hidden'><a href="" className='text-white text-[16px] ff_medium font-normal mb-0'>1 888 266-6917 (eu?)</a></li>
                            <button className=' xl:hidden bg-[#6022EA] rounded-[100px] px-[24px] py-[10px] text-white text-[16px] ff_medium font-semibold mb-0'>Contact Us</button>
                            <li className=' xl:hidden'><a href="" className='text-white text-[16px] ff_medium font-normal mb-0 flex items-center gap-2'><Earth/>Eng</a></li>
                    </ul>
                    </div>
                   </div>
                    <button className=' z-[120] relative xl:hidden' onClick={() => {setShow(!show); }}>{show ? <Close/>:<Open/>}</button>
                    <div className=' hidden xl:block'>
                        <ul className=' flex items-center gap-5'>
                            <li><a href="" className='text-white text-[16px] ff_medium font-normal mb-0'>1 888 266-6917 (eu?)</a></li>
                            <button className=' bg-[#6022EA] rounded-[100px] px-[24px] py-[10px] text-white text-[16px] ff_medium font-semibold mb-0 border-transparent hover:border-[#6022ea] hover:border border hover:shadow-5xl duration-700 hover:bg-transparent'>Contact Us</button>
                            <li className="relative inline-block group">
                                <a href="#" aria-label="WordPresssolutionnav"
                                    className="flex gap-1 leading-6 text-white text-[16px] ff_medium font-normal mb-0"><Earth/>Eng<Dropdown/>
                                </a>
                                <a href="#" aria-label="dropdownone"
                                    className=" flex-col gap-2 z-[1] absolute hidden overflow-auto group-hover:flex duration-700 w-full items-start">
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[19px] py-1 mt-2 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">Hindi</span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[10px] py-1 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">German</span>
                                    <span
                                        className=" text-white ff_gilroy font-normal text-base leading-6 px-[15px] py-1 bg-[#6f6f6f] hover:bg-white hover:text-black duration-300 finish">French</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <section className=' flex grow pt-[80px] md:pt-[180px] lg:pt-[158px] pb-10 md:pb-[70px] lg:pb-[137px]'>
            <div className="container mx-auto max-w-[1320px] flex justify-center">
                <div className=' flex flex-wrap items-center'>
                    <div className='w-[100%] xl:w-[51%]'>
                       <div className=' flex gap-3 items-center'>
                        <div className=' h-[162px] sm:h-[100px] md:h-[201px] w-[7px] bg-[#6022EA]'></div>
                        <h1 className=' font-normal text-[39px] md:text-[72px] xl:text-[66px] 2xl:text-[72px] text-white ff_konexy leading-[60px] md:leading-[76px]'>WordPress Development Agency</h1>
                       </div>
                       <p className=' font-medium text-[24px] text-white ff_medium pt-4'>for Enterprise + Friendly Team	</p>
                       <p className=' text-[#b2b2b2] font-normal text-[16px] ff_medium pt-[22px]'>Vipe Studio is a WordPress Agency for development - a long-term partner for <span className=' lg:block'>any WordPress service. Websites and,online shops development, maintenance</span><span className=' lg:block'> and customization is what we do best.</span></p>
                       <div className=' mt-[27px] flex items-center gap-[34px]'>
                         <button className=' bg-[#6022EA] rounded-[100px] px-[23px] md:px-[40px] py-[12px] text-white text-[12px] :text-[16px] ff_medium font-medium md:font-semibold mb-0 border-transparent hover:border-[#6022ea] hover:border border hover:shadow-5xl duration-700 hover:bg-transparent' >Get Started</button>
                         <button className=' text-white font-normal text-[12px] md:text-[16px] ff_medium flex items-center gap-4 bg-transparent hover:bg-[#6022EA] rounded-[100px] px-[20px] py-[8px] duration-1000'><Video/> What is Vipe? (1min)</button>
                       </div>
                    </div>
                    <div className=' w-[100%] xl:w-[40%] relative pt-8 z-10'>
                    <div className='w-[187px] h-[187px] bg-[#FA00FF] absolute rounded-full blur-[90px] right-[45%] top-[45%] hidden z-[-1] lg:block'></div>
                    <div className=' w-[187px] h-[187px] bg-[#6022ea] absolute rounded-full blur-[90px] right-[55%] top-[70%] hidden z-[-1] sm:block'></div>
                        <img className=' rounded-[22px] max-xl:w-full 2xl:max-w-[720px]' src={main} alt="" />
                        <div className=' h-[110px] w-[200px] md:h-[130px] lg:h-[119px] mycard md:w-[219px] rounded-[15px] bg-[#0000004d] backdrop-blur-[7px] px-[20px] py-[10px] absolute bottom-[5%] left-[5%] md:left-[5%]'>
                            <img  src={trust} alt="" />
                            <img className=' mt-1 w-[70%] md:mt-2' src={star} alt="" />
                            <p className=' ff_jost font-normal text-[16px] text-white mt-2'>Rated 5.0 Excellent</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Myheader