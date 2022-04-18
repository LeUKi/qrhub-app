<template>
	<view class="container">
		<button type="default" v-on:click="scan">scan QRcode</button>
		<button type="default" v-on:click="scan2">scan QRcode2</button>
		<button type="default" v-on:click="selectConfig">select config</button>
		{{code}}


	</view>
</template>

<script>
	export default {
		data() {
			return {
				configs: [],
				configch: [],
				choose: [],
				code: "123"
			};
		},
		computed: {

		},
		methods: {
			getConfig() {
				uni.request({
					url: getApp().globalData.baseURL + "/configGet",
					complete(e) {
						console.log(e);
						this.configs = e.data.configs;
						this.configch = e.data.configs.map((e) => {
							return {
								text: e.name,
								value: e.id,
							}
						})
						console.log(this.configch);
					},
				});
			},
			selectConfig() {
				uni.navigateTo({
					url: "../selectConfig/selectConfig"
				})
			},
			scan() {
				uni.scanCode({
					onlyFromCamera: true,
					success: (e) => {
						this.code = JSON.stringify(e)
					}
				})
			},
			scan2() {
				uni.navigateTo({
					url: "../scan/scan"
				})
			},
		},
		onLoad() {
			// this.getConfig();
		},
	};
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
