import React, { useState } from 'react'
import Module from './Module'
import SideNav from './Partials/SideNav'
import ProgressBar from './Partials/ProgressBar'
import StartModulesBtn from './Partials/StartModulesBtn'

const Home = () => {
  const [toggle, settoggle] = useState(true)
  return (
    <div className='w-full h-screen flex justify-between'>
        <SideNav />
        <div className='right w-[75%] h-full'>
        <ProgressBar />
        <div className='w-full h-[90%] flex items-center justify-center'>
          {toggle ? <StartModulesBtn /> : <Module />}
        </div>
    </div>
    </div>
  )
}

export default Home