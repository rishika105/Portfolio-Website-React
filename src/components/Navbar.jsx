import React from 'react'
import ShinyText from './ShinyText'

const Navbar = () => {
  return (
    <div className='bg-zinc-950 flex fixed top-0 left-0 w-full h-[60px]'>
       <div className='space-x-6 flex mx-auto mt-4'>
       <ShinyText text="Home" disabled={false} speed={3} className='custom-class cursor-pointer' />
       <ShinyText text="About" disabled={false} speed={3} className='custom-class cursor-pointer' />
        <ShinyText text="Projects" disabled={false} speed={3} className='custom-class cursor-pointer' />
        <ShinyText text="Contact" disabled={false} speed={3} className='custom-class cursor-pointer' />
       </div>
    </div>
  )
}

export default Navbar
