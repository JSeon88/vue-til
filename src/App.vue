<template>
	<div>
		<app-header :arr="arr" :oarr="oarr" :handleObj="handleObj"></app-header>
		<h1>main</h1>
		arr : {{ arr }} <br />
		oarr : {{ oarr }} <br />
		handleObj : {{ handleObj }} <br />
		<button @click="add">추가</button>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	data() {
		return {
			oarr: { t: [] },
			arr: [[]],
			i: 0,
			handleObj: { t: [] },
		};
	},
	components: {
		AppHeader,
	},
	watch: {
		arr(newVal, oldVal) {
			console.warn('main change arr', newVal, oldVal);
		},
		oarr(newVal, oldVal) {
			console.warn('main change Object arr', newVal, oldVal);
		},
		handleObj: {
			handler: function (newVal) {
				console.warn('main handle Object arr', newVal);
			},
			deep: true,
		},
	},
	methods: {
		add() {
			this.i++;
			this.arr[0].push(this.i);
			this.oarr.t.push(this.i);
			this.handleObj.t.push(this.i);
		},
	},
};
</script>

<style></style>
