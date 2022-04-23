<script>
	export default {
		globalData:{
			baseURL:"114.132.221.156:8888",
			// baseURL:"192.168.1.109:4523/mock/867906",
			// baseURL:"192.168.5.240:4523/mock/867906",
			basePRE:"http://",
			config:{}
		},
		onLaunch: function() {
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide') 
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		// background-color: #aaff7f; 
	}

	/* #endif */
</style>
