import React from 'react'
import shyft from '../components/shyfticon.png'
import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";




const Sidebar = () => {
  return (
    <div className='bg-white h-screen px-[10px]'>
        <div className='pt-[25px] pb-[50px] flex items-center justify-start'>
            <img src={shyft} height={40} width={40} alt="" />
            <h1 className='text-purple-900 text-[30px] leading-[24px] font-normal cursor-pointer'>ShyftLabs</h1>
        </div>
        <div className='flex items-center justify-start px-[15px] py-[10px] gap-[10px] hover:bg-grey-300 cursor-pointer'>
            <AiOutlineHome color='teal' opacity={50} size={25}/>
            <p className='text-[18px]'>Home</p>
        </div>
        <div className='flex items-center justify-start px-[15px] py-[10px] gap-[10px]'>
            <GoPeople color='teal' opacity={50} size={25}/>
            <p className='text-[18px]'>Students</p>
        </div>
        <div className='flex items-center justify-start px-[15px] py-[10px] gap-[10px]'>
            <HiOutlineBookOpen color='teal' opacity={50} size={25}/>
            <p className='text-[18px]'>Courses</p>
        </div>
        <div className='flex items-center justify-start px-[15px] py-[10px] gap-[10px]'>
            <VscGraph color='teal' opacity={50} size={25}/>
            <p className='text-[18px]'>Results</p>
        </div>
    </div>
  )
}

export default Sidebar