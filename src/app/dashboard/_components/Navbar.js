import { Button } from '@/components/ui/button'
import { PenBoxIcon } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='flex justify-between px-8 py-8' style={{backgroundColor:'#FFFDEC'}}>
        <h1 className='sm:text-2xl lg:text-4xl'><span className=' rounded flex flex-row px-4 py-4' style={{backgroundColor:'#FF8C61'}}>Journal Goals <PenBoxIcon/> </span></h1>
        <div>
        <div className="avatar">
            <div className="w-12 rounded-xl">
            <img style={{cursor:'pointer'}} src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <p className='px-4 py-4'>Hello, Nitish Prajapati</p>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
