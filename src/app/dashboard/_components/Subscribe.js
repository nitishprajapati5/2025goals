import { Button } from '@/components/ui/button'
import React from 'react'

function Subscribe() {
  return (
    <div className='w-full bg-purple-400 px-8 py-2 flex justify-between rounded-sm'>
      <span className='mt-1'>Subscribe for More Updates</span>
      <Button variant="outline">Subscribe</Button>
    </div>
  )
}

export default Subscribe
