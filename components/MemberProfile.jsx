import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { currentUser,auth } from '@clerk/nextjs/server'
import { fetchOrGenerateTokens } from '../utils/action';


const MemberProfile = async () => {
    const user = await currentUser();
    const { userId } = auth();
    await fetchOrGenerateTokens(userId);
    
  return (
    <div className='px-4 flex items-center gap-2'>
        <UserButton afterSignOutUrl='/' />
        <p className='text-sm font-semibold'>{user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}

export default MemberProfile