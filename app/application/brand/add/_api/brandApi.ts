import axios from 'axios'
import { AddBrandContactType, AddBrandInputType, AddBrandLogoType } from '../_actions/addBrandQuery';
import { baseURL } from '@/app/_common/constant';
import { AddSocialsInputType } from '../_actions/addSocialsQuery';

// this api call retunrs all data based on the id
export async function addBrand(
    input: AddBrandInputType
): Promise<any> {

    try {
        const bodyData = {
            name: input.name,
            type: input.brandType,
            description: input.description,
            establishedDate: input.establishedDate,
            genderType: input.genderType,
        }

        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/brand/add/basic?vendorId=${input.vendorId}`,
            data: bodyData
        })

        console.log('No such document!', resp);

        if (!resp.data.ok && resp.status > 200) {
        }

        return { status: 200, value: resp.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};

// this api call retunrs all data based on the id
export async function addBrandLogo(
    input: AddBrandLogoType
): Promise<any> {

    try {

        const bodyData = {
            logo: input.logo,
        }

        const resp = await axios({
            method: 'PUT',
            url: `${baseURL}/add/contact?vendorId=${input.vendorId}&brandId=${input.brandId}`,
            data: bodyData
        })

        console.log('No such document!', resp);

        if (!resp.data.ok && resp.status > 200) {
        }

        return { status: 200, value: resp.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};

// Add Socials
export async function addBrandSocials(
    input: AddSocialsInputType
): Promise<any> {

    try {

        const bodyData = {

        }

        const resp = await axios({
            method: 'PUT',
            url: `${baseURL}/social-info/add?vendorId=${input.vendorId}&brandId=${input.brandId}`,
            data: bodyData
        })

        console.log('No such document!', resp);

        if (!resp.data.ok && resp.status > 200) {
        }

        return { status: 200, value: resp.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};
// this api call retunrs all data based on the id
export async function addBrandContact(
    input: AddBrandContactType
): Promise<any> {

    try {

        const bodyData = {
            firstName: input.firstName,
            lastName: input.lastName,
            position: input.position,
            email: input.email,
            phoneNumber: input.phoneNumber,
        }

        const resp = await axios({
            method: 'PUT',
            url: `${baseURL}/add/contact?vendorId=${input.vendorId}&brandId=${input.brandId}`,
            data: bodyData
        })

        console.log('No such document!', resp);

        if (!resp.data.ok && resp.status > 200) {
        }

        return { status: 200, value: resp.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};

// this api call retunrs all data based on the id
export async function getBrand(
    docId: string
): Promise<any> {

    try {
        const resp = await axios.get(`${baseURL}/article/read`, { params: { outlineId: docId } })
        console.log('No such document!', resp);

        if (!resp.data.ok && resp.status > 200) {
        }

        return { status: 500, value: resp.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};

// this api call retunrs all data based on the project_id, account_id is used for check
export async function getBrands(
    account_id: string,
    project_id: string,
): Promise<any> {

    try {
        const resp = await axios.get(`${baseURL}/article/read/all?processing=false&accountId=${account_id}&projectId=${project_id}`);
        console.log('The data from API ==== !', resp.data);

        if (!resp.data.ok && resp.status > 200) {
        }

        return { status: 500, value: resp.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};


