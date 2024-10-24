"use client";

import Link from "next/link";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { DottedSeparator } from "@/components/DottedSeperator";
import { useRegister } from "../api/useRegister";

type Props = {}
const formSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum of 8 characters required"),
  });
  

const SignupCard = (props: Props) => {
  const {mutate} = useRegister();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: " ",
          email: "",
          password: "",
        },
      });
    
      const onSubmit = (data: z.infer<typeof formSchema>) => {
       mutate({json:data})
      };
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
    <CardHeader className="flex items-center justify-center text-center p-7">
      <CardTitle className="text-2xl">Create New Account!</CardTitle>
      <CardDescription>
        By signing up, you agree to our{" "}
        <Link href="#" className="text-blue-700">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-blue-700">
          terms of service.
        </Link>
      </CardDescription>
    </CardHeader>
    <div className="px-7">
      <DottedSeparator />
    </div>
    <CardContent className="p-7">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size="lg" className="w-full" disabled={false}>
            Signup
          </Button>
        </form>
      </Form>
    </CardContent>
    <div className="px-7">
      <DottedSeparator />
    </div>
    <CardContent className="p-7 flex flex-col gap-y-4">
      <Button
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={false}
      >
        <FcGoogle className="mr-2 size-5" />
        Login with Google
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={false}
      >
        <FaGithub className="mr-2 size-5" />
        Login with Github
      </Button>
    </CardContent>
    <div className="px-7">
      <DottedSeparator />
    </div>
    <CardContent className="p-7 flex items-center justify-center">
      <p>
        Already have an account?
        <Link href="signin" className="text-blue-700">
          &nbsp;Login
        </Link>
      </p>
    </CardContent>
  </Card>
  )
}

export default SignupCard