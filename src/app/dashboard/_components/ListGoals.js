"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle } from '@/components/ui/drawer'
import { BookAIcon, LucidePlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import TinyMCEEditor from './Editor'
import { Input } from '@/components/ui/input'
import Loading from '@/app/_components/ComponentLoading'

const data = [
    {
        "id":1,
        "title":"Fitness Journal",
        "color":"#7CEA9C"
    },
    {
        "id":2,
        "title":"Study Journal",
        "color":"#2E5EAA"
    },
    {
        "id":3,
        "title":"Development Journal",
        "color":"#ADF1D2"
    },
    {
        "id":4,
        "title":"Social Skills",
        "color":"#755B69"
    },
    {
        "id":5,
        "title":"Geography",
        "color":"#9B287B"
    }
]



function ListGoals() {
 const router = useRouter()
 const [drawerOpen,setDrawerOpen] = useState(false)
 const [journalContent,setJournalContent] = useState('')
//  const [loading,setLoading] = useState(true)


//  useEffect(() => {
//   setLoading(false)
//  },500000)

 const handleCreateGoal = () =>{
    //router.push("/create")
    setDrawerOpen(true)
 }

 const handleListEvent = (id) =>{
  router.push(`/details/${id}`)
 }

 const handleCloseDrawer = () =>{
  setDrawerOpen(false)
}

const handleInputChange = (e) => {
  setLoading(true)
  setJournalContent(e.target.value);
};

// if(loading){
//   return <Loading />
// }

// Handle form submission
const handleCreateJournal = (e) => {
  e.preventDefault(); // Prevent page reload on form submission
  console.log("Journal Content:", journalContent);
  // You can call any function here to process the journal content
  setJournalContent(''); // Reset the input field after submission
};

  return (
    <>
      <div className='w-full px-4 py-4'>
      <Card className="px-8 py-8 shadow-2xl ">
        <CardTitle className="flex flex-row justify-between">
            <div className='flex flex-row sm:text-sm'>Your Journals List <BookAIcon /></div>
            <div><Button onClick={handleCreateGoal} style={{backgroundColor:"#6439FF"}} className="font-bold">Create Journal<LucidePlus /></Button></div>
        </CardTitle>
        <CardContent>
            {data.map((index,element) => (
              <Badge
              style={{ backgroundColor: index.color,color:'black' }}
              className="px-4 py-4 m-1"
              onClick={() => handleListEvent(index.id)}
            >
              {index.title}
            </Badge>

            )
            )}
        </CardContent>
      </Card>

      <Drawer className="" open={drawerOpen} onClose={handleCloseDrawer}>
          <DrawerContent className="flex justify-center items-center">
          <div className="w-full max-w-max px-6 py-4">
        <DrawerTitle className="flex items-center justify-center">
          <h1 className='text-2xl font-bold'>Add Your Journal Activity Here</h1>
        </DrawerTitle>
        <form onSubmit={handleCreateJournal}>
            <Input
             className="mt-2"
             placeholder="Enter your Journal here"
             value={journalContent}
             onChange={handleInputChange}

            />
            <div className='flex justify-center items-center mt-2 w-full'>
            <Button className="w-full">Submit</Button>

            </div>
        </form>

        <DrawerFooter className="flex justify-center">
          <DrawerClose>
            <Button className="w-full">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
        </Drawer>
    </div>
    </>
  )
}

export default ListGoals
