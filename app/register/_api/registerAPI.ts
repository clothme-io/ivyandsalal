import axios from "axios";
import { SignUpModelInterface } from "../_model/signUpModel";
import { baseURL } from "@/app/_common/constant";

export async function signUp(input: SignUpModelInterface): Promise<any> {
    console.log('Got here at Register API')
    try {
        const bodyData = {
            email: input.email,
            password: input.password,
            companyName: input.companyName,
            vendorType: input.vendorType,
            country: input.country
        }

        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/auth/register/email`,
            data: bodyData
        })

        console.log('Response from Register API cAll ===', resp);

        if (resp.data.error !== null && resp.data.status !== 200) {
        }

        return { status: 200, value: resp.data.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
};