"use client"
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { DollarSign, Goal, HeartPulse, LucideHandshake } from 'lucide-react'
import React from 'react'

const data = [
    {
        "id":1,
        "title" : "Personal Development and Habit Formation",
         "info" : "Many users use goals apps to track habits such as exercising daily, reading, or drinking enough water. The app provides reminders and visual progress indicators, helping users stay consistent.",
         "icon": <LucideHandshake />,
         "backgroundColor":"#ffebe5"
    },
    {
        "id":2,
        "title":"Professional Goals and Career Advancement",
        "info":"Professionals often use goals apps to break down larger projects into smaller, more manageable tasks. Whether it’s completing a report, launching a product, or organizing a team event, a goals app helps in organizing timelines, deadlines, and project stages.",
        "icon": <Goal />,
        "backgroundColor":"#dfe4e7"
    },
    {
        "id":3,
        "title":"Health and Fitness Tracking",
        "info":"A common use of goals apps is for setting fitness-related objectives, such as exercising for a certain amount of time each day, losing weight, or increasing strength. The app can help track progress and provide reminders to stay active.",
        "icon": <HeartPulse />,
        "backgroundColor":"#d0bfc5"
    },
    {
        "id":4,
        "title":"Financial Planning",
        "info":"People use goals apps to set financial targets, such as saving for a vacation, paying off debt, or building an emergency fund. The app helps break down the financial goal into smaller milestones and track progress toward achieving them.",
        "icon":<DollarSign/>,
        "backgroundColor":"#ffce5c"

    }
]

function CaseStudies() {
  return (
    // <h1>Our Case Studies</h1>
    <div className='mt-10 bg-white w-2/3 px-8 py-8'>
    <h1 className='text-3xl'>Our Case Studies</h1>

    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
    {data.map((idx,element) => (
       <Card key={idx.id} className="mt-4 w-full shadow-xl shadow-red-200" style={{backgroundColor: idx.backgroundColor}} >
        <CardHeader>{idx.icon}</CardHeader>
        <CardContent>
            <CardDescription className="text-black text-xl font-bold">
                {idx.title}
            </CardDescription>
            <CardDescription className="font-medium text-md text-black">
                {idx.info}
            </CardDescription>
        </CardContent>
       </Card>

    ))}
    
    </div>
    
    </div>
  )
}

export default CaseStudies
