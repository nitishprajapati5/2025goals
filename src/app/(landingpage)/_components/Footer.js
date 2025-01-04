import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { ChevronRightCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='mt-10 bg-white w-2/3 px-8 py-8 mb-10'>
      <Card className={`mt-4 w-full shadow-2xl`}>
        <CardContent className="flex  flex-col justify-center items-center px-10 py-10" style={{backgroundColor:"#ffc2d4"}}> {/* Adjust min-h as needed */}
        <div className='flex flex-col'>
        <h1 className="text-center text-3xl font-bold">Make Your 2025 Different and Better</h1>
        <h1 className='text-center text-orange-700 text-xl font-medium'>Are you willing to change? All you need to do is Sign Up Now!!!</h1>
        </div>
        <Button className="mt-1"><div className='flex flex-row px-2 py-2'><Link href="/registration">Sign Up Not</Link></div></Button>

        
        </CardContent>
      </Card>        
    </div>
  )
}

export default Footer
