<template>
	<view class="content">
		
		<page-head :title="'通用'" :isDot="false" :isSet="false" ></page-head>
		
		<view class="switch-list" v-for="list in findList" :key="list.id" >
			<image :src="list.icon" mode="widthFix"></image>
			<text>{{list.text}}</text>
			<switch :checked="list.isOpen" @change="changeStatus(list)" />
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
		computed: {
			...mapState(['findList'])
		},
		methods: {
			
			changeStatus(item) {
				item.isOpen = !item.isOpen
			}
			
		}
	}
</script>

<style lang="scss">
	
	.switch-list {
		flex-direction: row;
		justify-content: space-between;
		
		image {
			width: 60upx;
		}
	}

</style>
