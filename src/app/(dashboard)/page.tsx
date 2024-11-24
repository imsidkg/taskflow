import { getCurrent } from "@/components/features/auth/actions";
import { getWorkspaces } from "@/components/features/workspaces/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect("/signin");

  const workspaces = await getWorkspaces();
  if (workspaces.total === 0) {
    redirect("/workspaces/create");
  } else {
    redirect(`/workspaces/${workspaces.documents[0].$id}`);
  }
}
