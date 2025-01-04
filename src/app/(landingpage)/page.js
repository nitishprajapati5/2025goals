import React from 'react'
import Navbar from './_components/Navbar'
import Github from './_components/Github'
import InfoCard from './_components/InfoCard'
import CaseStudies from './_components/CaseStudies'
import Support from './_components/Support'
import Footer from './_components/Footer'
export default function page() {
  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-col justify-center items-center'>
      <Github />
      <InfoCard />
      <CaseStudies />
      <Support />
      <Footer />
      </div>
    </div>
  )
}
