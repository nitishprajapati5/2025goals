"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Calendar from './_components/Calendar'
import CustomCalendar from './_components/Calendar'
import Activities from './_components/Activities'

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
  const {id} = useParams()

  const [selectedDate,setSelectedDate] = useState(null)

  const handleDateClick = (date) => {
    console.log(date)
    setSelectedDate(date)
  }

  return (
    <div className='container grid sm:grid-cols-1 lg:grid-cols-2 min-h-screen justify-center items-center'>
       <CustomCalendar mark={mark} onDateClick={handleDateClick}/>
       <div className='flex justify-center mt-2 py-8 px-8'>
        <Activities selectedDate={selectedDate}/>
       </div>
    </div>
   
  )
}

export default page
