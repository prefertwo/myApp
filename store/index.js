import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	userInfo: {
		id: 199103030939,
		name: '王力宏',
		number: 'foreverLove1991'
	},
	userId: {},
	
	isLogin: true,
	
	
	findList: [
		{
			id: 1,
			text: '朋友圈',
			icon: '/static/icons/quan_er.png',
			isOpen: true
		},
		{
			id: 2,
			text: '扫一扫',
			icon: '/static/icons/sao_sao.png',
			isOpen: true	
		},
		{
			id: 3,
			text: '看一看',
			icon: '/static/icons/see_see.png',
			isOpen: true	
		},
		{
			id: 4,
			text: '摇一摇',
			icon: '/static/icons/yao_yi_yao.png',
			isOpen: true	
		},
		{
			id: 5,
			text: '搜一搜',
			icon: '/static/icons/sou_yi_sou.png',
			isOpen: true	
		},
		{
			id: 6,
			text: '附近的人',
			icon: '/static/icons/near.png',
			isOpen: true	
		},
		{
			id: 7,
			text: '购物',
			icon: '/static/icons/jd.png',
			isOpen: true	
		},
		{
			id: 8,
			text: '游戏',
			icon: '/static/icons/QQ.png',
			isOpen: true	
		},
		{
			id: 9,
			text: '小程序',
			icon: '/static/icons/mini_program.png',
			isOpen: true	
		}
	],
}

const mutations = {}

const actions = {}

export default new Vuex.Store({
	state,
	mutations,
	actions
})