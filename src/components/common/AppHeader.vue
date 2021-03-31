<template>
	<header>
		<template v-if="isLogin">
			<span>{{ $store.state.username }} 님 환영합니다.</span>
			<a href="#" @click="logout">Logout</a>
		</template>
		<template v-else>
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</template>
	</header>
</template>

<script>
export default {
	computed: {
		isLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logout() {
			this.$store.commit('clearUserName');
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>
