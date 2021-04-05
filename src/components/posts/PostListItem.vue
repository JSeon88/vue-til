<template>
	<div>
		<li>
			<div>제목 : {{ postItem.title }}</div>
			<div>내용 : {{ postItem.contents }}</div>
			<div>등록일 : {{ postItem.createdAt }}</div>
			<a href="#" @click="deleteItem">삭제</a>
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
	},
};
</script>

<style></style>
