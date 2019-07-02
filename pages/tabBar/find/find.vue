<template>
	<view class="content">
		
		<page-head :isBack="false" :title="'发现'" :isDot="false" :isSet="false" @searchFun="searchFun" @plusFun="plusFun"></page-head>
		
		<view class="find-list">
			<view class="list" v-if="list.isOpen" v-for="(list, indexA) in findList" :key="indexA" @tap="goNext(list)">
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
	import { mapState, mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				
				
			};
		},
		onLoad() {
			console.log(this.findList);
			
		},
		computed: {
			...mapState(['findList'])
		},
		methods: {
			
			goNext(item) {
				console.log(item.text);
			},
			
			searchFun() {
				console.log('搜索按钮');
			},
			
			plusFun() {
				console.log('添加按钮');
			}
			
		}
	}
</script>

<style lang="scss">
	
</style>
