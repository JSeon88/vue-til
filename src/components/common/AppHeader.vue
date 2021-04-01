<template>
	<header>
		<h1>header</h1>
		arr : {{ arr }} <br />
		oarr : {{ oarr }} <br />
		handleObj : {{ handleObj }} <br />
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
		arr: Array,
		oarr: Object,
		handleObj: Object,
	},
	watch: {
		arr(newVal, oldVal) {
			console.error('change arr', newVal, oldVal);
		},
		oarr(newVal, oldVal) {
			console.error('change Object', newVal, oldVal);
		},
		handleObj: {
			handler: function (newVal) {
				console.error('handle Object arr', newVal);
			},
			deep: false,
		},
	},
};
</script>

<style></style>
