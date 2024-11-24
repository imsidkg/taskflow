
import { getCurrent } from "@/components/features/auth/actions";
import { getWorkspace } from "@/components/features/workspaces/actions";
import EditWorkspaceForm from "@/components/features/workspaces/components/EditWorkspaceForm";
import { redirect } from "next/navigation";

type Props = {
  params: {
    workspaceId: string;
  };
};

const page = async({ params }: Props) => {
  const user = await getCurrent();
  if (!user) redirect("/signin");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });
  return ( 
    <div className="w-full lg:max-w-xl">
        <EditWorkspaceForm initialValues={initialValues} />
    </div>
 );
};

export default page;
