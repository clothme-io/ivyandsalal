import { baseURL } from '@/app/_utils/constant';
import axios from 'axios'

export async function addBasicProdouctInfo(input: any): Promise<any> {
  try {

    console.log('this is the data passed in addEntity API ==',)
    const bodyData = {}

    // Add entity
    const resp = await axios({
      method: 'POST',
      url: `${baseURL}/article/add`,
      data: bodyData
    })

    if (resp.status !== 200) {
      return { message: 'Successfully Added', value: resp.data };
    }

    return { message: 'Successfully Added', value: resp.data };
  } catch (err) {
    return { message: 'Server Unresoponsive at this time', value: err };
  }
}