'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addBrand, addBrandContact, addBrandLogo, getBrand, getBrands } from '../_api/brandApi';
type ErrorType = {}

// dd Brabd
export type AddBrandInputType = {
  vendorId: string;
  name: string;
  description: string,
  genderType: string,
  brandType: string;
  demography: string;
  establishedDate: string;
  locations: string[]
}
const ADD_BRAND_MUTATION_KEY = ['addBrandBasic'];

export function useAddBrandAction() {

  const queryClient = useQueryClient()

  return useMutation<any, Error, AddBrandInputType>({
    mutationFn: addBrand,
    mutationKey: ADD_BRAND_MUTATION_KEY,
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

// dd Brabd
export type AddBrandLogoType = {
  vendorId: string;
  brandId: string;
  logo: any;
}
const ADD_BRAND_LOGO_MUTATION_KEY = ['addBrandLogo'];

export function useAddBrandLogoAction(input: AddBrandLogoType) {

  const queryClient = useQueryClient()

  return useMutation<any, Error, AddBrandLogoType>({
    mutationFn: addBrandLogo,
    mutationKey: ADD_BRAND_CONTACT_MUTATION_KEY,
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

// dd Brabd
export type AddBrandContactType = {
  vendorId: string;
  brandId: string;
  firstName: string,
  lastName: string,
  position: string,
  email: string,
  phoneNumber: string,
}
const ADD_BRAND_CONTACT_MUTATION_KEY = ['addBrandContact'];

export function useAddBrandContactAction(input: AddBrandContactType) {

  const queryClient = useQueryClient()

  return useMutation<any, Error, AddBrandContactType>({
    mutationFn: addBrandContact,
    mutationKey: ADD_BRAND_CONTACT_MUTATION_KEY,
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


// Get Brand
export type GetBrandInputType = { id: string }
const GET_BRAND_QUERY_KEY = 'getBrand';
export function useGetBrandAction(params: GetBrandInputType) {
  return useQuery<any, ErrorType>({
    queryKey: [GET_BRAND_QUERY_KEY, params],
    queryFn: () => getBrand(params.id)
  })
}

// Get Brands
export type GetBrandsInputType = {
  project_id: string;
  account_id: string;
}
const GET_BRANDS_QUERY_KEY = 'getBrands';
export function useBrandsAction(params: GetBrandsInputType) {
  return useQuery<any[], ErrorType>({
    queryKey: [GET_BRANDS_QUERY_KEY, params],
    queryFn: () => getBrands(params.account_id, params.project_id)
  })
}