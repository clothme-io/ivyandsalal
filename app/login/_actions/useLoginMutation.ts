import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LoginModelInterface } from '../_model/loginModel';
import { signIn } from '../_api/loginAPI';

export type ResponseModelType = {
  message: string;
  value: any
}

const ADD_LOGIN_QUERY_KEY = ['addLogin'];

export function useLoginMutation() {
  const queryClient = useQueryClient()
    return useMutation<any, Error, LoginModelInterface>({ 
        mutationFn: signIn,
        mutationKey: ADD_LOGIN_QUERY_KEY,
        onMutate: (variables) => {
          // A mutation is about to happen!
      
          // Optionally return a context containing data to use when for example rolling back
          return { id: 1 }
        },
        onError: (error, variables, context: any) => {
          // An error happened!
          console.log(`rolling back optimistic update with id ${context.id}`)
        },
        onSuccess: (data, variables, context: any) => {
          // ✅ refetch the comments list for our blog post
          const paramsData = {
            account_id: context.account_id,
            project_id: context.project_id
          }
          queryClient.invalidateQueries({
            queryKey: ['entity', paramsData]
          })
        },
        onSettled: (data, error, variables, context) => {
          // Error or success... doesn't matter!
        },
      });
}