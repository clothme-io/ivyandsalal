/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EarlyCustomerAccessRequestModel } from '../_api/earlyAccessModel';
import { signUpForEarlyAccess } from '../_api/earlyAccessApi';

const ADD_EARLY_ACCESS = ['addEarlyAccess'];

export function useAddEarlyAccessAction() {

  const queryClient = useQueryClient()

  return useMutation<any, Error, EarlyCustomerAccessRequestModel>({
    mutationFn: signUpForEarlyAccess,
    mutationKey: ADD_EARLY_ACCESS,
    onMutate: (variables) => {
      // A mutation is about to happen!

      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 }
    },
    onError: (error, variables, context: any) => {
      console.log(`rolling back optimistic update with id ${context.id}`)
    },
    onSuccess: (data, variables, context: any) => {
      console.log('This is the date return ===', data)
      // queryClient.invalidateQueries({ queryKey: ['getBrands'] })
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
}

