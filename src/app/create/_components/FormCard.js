import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ArrowLeftCircle } from 'lucide-react'
import React from 'react'

function FormCard() {
  return (
    <div className='w-full flex justify-center'>
      <Card className="w-1/3 px-4 py-4 shadow-2xl">
        <CardTitle>
            <div className='flex flex-row'><ArrowLeftCircle className='cursor' style={{cursor:'pointer'}} /> <div className='ml-2 '>Create Your Goal</div> </div>
             
        </CardTitle>
        <form>
            <CardContent className="mt-8">
                <Label>Goal</Label>
                <Input className="mt-4" type="text" placeholder="Create your Goal" />
                <Label className="mt-4">Describe your Goal</Label>

                <Input className="mt-4" type="text" placeholder="Describe your Goal" />
                
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Label className="mt-4">Start Date</Label>
                        <Input className="mt-4 w-full" type="date" placeholder="Start Date"/>
                    </div>
                    <div>
                        <Label className="mt-4">End Date</Label>
                        <Input className="mt-4" type="date" placeholder="End Date" />
                    </div>
                </div>

                <div className='mt-4'>
                <RadioGroup className="flex flex-row space-x-6" defaultValue="Daily">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Daily" id="Daily" />
                        <Label htmlFor="Daily">Daily</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Weekly" id="Weekly" />
                        <Label htmlFor="Weekly">Weekly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Monthly" id="Monthly" />
                        <Label htmlFor="Monthly">Monthly</Label>
                    </div>
                </RadioGroup>
                </div>

                <div className='mt-4'>
                <Label className="mt-4">Time</Label>
                <Input className="time" type="time"/>
                </div>
                               
                <div className='flex flex-row justify-center'>
                    <Button className="mt-4">Submit</Button>
                </div>                 
            </CardContent>
        </form>
      </Card>
    </div>
  )
}

export default FormCard
