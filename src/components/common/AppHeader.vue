<template>
	<header>
		<template v-if="isLogin">
			<!-- <span>{{ $store.state.username }} 님 환영합니다.</span> -->
			<span>{{ username }} 님 환영합니다.</span>
			<a href="#" @click="logout">Logout</a>
		</template>
		<template v-else>
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</template>
	</header>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
	computed: {
		...mapState(['username']),
		...mapGetters(['isLogin']), // { isLogin: 스토어 매핑 }
		// ...mapGetters({ isLogin: 'isLogin' }),
		// isLogin() {
		// 	return this.$store.getters.isLogin;
		// },
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
