"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { LucidePlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const data = [
    {
        "title":"List Your Goals",
    },
    {
        "title":"Daily Resolution",
    },
    {
        "title":"Front End Solution"
    }
]

function ListGoals() {
 const router = useRouter()
 const handleCreateGoal = () =>{
    router.push("/create")
 }

  return (
    <div>
      <Card className="px-8 py-8 shadow-2xl">
        <CardTitle className="flex flex-row justify-between">
            <div>Your Goals</div>
            <div><Button onClick={handleCreateGoal} style={{backgroundColor:"#6439FF"}}>Create Goal<LucidePlus /></Button></div>
        </CardTitle>
        <CardContent>
            {data.map((index,element) => (
               <p>
                {index.title}
               </p>
            )
            )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ListGoals
