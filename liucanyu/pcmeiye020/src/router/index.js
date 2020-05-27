import Vue from 'vue'
import VueRouter from 'vue-router'
import zhucedenglu from '../views/zhucedenglu.vue'

Vue.use(VueRouter)

const routes = [
	// 注册登录
	{
		path: '/',
		name: 'zhucedenglu',
		component: zhucedenglu
	},
	// 首页
	{
		path: '/shouye',
		name: 'shouye',
		component: () => import('../views/shouye.vue'),
		children: [{
				//曲线图1
				path: 'quxian1',
				component: () => import('../components/Quxiantu/index.vue')
			},
			{
				//曲线图2
				path: 'quxian2',
				component: () => import('../components/Quxiantu/index1.vue')
			},
			{
				//曲线图3
				path: 'quxian3',
				component: () => import('../components/Quxiantu/index2.vue')
			},
			//重定向
			{
				path: '/quxian1',
				redirect: '/shouye/quxian1'
			}
		]

	},
	// 排班管理
	{
		path: '/paibang',
		name: 'paibang',
		component: () => import('../views/paibang.vue')
	},
	// 门店信息
	{
		path: '/mendian',
		name: 'mendian',
		component: () => import('../views/mendian.vue')
	},
	// 订单管理
	{
		path: '/dingdan',
		name: 'dingdan',
		component: () => import('../views/dingdan.vue'),
		// children:[
		// 	{
		// 		path: 'dingdanxiangqing',
		// 		component: () => import('../views/dingdanxiangqing.vue')
		// 	}
		// ]
	},
	// 订单管理-->订单详情
	{
		path: '/dingdanxiangqing',
		name: 'dingdanxiangqing',
		component: () => import('../views/dingdanxiangqing.vue')
	},
	// 服务设置
	{
		path: '/fuwu',
		name: 'fuwu',
		component: () => import('../views/fuwu.vue')
	},
	// 服务设置-->项目详情
	{
		path: '/fuwuxiangqing',
		name: 'fuwuxiangqing',
		component: () => import('../views/fuwuxiangqing.vue')
	},
	// 服务设置-->添加项目
	{
		path: '/fuwunew',
		name: 'fuwunew',
		component: () => import('../views/fuwunew.vue')
	},
	// 资金管理
	{
		path: '/zijin',
		name: 'zijin',
		component: () => import('../views/zijin.vue')
	},
	// 资金管理-->绑银行卡
	{
		path: '/yinhangka',
		name: 'yinhangka',
		component: () => import('../views/yinhangka.vue')
	},
	// 资金管理-->资金详情
	{
		path: '/zijinxiangqing',
		name: 'zijinxiangqing',
		component: () => import('../views/zijinxiangqing.vue'),
		children: [{
				//待返款
				path: 'daifankuan',
				component: () => import('../components/ZiJin/daifankuan.vue')
			},
			{
				//待退款
				path: 'daituikuan',
				component: () => import('../components/ZiJin/daituikuan.vue')
			},
			{
				//返款
				path: 'fankuan',
				component: () => import('../components/ZiJin/fankuan.vue')
			},
			{
				//退款
				path: 'tuikuan',
				component: () => import('../components/ZiJin/tuikuan.vue')
			},
			{
				//结算
				path: 'jiesuan',
				component: () => import('../components/ZiJin/jiesuan.vue')
			},
			//重定向
			{
				path: '/zijinxiangqing',
				redirect: '/zijinxiangqing/jiesuan'
			}
		]
	},
	// 找回密码
	{
		path: '/zhaomima',
		name: 'zhaomima',
		component: () => import('../views/zhaomima.vue')
	},
	// 找回密码-->下一步
	{
		path: '/zhaomima1',
		name: 'zhaomima1',
		component: () => import('../views/zhaomima1.vue')
	},
	// 注册1
	{
		path: '/zhuce',
		name: 'zhuce',
		component: () => import('../views/zhuce/zhuce.vue')
	},
	// 注册2
	{
		path: '/zhuce1',
		name: 'zhuce1',
		component: () => import('../views/zhuce/zhuce1.vue')
	},
	// 注册3
	{
		path: '/zhuce2',
		name: 'zhuce2',
		component: () => import('../views/zhuce/zhuce2.vue')
	},
	// 注册4
	{
		path: '/zhuce3',
		name: 'zhuce3',
		component: () => import('../views/zhuce/zhuce3.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
