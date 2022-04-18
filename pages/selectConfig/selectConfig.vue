<template>
	<view>
		<uni-list>
			<uni-list-item v-for="item in configs" :key="item.id" :title="item.name" :note="item.tips" showArrow
				clickable @click="go(item)" direction="column">
				<template v-slot:footer>
					<view class="dot-out">
						<view class="dot-in">{{item.finish+'/'+item.number}}</view>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				configs: [],
				dotStyle: {
					'border-radius': '10rpx',
					'margin': 0,
					'padding': 0,
					'left': 0,
					'background-color': 'red'
				},
			}
		},
		methods: {
			getConfig() {
				uni.request({
					url: getApp().globalData.baseURL + "/configGet",
					success: (e) => {
						this.$data.configs = e.data.configs;
						console.log(this.$data.configs);
					},
					fail(e) {
						console.log(e)
					},
					complete() {
						uni.stopPullDownRefresh()
					}
				});
			},
			go(e) {
				console.log(e)
				getApp().globalData.config = e
				uni.navigateTo({
					url: "/pages/login/login",
					complete(e) {
						console.log(e)
					}
				})
			}
		},
		onLoad() {
			this.getConfig();
		},
		onPullDownRefresh() {
			this.getConfig();
		}
	}
</script>

<style lang="scss">
	.dot-in {
		// background-color: blue;
		border: 5rpx #ccc solid;
		border-radius: 10rpx;
		width: 100%;
		display: inline;
		font-size: 25rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
</style>
