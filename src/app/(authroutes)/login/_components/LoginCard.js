"use client"

import { Card, CardContent, CardHeader, CardTitle,CardDescription,CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useProgress } from '@/app/_contexts/ProgressContext'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as APIConstants from '../../../_utils/ApiConstants'
import { toast } from 'sonner'

function LoginCard() {
    const router = useRouter()
    const {showProgress,hideProgress} = useProgress()

    const {register,handleSubmit,formState:{errors}} = useForm()

    const onSubmit = async (data) => {
        // console.log('Console Data',data)
        showProgress();
        const endpoint = APIConstants.loginEndpoint


        // console.log(endpoint)


        await axios.post(endpoint,{
          requestBody:data
        },{
          withCredentials:true
        })
        .then((res) => {
          // console.log(res)
          router.push("/dashboard")
        }).catch((error) => {
          // console.log(error)
          // router.push('/login')
          toast.error("Something went Wrong!")
        })
        .finally(() =>{
          hideProgress()
        }
        )
       
    }

    return (
       <div className='w-1/2'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="sm:w-[450px] lg:w-[500px] shadow-2xl shadow-green-400">
        <CardHeader>
            <CardTitle>Login Here</CardTitle>
          </CardHeader>
          <CardContent>
          
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your Email" 
                    {...register("email",
                      {required:"Email is required",
                        pattern:{
                          value: /\S+@\S+\.\S+/,
                          message:"Email is invalid"
                        }
                      }
                      )}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your Password" 
                    {...register("password",{required:"Password is Required"})}  
                  />
                  {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
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
