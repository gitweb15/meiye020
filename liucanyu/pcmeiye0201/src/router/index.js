import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye.vue'

Vue.use(VueRouter)

const routes = [
	//首页
	{
		path: '/',
		name: 'shouye',
		component: shouye,
		//初始化重定向
		redirect: '/quxian1',
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
			}, {
				//曲线图4
				path: 'quxian4',
				component: () => import('../components/Quxiantu/index3.vue')
			},
			{
				//曲线图5
				path: 'quxian5',
				component: () => import('../components/Quxiantu/index4.vue')
			},
			{
				//曲线图6
				path: 'quxian6',
				component: () => import('../components/Quxiantu/index5.vue')
			}
		]
	},
	//权限管理-->权限列表
	{
		path: '/liebiao',
		name: 'liebiao',
		component: () => import('../views/QuanXian/liebiao.vue')
	},
	//权限管理-->角色管理
	{
		path: '/juese',
		name: 'juese',
		component: () => import('../views/QuanXian/juese.vue')
	},
	//订单管理
	{
		path: '/dingdan',
		name: 'dingdan',
		component: () => import('../views/dingdan.vue')
	},
	//意见反馈
	{
		path: '/yijianfankui',
		name: 'yijianfankui',
		component: () => import('../views/yijianfankui.vue')
	},
	//资金管理
	{
		path: '/guanli',
		name: 'guanli',
		component: () => import('../views/ZiJin/guanli.vue')
	},
	//资金管理-->资金详情
	{
		path: '/xiangqing',
		name: 'xiangqing',
		component: () => import('../views/ZiJin/xiangqing.vue'),
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
				path: '/xiangqing',
				redirect: '/xiangqing/jiesuan'
			}
		]
	},
	//服务设置
	{
		path: '/fuwu',
		name: 'fuwu',
		component: () => import('../views/FuWu/fuwu.vue')
	},
	//服务设置-->新增服务
	{
		path: '/fuwuNew',
		name: 'fuwuNew',
		component: () => import('../views/FuWu/fuwuNew.vue')
	},
	//服务设置-->服务详情
	{
		path: '/fuwuXiangQing',
		name: 'fuwuXiangQing',
		component: () => import('../views/FuWu/fuwuXiangQing.vue')
	},
	//美容师
	{
		path: '/meirongshi',
		name: 'meirongshi',
		component: () => import('../views/MeiRongShi/meirongshi.vue')
	},
	//美容师-->账户信息
	{
		path: '/mrszhanghu',
		name: 'mrszhanghu',
		component: () => import('../views/MeiRongShi/mrszhanghu.vue')
	},
	//美容师-->订单信息
	{
		path: '/mrsdingdan',
		name: 'mrsdingdan',
		component: () => import('../views/MeiRongShi/mrsdingdan.vue')
	},
	//美容师-->资金信息
	{
		path: '/mrszijin',
		name: 'mrszijin',
		component: () => import('../views/MeiRongShi/mrszijin.vue')
	},
	//美容师-->资金信息-->资金详情
	{
		path: '/mrszijixq',
		name: 'mrszijixq',
		component: () => import('../views/MeiRongShi/mrszijixq.vue'),
		children: [{
				//待返款
				path: 'daifankuan',
				component: () => import('../components/ZiJin1/daifankuan.vue')
			},
			{
				//待退款
				path: 'daituikuan',
				component: () => import('../components/ZiJin1/daituikuan.vue')
			},
			{
				//返款
				path: 'fankuan',
				component: () => import('../components/ZiJin1/fankuan.vue')
			},
			{
				//退款
				path: 'tuikuan',
				component: () => import('../components/ZiJin1/tuikuan.vue')
			},
			{
				//结算
				path: 'jiesuan',
				component: () => import('../components/ZiJin1/jiesuan.vue')
			},
			//重定向
			{
				path: '/mrszijixq',
				redirect: '/mrszijixq/jiesuan'
			}
		]
	},
	//美容师-->服务信息
	{
		path: '/mrsfuwu',
		name: 'mrsfuwu',
		component: () => import('../views/MeiRongShi/mrsfuwu.vue')
	},
	//美容师-->服务信息-->服务详情
	{
		path: '/mrsfuwusq',
		name: 'mrsfuwusq',
		component: () => import('../views/MeiRongShi/mrsfuwusq.vue')
	},
	//美容店
	{
		path: '/meirongdian',
		name: 'meirongdian',
		component: () => import('../views/MeiRongDian/meirongdian.vue')
	},
	//美容店-->账户信息
	{
		path: '/mrdzhanghu',
		name: 'mrdzhanghu',
		component: () => import('../views/MeiRongDian/mrdzhanghu.vue')
	},
	//美容店-->订单信息
	{
		path: '/mrddingdan',
		name: 'mrddingdan',
		component: () => import('../views/MeiRongDian/mrddingdan.vue')
	},
	//美容店-->资金信息
	{
		path: '/mrdziji',
		name: 'mrdziji',
		component: () => import('../views/MeiRongDian/mrdziji.vue')
	},
	//美容店-->资金信息-->资金详情
	{
		path: '/mrdzijixq',
		name: 'mrdzijixq',
		component: () => import('../views/MeiRongDian/mrdzijixq.vue'),
		children: [{
				//待返款
				path: 'daifankuan',
				component: () => import('../components/ZiJin2/daifankuan.vue')
			},
			{
				//待退款
				path: 'daituikuan',
				component: () => import('../components/ZiJin2/daituikuan.vue')
			},
			{
				//返款
				path: 'fankuan',
				component: () => import('../components/ZiJin2/fankuan.vue')
			},
			{
				//退款
				path: 'tuikuan',
				component: () => import('../components/ZiJin2/tuikuan.vue')
			},
			{
				//结算
				path: 'jiesuan',
				component: () => import('../components/ZiJin2/jiesuan.vue')
			},
			//重定向
			{
				path: '/mrdzijixq',
				redirect: '/mrdzijixq/jiesuan'
			}
		]
	},
	//美容店-->资金信息
	{
		path: '/mrdfuwu',
		name: 'mrdfuwu',
		component: () => import('../views/MeiRongDian/mrdfuwu.vue')
	},
	//美容店-->资金信息-->服务详情
	{
		path: '/mrdfuwuxq',
		name: 'mrdfuwuxq',
		component: () => import('../views/MeiRongDian/mrdfuwuxq.vue')
	},
	//消费者
	{
		path: '/xiaofeizhe',
		name: 'xiaofeizhe',
		component: () => import('../views/XiaoFeiZhe/xiaofeizhe.vue')
	},
	//消费者-->账户信息
	{
		path: '/xfzzhanghu',
		name: 'xfzzhanghu',
		component: () => import('../views/XiaoFeiZhe/xfzzhanghu.vue')
	},
	//消费者-->资金信息
	{
		path: '/xfzziji',
		name: 'xfzziji',
		component: () => import('../views/XiaoFeiZhe/xfzziji.vue')
	},
	//消费者-->资金信息-->资金详情
	{
		path: '/xfzzijixq',
		name: 'xfzzijixq',
		component: () => import('../views/XiaoFeiZhe/xfzzijixq.vue'),
		children: [{
				//待退款
				path: 'daituikuan',
				component: () => import('../components/ZiJin3/daituikuan.vue')
			},
			{
				//退款
				path: 'tuikuan',
				component: () => import('../components/ZiJin3/tuikuan.vue')
			},
			{
				//支付
				path: 'zhifu',
				component: () => import('../components/ZiJin3/zhifu.vue')
			},
			//重定向
			{
				path: '/xfzzijixq',
				redirect: '/xfzzijixq/zhifu'
			}
		]
	},
	//消费者-->卡券管理
	{
		path: '/xfzkaquan',
		name: 'xfzkaquan',
		component: () => import('../views/XiaoFeiZhe/xfzkaquan.vue')
	},
	//消费者-->订单信息
	{
		path: '/xfzdingdan',
		name: 'xfzdingdan',
		component: () => import('../views/XiaoFeiZhe/xfzdingdan.vue')
	},
	//消费者-->订单信息-->待支付
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/xiangqingcz/index.vue')
	},
	//消费者-->订单信息-->待确认
	{
		path: '/index1',
		name: 'index1',
		component: () => import('../views/xiangqingcz/index1.vue')
	},
	//消费者-->订单信息-->待服务
	{
		path: '/index2',
		name: 'index2',
		component: () => import('../views/xiangqingcz/index2.vue')
	},
	//消费者-->订单信息-->已取消
	{
		path: '/index3',
		name: 'index3',
		component: () => import('../views/xiangqingcz/index3.vue')
	},
	//消费者-->订单信息-->售后申请
	{
		path: '/index4',
		name: 'index4',
		component: () => import('../views/xiangqingcz/index4.vue')
	},
	//消费者-->订单信息-->待评价
	{
		path: '/index5',
		name: 'index5',
		component: () => import('../views/xiangqingcz/index5.vue')
	},
	//消费者-->订单信息-->已完成
	{
		path: '/index6',
		name: 'index6',
		component: () => import('../views/xiangqingcz/index6.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
