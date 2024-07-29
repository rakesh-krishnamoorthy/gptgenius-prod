import React from 'react';
import { UserProfile } from '@clerk/nextjs';
import { fetchUserTokensById } from '@/utils/action';
import { auth } from '@clerk/nextjs/server';

const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId)
  return (
    <div>
      <h2 className='mb-8 ml-8 text-xl font-extrabold'>
        TokenAmount: {currentTokens}
      </h2>
      <UserProfile />
    </div>
  )
}

export default ProfilePage