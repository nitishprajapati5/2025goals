import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import usePagination from '@/hooks/usePagination'
import { Activity, Calendar1, Calendar1Icon } from 'lucide-react'
import React, { useState } from 'react'




function Activities() {
  const handleChange = (e,p) =>{
  };

  return (
    <div className='container mt-8 py-8 px-8 shadow-2xl shadow-green-600'>
      <Card className="px-8 py-8">
        <CardHeader className="px-4 py-4">
          <h1 className='text-2xl font-bold px-4 py-4 flex flex-row'>Activities<Activity className='mt-1 ml-2'/>
          </h1>
        </CardHeader>
        <CardContent>
         <Card>
            <CardFooter>
              <Button onClick={handleChange}>Next</Button>
              <Button>
                Prev
              </Button>
            </CardFooter >
         </Card>
        </CardContent>
      </Card>
    </div>
  )
}

export default Activities
