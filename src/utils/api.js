import { request } from './request';
import {objToQuery} from '@lijianqiang01/annjs'


export const get_home = async (url, type, params) => {
    let query = objToQuery(params);
    url = url + '?' + query;
    let data =  await request(url, type);
    return data.data;
}
