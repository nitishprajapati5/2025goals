import React from 'react'
import LoginCard from './_components/LoginCard'
import ProgressBar from '@/app/_components/ProgressBar'

function page() {
  return (
    <>
    <div className='flex min-h-screen w-full justify-center items-center' style={{backgroundColor:"#EDFF86"}}> 
      <div>
        <LoginCard />
      </div>
    </div>
    </>
  )
}

export default page
