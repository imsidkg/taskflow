import { getCurrent } from '@/components/features/auth/actions'
import SigninCard from '@/components/features/auth/components/SigninCard'
import { redirect } from 'next/navigation'
import React from 'react'



const page = async () => {
  const user = await getCurrent();
  
  if(user) redirect('/')
  return (
      <SigninCard/>
  )
}

export default page