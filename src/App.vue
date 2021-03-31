<template>
	<div>
		<app-header :user="user"></app-header>
		<router-view @test="test2"></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	data() {
		return {
			user: '',
		};
	},
	components: {
		AppHeader,
	},
	methods: {
		test2(user) {
			console.log('app', user);
			this.user = user;
		},
	},
};
</script>

<style></style>
