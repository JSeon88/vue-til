<template>
	<!-- 
    @ : v-on 
    submit : button 이벤트를 받음
    prevent : 새로고침 방지
    -->
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="pqssword" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button
			:disabled="!isUserNameValid || !password || !nickname"
			type="submit"
		>
			회원 가입
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			logMessage: '',
		};
	},
	computed: {
		isUserNameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			console.log('폼 제출');
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			this.initForm();
			this.logMessage = `${data.username} 님이 가입되었습니다.`;
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
