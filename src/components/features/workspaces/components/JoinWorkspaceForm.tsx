'use client'
import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DottedSeparator } from '@/components/DottedSeperator';
import { useWorkspaceId } from '../hooks/useWorkspaceId';
import { useInviteCode } from '../hooks/useInviteCode';
import { useJoinWorkspace } from '../api/useJoinWorkspace';


interface JoinWorkspaceFormProps {
    initialValues: {
      name: string;
    };
  }

const JoinWorkspaceForm = ({initialValues}: JoinWorkspaceFormProps) => {

    const router = useRouter();
    const workspaceId = useWorkspaceId();
    const inviteCode = useInviteCode();
    const { mutate, isPending } = useJoinWorkspace();


    const onSubmit = () => {
        mutate(
          {
            param: { workspaceId },
            json: { code: inviteCode },
          },
          {
            onSuccess: ({ data }) => {
              router.push(`/workspaces/${data.$id}`);
            },
          }
        );
      };
  return (
    <Card className="w-full h-full border-none shadow-none ">
    <CardHeader className="p-7 items-center justify-center">
      <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
      <CardDescription>
        You&apos;ve been invited to join <strong>{initialValues.name}</strong>{" "}
        workspace
      </CardDescription>
    </CardHeader>
    <div className="px-7">
      <DottedSeparator />
    </div>
    <CardContent className="p-7">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <Button
          variant="secondary"
          type="button"
          asChild
          size="lg"
          className="w-full lg:w-fit"
          disabled={isPending}
        >
          <Link href="/">Cancel</Link>
        </Button>
        <Button
          size="lg"
          className="w-full lg:w-fit"
          type="button"
          onClick={onSubmit}
          disabled={isPending}
        >
          Join Workspace
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}

export default JoinWorkspaceForm