"use client"

import { Card, CardContent, CardHeader, CardTitle,CardDescription,CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function LoginCard() {
    const router = useRouter()
    const handleSubmit = () => {
        router.push("/dashboard")
    }

    return (
       <div className='w-1/2'>
        <form>
        <Card className="sm:w-[450px] lg:w-[500px] shadow-2xl shadow-green-400">
        <CardHeader>
            <CardTitle>Login Here</CardTitle>
          </CardHeader>
          <CardContent>
          
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your Password" />
                </div>
              </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => handleSubmit()} >Login Now!</Button>
           <Link href="/registration"><Button>Not Have an Account?</Button></Link>
          </CardFooter>
        </Card>
        </form>
       </div>
      )
    }
    
    
export default LoginCard
