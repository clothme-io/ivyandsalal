'use client'

import { useQuery } from '@tanstack/react-query'
import { getProduct, getProducts } from '../_api/productApi';
// import { ErrorType } from "@/utils/errorType/ErrorType";
type ErrorType = {}
// import { ArticleInterfaceData, ArticleModelInterface } from '../_model/Article';

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