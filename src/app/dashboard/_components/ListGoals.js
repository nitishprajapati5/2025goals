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

export default function ListGoals() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [journalData, setData] = useState([]);

  // Fetch journal data
  useEffect(() => {
    const endpoint = APIConstants.API + "/" + APIConstants.JOURNAL;
    axios.post(endpoint, {
      requestBody: {
        endpoint: APIConstants.GETJOURNALENDPOINT,
      }
    },{
      withCredentials:true
    })
      .then((res) => {
        console.log(res);
        setData(res.data);  // Store the journal data in state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const onSubmit = (formData) => {
    console.log("Form Data:", formData);
    // Add logic for submitting the journal
    setDrawerOpen(false);  // Optionally close the drawer
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
                style={{ backgroundColor: index.color, color: 'black' }}
                className="px-4 py-4 m-1"
                onClick={() => handleListEvent(index.id)}
              >
                {index.title}
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
