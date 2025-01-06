import { Card, CardContent, CardHeader, CardTitle,CardDescription,CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function RegistrationCard() {
    return (
       <div className='w-full'>
        <form>

        <Card className="sm:w-[450px] lg:w-[500px] shadow-2xl shadow-yellow-500">
          <CardHeader>
            <CardTitle>Register Here</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Username">Username</Label>
                  <Input id="username" type="text" placeholder="Enter your Username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your Password" />
                </div>
              </div>
              
            
          </CardContent>
          <CardFooter className="flex justify-around">
          <Button className="shadow-2xl shadow-white" type='submit'>Register Now!</Button>

            <Link href="/login" ><Button className="shadow-2xl shadow-white">Already Signed In?</Button></Link>
          </CardFooter>
        </Card>
        </form>
       </div>
      )
    }
    
    
export default RegistrationCard
