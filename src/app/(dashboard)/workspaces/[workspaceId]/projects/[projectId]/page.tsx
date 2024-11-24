import { getCurrent } from '@/components/features/auth/actions'
import { getProject } from '@/components/features/projects/actions';
import { ProjectAvatar } from '@/components/features/projects/components/ProjectAvatar';
import TaskViewSwitcher from '@/components/features/tasks/components/TaskViewSwitcher';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
  params : {
    projectId : string
  }
}

const page = async({params}: Props) => {
  const user = await getCurrent();
  if(!user) redirect ("/signin")

    const initialValues = await getProject({
      projectId : params.projectId
    })

    if(!initialValues) {
      return new Error ("Project not found")
    }
  return (
    <div className="flex flex-col gap-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <ProjectAvatar
          name={initialValues.name}
          image={initialValues.imageUrl}
          className="size-8"
        />
        <p className="text-lg font-semibold">{initialValues.name}</p>
      </div>
      <div className="">
          <Button variant="secondary" size="sm" asChild>
            <Link
              href={`/workspaces/${initialValues.workspaceId}/projects/${initialValues.$id}/settings`}
            >
              <PencilIcon className="size-4 mr-2" />
              Edit Project
            </Link>
          </Button>
        </div>
     
    </div>
    <TaskViewSwitcher />
  </div>
  )
}

export default page