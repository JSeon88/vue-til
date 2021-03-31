<template>
	<div>
		<h1>로그인 페이지</h1>
		<login-form @test="test2"></login-form>
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
	components: {
		LoginForm,
	},
	methods: {
		test2(data) {
			console.log(data);
			this.$emit('test', data);
		},
	},
};
</script>

<style></style>
