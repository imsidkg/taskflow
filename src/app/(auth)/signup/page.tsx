import { getCurrent } from '@/components/features/auth/actions'
import SignupCard from '@/components/features/auth/components/SignupCard'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const page = async(props: Props) => {
  const user = await getCurrent();
  if(user) redirect('/')
  return (
    <div><SignupCard/></div>
  )
}

export default page