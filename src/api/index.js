import axios from 'axios';
import store from '@/store/index';
import { setInterceptor } from '@/api/common/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		headers: {
			Authorization: store.state.token,
		},
	});
	return setInterceptor(instance);
}

const instance = createInstance();

function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}

function fetchPosts() {
	return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
