import React from 'react'
import { generateTourImage, getSingleTour } from '../../../../utils/action'
import { redirect } from 'next/dist/server/api-utils'
import SingleTourInfo from '@/components/SingleTourInfo'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios';
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;


const SingleTourPage = async ({params}) => {
    const tour = await getSingleTour(params.id)

    if(!tour){
        redirect('/tours');
    }
    const {data} = await axios.get(`${url}${tour.city}`)
    const tourImage = data?.results[0]?.urls?.raw;

 //   const tourImage = await generateTourImage({
 //       city: tour.city ,
 //       country: tour.country,
 //   });

    return (
    <div>
        <Link href='/tours' className='btn btn-secondary mb-12'>
        Back to Tours
        </Link>
        {
            tourImage ? (
            <div>
                <Image
                    src={tourImage}
                    width={300}
                    height={300}
                    className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover'
                    alt={tour.title}
                    priority />
            </div>
            ) : null
        }
        <SingleTourInfo tour={tour} />
    </div>
  )
}

export default SingleTourPage