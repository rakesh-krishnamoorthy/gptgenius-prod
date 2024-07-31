
import React from 'react'

const SingleTourInfo = ({ tour }) => {
  console.log( 'Single-trip', tour)
  const { title,description,stops } = tour;
  return (
    <div className='max-w-2xl'>
      <h2 className='text-4xl font-semibold mb-4'>{ title }</h2>
      <p className='leading-loose mb-4'>{ description }</p>
      <ul>
        { stops.map((stop => (
          <li key={stop} className='mb-4 bg-base-100 p-4 rounded-xl'>
            <p>{stop}</p>  
          </li>
          )
        
        ))}
      </ul>
    </div>
  )
}

export default SingleTourInfo