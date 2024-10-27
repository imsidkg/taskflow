import type { InferRequestType, InferResponseType } from 'hono'
import {client} from '@/lib/rpc'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

type ResponseType    = InferResponseType<typeof client.api.workspaces["$post"]>
type RequestType  = InferRequestType< typeof client.api.workspaces["$post"]>

export const useCreateWorkspace = () => {
    const router  = useRouter();
    const queryClient = useQueryClient()
    const mutation = useMutation<ResponseType ,  Error,RequestType>({
        mutationFn : async ({form}) => {
            const response =  await client.api.workspaces["$post"]({form})
            return await response.json();
        },
        onSuccess : () => {
            router.refresh();
            queryClient.invalidateQueries({queryKey : ['workspace']})
        }
    })
    return mutation;
}