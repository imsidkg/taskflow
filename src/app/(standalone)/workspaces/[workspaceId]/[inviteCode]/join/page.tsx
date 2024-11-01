import { getCurrent } from '@/components/features/auth/actions';
import { getWorkspaceInfo } from '@/components/features/workspaces/actions';
import JoinWorkspaceForm from '@/components/features/workspaces/components/JoinWorkspaceForm';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
    params: {
      workspaceId: string;
    };
  }

const page =async ({params}: Props) => {

    const user =  await getCurrent();
    if(!user) redirect('/signin')

        const initialValues = await getWorkspaceInfo({
            workspaceId: params.workspaceId,
        })


        if (!initialValues) {
            redirect("/");
          }
  return (
    <div className="w-full lg:max-w-md">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  )
}

export default page