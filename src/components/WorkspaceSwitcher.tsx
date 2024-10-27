'use client'
import React from 'react'
import { useGetWorkspaces } from './features/workspaces/api/useGetWorkspaces'

type Props = {}

const WorkspaceSwitcher = (props: Props) => {
    const {data , isLoading} = useGetWorkspaces(); 
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default WorkspaceSwitcher