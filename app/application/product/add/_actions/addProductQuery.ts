'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addProduct, getProduct, getProducts } from '../_api/productApi';
type ErrorType = {}

export type AddProductInputType = {
  vendorId: string;
  brandId: string;
  name: string;
  description: string;
  genderType: string;
  fitType: string;
  styleType: string;
  productType: string;
}

const ADD_PRODUCT_MUTATION_KEY = ['addProduct']

export function useAddProductAction() {

  const queryClient = useQueryClient()

  return useMutation<any, Error, AddProductInputType>({
    mutationFn: addProduct,
    mutationKey: ADD_PRODUCT_MUTATION_KEY,
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


export type GetArticleInputType = { id: string }

const GET_ARTICLE_QUERY_KEY = 'getArticle';

export function useGetArticle(params: GetArticleInputType) {
  return useQuery<any, ErrorType>({
    queryKey: [GET_ARTICLE_QUERY_KEY, params],
    queryFn: () => getProduct(params.id)
  })
}

export type GetArticlesInputType = {
  project_id: string;
  account_id: string;
}

const GET_ARTICLES_QUERY_KEY = 'getArticles';

export function useGetArticles(params: GetArticlesInputType) {
  return useQuery<any[], ErrorType>({
    queryKey: [GET_ARTICLES_QUERY_KEY, params],
    queryFn: () => getProducts(params.account_id, params.project_id)
  })
}