'use client'
import { useCurrent } from "@/components/features/auth/api/useCurrent";
import { useLogout } from "@/components/features/auth/api/useLogout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router   = useRouter();
  const {data , isLoading} = useCurrent();
  const {mutate} = useLogout();

  useEffect(() => {
  if(!data && !isLoading) {
    router.push('/signup')
  }
  }, [data])
  return (
    <div>
      only visible to you

      <Button onClick={() => mutate()}>lougout</Button>
    </div>
  );
}
