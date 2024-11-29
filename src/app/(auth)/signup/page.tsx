import { getCurrent } from '@/components/features/auth/actions'
import SignupCard from '@/components/features/auth/components/SignupCard'
import { redirect } from 'next/navigation'
import React from 'react'


const page = async() => {
  const user = await getCurrent();

  if(user) redirect('/')
  return (
    <div><SignupCard/></div>
  )
}

export default page