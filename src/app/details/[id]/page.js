"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import Calendar from './_components/Calendar'
import axios from 'axios'
import * as APIConstants from '../../_utils/ApiConstants'
import { toast } from 'sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Copy, Edit, Eye, Leaf, Share, Trash2, View } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useProgress } from '@/app/_contexts/ProgressContext'

function Page() {
  const {id} = useParams()
  const [data,setData] = useState([])
  const router = useRouter()
  const [dialogOpen,setDialogOpen] = useState(false)
  const [link,setLink] = useState('')
  const {showProgress,hideProgress} = useProgress()
  const endpoint = APIConstants.GetAllLeafsinJournal
 

  useEffect(() => {
    if (id) {
      fetchDataForJournal(id);
    }
  }, [id]);  // <-- Add 'id' as a dependency
  

const fetchDataForJournal = async (id) => {
  try {
    // Show progress before starting the API call
    showProgress();
    // Make the API call
    const res = await axios.post(endpoint, {
      requestBody: {
        journalId: parseInt(id),
      }
    }, {
      withCredentials: true
    });
    console.log(res);
    toast.success("Data Fetched Successfully!");
    setData(res.data.responseBody.data);
  } catch (error) {
    toast.error("Something went wrong!");
  } finally {
    // Hide progress after the API call is done
    hideProgress();
  }
};





  const [selectedDate,setSelectedDate] = useState(null)

  const handleDateClick = (date) => {
    console.log(date)
    setSelectedDate(date)
  }

  const handleJournalView = (id) => {
    router.push(`/Changes/${id}`)
  }

  const handleAdditionLeaf = (id) => {
    router.push(`/addLeaf/${id}`)
  }

  const handleDeleteView = (journalId) => {
    console.log(journalId); // Ensure this logs the correct value
    showProgress();
    const endpoint = APIConstants.deleteJournalLeaf;
    console.log(endpoint);

    axios.post(endpoint, {
        requestBody: {
            journalId: journalId
        }
    }, { withCredentials: true })
    .then((res) => {
        toast.success("Successfully Deleted Your Leaf!");
        fetchDataForJournal(journalId); // Make sure this function exists
    })
    .catch((error) => {
        toast.error("Something went wrong");
    })
    .finally(() => {  // Ensure this is inside an arrow function
        hideProgress();
    });
};


const handleJournalShare = (id) => {
  showProgress();
  const endpoint = APIConstants.GetshareUUIDBasedonJournal;

  axios.post(endpoint, {
      requestBody: { id: id }
  }, { withCredentials: true })
  .then((res) => {
      const sharePoint = window.location.origin + "/share/" + res.data.responseBody.data.uuid;
      setLink(sharePoint);
      setDialogOpen(true);
  })
  .catch((error) => {
      console.log(error);
      toast.error("Something Went Wrong!");
  })
  .finally(() => {
      hideProgress();  // Ensure this runs after everything
  });
};


  const handleViewJournal = (journalId) =>{
    console.log(journalId)
    router.push(`/view/${journalId}`)
  }

  const handleCopyShareLink = () =>{
    console.log("Nitish is here")
    navigator.clipboard.writeText(link).then(() => {
      toast.success("Copied Successfully")
      setDialogOpen(false)
    }).catch((error) => {
      console.log(error)
      toast.error("Something went Wrong!")
    })
    // toast.success("Copied Successfully")
  }
  return (
    <>
      <div className='container grid sm:grid-cols-1 lg:grid-cols-1 min-h-screen justify-center items-center'>
       {/* <CustomCalendar mark={mark} onDateClick={handleDateClick}/> */}
       <div className='flex justify-center mt-2 py-8 px-8'>
        {/* <Activities data={data}/> */}
        <div className="py-8 px-8 shadow-2xl shadow-green-600 w-[2/3]">
      <Card className="px-8 py-8">
        <CardTitle>
          <h1>Journal Title</h1>
        </CardTitle>
        <CardHeader className="px-4 py-4">
          <div className='flex flex-row justify-between'>
          <h1 className="text-2xl font-bold px-4 py-4 flex flex-row">
            Journal Activities <Activity className="mt-1 ml-2" />
          </h1>
          
          <Button className="mt-2" onClick={() => handleAdditionLeaf(id)}>Add Leaf to Your Journal <Leaf /></Button>
          </div>
        </CardHeader>
        <CardContent>
          {data.length > 0 ? (
            data.map((item) => (
              <Card key={item.id} className="mt-2 px-4 shadow-2xl shadow-orange-400">
                <CardTitle className="px-4 py-4 flex flex-row justify-between items-center">
                  <span>{item.journalTitle}</span>
                  <div className='flex flex-row'>
                  <Trash2 
                  className='ml-2'
                  onClick={() => handleDeleteView(item.id)}
                  style={{cursor:'pointer'}}
                  />
                  <Edit 
                  className="ml-2" 
                  onClick={() => handleJournalView(item.id)} 
                  style={{ cursor: 'pointer' }} 
                  />
                  <Share 
                  className='ml-2'
                  onClick={() => handleJournalShare(item.id)}
                  style={{cursor:'pointer'}}
                  />
                  <Eye 
                  className='ml-2'
                  onClick={() => handleViewJournal(item.id)}
                  />
                  </div>
                </CardTitle>
                <Card className="mb-2">
                {/* <CardTitle className="text-ellipsis py-4 px-4 flex flex-row">
                        {item.title} <Edit className="ml-2" onClick={() => handleJournalView(journal.id)} style={{cursor:'pointer'}}/>
                </CardTitle> */}
                      <CardDescription className="px-8 py-8 text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.journalDescription}
                      </CardDescription>
                  {/* {item.journals.map((journal) => (
                    <div key={journal.id}>
                      <CardTitle className="text-ellipsis py-4 px-4 flex flex-row">
                        {journal.title} <Edit className="ml-2" onClick={() => handleJournalView(journal.id)} style={{cursor:'pointer'}}/>
                      </CardTitle>
                      <CardDescription className="px-4 text-ellipsis overflow-hidden whitespace-nowrap">
                        {journal.content}
                      </CardDescription>
                    </div>
                  ))} */}
                </Card>
              </Card>

            ))
          ) : (
            <Card className="mt-2 px-4 shadow-2xl shadow-orange-400">
              <CardDescription className="flex justify-center items-center">
                No activities found for this date.
              </CardDescription>
            </Card>
          )}
        </CardContent>
      </Card>
    
       </div>
    </div>
    </div>

    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
    <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="sharelink"
              defaultValue={link}
              readOnly
              
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={() =>handleCopyShareLink()}>
            <span className="sr-only">Copy</span>
            {/* <Copy onClick={() => handleCopyShareLink()} /> */}
            <Copy />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
    </>

   
  )
}

export default Page
