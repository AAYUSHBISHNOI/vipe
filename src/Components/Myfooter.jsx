import React from 'react'
import footer from "../assets/img/Logo.svg";
import {Facebook, Github, Home, Instagram, Line, Linkdin, Message, Phone, Search, Searchone, Tick2, Wikipedia } from './Mysvg'

const Myfooter = () => {
  return (
    <div className=' bg-black'>
        <div className="container mx-auto max-w-[1320px] pt-10 md:pt-24 lg:pt-32 px-4">
            <div className=' flex flex-wrap'>
                <div className=' w-[100%] sm:w-[50%]'>
                    <img src={footer} alt="" />
                </div>
                <div className=' w-[100%] sm:w-[50%] flex justify-end mt-5'>
                <div className="max-w-[520px] w-full bg-[#fff] py-5 ps-[33px] pe-[31px] rounded-[80px] flex">
                        <input type="text" placeholder="Search here...." className=" bg-transparent outline-0 placeholder:text-[#6f6f6f] ff_medium text-[16px] leading-[150%] w-full  text-[#6f6f6f] opacity-[0.7] pe-[24px]" /><Searchone/>
                    </div>
                </div>
            </div>
            <div className=' flex-wrap flex pt-[20px] md:pt-[47px] justify-between '>
                <div className=' w-[100%] sm:w-[50%] lg:w-[25%]'>
                    <ul className=' text-[16px] font-normal text-white ff_light'>Services</ul>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[25%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[58%] mb-0 pt-[10px] md:pt-[16px]'><Tick2/>WordPress Development</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[70%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>WooCommerce Development</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[58%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>WordPress Maintenance</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[25%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[50%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>Speed Optimization</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[74%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>Dedicated WordPress Developer</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[80%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>Headless WordPress Development</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[60%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>White Label Development</a></li>
                </div>
                <div className=' w-[100%] sm:w-[50%] lg:w-[25%] mt-6 lg:mt-0'>
                    <ul className=' text-[16px] font-normal text-white ff_light'>Services</ul>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[20%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[45%] mb-0 pt-[10px] md:pt-[16px]'><Tick2/>WordPress Hosting</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[40%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[90%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>PSD, XD, Figma to WordPress Conversion</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[60%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>Custom WordPress Theme</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[60%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>Custom WordPress Plugins</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[20%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[45%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>CMS to WordPress</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[65%] pt-[5px] md:pt-[13px] mb-0'><Tick2/>WordPress Malware Removal</a></li>
                </div>
                <div className=' w-[100%] sm:w-[50%] lg:w-[25%] mt-6 lg:mt-0'>
                    <ul className=' text-[16px] font-normal text-white ff_light pb-[10px] md:pb-[15px] '>Latest Articles</ul>
                    <li className='mylist'><a href="" className='text-white text-[14px] font-normal ff_light pt-[16px] relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[70%]'>7 WordPress Plugins to Create an <span className=' block mb-[10px] md:mb-[21px]'>Effective Newsletter 03.01.2022</span></a></li>
                    <li className='mylist'><a href="" className='text-white text-[13px] xl:text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[75%]'>What’s the Perfect Blog Post Length for <span className=' block'>Your WordPress Site’s SEO?</span><span className=' block mb-[10px] md:mb-[21px]'> 02.01.2022</span></a></li>
                    <li className='mylist'><a href="" className='text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[74%]'>5 Reasons the Future of WordPress Is <span className=' block mb-[10px] md:mb-[21px]'> Headless 01.01.2022</span></a></li>
                    <li className='mylist'><a href="" className='text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[74%]'>Viptor Says: Vipe Studio’s WordPress <span className=' block'> Developers Wrap Up the Amazingly</span> <span className=' block'> Successful 2021 30.12.2021</span></a></li>
                </div>
                <div className=' w-[100%] sm:w-[50%] lg:w-[20%] mt-6 lg:mt-0'>
                    <ul className=' text-[16px] font-normal text-white ff_light'>Contact</ul>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[74%] mb-0 pt-[16px]'><Phone/>EU: +359 988 993 128</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[74%] pt-[13px] mb-0'><Phone/>US: +1 (1 888) 266-6917</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[74%] pt-[13px] mb-0'><Message/>office@vipestudio.com</a></li>
                    <li className=' mb-0 mylist'><a href="" className=' flex items-center gap-[4px] text-white text-[14px] font-normal ff_light relative after:left-[30%] after:absolute after:bg-[#6022ea] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-[100%] pt-[13px] mb-0'><Home/>14 Srebarna, Sofia 1407, Bulgaria</a></li>
                </div>
            </div>
        </div>
        <div className=' w-[100%] h-[1px] bg-[#4c4c4c] mt-[71px]'></div>
        <div className="container mx-auto max-w-[1320px] px-4">
            <div className=' pt-[31px] sm:flex justify-between pb-[36px]'>
                <div>
                    <p className=' font-normal text-[14px] text-white ff_light'>© Vipe Studio 2016-2022</p>
                    <div className=' flex items-center gap-[7px]'>
                        <p className=' font-normal text-[14px] text-white ff_light'>Privacy</p>
                        <Line/>
                        <p className=' font-normal text-[14px] text-white ff_light'>Careers</p>
                        <Line/>
                        <p className=' font-normal text-[14px] text-white ff_light'>Media</p>
                        <Line/>
                        <p className=' font-normal text-[14px] text-white ff_light'>Client Area</p>
                    </div>
                </div>
                <div className=' flex gap-[17px] mt-5'>
                   <a href="https://github.com/"> <Github/></a>
                    <a href="https://www.linkedin.com/feed/"><Linkdin/></a>
                   <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804791&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007766%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwo9unBhBTEiwAipC11_6jC4lpz_NFknZlnVUpgpv35ySOZmJ4_YayNaWIOOkXyUGvT6mMwhoCUn4QAvD_BwE"> <Facebook/></a>
                    <a href="https://www.instagram.com/"><Instagram/></a>
                   <a href="https://www.wikipedia.org/"> <Wikipedia/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myfooter