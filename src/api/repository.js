import axios from 'axios';

const BASE_URL = 'https://dollardeviceback.herokuapp.com';


// const BASE_URL = 'http://localhost:4000';


export function getProducts() {
	return axios.get(`${BASE_URL}/api/getproducts`)
		.then(response => response.data);
}

export function getCartProducts(cart) {
	return axios.post(`${BASE_URL}/api/products`, {cart})
        .then(response => response.data);
        
}

