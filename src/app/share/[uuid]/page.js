"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import * as APIConstants from '../../_utils/ApiConstants';
import { toast } from 'sonner';
import { useProgress } from '@/app/_contexts/ProgressContext';
import Image from 'next/image';

const SharePage = () => {
  const { uuid } = useParams();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { showProgress, hideProgress } = useProgress();

  useEffect(() => {
    const fetchJournalData = async () => {
      if (!uuid) {
        toast.error('Invalid journal ID');
        router.push('/login');
        return;
      }

      try {
        showProgress();
        const response = await axios.post(
          APIConstants.openShareUrl,
          {
            requestBody: { uuid }
          },
          {
            withCredentials: true
          }
        );

        setData(response.data.responseBody.data);
        toast.success('Journal loaded successfully');
      } catch (error) {
        const errorMessage = error.response?.status === 401
          ? 'Please login to view this journal'
          : 'Failed to load journal';

        toast.error(errorMessage);
        router.push('/login');
      } finally {
        hideProgress();
        setIsLoading(false);
      }
    };

    fetchJournalData();
  }, [uuid, router, showProgress, hideProgress]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse">Loading journal...</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="container min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-4 md:p-6">
        {/* Journal Image with Next.js Image optimization */}
        <div className="relative w-full h-[500px] mb-8">
          <Image
            className="rounded-lg object-cover"
            src={`data:${data.imageType};base64,${data.journalImage}`}
            alt={data.journalTitle}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {data.journalTitle}
        </h1>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            {data.journalDescription}
          </p>
        </div>

        {/* Journal Content */}
        <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Journal Content
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: data.journalContent }}
            className="prose-img:rounded-lg prose-headings:text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default SharePage;