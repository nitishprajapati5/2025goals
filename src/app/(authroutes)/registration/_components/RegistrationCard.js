"use client"
import { Card, CardContent, CardHeader, CardTitle,CardDescription,CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as APIConstants from '../../../_utils/ApiConstants'
import { useProgress } from '@/app/_contexts/ProgressContext'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

function RegistrationCard() {

    const {showProgress,hideProgress} = useProgress();
    const {register,handleSubmit,formState:{errors}} = useForm()
    const router = useRouter();

    const onSubmit = async(data) => {
      // console.log(data)
      showProgress()
      const endpoint = APIConstants.registrationEndpoint
      await axios.post(endpoint,{
        requestBody:data
      },{
        withCredentials:true
      }).then((res) => {
        router.push('/dashboard')
        toast.success("Redirecting to Dashboard")
      }).catch((error) => {
        //  console.log(error)
        // router.push('/login')
         toast.error("Something went Wrong!")
      }).finally(() =>{
        hideProgress()
      }
      )

    }


    return (
       <div className='w-full'>
        <form onSubmit={handleSubmit(onSubmit)}>

        <Card className="sm:w-[450px] lg:w-[500px] shadow-2xl shadow-yellow-500">
          <CardHeader>
            <CardTitle>Register Here</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Username">Username</Label>
                  <Input 
                    id="username" 
                    type="text" 
                    placeholder="Enter your Username"
                    {...register("username",{required:"Username is required"})}
                   />
                   {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Name">Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Enter your Name" 
                    {...register("name",{required:"Name is required"})}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your Email" 
                    {...register("email",
                      {required:"Email is required"
                      }
                      )}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your Password" 
                    {...register("password",{
                      required:"Password is Required"
                    })}
                    />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
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
