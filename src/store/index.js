import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUserName(state, username) {
			state.username = username;
		},
		clearUserName(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			const token = data.token;
			const username = data.user.username;

			//store
			commit('setToken', token);
			commit('setUserName', username);

			//cookie
			saveAuthToCookie(token);
			saveUserToCookie(username);
		},
	},
});
