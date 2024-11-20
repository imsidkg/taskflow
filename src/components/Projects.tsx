'use client'
import React from 'react'
import { RiAddCircleFill } from 'react-icons/ri'
import { useGetWorkspaces } from './features/workspaces/api/useGetWorkspaces'
import { useWorkspaceId } from './features/workspaces/hooks/useWorkspaceId'
import { useGetProjects } from './features/projects/api/useGetProjects'

type Props = {}

const Projects = (props: Props) => {

  const workspaceId  = useWorkspaceId();
  const query = useGetProjects({workspaceId});
  const data = query.data;
  return (
    <div className="flex flex-col gap-y-2">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase text-neutral-500">
        Projects
      </p>
      <RiAddCircleFill
        onClick={() => {}}
        className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
      />
    </div>
    </div>
  )
}

export default Projects