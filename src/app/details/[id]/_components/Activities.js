import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Edit, Leaf } from 'lucide-react'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const journalData = [
  {
    id: 1,
    date: "08/01/2024",
    journals: [
      {
        id: 2,
        title: "Cheers to Life",
        description: "Lorem Ipsum ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id: 3,
        title: "Journey to Life",
        description: "Lorem Ipsum ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id: 4,
        title: "Journey to Life",
        description: "Lorem Ipsum ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
      }
    ]
  },
  {
    id: 5,
    date: "09/01/2024",
    journals: [
      {
        id: 6,
        title: "Journey to Life",
        description: "Lorem Ipsum ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

      },
      {
        id: 7,
        title: "Journey to Life",
        description: "Lorem Ipsum ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
      },
      {
        id: 8,
        title: "Journey to Life",
        description: "Lorem Ipsum ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
      }
    ]
  }
]

function Activities( data ) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [filteredJournals, setFilteredJournals] = useState(null)
  console.log("Data is",data)
  // Simulating data loading (e.g., async data fetch or calculation)
  // useEffect(() => {
  //   if (selectedDate) {
  //     setLoading(true)
  //     const filtered = journalData.filter((item) =>
  //       moment(item.date).isSame(selectedDate, 'day')
  //     )
  //     setFilteredJournals(filtered)
  //     setLoading(false)
  //   }
  // }, [selectedDate])
  useEffect(() => {
    setFilteredJournals(journalData)

  },[])

  const handleJournalView = (id) => {
    router.push(`/Journal/Changes/${id}`)
  }

  const handleAdditionLeaf = () => {
    router.push("/addLeaf")
  }

  if (loading) {
    return <Loading /> // Show loading spinner if still loading
  }

  // if (!selectedDate) {
  //   return (
  //     <div className="w-full">
  //       <Card className="w-full px-8 py-8 shadow-2xl">
  //         <CardDescription className="flex justify-center items-center">
  //           <h1 className='font-bold text-lg text-zinc-950'>            
  //             Please select a Date
  //           </h1>
  //         </CardDescription>
  //       </Card>
  //     </div>
  //   )
  // }

  return (
    <div className="py-8 px-8 shadow-2xl shadow-green-600 w-full">
      <Card className="px-8 py-8">
        <CardHeader className="px-4 py-4">
          <div className='flex flex-row justify-between'>
          <h1 className="text-2xl font-bold px-4 py-4 flex flex-row">
            Journal Activities <Activity className="mt-1 ml-2" />
          </h1>
          <Button className="mt-2" onClick={handleAdditionLeaf}>Add Leaf to Your Journal <Leaf /></Button>
          </div>
        </CardHeader>
        <CardContent>
          {filteredJournals.length > 0 ? (
            filteredJournals.map((item) => (
              <Card key={item.id} className="mt-2 px-4 shadow-2xl shadow-orange-400">
                <CardTitle className="px-4 py-4">{moment(item.date).format("MMM Do YY")}</CardTitle>
                <Card className="mb-2">
                  {item.journals.map((journal) => (
                    <div key={journal.id}>
                      <CardTitle className="text-ellipsis py-4 px-4 flex flex-row">
                        {journal.title} <Edit className="ml-2" onClick={() => handleJournalView(journal.id)} style={{cursor:'pointer'}}/>
                      </CardTitle>
                      <CardDescription className="px-4 text-ellipsis overflow-hidden whitespace-nowrap">
                        {journal.content}
                      </CardDescription>
                    </div>
                  ))}
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
  )
}

export default Activities
