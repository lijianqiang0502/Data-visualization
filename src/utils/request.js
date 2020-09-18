
/*
 * @Author: lijianqiang01
 * @Email: lijianqiang01@baidu.com
 * @Date: 2020-09-18 16:12:09
 * @Last Modified by:   lijianqiang01
 * @Last Modified time: 2020-09-18 16:12:09
 * @Description: 封装request
 */

export const request = (url, type, data) => {
	if(type === 'get') 
		return fetch(url, {
			method: type,
			mode: "cors",
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => res.json());
	else
    return fetch(url, {
        method: type,
		body: type === 'post' ? data : '',
		mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json);
};
