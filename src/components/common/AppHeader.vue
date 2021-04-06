<template>
	<header>
		<router-link :to="logoLink">로고</router-link> |
		<template v-if="isLogin">
			<span>{{ $store.state.username }} 님 환영합니다.</span>
			<a href="#" @click.prevent="logout">Logout</a>
		</template>
		<template v-else>
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</template>
	</header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
	computed: {
		isLogin() {
			return this.$store.getters.isLogin;
		},
		logoLink() {
			return this.$store.getters.isLogin ? '/main' : '/login';
		},
	},
	methods: {
		logout() {
			this.$store.commit('clearUserName');
			this.$store.commit('clearToken');
			deleteCookie('til_auth');
			deleteCookie('til_user');
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>
