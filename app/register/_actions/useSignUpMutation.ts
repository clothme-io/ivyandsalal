'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SignUpModelInterface } from '../_model/signUpModel';
import { signUp } from '../_api/registerAPI';

export type AddEntityResponseType = {
  message: string;
  value: any
}

const ADD_SIGNUP_QUERY_KEY = ['addEntity'];

export function useSignUpMutation() {
  const queryClient = useQueryClient()
  return useMutation<any, Error, SignUpModelInterface>({
    mutationFn: signUp,
    mutationKey: ADD_SIGNUP_QUERY_KEY,
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
      console.log('The data in OnSuccess', data)
      console.log('The variables in OnSuccess', variables)
      console.log('The context in OnSuccess', context)
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  }
  );
}