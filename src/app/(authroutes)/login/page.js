import React from 'react'
import LoginCard from './_components/LoginCard'
import ProgressBar from '@/app/_components/ProgressBar'
import { ProgressProvider } from '@/app/_contexts/ProgressContext'

function page() {
  return (
    <>
    <ProgressProvider>
      <ProgressBar />
    <div className='flex min-h-screen w-full justify-center items-center' style={{backgroundColor:"#EDFF86"}}> 
      <div>
        <LoginCard />
      </div>
    </div>
    </ProgressProvider>
    </>
  )
}

export default page
