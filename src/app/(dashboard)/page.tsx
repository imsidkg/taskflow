
import { getCurrent } from "@/components/features/auth/actions";
import { UserButton } from "@/components/features/auth/components/UserButton";
import CreateWorkspaceForm from "@/components/features/workspaces/components/createWorkspaceForm";
import { redirect } from "next/navigation";


export default async function Home() {
  const user = await getCurrent();
  
  if (!user) redirect("/signin");



  return (
    <div>
      <CreateWorkspaceForm/>
    </div>
  );
}
