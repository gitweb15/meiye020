import Vue from 'vue'
import VueRouter from 'vue-router'
import Shouye from '../views/ShouYe.vue'

Vue.use(VueRouter)

const routes = [
	//初始化，主页面，首页
	{
		path: '/',
		name: 'Shouye',
		component: Shouye
	},
	//主页面，我的订单
	{
		path: '/dingdan',
		name: 'dingdan',
		component: () => import('../views/DingDan.vue')
	},
	//主页面，我的订单-->待服务
	{
		path: '/fuwu',
		name: 'fuwu',
		component: () => import('../views/DingDanxq/index1.vue')
	},
	//主页面，我的订单-->申请退款
	{
		path: '/tuikuan',
		name: 'tuikuan',
		component: () => import('../views/DingDanxq/index2.vue')
	},
	//主页面，我的订单-->已完成
	{
		path: '/wancheng',
		name: 'wancheng',
		component: () => import('../views/DingDanxq/index3.vue')
	},
	//主页面，我的订单-->已取消
	{
		path: '/quexiao',
		name: 'quexiao',
		component: () => import('../views/DingDanxq/index4.vue')
	},
	//主页面，我的排班
	{
		path: '/paiban',
		name: 'paiban',
		component: () => import('../views/PaiBan.vue'),
		children: [
			//时间
			{
				path: 'time1',
				component: () => import('../components/YuYue/time1.vue')
			},
			{
				path: 'time2',
				component: () => import('../components/YuYue/time2.vue')
			},
			{
				path: 'time3',
				component: () => import('../components/YuYue/time3.vue')
			}, {
				path: 'time4',
				component: () => import('../components/YuYue/time4.vue')
			}, {
				path: 'time5',
				component: () => import('../components/YuYue/time5.vue')
			}, {
				path: 'time6',
				component: () => import('../components/YuYue/time6.vue')
			}, {
				path: 'time7',
				component: () => import('../components/YuYue/time7.vue')
			}, {
				path: 'time8',
				component: () => import('../components/YuYue/time8.vue')
			}, {
				path: 'time9',
				component: () => import('../components/YuYue/time9.vue')
			},
			//重定向
			{
				path: '/paiban',
				redirect: '/paiban/time1'
			}
		]
	},
	//未登录,我的
	{
		path: '/weidenglu',
		name: 'weidenglu',
		component: () => import('../views/WeiDengLu.vue')
	},
	//登录
	{
		path: '/dengLu',
		name: 'dengLu',
		component: () => import('../views/DengLu.vue')
	},
	//已登录,我的
	{
		path: '/wode',
		name: 'wode',
		component: () => import('../views/WoDe.vue')
	},
	//已登录,我的-->意见反馈
	{
		path: '/yijian',
		name: 'yijian',
		component: () => import('../views/Me/yijian.vue')
	},
	//已登录,我的-->昵称资料
	{
		path: '/nicheng',
		name: 'nicheng',
		component: () => import('../views/Me/nicheng.vue')
	},
	//已登录,我的-->昵称资料-->详细地址
	{
		path: '/xxdizhi',
		name: 'xxdizhi',
		component: () => import('../views/Me/xxdizhi.vue')
	},
	//已登录,我的-->资金帐户(资金管理)
	{
		path: '/zijiguanli',
		name: 'zijiguanli',
		component: () => import('../views/Me/zijiguanli.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->已返款
	{
		path: '/yifankuan',
		name: 'yifankuan',
		component: () => import('../views/ZiJingl/index1.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->待结算
	{
		path: '/daijiesuan',
		name: 'daijiesuan',
		component: () => import('../views/ZiJingl/index2.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->待返款
	{
		path: '/daifankuan',
		name: 'daifankuan',
		component: () => import('../views/ZiJingl/index3.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->待退款
	{
		path: '/daituikuan',
		name: 'daituikuan',
		component: () => import('../views/ZiJingl/index4.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->已退款
	{
		path: '/yituikuan',
		name: 'yituikuan',
		component: () => import('../views/ZiJingl/index5.vue')
	},
	//已登录,我的-->认证信息
	{
		path: '/renzheng',
		name: 'renzheng',
		component: () => import('../views/Me/renzheng.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->银行卡
	{
		path: '/yinhangka',
		name: 'yinhangka',
		component: () => import('../views/Me/yinhangka.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->银行卡-->验证码
	{
		path: '/yanzhengma',
		name: 'yanzhengma',
		component: () => import('../views/Me/yanzhengma.vue')
	},
	//已登录,我的-->资金帐户(资金管理)-->银行卡-->验证码-->确认绑定
	{
		path: '/bangding',
		name: 'bangding',
		component: () => import('../views/Me/bangding.vue')
	},
	//已登录,我的-->服务地址
	{
		path: '/fuwudizhi',
		name: 'fuwudizhi',
		component: () => import('../views/Me/fuwudizhi.vue')
	},
	//已登录,我的-->服务设置
	{
		path: '/fuwushezhi',
		name: 'fuwushezhi',
		component: () => import('../views/Me/fuwushezhi.vue')
	},
	//已登录,我的-->服务设置-->服务详情
	{
		path: '/fuwuxq',
		name: 'fuwuxq',
		component: () => import('../views/Me/fuwuxq.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
