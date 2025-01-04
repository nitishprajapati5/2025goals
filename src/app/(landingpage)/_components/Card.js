import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
}
from "@/components/ui/card"
import { LucideArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function HeroCard() {
  return (
            <>
            <div className='sm:m-5 lg:m-10'>
                <h1 className="sm:text-4xl lg:text-5xl font-extrabold tracking-wider">Time to Redefined</h1>
                <h1 className="sm:text-4xl lg:text-5xl sm:py-2 lg:py-4 first-letter:font-extrabold tracking-wider">Your <span className='' style={{backgroundColor:"#ff8b8b"}}>Goals</span></h1>

                <h1 className="sm:text-4xl lg:text-6xl font-extrabold mt-2 tracking-wider">Time to Turn Your your</h1>
                <h1 className="sm:text-4xl lg:text-6xl sm:py-2 lg:py-4 first-letter:font-extrabold tracking-wider">Your <span className='' style={{backgroundColor:"#ff8b8b"}}>Resolution</span> into Relaity</h1>
    
                <h2 className='mt-8 text-xl'>Simply track your Goals and Progress </h2>
                <div className='flex justify-center px-8 py-8 space-x-8 space-y-8'>
                    <Button Link="/login" variant="" size="lg"><div className='flex flex-row'><Link href="/login">Start Your Journey</Link><LucideArrowRight className='m-1'/></div></Button>
                </div>
            </div>
            </>
  )
}

export default HeroCard
