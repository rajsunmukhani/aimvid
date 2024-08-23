import React from 'react'
import aimvideLogo from '../../assets/aimvid-favicon-color.svg'

const SideNav = () => {
  return (
    <div className='left w-[25%] h-full border-r bg-zinc-100 shadow-lg border-zinc-200 rounded-r-2xl'>
        <div className='flex h-[15%] px-5 items-center gap-3'>
            <img className='h-8' src={aimvideLogo} alt="" />
            <h1 className='font-semibold text-[#0023FF] text-2xl'>AimVid</h1>
        </div>
        <div className='h-[80%] overflow-y-auto p-5 w-full flex flex-col gap-2'>
            <h3 className='bg-[#0023FF] text-white shadow-xl cursor-pointer font-semibold py-5 rounded-lg text-center'>Module 1 : Importance of Mask</h3>
        </div>
    </div>
  )
}

export default SideNav