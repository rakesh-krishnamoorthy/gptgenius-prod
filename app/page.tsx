import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className='text-6xl font-bold text-primary'> GPT Genius </h1>
          <p className='py-6 text-lg leading-loose '>
            GPTGenius: Your AI Language companion. Powered by openAI , It enhances your 
            Conversation , content creation and more ! 
          </p>
          <Link href='/chat' className="btn btn-primary my-5 ">Get started</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage