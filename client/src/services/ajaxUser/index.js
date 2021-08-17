import {ajaxWrapper} from "../../helpers/ajaxWrapper";
import {urls} from "../../helpers/constant";

export const login = (data) => {
	const url = `${urls.AUTH}/login`;
	console.log('========>url', url);
	return ajaxWrapper({
		method: 'POST',
		url,
		data,
	}).then(data => data.data)
};

export const registration = (data) => {
	const url = `${urls.AUTH}/register`;
	return ajaxWrapper({
		method: 'POST',
		url,
		data,
	});
};