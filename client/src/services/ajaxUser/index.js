import {ajaxWrapper} from "../../helpers/ajaxWrapper";
import {urls} from "../../helpers/constant";

export const login = (data) => {
	const url = `${urls.AUTH}/login`;
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

export const getAll = (data) => {
	const url = `${urls.PRODUCTS}`;
	return ajaxWrapper({
		method: 'GET',
		url,
		data,
	}).then(data => data.data)
};

export const getAllSales = (token) => {
	const url = `${urls.SALES}`;
	return ajaxWrapper({
		method: 'GET',
		url,
	}, token).then(data => data.data)
};

export const getById = (id) => {
	const url = `${urls.PRODUCTS}/${id}`;
	return ajaxWrapper({
		method: 'GET',
		url,
	}).then(data => data.data)
};

export const updateProduct = (id, data) => {
	const url = `${urls.PRODUCTS}/${id}`;
	return ajaxWrapper({
		method: 'PATCH',
		url,
		data
	}).then(data => data.data)
};

export const createProduct = (data) => {
	const url = `${urls.PRODUCTS}`;
	return ajaxWrapper({
		method: 'POST',
		url,
		data
	}).then(data => data.data)
};

export const addSaleProduct = (data) => {
	const url = `${urls.SALES}`;
	return ajaxWrapper({
		method: 'POST',
		url,
		data
	}).then(data => data.data)
};

export const removeProduct = (id) => {
	const url = `${urls.PRODUCTS}/${id}`;
	return ajaxWrapper({
		method: 'DELETE',
		url,
	})
};

export const getOneUser = (data) => {
	const url = `${urls.USER}`;
	return ajaxWrapper({
		method: 'GET',
		url,
		data,
	}).then(data => data.data)
};

export const updateOneUser = (id, data) => {
	const url = `${urls.USER}/${id}`;
	return ajaxWrapper({
		method: 'PATCH',
		url,
		data
	})
};