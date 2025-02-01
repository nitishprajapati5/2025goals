"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import TinyMCEEditor from '../../dashboard/_components/Editor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRightCircleIcon } from 'lucide-react'
import { useFormState } from 'react-hook-form'
import axios from 'axios'
import * as APIConstants from '../../_utils/ApiConstants'
import moment from 'moment'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'
import { useProgress } from '@/app/_contexts/ProgressContext'

function page() {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [editorData, setEditorData] = useState('')
    const [file,setFile] = useState(null)
    const [date,setDateData] = useState('')
    const [filePreview,setFilePreview] = useState(null)
    const {showProgress,hideProgress} = useProgress()


    const  handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if(selectedFile){
            setFile(selectedFile)

            const reader = new FileReader();

            reader.onloadend = () => {
                setFilePreview(reader.result)
            };

            reader.readAsDataURL(selectedFile)

        }
    }

    const handleEditorChange = (newContent) => {
        setEditorData(newContent)
    }

    const handleDateChange = (e) => {
        setDateData(e.target.value)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }


    const handleFormSubmit = async() => {
        const data = new FormData()
        showProgress();
        data.append('title',title)
        // const date = moment(date).toISOString()
        data.append('date',moment(date).toISOString())
        data.append('description',description)
        data.append('editorData',editorData)
        data.append('file',file)
        data.append('journalId',id)


        console.log(data)
        const endpoint = APIConstants.AddJournalLeaf


        console.log(endpoint)
        await axios.post(endpoint,
            data
        ,{withCredentials:true}).
        then((res) => {
            console.log(res)
            toast.success("Added Successfully!")
        }).catch((error) =>{
            console.log(error)
            toast.error("Something went Wrong!")
        }).finally(() =>{
            hideProgress();
        })
    }

    return (
        <>
            <div className='grid min-h-screen sm:grid-cols-1 lg:grid-cols-2 justify-center items-center container w-full'>
                <div className='container mt-2'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-2xl font-extrabold flex flex-row'>Create Your Journal <ArrowRightCircleIcon className='m-1 animate-bounce' /></h1>
                        <Button onClick={handleFormSubmit}>Submit</Button>
                    </div>
                    <form onSubmit={handleFormSubmit} >
                        <div className='flex flex-row justify-between'>
                        <div className='w-full px-4 py-4'>
                            <Label className="text-xl font-extrabold">Title to Your Journal</Label>
                            <Input
                                className="mt-2 w-full"
                                placeholder="Add the Title"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>

                        <div className='w-full px-4 py-4'>
                            <Label className="text-xl font-extrabold">Title to Your Journal</Label>
                            <Input
                                className="mt-2"
                                placeholder="Add Date"
                                value={date}
                                onChange={handleDateChange}
                                type="date"
                            />
                        </div>
                        </div>

                        <div className='mt-4'>
                            <Label className="text-xl font-extrabold mt-2">Add Your Description</Label>
                            <Input
                                className="mt-2"
                                placeholder="Add a description"
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </div>

                        <div className='mt-4'>
                            <Label className="text-xl font-extrabold">Add Your Content</Label>
                            <div className='mt-2'>
                                <TinyMCEEditor EditorData={editorData} onEditorChange={handleEditorChange} />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <Label className="text-xl font-extrabold">Upload File Background Image</Label>
                            <Input type="file" onChange={handleFileChange} placeholder="Upload File" className="mt-2" />
                        </div>
                    </form>
                </div>

                {/* Preview Section */}
                <div className='py-8 px-8'>
                    <Card >
                        {filePreview ? (
                            <img src={filePreview}
                            alt='Preview'
                            className='w-full h-1/2 object-cover'
                            style={{height:'500px'}}
                            ></img>
                        ):(
                           <Card className="w-full h-[300px] bg-gray-300 flex justify-center items-center">
                            <h1>Image Preview</h1>
                            </Card>
                        )}
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold">{title || "Your Journal Title"}</h2>
                                <p>{description || "Add a description of your journal here..."}</p>
                                <div dangerouslySetInnerHTML={{ __html: editorData }} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default page
