'use client'
import { DottedSeparator } from '@/components/DottedSeperator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react'
import { createWorkspaceSchema, updateWorkspaceSchema } from '../schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateWorkspace } from '../api/useCreateWorkspace';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useUpdateWorkspace } from '../api/useUpdateWorkspace';

type Props = {
    onCancel ? : () => void
    initialValues :any
}

const EditWorkspaceForm = ({onCancel , initialValues}: Props) => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null)
    const {mutate , isPending} = useUpdateWorkspace();

    const form = useForm<z.infer<typeof updateWorkspaceSchema>>({
        resolver: zodResolver(updateWorkspaceSchema),
        defaultValues: {
          ...initialValues, 
          image : initialValues.imageUrl ?? ""
        },
      });

      function onSubmit (values: z.infer<typeof updateWorkspaceSchema>) {
        const finalValues = {
            ...values,
            image: values.image instanceof File? values.image : " "
        }
       mutate(
        {form: finalValues,
          param : {workspaceId : initialValues.$id}
        },
        {
            onSuccess: ({data}) => {
                form.reset();
                router.push(`/workspaces/${data.$id}`);
            }
        }
       )
      }
      function handleImageChange(e:React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0];
        if(file){
            form.setValue('image' , file)
        }
      }

  return (
    <Card className="w-full h-full border-none shadow-none">
    <CardHeader className="flex p-7">
      <CardTitle className="text-xl font-bold">
        {initialValues.name}
      </CardTitle>
    </CardHeader>
    <div className="px-7">
      <DottedSeparator />
    </div>
    <CardContent className="p-7">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workspace Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter workspace name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-5">
                    {field.value ? (
                      <div className="size-[72px] relative rounded-md overflow-hidden">
                        <Image
                          src={
                            field.value instanceof File
                              ? URL.createObjectURL(field.value)
                              : field.value
                          }
                          alt="Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <Avatar className="size-[72px]">
                        <AvatarFallback>
                          <ImageIcon className="size-[36px] text-neutral-400" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="flex flex-col">
                      <p className="text-sm">Workspace Icon</p>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG, SVG or JPEG, max 1 mb
                      </p>
                      <Input
                        className="hidden"
                        type="file"
                        accept=".jpg, .png, .svg, .jpeg"
                        ref={inputRef}
                        onChange={handleImageChange}
                        disabled={isPending}
                      />
                      {field.value ? (
                        <Button
                          type="button"
                          disabled={isPending}
                          variant="destructive"
                          size="xs"
                          className="w-fit mt-2"
                          onClick={() => {
                            field.onChange(null);
                            if (inputRef.current) {
                              inputRef.current.value = "";
                            }
                          }}
                        >
                          Remove Image
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          disabled={isPending}
                          variant="tertiary"
                          size="xs"
                          className="w-fit mt-2"
                          onClick={() => inputRef.current?.click()}
                        >
                          Upload Image
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
          <DottedSeparator className="py-7" />
          <div className="flex items-center justify-between">
            <Button
              type="button"
              size="lg"
              variant="secondary"
              onClick={onCancel}
              disabled={isPending}
              className={cn(!onCancel && "invisible")}
            >
              Cancel
            </Button>
            <Button type="submit" size="lg" disabled={isPending}>
              Create Workspace
            </Button>
          </div>
        </form>
      </Form>
    </CardContent>
  </Card>
  )
}

export default EditWorkspaceForm