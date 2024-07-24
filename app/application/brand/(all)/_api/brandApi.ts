import axios from 'axios'
import { baseURL } from '@/app/_common/constant';

// this api call retunrs all data based on the id
export async function getBrand(
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
export async function getBrands(
    vendorId: string,
): Promise<any> {
    try {
        const resp = await axios({
            method: 'GET',
            url: `${baseURL}/application/brands?vendorId=${vendorId}`,
        });
        console.log('The data from API ==== !', resp.data);
        if (resp.data.error === null && resp.status > 200) {
            // error
        }

        return { status: 200, value: resp.data.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};

// this api call retunrs all data based on the project_id, account_id is used for check
export type AddBrandBasicInfoBodyParamsInput = {
    name: string
    establishedDate: string
    description: string
    type: string
    genderType: string
    locations: {
        city: string
        country: string
        stateProvince: string
        continent: string
    }
}
export async function addBrandBasicInfo(
    vendorId: string,
    brandId: string,
    bodyParams: AddBrandBasicInfoBodyParamsInput,
): Promise<any> {
    try {
        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/basic-info/add?accountId=${vendorId}&brandId=${brandId}`,
            data: bodyParams
        });
        console.log('The data from API ==== !', resp.data);
        if (resp.data.error === null && resp.status > 200) {
            // error
        }

        return { status: 200, value: resp.data.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};

// this api call retunrs all data based on the project_id, account_id is used for check
export type AddBrandVisualInfo = {
    logoUrl: string
    badges: {
        sustainable: boolean
        ecoFriendly: boolean
    }
}
export async function addBrandVisualInfo(
    vendorId: string,
    brandId: string,
    bodyParams: AddBrandVisualInfo,
): Promise<any> {
    try {
        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/contac-info/add?accountId=${vendorId}&brandId=${brandId}`,
            data: bodyParams
        });
        console.log('The data from API ==== !', resp.data);
        if (resp.data.error === null && resp.status > 200) {
            // error
        }

        return { status: 200, value: resp.data.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};


// this api call retunrs all data based on the project_id, account_id is used for check
export type AddBrandSocialInfoBodyParams = {
    socials: {
        linkedIn: string
        facebook: string
        instagram: string
        tiktok: string
    }
}
export async function addBrandSocialInfo(
    vendorId: string,
    brandId: string,
    bodyParams: AddBrandSocialInfoBodyParams,
): Promise<any> {
    try {
        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/contac-info/add?accountId=${vendorId}&brandId=${brandId}`,
            data: bodyParams
        });
        console.log('The data from API ==== !', resp.data);
        if (resp.data.error === null && resp.status > 200) {
            // error
        }

        return { status: 200, value: resp.data.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};


// this api call retunrs all data based on the project_id, account_id is used for check
export type AddBrandContactInfoBody = {
    firstName: string
    lastName: string
    position: string
    email: string
    phoneNumber: string
}

export async function addBrandContactInfo(
    vendorId: string,
    brandId: string,
    bodyParams: AddBrandContactInfoBody,
): Promise<any> {
    try {
        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/contac-info/add?accountId=${vendorId}&brandId=${brandId}`,
            data: bodyParams
        });
        console.log('The data from API ==== !', resp.data);
        if (resp.data.error === null && resp.status > 200) {
            // error
        }

        return { status: 200, value: resp.data.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};


