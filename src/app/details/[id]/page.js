"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import Calendar from './_components/Calendar'
import CustomCalendar from './_components/Calendar'
import Activities from './_components/Activities'

const mark = [
  {
    "date":"09-01-2025",
    "description":"Great Value Out"
  },
  {
    "date":"08-01-2025",
    "description":"Feeling Good"
  }

]

function page() {
  const {id} = useParams()
  return (
    <div>
       <CustomCalendar mark={mark}/>
        <Activities />
    </div>
   
  )
}

export default page
