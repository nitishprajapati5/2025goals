"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle } from '@/components/ui/drawer';
import { BookAIcon, LucidePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import TinyMCEEditor from './Editor';
import { Input } from '@/components/ui/input';
import Loading from '@/app/_components/ComponentLoading';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as APIConstants from '../../_utils/ApiConstants';
import { toast } from 'sonner';
import { useProgress } from '@/app/_contexts/ProgressContext'

export default function ListGoals() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [journalData, setData] = useState([]);
  const {showProgress,hideProgress} = useProgress()

  // Fetch journal data
  useEffect(() => {
    const fetchData = async () => {
      await getAllJournalDetail();
    };
    fetchData();
  }, []);
  

  const getAllJournalDetail = async() =>{
    const endpoint = APIConstants.getAllJournals
    // console.log(endpoint)
    showProgress();

    await axios.get(endpoint,
    {
      withCredentials:true
    })
      .then((res) => {
        // console.log(res.data.responseBody.data);
        console.log(res.status)
        toast.success("Successfully Fetched the Data")
        setData(res.data.responseBody.data);  // Store the journal data in state
      })
      .catch((error) => {
        console.log(error);
        router.push('/login')
        toast.error("Something went Wrong!Please login Again")
      }).finally(() =>{
        hideProgress();

      });
  }

  const handleCreateGoal = () => {
    setDrawerOpen(true);
  };

  const handleListEvent = (id) => {
    router.push(`/details/${id}`);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(formData) => {
    // console.log("Form Data:", formData);
    // Add logic for submitting the journal
    const endpoint = APIConstants.createJournals
    showProgress()
    // console.log(endpoint)
    await axios.post(endpoint,{
      requestBody:{
        journalName:formData.journalName,
        isDisabled:false
      }
    },{
      withCredentials:true
    }).then((res) => {
      console.log(res)
      if(res){
        toast.success("Journal Added Successfully")
        getAllJournalDetail()
        setDrawerOpen(false)

      }
    }).catch((error) => {
      toast.error("Something Went Wrong")
      setDrawerOpen(false);  // Optionally close the drawer

    }).finally(() =>{
      setDrawerOpen(false);
      hideProgress() // Optionally close the drawer
    })
  };

  return (
    <>
      <div className='w-full px-4 py-4'>
        <Card className="px-8 py-8 shadow-2xl ">
          <CardTitle className="flex flex-row justify-between">
            <div className='flex flex-row sm:text-sm'>Your Journals List <BookAIcon /></div>
            <div>
              <Button onClick={handleCreateGoal} style={{ backgroundColor: "#6439FF" }} className="font-bold">
                Create Journal<LucidePlus />
              </Button>
            </div>
          </CardTitle>
          <CardContent>
            {journalData.map((index) => (
              <Badge
                key={index.id}
                style={{ backgroundColor: index.color, color: 'white' }}
                className="px-4 py-4 m-1"
                onClick={() => handleListEvent(index.id)}
              >
                {index.journalName}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Drawer className="" open={drawerOpen} onClose={handleCloseDrawer}>
          <DrawerContent className="flex justify-center items-center">
            <div className="w-full max-w-max px-6 py-4">
              <DrawerTitle className="flex items-center justify-center">
                <h1 className='text-2xl font-bold'>Add Your Journal Activity Here</h1>
              </DrawerTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  className="mt-2"
                  placeholder="Enter your Journal here"
                  {...register("journalName", { required: "Please enter your journal name" })}
                />
                {errors.journalName && <p className='text-red-500'>{errors.journalName.message}</p>}
                <div className='flex justify-center items-center mt-2 w-full'>
                  <Button className="w-full">Submit</Button>
                </div>
              </form>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
