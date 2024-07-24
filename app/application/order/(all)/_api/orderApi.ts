import axios from 'axios'

const baseURL = ""

// this api call retunrs all data based on the id
export async function getBrand (
    docId: string
): Promise<any> {
    console.log('Got here')
    try {
        const resp = await axios.get(`${baseURL}/article/read`, { params: { outlineId: docId }})
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
export async function getBrands (
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


