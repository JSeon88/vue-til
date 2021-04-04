import axios from 'axios';
//import store from '@/store/index';
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
		// headers: {
		// 	Authorization: store.state.token,
		// },
	});
	return setInterceptor(instance);
}

export const instance = createInstace();
export const posts = createInstanceWithAuth('posts');
