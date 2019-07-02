<template>
	<view class="content">
		
		<view class="personal-info">
			<view class="camera-section">
				<image src="/static/icons/camera.png" mode="widthFix"></image>
			</view>
			<view class="personal-section">
				<view class="head-portrait">
					<image src="/static/imgs/mao1.jpg" mode=""></image>
				</view>
				<view class="name-section">
					<text class="name">{{userInfo.name}}</text>
					<view class="wx-number">
						<text class="number">微信号: {{userInfo.number}}</text>
						<image class="wx-code" src="/static/icons/er_code.png" mode="widthFix"></image>
						<image class="right-arrow" src="/static/icons/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 列表 -->
		<view class="find-list">
			<view class="list" v-for="(list, indexA) in mineList" :key="indexA" @tap="goNext(list)">
				<view class="icon-wrap">
					<image class="left-icon" :src="list.icon" mode="widthFix"></image>
				</view>
				<view class="list-text">
					<text>{{list.text}}</text>
				</view>
				<view class="icon-wrap">
					<image class="right-arrow" src="/static/icons/right_arrow.png" mode="widthFix"></image>
				</view>
				
			</view>
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	
	export default {
		data() {
			return {
				mineList: [
					{
						id: 1,
						text: '支付',
						icon: '/static/icons/wx_pay.png',
						component: 'wxpay'
					},
					{
						id: 2,
						text: '收藏',
						icon: '/static/icons/collect.png',
						component: ''
					},
					{
						id: 3,
						text: '相册',
						icon: '/static/icons/photos.png',
						component: ''
					},
					{
						id: 4,
						text: '卡包',
						icon: '/static/icons/card.png',
						component: ''
					},
					{
						id: 5,
						text: '表情',
						icon: '/static/icons/emoji.png',
						component: ''
					},
					{
						id: 6,
						text: '设置',
						icon: '/static/icons/setting_blue.png',
						component: ''
					}
				]
				
			};
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			goNext(list) {
				console.log(list);
				if(list.component) {
					uni.navigateTo({
						url: `/pages/mine/${list.component}/${list.component}`
					})
				}
			}
		}
		
	}
</script>

<style lang="scss">
	.find-list {
		.list {
			&:first-child {
				border-bottom: none;
				margin-bottom: 20upx;
			}
			&:nth-of-type(5) {
				margin-bottom: 20upx;
				border-bottom: none;
			}
		}
	}

</style>
