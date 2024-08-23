import React from 'react'

const Module = () => {
  return (
    <div className=' h-full w-full flex'>
      <div className='w-1/2 h-full flex items-center justify-center'>
        <div className='videoContainer h-[60%] w-[80%] bg-blue-500'></div>
      </div>
      <div className='w-1/2 p-5 h-full flex flex-col gap-3'>
        <h2 className='text-5xl text-[#0023FF] flex items-end h-[20%] font-semibold'>Lorem, ipsum dolor.</h2>
        <p className='text-zinc-400 text-lg leading-tight h-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus animi iste dignissimos cupiditate dolor debitis, repellat quidem quos repellendus recusandae a odio consequatur quisquam quis corrupti sed earum eaque, voluptate facere placeat ipsa! Adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum aliquam quia laboriosam perspiciatis. Eos laudantium magni sit est quas ut facilis rerum aut nemo!</p>
        <button className='bg-[#0023FF] w-[50%] text-white p-3 cursor-pointer hover:scale-105 rounded-full shadow-lg'>Get to Previous Module</button>
      </div>
    </div>
  )
}

export default Module