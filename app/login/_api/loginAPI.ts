// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { LoginModelInterface } from "../_model/loginModel";
import { baseURL } from "@/app/_common/constant";

export async function signIn(input: LoginModelInterface): Promise<any> {
    console.log('Got here')
    try {
        const bodyData = {
            email: input.email,
            password: input.password,
        }

        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/auth/login/email`,
            data: bodyData
        })

        console.log('No such document!', resp);

        if (resp.data.error !== null && resp.data.status > 200) {
        }

        return { status: 200, value: resp.data.data, ok: true };

    } catch (err: any) {

        return { status: 500, value: err, ok: false };

    }
}
