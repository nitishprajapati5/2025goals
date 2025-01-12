"use client"

import React, { useState } from 'react'
import Navbar from './_components/Navbar'
import HeatMapCard from './_components/HeatMapCard'
import Subscribe from './_components/Subscribe'
import ListGoals from './_components/ListGoals'
import Calendar from './_components/Calendar'
import { useSearchParams } from 'next/navigation'
import { Loading } from '../_components/ComponentLoading'
import { PageLoading } from '../_components/PageLoading'

const mark = [
  {
    "id" : 1,
    "date":"10-11-2024",
    "description":"Feeling Good"
  },
  {
    "id" : 2,
    "date":"10-12-2024",
    "description":"Feeling Good"
  },
  {
    "id" : 3,
    "date":"09-12-2024",
    "description":"Feeling Good"
  },
  {
    "id" : 4,
    "date":"11-12-2024",
    "description":"Feeling Good"
  },
  {
    "id" : 5,
    "date":"03-01-2025",
    "description":"Feeling Good"
  },
  {
    "id" : 6,
    "date":"04-01-2025",
    "description":"Feeling Good"
  },
  {
    "id" : 7,
    "date":"05-01-2025",
    "description":"Feeling Good"
  },
  {
    "id" : 8,
    "date":"06-01-2025",
    "description":"Feeling Good"
  }
  ,
  {
    "id" : 9,
    "date":"07-01-2025",
    "description":"Feeling Good"
  },
  {
    "id":10,
    "date":"08-01-2025",
    "description":"Great Value Out"
  },
  {
    "id":11,
    "date":"09-01-2025",
    "description":"Feeling Good"
  }
]

function page() {
  const [loading,setLoading] = useState(true)

  // if(loading){
  //   return <PageLoading />
  // }
  return (
    <div className='container min-h-screen w-full'>
      <Subscribe />
      <Navbar />
      <div className='m-3 grid sm:grid-cols-1 lg:grid-cols-2'>
        <div>
        <Calendar mark={mark} />
        </div>
        <div className=''>
        <ListGoals />
        </div>
      </div>

    </div>
  )
}

export default page
