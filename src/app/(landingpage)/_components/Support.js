
"use client"
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Bell, Calendar } from 'lucide-react'
import React from 'react'
const data = [
    {
        "id":1,
        "icon":<Calendar />,
        "title":"Visual Progress Tracking",
        "info":"See your daily achievements light up your year-view calendar",
        "backgroundColor":"#ffffff"
    },
    {
        "id":2,
        "icon":<Bell />,
        "title":"Smart Reminders",
        "info":"Get timely notifications to stay focused on your goals",
        "backgroundColor":"#ffffff"
    },
]

function Support() {
    return (
        // <h1>Our Case Studies</h1>
        <div className='mt-10 bg-white w-2/3 px-8 py-8'>
    
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
        {data.map((idx,element) => (
           <Card key={idx.id} className={`mt-4 w-full shadow-2xl shadow-orange-900`} style={{backgroundColor: idx.backgroundColor}} >
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

export default Support
