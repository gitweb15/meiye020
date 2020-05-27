import Vue from 'vue'
import VueRouter from 'vue-router'
import MeiBa from '../views/MeiBa.vue'

Vue.use(VueRouter)

const routes = [
	//初始化
	{
		path: '/',
		name: 'MeiBa',
		component: MeiBa
	},
	//订单(未登录)
	{
		path: '/dingdan0',
		name: 'dingdan0',
		component: () => import('../views/dingdan.vue')
	},
	// 登录
	{
		path: '/dengLu',
		name: 'dengLu',
		component: () => import('../views/DengLu.vue')
	},
	//订单(已登录)
	{
		path: '/dingdan1',
		name: 'dingdan1',
		component: () => import('../views/dingdan1.vue')
	},
	//发现
	{
		path: '/faxian',
		name: 'faxian',
		component: () => import('../views/faxian.vue')
	},
	//我的
	{
		path: '/wode',
		name: 'wode',
		component: () => import('../views/wode.vue')
	},
	//我的-->代金券
	{
		path: '/daijinquan',
		name: 'daijinquan',
		component: () => import('../views/wode/daijinquan.vue')
	},
	//我的-->意见反馈
	{
		path: '/yijian',
		name: 'yijian',
		component: () => import('../views/wode/yijian.vue')
	},
	//我的-->常用地址
	{
		path: '/cydizhi',
		name: 'cydizhi',
		component: () => import('../views/wode/cydizhi.vue')
	},
	//我的-->常用地址-->详细地址
	{
		path: '/xxdizhi',
		name: 'xxdizhi',
		component: () => import('../views/wode/xxdizhi.vue')
	},
	//订单-->日记详情-->待支付
	{
		path: '/zhifu',
		name: 'zhifu',
		component: () => import('../views/dingdan/zhifu.vue')
	},
	//订单-->日记详情-->待确认
	{
		path: '/queren',
		name: 'queren',
		component: () => import('../views/dingdan/queren.vue')
	},
	//订单-->日记详情-->待服务
	{
		path: '/fuwu',
		name: 'fuwu',
		component: () => import('../views/dingdan/fuwu.vue')
	},
	//订单-->日记详情-->待评价
	{
		path: '/pingjia',
		name: 'pingjia',
		component: () => import('../views/dingdan/pingjia.vue')
	},
	//订单-->日记详情-->已完成
	{
		path: '/wancheng',
		name: 'wancheng',
		component: () => import('../views/dingdan/wancheng.vue')
	},
	//订单-->日记详情-->已取消
	{
		path: '/quexiao',
		name: 'quexiao',
		component: () => import('../views/dingdan/quexiao.vue')
	},
	//订单-->日记详情-->待评价-->评价描述
	{
		path: '/pjms',
		name: 'pjms',
		component: () => import('../views/dingdan/pjms.vue')
	},
	//订单-->日记详情-->申请售后
	{
		path: '/sqshouhou',
		name: 'sqshouhou',
		component: () => import('../views/dingdan/sqshouhou.vue')
	},
	//订单-->日记详情-->售后记录
	{
		path: '/shjilu',
		name: 'shjilu',
		component: () => import('../views/dingdan/shjilu.vue')
	},
	//订单-->退款状态
	{
		path: '/tkzt',
		name: 'tkzttkzt',
		component: () => import('../views/dingdan/tkzt.vue')
	},
	//订单-->美体师姓名
	{
		path: '/mtszhuye',
		name: 'mtszhuye',
		component: () => import('../views/dingdan/mtszhuye.vue')
	},
	//订单-->美体师姓名1
	{
		path: '/mtszhuye1',
		name: 'mtszhuye1',
		component: () => import('../views/dingdan/mtszhuye1.vue')
	},
	//美体-->首页
	{
		path: '/meitiShouye',
		name: 'meitiShouye',
		component: () => import('../views/meiti/meitiShouye')
	},
	//美体-->首页-->服务项目
	{
		path: '/meitiXiangmu',
		name: 'meitiXiangmu',
		component: () => import('../views/meiti/meitiXiangmu')
	},
	//美体-->预约下单
	{
		path: '/meitiYuyue',
		name: 'meitiYuyue',
		component: () => import('../views/meiti/meitiYuyue')
	},
	//美体-->支付
	{
		path: '/meitiZhifu',
		name: 'meitiZhifu',
		component: () => import('../views/meiti/meitiZhifu')
	},
	//美体-->选择美体师
	{
		path: '/meitiXuanze',
		name: 'meitiXuanze',
		component: () => import('../views/meiti/meitiXuanze')
	},
	//美体-->我的地址
	{
		path: '/meitiDizhi',
		name: 'meitiDizhi',
		component: () => import('../views/meiti/meitiDizhi')
	},
	//美体-->我的地址-->新增地址
	{
		path: '/meitiNew',
		name: 'meitiNew',
		component: () => import('../views/meiti/meitiNew')
	},
	//美肤-->首页
	{
		path: '/meifuShouye',
		name: 'meifuShouye',
		component: () => import('../views/meifu/meifuShouye')
	},
	//美肤-->首页-->服务项目
	{
		path: '/meifuXiangmu',
		name: 'meifuXiangmu',
		component: () => import('../views/meifu/meifuXiangmu')
	},
	//美肤-->预约下单
	{
		path: '/meifuYuyue',
		name: 'meifuYuyue',
		component: () => import('../views/meifu/meifuYuyue')
	},
	//美肤-->支付
	{
		path: '/meifuZhifu',
		name: 'meifuZhifu',
		component: () => import('../views/meifu/meifuZhifu')
	},
	//美体师
	{
		path: '/meitishi',
		name: 'meitishi',
		component: () => import('../views/meitishi/meitishi')
	},
	//美体师-->美体师简介
	{
		path: '/meitishijianjie',
		name: 'meitishijianjie',
		component: () => import('../views/meitishi/meitishijianjie')
	},
	//美体师-->预约项目
	{
		path: '/meitishiXiangmu',
		name: 'meitishiXiangmu',
		component: () => import('../views/meitishi/meitishiXiangmu')
	},
	//美体师-->预约信息
	{
		path: '/meitishiYuyue',
		name: 'meitishiYuyue',
		component: () => import('../views/meitishi/meitishiYuyue')
	},
	//美体师-->支付成功
	{
		path: '/meitishiZhifu',
		name: 'meitishiZhifu',
		component: () => import('../views/meitishi/meitishiZhifu')
	},
	//门店
	{
		path: '/mendian',
		name: 'mendian',
		component: () => import('../views/mendian/mendian')
	},
	//门店-->门店主页
	{
		path: '/mendianzhuye',
		name: 'mendianzhuye',
		component: () => import('../views/mendian/mendianzhuye')
	},
	//门店-->门店主页-->门店美体师
	{
		path: '/mendianmts',
		name: 'mendianmts',
		component: () => import('../views/mendian/mendianmts')
	},
	//门店-->门店主页-->项目
	{
		path: '/mendianXiangmu',
		name: 'mendianXiangmu',
		component: () => import('../views/mendian/mendianXiangmu')
	},
	//门店-->门店主页-->项目预约
	{
		path: '/mendianYuyue',
		name: 'mendianYuyue',
		component: () => import('../views/mendian/mendianYuyue')
	},
	//门店-->门店主页-->项目预约-->代金券
	{
		path: '/mddaijinquan',
		name: 'mddaijinquan',
		component: () => import('../views/mendian/mddaijinquan')
	},
	//门店-->门店主页-->项目预约-->支付成功
	{
		path: '/mendianZhifu',
		name: 'mendianZhifu',
		component: () => import('../views/mendian/mendianZhifu')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
