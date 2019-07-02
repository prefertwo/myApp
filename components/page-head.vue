<template>
	<view class="page-head">
		<image v-if="isBack" class="back-icon" src="/static/icons/right_arrow.png" mode="widthFix" @tap="goBack"></image>
		<text>{{title}}</text>
		<view class="right-btns">
			<view class="right-btn-wrap" v-if="isSearch">
				<image src="/static/icons/search_icon.png" mode="widthFix" @click="_click_search"></image>
			</view>
			
			<view class="right-btn-wrap" v-if="isPlus" @click="_click_plus">
				<image src="/static/icons/plus_icon.png" mode="widthFix"></image>
			</view>
			
			<view class="right-btn-wrap" v-if="isDot" @click="_click_dot">
				<image src="/static/icons/dot_more.png" mode="widthFix"></image>
			</view>
			
			<view class="right-btn-wrap" v-if="isSet" @click="_click_set">
				<image src="/static/icons/setting.png" mode="widthFix"></image>
			</view>
			
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name: 'page-head',
		props: {
			title: {
				type: String,
				default: '未设置'
			},
			
			isBack: {
				type: Boolean,
				default: true
			},
			
			isSearch: {
				type: Boolean,
				default: true
			},
			
			isPlus: {
				type: Boolean,
				default: true
			},
			
			isDot: {
				type: Boolean,
				default: true
			},
			
			isSet: {
				type: Boolean,
				default: true
			}
			
		},
		methods: {
			
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			
			_click_search() {
				this.$emit('searchFun')
			},
			
			_click_plus() {
				this.$emit('plusFun')
			},
			
			_click_dot() {
				this.$emit('dotFun')
			},
			
			_click_set() {
				this.$emit('settingFun')
			}
			
		}
		
		
		
		
	}
</script>

<style lang="scss">
	
	.page-head {
		height: 100upx;
		width: 100%;
		flex-direction: row;
		margin-top: 40upx;
		align-items: center;
		padding-left: 30upx;
		
		.back-icon {
			width: 60upx;
			rotate: 180deg;
		}
		.right-btns {
			flex: 1;
			flex-direction: row;
			justify-content: flex-end;
			
			.right-btn-wrap {
				
				width: 90upx;
				height: 90upx;
				justify-content: center;
				align-items: center;
				
				image {
					width: 45upx;
				}
			}
		}
	}

</style>
