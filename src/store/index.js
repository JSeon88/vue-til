import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	// 여러 컴포넌트에 공유되는 데이터
	state: {
		username: '',
	},
	// 연산된 state 값을 접근하는 속성
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	// state값을 변경하는 이벤트 로직, 메서드
	mutations: {
		setUserName(state, username) {
			state.username = username;
		},
		clearUserName(state) {
			state.username = '';
		},
	},
	// 비동기 처리 로직을 선언하는 메서드
	actions: {},
});
