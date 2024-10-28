import CreateWorkspaceForm from '@/components/features/workspaces/components/CreateWorkspaceForm'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full lg:max-w-xl">
    <CreateWorkspaceForm />
  </div>
  )
}

export default page