import React from 'react'
import aimvideLogo from '../../assets/aimvid-favicon-color.svg'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

  const {pathname} = useLocation();


  return (
    <div className='w-full border-b shadow-lg p-5 px-24 fixed flex items-center justify-between'>
      <img className='h-8' src={aimvideLogo} alt="" />
      {pathname === '/updatemodule' || pathname === '/addmodule' ? 
      (<div>
        <Link to={'/'}><i className="ri-close-large-line"></i></Link>
      </div>)
      : (<div className='flex gap-10'>
        <Link className='text-white bg-[#0023FF] p-2 rounded-md font-semibold' to={'/addmodule'}>+ Add New Module</Link>
      </div>)
      }
    </div>
  )
}

export default Nav