import React from 'react'
import {FaTachometerAlt,FaRegSun,FaChevronRight,FaWrench,FaStickyNote,FaRegChartBar,FaRegCalendarAlt,FaChevronLeft,FaBolt} from 'react-icons/fa'

const Sidebar = () => {
  return (
    // Entire Sidebar object
    <div className='bg-red-700 h-screen px-[25px]'>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-black/[0.3]'>
            <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-black/[0.3]'>
            <FaTachometerAlt color ='white'/>
            <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
        </div>
        <div className ='pt-[15px] border-b-[1px] border-black/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px] '>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>
                </div>
                <FaChevronRight color='white'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px] '>
                    <FaWrench color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Utilties</p>
                </div>
                <FaChevronRight color='white'/>
            </div>
        </div>
        <div className ='pt-[15px] border-b-[1px] border-black/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADD-ONS</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px] '>
                    <FaStickyNote color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
                </div>
                <FaChevronRight color='white'/>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px] '>
                    <FaRegChartBar color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px] '>
                    <FaRegCalendarAlt color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center pt-[15px]'>
            <div className='h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center cursor-pointer'>
            <FaChevronLeft color='white' />
            </div>
        </div>
        <div className='bg-black mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
            <FaBolt color='white'/>
            <p className='text-[12px] leading-[18px] text-white text-center'>funny text haha i hate frontend</p>
            <button className='bg-white text-[15px] text-black flex items-center justify-center px-[7px] py-[7px] h-[30px] w-full rounded-[3px] leading-[21px] font-normal'>Upgrade to Pro!</button>
        </div>

        
    </div>
  )
}

export default Sidebar