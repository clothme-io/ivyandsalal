import axios from 'axios'
import { EarlyCustomerAccessRequestModel } from './earlyAccessModel';

const baseURL = "https://clothme-api.onrender.com/v1/user"

// this api call retunrs all data based on the id
export async function signUpForEarlyAccess(
    input: EarlyCustomerAccessRequestModel
): Promise<any> {
    console.log('Got here')
    try {
        const resp = await axios.post(`${baseURL}/marketing/early/customer-signup`, { email: input.email })
        console.log('No such document!', resp);
        if (!resp.data.ok && resp.status > 200) {
        }
        return resp;
    } catch (err: any) {
        return err;
    }
};




