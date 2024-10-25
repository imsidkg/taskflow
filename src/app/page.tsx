
import { getCurrent } from "@/components/features/auth/actions";
import { UserButton } from "@/components/features/auth/components/UserButton";

import { redirect } from "next/navigation";


export default async function Home() {
  const user = await getCurrent();
  console.log(user);
  if (!user) redirect("/signin");



  return (
    <div>
      <UserButton />
    </div>
  );
}
