'use client'
import React from 'react'
import { RiAddCircleFill } from 'react-icons/ri'
import { useGetWorkspaces } from './features/workspaces/api/useGetWorkspaces'
import { useWorkspaceId } from './features/workspaces/hooks/useWorkspaceId'
import { useGetProjects } from './features/projects/api/useGetProjects'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCreateProjectModal } from './features/projects/hooks/useCreateProjectModal'

type Props = {}

const Projects = (props: Props) => {
  const pathname = usePathname();
  const workspaceId  = useWorkspaceId();
  const {open} = useCreateProjectModal()
  const {data} = useGetProjects({workspaceId});

  return (
    <div className="flex flex-col gap-y-2">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase text-neutral-500">
        Projects
      </p>
      <RiAddCircleFill
        onClick={() => open()}
        className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
      />
    </div>

    {data?.documents.map((project) => {
      const href = `/workspaces/${workspaceId}/projects/${project.$id}`;
      const isActive = pathname == href
      return (
        <Link href={href} key={project.$id}>
        <div
          className={cn(
            "flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500",
            isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
          )}
        >
          {/* <ProjectAvatar image={project.imageUrl} name={project.name} /> */}
          <span className="truncate">{project.name}</span>
        </div>
      </Link>
      )
    })}
    </div>
  )
}

export default Projects