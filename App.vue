<script>
	
	import PubM from 'common/publicMethod.js';
	
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
			let result = PubM.addFun(3, 5)
			console.log(result);
			let result2 = PubM.testTs('字符串类型')
			console.log(result2);
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<!-- 
* 
* 这个仿照 微信 尽量高仿
* 
* JS 文件练习 使用 TS
* 样式 练习使用 sass
* 
*  -->

<style lang="scss">
	/*每个页面公共css */
	
	@import url("./common/public.css");
	
	page,
	.content {
		width: 100%;
		min-height: 100%;
		display: flex;
		flex: 1;
	}
	view {
		box-sizing: border-box;
		display: flex;
	}
</style>
