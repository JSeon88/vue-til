<template>
	<div>
		<li>
			<div>제목 : {{ postItem.title }}</div>
			<div>내용 : {{ postItem.contents }}</div>
			<div>등록일 : {{ postItem.createdAt }}</div>
		</li>
	</div>
</template>

<script>
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style></style>
