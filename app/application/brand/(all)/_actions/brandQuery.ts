/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useQuery } from '@tanstack/react-query'
import { getBrand, getBrands } from '../_api/brandApi';
type ErrorType = {}

export type GetArticleInputType = { id: string }

const GET_ARTICLE_QUERY_KEY = 'getArticle';

export function getBrandAction(params: GetArticleInputType) {
  return useQuery<any, ErrorType>({
    queryKey: [GET_ARTICLE_QUERY_KEY, params],
    queryFn: () => getBrand(params.id)
  })
}

export type GetBrandsInputType = {
  vendorId: string;
}

const GET_BRANDS_QUERY_KEY = 'getBrands';

export function useGetBrands(params: GetBrandsInputType) {
  return useQuery<any[], ErrorType>({
    queryKey: [GET_BRANDS_QUERY_KEY, params],
    queryFn: () => getBrands(params.vendorId)
  })
}