<template>
	<header>
		<router-link to="/login">로그인</router-link> |
		<router-link to="/signup">회원가입</router-link>
		<p>{{ user }}</p>
		<p>{{ formattedUser }}</p>
	</header>
</template>

<script>
export default {
	props: {
		user: {
			type: String,
			required: true,
		},
	},
	watch: {
		user(newVal, oldVal) {
			console.log({ newVal, oldVal });
		},
	},
	computed: {
		formattedUser() {
			return `[${this.user}]`;
		},
	},
};
</script>

<style></style>
