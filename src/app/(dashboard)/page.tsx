import { getCurrent } from "@/components/features/auth/actions";
import { UserButton } from "@/components/features/auth/components/UserButton";
import { getWorkspaces } from "@/components/features/workspaces/actions";
import CreateWorkspaceForm from "@/components/features/workspaces/components/CreateWorkspaceForm";

import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/signin");

  const workspaces = await getWorkspaces();
  if(!workspaces) {

    redirect ("/workspaces/create");
  }else {
    redirect(`/workspaces/${workspaces.documents[0].$id}`)
  }


  return (
    <div>
      {/* <CreateWorkspaceForm />  */}

      helllo
    </div>
  );
}
