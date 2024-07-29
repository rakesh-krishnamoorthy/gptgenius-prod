import React from 'react'
import { dehydrate,HydrationBoundary,QueryClient } from '@tanstack/react-query';
import { getAllTours } from '@/utils/action';
import ToursPage from '../../../components/ToursPage'

const ChatPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['tours',''],
    queryFn:() => getAllTours()
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  )
}

export default ChatPage