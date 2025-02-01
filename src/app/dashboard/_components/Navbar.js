import { useProgress } from '@/app/_contexts/ProgressContext'
import * as  APIConstants  from '@/app/_utils/ApiConstants'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { PenBoxIcon } from 'lucide-react'
import { ApiError } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

function Navbar() {
  const router = useRouter()
  const [data,setData] = useState({})
  const {showProgress,hideProgress} = useProgress()

  useEffect(() =>{
    const fetchData = async() => {
      fetchDashboardData()
    }
    fetchData()
  },[])


  const fetchDashboardData = async() =>{
    const endpoint = APIConstants.getDashboardEndpoint
    console.log(endpoint)
    showProgress()
    await axios.get(endpoint,{withCredentials:true}).then((res) =>{
      console.log(res.data.responseBody.data)
      setData(res.data.responseBody.data)
    }).catch((error) => {
      console.log(error)
      toast.error("Somthing went Wrong!")
    }).finally(() =>{
      hideProgress()
    })

  }

  const handleLogout = async() =>{
    showProgress()
    const endpoint = APIConstants.getLogoutRequest
    await axios.get(endpoint,{withCredentials:true}).then((res) =>{
      router.push("/login")
    }).catch(() =>{
      router.push("/login")
    }).finally(() =>{
      hideProgress()
    })

  }

  return (
    <div>
      <div className='flex justify-between px-8 py-8' style={{backgroundColor:'#FFFDEC'}}>
        <h1 className='sm:text-2xl lg:text-4xl'><span className=' rounded flex flex-row px-4 py-4' style={{backgroundColor:'#FF8C61'}}>Journal Goals <PenBoxIcon/> </span></h1>
        <div>
        <div className="avatar">
        <p className='px-4 py-2'>Hello , {data.username}</p>
        <Button onClick = {() => handleLogout()}>Logout</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
