"use client";
import React from "react";
import ResponsiveModal from "../../../ResponsiveModal";
import CreateWorkspaceForm from "./CreateWorkspaceForm";
import { useCreateWorkspaceModal } from "../hooks/useCreateWorkspaceModal";


const CreateWorkspaceModal = () => {
  const {  setIsOpen, isOpen } = useCreateWorkspaceModal();
  return (
    <ResponsiveModal open= {isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm />
    </ResponsiveModal>
  );
};

export default CreateWorkspaceModal;
