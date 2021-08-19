import axios from "axios";

export const ajaxWrapper = (params, tokenProps) => {

	const token = tokenProps ? tokenProps : JSON.parse(localStorage.getItem('token'));

	let defaultHeaders = {
		'Content-Type': 'application/json',
		'Authorization': token,
	};

	const headers = {
		...defaultHeaders,
		...params.headers,

	};

	return axios({
		headers,
		method: params.method,
		url: params.url,
		data: params.data,
	});
}