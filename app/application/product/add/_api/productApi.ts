import axios from 'axios'
import { AddProductInputType } from '../_actions/addProductQuery';
import { baseURL } from '@/app/_common/constant';

export async function addProduct(
    input: AddProductInputType
): Promise<any> {
    try {

        const bodyData = {
            name: input.name,
            description: input.description,
            genderType: input.genderType,
            fitType: input.fitType,
            styleType: input.styleType,
            productType: input.productType
        }

        const resp = await axios({
            method: 'PUT',
            url: `${baseURL}/add/basic-info?vendorId=${input.vendorId}&brandId=${input.brandId}`,
            data: bodyData
        })

        console.log('Data from product add!', resp);

        if (!resp.data.ok && resp.status > 200) {
        }

        const response = resp.data;

        return response;

    } catch (err: any) {

        return err;

    }
};


export async function addImages(
    input: AddProductInputType
): Promise<any> {
    try {

        const bodyData = {
            name: input.name,
            description: input.description,
            genderType: input.genderType,
            fitType: input.fitType,
            styleType: input.styleType,
            productType: input.productType
        }

        const resp = await axios({
            method: 'PUT',
            url: `${baseURL}/add/basic-info?vendorId=${input.vendorId}&brandId=${input.brandId}`,
            data: bodyData
        })

        console.log('Data from product add!', resp);

        if (!resp.data.ok && resp.status > 200) {
        }

        const response = resp.data;

        return response;

    } catch (err: any) {

        return err;

    }
};

export async function getProduct(
    docId: string
): Promise<any> {
    console.log('Got here')
    try {
        const resp = await axios.get(`${baseURL}/article/read`, { params: { outlineId: docId } })
        console.log('No such document!', resp);
        if (!resp.data.ok && resp.status > 200) {
        }
        const response = "articleFromJSON(resp.data)"
        return response;
    } catch (err: any) {
        return err;
    }
};

// this api call retunrs all data based on the project_id, account_id is used for check
export async function getProducts(
    account_id: string,
    project_id: string,
): Promise<any> {
    try {
        const resp = await axios.get(`${baseURL}/article/read/all?processing=false&accountId=${account_id}&projectId=${project_id}`);
        console.log('The data from API ==== !', resp.data);
        if (!resp.data.ok && resp.status > 200) {
        }
        const returnedData = "articlesFromJSON(resp.data.data)"
        console.log('The data from ArticleModelInterface', returnedData);
        return returnedData;
    } catch (err: any) {
        return err;
    }
};


