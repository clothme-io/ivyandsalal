'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addBrandSocials } from '../_api/brandApi';
type ErrorType = {}

// dd Brabd
export type AddSocialsInputType = {
    vendorId: string;
    brandId: string;
    facebookUrl: string;
    linkedInUrl: string;
    instagramUrl: string,
    tiktokUrl: string
}
const ADD_SOCIALS_MUTATION_KEY = ['addSocials'];

export function useAddSocialAction() {

    const queryClient = useQueryClient()

    return useMutation<any, Error, AddSocialsInputType>({
        mutationFn: addBrandSocials,
        mutationKey: ADD_SOCIALS_MUTATION_KEY,
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
            queryClient.invalidateQueries({ queryKey: ['getBrands'] })
        },
        onSettled: (data, error, variables, context) => {
            // Error or success... doesn't matter!
        },
    });
}
