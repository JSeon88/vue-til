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
	data() {
		return {
			a: '',
		};
	},
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
	methods: {
		test() {
			console.log('method', this);
		},
	},
	beforeDestroy() {
		console.log('beforCreate', this);
		debugger;
	},
	destroyed() {
		console.log('destroyed', this);
		debugger;
	},
	// $data 없음
	beforeCreate() {
		console.log('beforCreate', this);
		debugger;
	},
	// $data 생김
	// computed : formattedUser:[]
	// props : user:""
	created() {
		console.log('created', this);
		debugger;
	},
	// $el=undefined
	beforeMount() {
		console.log('beforeMount', this);
		debugger;
	},
	// $el=header
	mounted() {
		console.log('mounted', this);
		debugger;
	},
	// 데이터의 업데이트가 발생 시 호출
	beforeUpdate() {
		console.log('beforeUpdate', this);
		debugger;
	},
	updated() {
		console.log('updated', this);
		debugger;
	},
};
</script>

<style></style>
