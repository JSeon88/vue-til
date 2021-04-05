import axios from 'axios';
import { setInterceptor } from '@/api/common/interceptors';

function createInstace() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return instance;
}

function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	return setInterceptor(instance);
}

export const instance = createInstace();
export const posts = createInstanceWithAuth('posts');
