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
