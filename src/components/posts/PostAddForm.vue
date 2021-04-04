<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="title">제목: </label>
			<input id="title" type="text" v-model="title" />
		</div>
		<div>
			<label for="contents">내용: </label>
			<textarea id="contents" type="text" rows="5" v-model="contents" />
			<p v-if="!isContentsValid">Contents length must be less than 200</p>
		</div>
		<button type="submit">등록</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { createPosts } from '@/api/posts';
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length < 200;
		},
	},
	methods: {
		async submitForm() {
			try {
				const postData = {
					title: this.title,
					contents: this.contents,
				};
				await createPosts(postData);
				this.$router.push('/main');
			} catch (error) {
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>

<style></style>
