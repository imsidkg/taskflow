'use client'
import React from 'react'
import ResponsiveModal from '../../../ResponsiveModal';
import CreateWorkspaceForm from './CreateWorkspaceForm';

type Props = {}

const CreateWorkspaceModal = (props: Props) => {
    return (
        <ResponsiveModal open onOpenChange = { () => {}}>
          <CreateWorkspaceForm />
        </ResponsiveModal>
      );
}

export default CreateWorkspaceModal