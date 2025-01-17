import React from 'react'
import RegistrationCard from './_components/RegistrationCard'
import ProgressBar from '@/app/_components/ProgressBar'
import { ProgressProvider } from '@/app/_contexts/ProgressContext'

function page() {
  return (
    <>
      <ProgressProvider>
        <ProgressBar />
      <div className='flex min-h-screen w-full justify-center items-center' style={{backgroundColor:"#D4FCC3"}}> 
      <div>
        <RegistrationCard />
      </div>
    </div>
    </ProgressProvider>
    </>
  )
}

export default page
