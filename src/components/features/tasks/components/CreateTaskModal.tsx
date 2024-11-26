'use client'
import React from 'react'
import { useCreateTaskModal } from '../hooks/useCreateTaskModal';
import ResponsiveModal from '@/components/ResponsiveModal';

type Props = {}

const CreateTaskModal = (props: Props) => {
    const {isOpen, setIsOpen, close} = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
    <div className="">
        TODO
    </div>
</ResponsiveModal>
  )
}

export default CreateTaskModal