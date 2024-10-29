import { getCurrent } from '@/components/features/auth/actions';
import CreateWorkspaceForm from '@/components/features/workspaces/components/CreateWorkspaceForm'
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const page = async(props: Props) => {
  const user = await getCurrent();

  if (!user) redirect("/signin");
  return (
    <div className="w-full lg:max-w-xl">
    <CreateWorkspaceForm />
  </div>
  )
}

export default page