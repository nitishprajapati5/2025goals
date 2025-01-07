import React from 'react'
import Navbar from './_components/Navbar'
import HeatMapCard from './_components/HeatMapCard'
import Subscribe from './_components/Subscribe'
import ListGoals from './_components/ListGoals'
function page() {
  return (
    <div className='container min-h-screen w-full'>
      <Subscribe />
      <Navbar />
      <HeatMapCard />
      <ListGoals />
    </div>
  )
}

export default page
