import Github from '@/app/(landingpage)/_components/Github'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

function HeatMapCard() {
  return (
    <div className='py-8 px-8'>
        <div className='px-4 py-4 text-xl font-bold'>Your Daily Progress</div>
        <div className='px-4 py-4 text-xl font-bold'>Your Progress:- 0 %</div>
      <Card className='px-8 py-8 shadow-xl'>
        <div className='flex justify-center'>
            <GitHubCalendar colorScheme='light' username='nitishprajapati5'/>   
        </div>
      </Card>
    </div>
  )
}

export default HeatMapCard
