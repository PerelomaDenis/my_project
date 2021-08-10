export const errorClass = (n) => {
	return (n === false ? 'has-error' : '')
}

export const validateField = (fieldName, value, isValid, setIsValid, form) => {
	let emailValid = isValid.emailValid;
	let companyValid = isValid.companyValid;
	let firstNameValid = isValid.firstNameValid;
	let lastNameValid = isValid.lastNameValid;
	let passwordValid = isValid.passwordValid;
	let confirmPasswordValid = isValid.confirmPasswordValid;
	let productCategoryValid = isValid.productCategoryValid;
	let addressValid = isValid.addressValid;
	let oldPasswordValid = isValid.oldPasswordValid;
	let newPasswordValid = isValid.newPasswordValid;
	let storeNameValid = isValid.storeNameValid;
	let priceValid = isValid.priceValid;
	let quantityValid = isValid.quantityValid;
	let weightValid = isValid.weightValid;
	let productNameValid = isValid.productNameValid;
	let sellQuantityValid = isValid.sellQuantityValid;
	let saleDateValid = isValid.saleDateValid;
	const priceReg = /^\d+$/;
	const dateReg = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.[0-9]{4}/;

	switch(fieldName) {
		case 'email':
			const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			reg.test(value) ? emailValid = true : emailValid = false;
			if(value === '') emailValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				emailValid: emailValid
			}))
			break;
		case 'firstName':
			value.length > 3 ? firstNameValid = true : firstNameValid = false;
			if(value === '') firstNameValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				firstNameValid: firstNameValid
			}))
			break;
		case 'lastName':
			value.length > 5 ? lastNameValid = true : lastNameValid = false;
			if(value === '') lastNameValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				lastNameValid: lastNameValid
			}))
			break;
		case 'storeName':
			value.length > 2 ? storeNameValid = true : storeNameValid = false;
			if(value === '') storeNameValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				storeNameValid: storeNameValid
			}))
			break;
		case 'company':
			value.length > 5 ? companyValid = true : companyValid = false;
			if(value === '') companyValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				companyValid: companyValid
			}))
			break;
		case 'address':
			value.length > 5 ? addressValid = true : addressValid = false;
			if(value === '') addressValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				addressValid: addressValid
			}))
			break;
		case 'price':
			priceReg.test(value) ? priceValid = true : priceValid = false;
			if(value === '') priceValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				priceValid: priceValid
			}))
			break;
		case 'sellQuantity':
			priceReg.test(value) ? sellQuantityValid = true : sellQuantityValid = false;
			if(value === '') sellQuantityValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				sellQuantityValid: sellQuantityValid
			}))
			break;
		case 'saleDate':
			dateReg.test(value) ? saleDateValid = true : saleDateValid = false;
			if(value === '') saleDateValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				saleDateValid: saleDateValid
			}))
			break;
		case 'quantity':
			priceReg.test(value) ? quantityValid = true : quantityValid = false;
			if(value === '') quantityValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				quantityValid: quantityValid
			}))
			break;
		case 'weight':
			priceReg.test(value) ? weightValid = true : weightValid = false;
			if(value === '') weightValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				weightValid: weightValid
			}))
			break;
		case 'productCategory':
			value.length > 1 ? productCategoryValid = true : productCategoryValid = false;
			if(value === '') productCategoryValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				productCategoryValid: productCategoryValid
			}))
			break;
		case 'productName':
			value.length > 1 ? productNameValid = true : productNameValid = false;
			if(value === '') productNameValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				productNameValid: productNameValid
			}))
			break;
		case 'oldPassword':
			value.length > 5 ? oldPasswordValid = true : oldPasswordValid = false;
			if(value === '') oldPasswordValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				oldPasswordValid: oldPasswordValid
			}))
			break;
		case 'newPassword':
			value.length > 5 && value !== form.oldPassword ? newPasswordValid = true : newPasswordValid = false;
			if(value === '') newPasswordValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				newPasswordValid: newPasswordValid
			}))
			break;
		case 'password':
			value.length > 5 ? passwordValid = true : passwordValid = false;
			if(value === '') passwordValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				passwordValid: passwordValid
			}))
			break;
		case 'repeatPassword':
			value.length > 5 && form.password === value ? confirmPasswordValid = true : confirmPasswordValid = false;
			if(value === '') confirmPasswordValid = '';
			setIsValid((prevForm) => ({
				...prevForm,
				confirmPasswordValid: confirmPasswordValid
			}))
			break;
	}
}