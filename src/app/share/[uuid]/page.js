"use client"

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import * as APIConstants from '../../_utils/ApiConstants'
import { toast } from 'sonner'
import { useProgress } from '@/app/_contexts/ProgressContext'

function SharePage() {
  const { uuid } = useParams()
  const router = useRouter()
  const [data, setData] = useState(null) // Initial state as null to represent loading state
  const { showProgress, hideProgress } = useProgress()

  useEffect(() => {
    const fetchData = async () => {
      try {
        showProgress()
        const response = await axios.post(APIConstants.openShareUrl, {
          requestBody: { uuid }
        }, { withCredentials: true })

        setData(response.data.responseBody.data)
        toast.success("Successfully loaded the journal.")
      } catch (error) {
        toast.error("Something went wrong!")
        router.push('/login')
      } finally {
        hideProgress()
      }
    }

    if (uuid) {
      fetchData()
    }
  }, [uuid])

  if (data === null) {
    // Loading state
    return (
      <div className="container min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container min-h-screen p-8">
      {data && (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
          {/* Journal Image */}
          <div className="w-full h-[500px] mb-8">
            <img 
              className="w-full h-full object-cover rounded-lg" 
              src={`data:${data.imageType};base64,${data.journalImage}`} 
              alt="Journal Image"
            />
          </div>

          {/* Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{data.journalTitle}</h1>
          </div>

          {/* Description */}
          <div className="mb-8 text-lg text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
            <p>{data.journalDescription}</p>
          </div>

          {/* Journal Content */}
          <div className="prose lg:prose-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Journal Content</h2>
            <div dangerouslySetInnerHTML={{ __html: data.journalContent }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SharePage
