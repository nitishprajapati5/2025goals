"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import Calendar from './Calendar'
import CustomCalendar from './Calendar'

function page() {
  const {id} = useParams()
  return (
    <CustomCalendar />
  )
}

export default page
