'use client';

import { useQueryClient , useMutation } from '@tanstack/react-query';
import { getExistingTour,generateTourResponse,createNewTour } from '@/utils/action';
import React from 'react'
import toast from 'react-hot-toast';
import Tourinfo from './Tourinfo';
import { useAuth } from '@clerk/nextjs';


const NewTour = () => {
  const queryClient = useQueryClient();
  const {userId} = useAuth();

  const { mutate,isPending,data: tour } = useMutation({
    mutationFn: async (Destination) => {

      const existingTour = await getExistingTour(Destination);
      if(existingTour) return existingTour;

      const currentTokens = await fetchUserTokensById(userId)
      if(currentTokens < 300){
        toast.error('Token balance is too low...')
        return;
      }

      const newTour = await generateTourResponse(Destination);
      if(!newTour){
        toast.error('No matching city found...');
        return null;
      }
      
        const response = await createNewTour(newTour.tour)
        queryClient.invalidateQueries({ queryKey : ['tours'] })
        const newTokens = await subtractTokens(userId, newTour.tokens)
        toast.success(`${newTokens} tokens remaining...`)
        return newTour.tour;
      
      
    }
  })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const Destination = Object.fromEntries(formData.entries());
        console.log(Destination);
        mutate(Destination)
    }

    if(isPending){
      return <span className=' loading loading-lg '></span>
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='max-w-4xl' >
            <h2 className='mb-4'>Select Your Dream Destination</h2>
            <div className="join max-w">
                <input type="text" className='input input-bordered join-item w-full'
                 placeholder='city'
                 name='city'
                 required />

                 <input type="text" className='input input-bordered join-item w-full'
                  placeholder='country'
                  name='country'
                  required />
                  
                <button className='btn btn-primary join-item'  type='submit'>generate tour</button>
            </div>
        </form>
        {/*For spacing between the form and generated code */}
        <div className="mt-16">
          { tour ? <Tourinfo tour = {tour} /> : null }
        </div>

    </div>
  )
}

export default NewTour