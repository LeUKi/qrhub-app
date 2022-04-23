<template>
	<view class="container">

		<view class="bg">
			<uni-easyinput class="bg-inp" v-model="bgurl" type="text" placeholder="后台URL" prefixIcon="scan"
				suffixIcon="cloud-download-filled" trim="true" :styles="bginp" @iconClick="onbgicon"
				@confirm="onbgicon" />
		</view>
		<!-- 		<button type="default" v-on:click="scan2">scan QRcode2</button>
		<button type="default" v-on:click="selectConfig">select config</button>
		{{code}} -->
		<uni-section title="基础用法" type="line">

			<uni-list-item v-for="item in configs" :key="item._id" :title="item.name" :note="item.info" showArrow
				clickable @click="go(item)" direction="column">
				<template v-slot:footer>
					<view class="dot-out">
						<view class="dot-in">{{item.finish+'/'+item.total}}</view>
					</view>
				</template>
			</uni-list-item>

		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bginp: {
					height: '400rpx'
				},
				bgurl: "",
				configs: [],
				choose: [],
				code: "123",
				dotStyle: {
					'border-radius': '10rpx',
					'margin': 0,
					'padding': 0,
					'left': 0,
					'background-color': 'red'
				},
			};
		},
		onLoad() {
			const bgurl = uni.getStorageSync('bgurl');
		},
		onReady() {
			this.bgurl = getApp().globalData.baseURL
		},
		methods: {
			onbgicon(e) {
				console.log(e)
				if (this.bgurl === "test") {
					console.log(1)
					this.go({
						name: "测试配置测试配置测试配置测试配置",
						info: "测试配置测试配置测试配置测试配置",
						tips: "测试配置测试配置测试配置测试配置",
						number: 22222,
						finish: 11111,
						id: "00000"
					})
					return;
				}
				console.log(2)
				if (e === "prefix") {
					this.scan()
				} else {
					getApp().globalData.baseURL = this.bgurl
					console.log(getApp().globalData.baseURL)
					this.getConfig()
				}
			},
			getConfig() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: getApp().globalData.basePRE + getApp().globalData.baseURL + "/configGet",
					timeout:3000,
					success: (e) => {
						this.configs = e.data.data.configs;
						console.log(e)
					},
					fail(e) {
						console.log(e)
						uni.showToast({
							title:"无法连接",
							icon:"error"
						})
						uni.hideLoading();
					},
					complete() {
						uni.stopPullDownRefresh()
						uni.hideLoading();

					}
				});
			},
			selectConfig() {
				uni.navigateTo({
					url: "../selectConfig/selectConfig"
				})
			},
			go(e) {
				console.log(e)
				getApp().globalData.config = e
				uni.showLoading({
					mask:true
				})
				uni.navigateTo({
					url: "/pages/scan/scan",
					complete(e) {
						console.log(e)
					}
				})
			},
			scan() {
				uni.scanCode({
					// onlyFromCamera: true,
					success: (e) => {
						let result = JSON.parse(e.result)
						if (result[0] === "a") {
							this.bgurl = result[1]
							console.log('scan result:', result[1])
						}
						if (result[0] === "b") {
							this.bgurl = result[1]
							uni.request({
								url: getApp().globalData.basePRE + getApp().globalData.baseURL +
									"/configGetOne",
								success: (e) => {
									this.configs = e.data.config[0];
									console.log(this.$data.config[0]);
									this.go()
								},
								fail(e) {
									console.log(e)
								},
								complete() {

								}
							});
						}
					}
				})
			},
			scan2() {
				uni.navigateTo({
					url: "../scan/scan",
					complete(e) {
						console.log(e)
					}
				})
			},
		},
		onLoad() {
			this.getConfig();
		},
		onPullDownRefresh() {
			this.getConfig();
			uni.vibrateShort({
				success: function() {
					console.log('success');
				}
			});
		}
	};
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}

	.bg {
		margin-bottom: 30rpx;
	}

	.dot-in {
		// background-color: blue;
		border: 2rpx #00000000 solid;
		background-color: #55007f;
		color: #fff;
		border-radius: 10rpx;
		width: 100%;
		display: inline;
		font-size: 25rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
</style>
