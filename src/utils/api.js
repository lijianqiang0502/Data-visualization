import { request } from './request';
import {objToQuery} from '@lijianqiang01/annjs'

/*
 * @Author: lijianqiang01
 * @Email: lijianqiang01@baidu.com
 * @Date: 2020-09-18 16:11:57
 * @Last Modified by:   lijianqiang01
 * @Last Modified time: 2020-09-18 16:11:57
 * @Description: api接口
 */

export const get_home = async (url, type, params) => {
    let query = objToQuery(params);
    url = url + '?' + query;
    let data =  await request(url, type);
    return data.data;
}
