import { getCurrent } from '@/components/features/auth/actions'
import SigninCard from '@/components/features/auth/components/SigninCard'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const user = await getCurrent();
  
  if(user) redirect('/')
  return (
      <SigninCard/>
  )
}

export default page