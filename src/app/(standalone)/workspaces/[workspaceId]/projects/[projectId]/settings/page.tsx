import { getCurrent } from "@/components/features/auth/actions";
import { getProject } from "@/components/features/projects/actions";
import { EditProjectForm } from "@/components/features/projects/components/UpdateProjectFormt";
import { redirect } from "next/navigation";
import React from "react";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  };
}

const page = async ({ params }: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/signin");

  const initialValues = await getProject({
    projectId: params.projectId,
  });

  if (!initialValues) {
    throw new Error("Project not found");
  }
  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
};

export default page;
