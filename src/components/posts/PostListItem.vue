<template>
	<div>
		<li>
			<div>제목 : {{ postItem.title }}</div>
			<div>내용 : {{ postItem.contents }}</div>
			<div>등록일 : {{ postItem.createdAt | formatDate }}</div>
			<button @click="routeEditPage">수정</button>
			<button @click="deleteItem">삭제</button>
		</li>
	</div>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			if (confirm('Do you want delete it?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
		routeEditPage() {
			this.$router.push(`/post/${this.postItem._id}`);
		},
	},
	// 지역 필터 처리
	// filters: {
	// 	formatDate(value) {
	// 		return new Date(value);
	// 	},
	// },
};
</script>

<style></style>
