<template>
	<div>
		<h1>메인 페이지</h1>
		<div v-if="isLoading">Loading..</div>
		<ul v-else>
			<post-list-item
				v-for="postItem in postItems"
				:key="postItem._id"
				:postItem="postItem"
			></post-list-item>
		</ul>
		<router-link to="/add">추가</router-link>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import PostListItem from '../components/posts/PostListItem.vue';
export default {
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	components: {
		PostListItem,
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
