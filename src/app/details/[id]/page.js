"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as APIConstants from "../../_utils/ApiConstants";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Copy, Edit, Eye, Leaf, Share, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProgress } from "@/app/_contexts/ProgressContext";

function Page() {
  const { id } = useParams();
  const router = useRouter();
  const { showProgress, hideProgress } = useProgress();

  const [data, setData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Prevents duplicate API calls

  // Fetch Journal Data
  const fetchDataForJournal = async () => {
    if (!id || isLoading) return; // Prevent unnecessary calls
    setIsLoading(true);
    showProgress();

    try {
      const endpoint = APIConstants.GetAllLeafsinJournal;
      const res = await axios.post(
        endpoint,
        { requestBody: { journalId: parseInt(id) } },
        { withCredentials: true }
      );
      console.log(res)
      setData(res.data.responseBody.data);
      toast.success("Data Fetched Successfully!");
    } catch (error) {
      router.push('/login')
      toast.error("Something went wrong!Please Login again");
    } finally {
      hideProgress();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataForJournal();
  }, [id]); // Only runs when 'id' changes

  // Delete Journal Entry
  const handleDeleteView = async (journalId) => {
    if (!journalId) return;
    showProgress();

    try {
      const endpoint = APIConstants.deleteJournalLeaf;
      await axios.post(endpoint, { requestBody: { journalId } }, { withCredentials: true });

      toast.success("Successfully Deleted Your Leaf!");
      fetchDataForJournal(); // Refresh data after delete
    } catch (error) {
      router.push('/login')
      toast.error("Something went wrong");
    } finally {
      hideProgress();
    }
  };

  // Share Journal Entry
  const handleJournalShare = async (journalId) => {
    showProgress();

    try {
      const endpoint = APIConstants.GetshareUUIDBasedonJournal;
      const res = await axios.post(endpoint, { requestBody: { id: journalId } }, { withCredentials: true });

      setLink(`${window.location.origin}/share/${res.data.responseBody.data.uuid}`);
      setDialogOpen(true);
    } catch (error) {
      // router.push('/login')
      toast.error("Something went wrong!");
    } finally {
      hideProgress();
    }
  };

  // Copy Share Link to Clipboard
  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(link)
      .then(() => toast.success("Copied Successfully"))
      .catch(() => toast.error("Something went wrong!"));
    setDialogOpen(false);
  };

  return (
    <>
      <div className="container grid sm:grid-cols-1 lg:grid-cols-1 min-h-screen justify-center items-center">
        <div className="flex justify-center mt-2 py-8 px-8">
          <div className="py-8 px-8 shadow-2xl shadow-green-600 w-2/3">
            <Card className="px-8 py-8">
              <CardTitle>
                <h1>Journal Title</h1>
              </CardTitle>
              <CardHeader className="px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold px-4 py-4 flex flex-row">
                  Journal Activities <Activity className="mt-1 ml-2" />
                </h1>
                <Button className="mt-2" onClick={() => router.push(`/addLeaf/${id}`)}>
                  Add Leaf to Your Journal <Leaf />
                </Button>
              </CardHeader>
              <CardContent>
                {data.length > 0 ? (
                  data.map((item) => (
                    <Card key={item.id} className="mt-2 px-4 shadow-2xl shadow-orange-400">
                      <CardTitle className="px-4 py-4 flex justify-between items-center">
                        <span>{item.journalTitle}</span>
                        <div className="flex space-x-2">
                          <Trash2 className="cursor-pointer" onClick={() => handleDeleteView(item.id)} />
                          <Edit className="cursor-pointer" onClick={() => router.push(`/Changes/${item.id}`)} />
                          <Share className="cursor-pointer" onClick={() => handleJournalShare(item.id)} />
                          <Eye className="cursor-pointer" onClick={() => router.push(`/view/${item.id}`)} />
                        </div>
                      </CardTitle>
                      <Card className="mb-2">
                        <CardDescription className="px-8 py-8 text-ellipsis overflow-hidden whitespace-nowrap">
                          {item.journalDescription}
                        </CardDescription>
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

      {/* Share Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>Anyone with this link can view this.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="sharelink" className="sr-only">Link</Label>
              <Input id="sharelink" value={link} readOnly />
            </div>
            <Button type="button" size="sm" className="px-3" onClick={handleCopyShareLink}>
              <Copy />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Page;
