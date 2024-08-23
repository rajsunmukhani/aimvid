import React from 'react'
import { Link } from 'react-router-dom'

const ProgressBar = () => {
  return (
    <div className='w-full items-center flex justify-between p-5 gap-3 h-[10%]'>
        <Link to={-1}>
           Back
        </Link>
        <div>
          <h3>24%</h3>
          <div className='w-64 h-4 rounded-full bg-zinc-200 overflow-hidden'>
              <div className='w-[24%] h-full bg-[#0023FF] rounded-lg '></div>
          </div>
        </div>
    </div>
  )
}

export default ProgressBar