import Vue from 'vue'
import VueRouter from 'vue-router'
import meibayemian from '../views/meibayemian/index.vue'

Vue.use(VueRouter)
//美吧
const routes = [{
		path: '/',
		name: 'Meibayemian',
		component: meibayemian
	},
	//美吧-美肤到店
	{
		path: '/meifudaodian',
		name: 'Meifudaodian',
		component: () => import('../views/meifudaodian/meifudaodian.vue')
	},
	//美吧-美肤到店-项目详情
	{
		path: '/xiangmuxiangqingfist1',
		name: 'Xiangmuxiangqingfist1',
		component: () => import('../views/xiangmuxiangqingfist1/xiangmuxiangqingfist1.vue')
	},
	//美吧-美肤到店-下单页面
	{
		path: '/yuyuexiadanfist1',
		name: 'Yuyuexiadanfist1',
		component: () => import('../views/yuyuexiadanfist1/yuyuexiadanfist1.vue')
	},
	//美吧-美体上门
	{
		path: '/meitishangmen',
		name: 'Meitishangmen',
		component: () => import('../views/meitishangmen/meitishangmen.vue')
	},
	//美吧-美体上门-项目详情
	{
		path: '/xiangqing',
		name: 'Xiangqing',
		component: () => import('../views/xiangqing/xiangqing.vue')
	},
	//美吧-美体上门-预约下单
	{
		path: '/yuyuexiadanfistone',
		name: 'Yuyuexiadanfistone',
		component: () => import('../views/yuyuexiadanfistone/yuyuexiadanfistone.vue')
	},
	//美吧-美体上门-预约下单-地点
	{
		path: '/yuyuexiadandidian',
		name: 'Yuyuexiadandidian',
		component: () => import('../views/yuyuexiadandidian/yuyuexiadandidian.vue')
	},
	//美吧-美体上门-预约下单-地点-详细地址
	{
		path: '/yuyuexiangxidizhi',
		name: 'Yuyuexiangxidizhi',
		component: () => import('../views/yuyuexiangxidizhi/yuyuexiangxidizhi.vue')
	},
	//美吧-美体上门-预约下单-选择美体师
	{
		path: '/yuyuexuanzhemeitishi',
		name: 'Yuyuexuanzhemeitishi',
		component: () => import('../views/yuyuexuanzhemeitishi/yuyuexuanzhemeitishi.vue')
	},
	//美吧-美体上门-预约下单-支付
	{
		path: '/yuyuezhifu',
		name: 'Yuyuezhifu',
		component: () => import('../views/yuyuezhifu/yuyuezhifu.vue')
	},
	//美吧-门店风采
	{
		path: '/fengcai',
		name: 'Fengcai',
		component: () => import('../views/fengcai/fengcai.vue')
	},
	//美吧-门店风采-门店主页
	{
		path: '/zhuye',
		name: 'Zhuye',
		component: () => import('../views/zhuye/zhuye.vue')
	},
	//美吧-门店风采-门店主页-门店简介
	{
		path: '/jianjie',
		name: 'Jianjie',
		component: () => import('../views/jianjie/jianjie.vue')
	},
	//美吧-门店风采-服务项目
	{
		path: '/xiangmufuwufist2',
		name: 'Xiangmufuwufist2',
		component: () => import('../views/xiangmufuwufist2/xiangmufuwufist2.vue')
	},
	//美吧-门店风采-下单页面
	{
		path: '/yuyuexiadanfist2',
		name: 'Yuyuexiadanfist2',
		component: () => import('../views/yuyuexiadanfist2/index.vue')
	},
	//美吧-门店风采-代金券
	{
		path: '/daijingjuan',
		name: 'Daijingjuan',
		component: () => import('../views/daijingjuan/daijingjuan.vue')
	},
	//美吧-美体师
	{
		path: '/meitishi',
		name: 'MeiTiShi',
		component: () => import('../views/meitishi/index.vue')
	},
	//美吧-美体师-美体师主页
	{
		path: '/meitizhuye',
		name: 'Meitizhuye',
		component: () => import('../views/meitizhuye/meitizhuye.vue')
	},
	//美吧-美体师-美体师主页-美体师简介
	{
		path: '/meitijianjie',
		name: 'Meitijianjie',
		component: () => import('../views/meitijianjie/meitijianjie.vue')
	},
	//美吧-美体师-项目详情
	{
		path: '/meitixiangqingfist',
		name: 'Meitixiangqingfist',
		component: () => import('../views/meitixiangqingfist/meitixiangqingfist.vue')
	},
	//美吧-美体师-下单页面
	{
		path: '/yuyuexiadanfist3',
		name: 'Yuyuexiadanfist3',
		component: () => import('../views/yuyuexiadanfist3/yuyuexiadanfist3.vue')
	},
	//订单
	{
		path: '/DingDan',
		name: 'DingDan',
		component: () => import('../views/DingDan/index.vue')
	},
	//订单-订单详情-待支付
	{
		path: '/dingdandaizhifu',
		name: 'Dingdandaizhifu',
		component: () => import('../views/dingdandaizhifu/dingdandaizhifu.vue')
	},
	//订单-订单详情-待确认
	{
		path: '/dingdandaiqueren',
		name: 'Dingdandaiqueren',
		component: () => import('../views/dingdandaiqueren/dingdandaiqueren.vue')
	},
	//订单-订单详情-待服务
	{
		path: '/dingdandaifuwu',
		name: 'Dingdandaifuwu',
		component: () => import('../views/dingdandaifuwu/dingdandaifuwu.vue')
	},
	//订单-订单详情-待评价
	{
		path: '/dingdandaipingjia',
		name: 'Dingdandaipingjia',
		component: () => import('../views/dingdandaipingjia/dingdandaipingjia.vue')
	},
	//订单-订单详情-已完成
	{
		path: '/dingdanyiweancheng',
		name: 'Dingdanyiweancheng',
		component: () => import('../views/dingdanyiweancheng/dingdanyiweancheng.vue')
	},
	//订单-订单详情-已取消
	{
		path: '/dingdanyiquxiao',
		name: 'Dingdanyiquxiao',
		component: () => import('../views/dingdanyiquxiao/dingdanyiquxiao.vue')
	},
	//订单-评价订单
	{
		path: '/dingdanpingjia',
		name: 'Dingdanpingjia',
		component: () => import('../views/dingdanpingjia/dingdanpingjia.vue')
	},
	//订单-申请售后
	{
		path: '/dingdanshouhou',
		name: 'Dingdanshouhou',
		component: () => import('../views/dingdanshouhou/dingdanshouhou.vue')
	},
	//订单-售后记录
	{
		path: '/dingdanshouhoujinglu',
		name: 'Dingdanshouhoujinglu',
		component: () => import('../views/dingdanshouhoujinglu/dingdanshouhoujinglu.vue')
	},
	//订单-退款状态
	{
		path: '/dingdantuikuan',
		name: 'Dingdantuikuan',
		component: () => import('../views/dingdantuikuan/dingdantuikuan.vue')
	},
	//发现
	{
		path: '/FaXian',
		name: 'FaXian',
		component: () => import('../views/FaXian/faxian.vue')
	},
	//我的
	{
		path: '/wode',
		name: 'Wode',
		component: () => import('../views/wode/index.vue')
	},
	//我的-代金券
	{
		path: '/daijingjuanfist1',
		name: 'Daijingjuanfist1',
		component: () => import('../views/daijingjuanfist1/daijingjuanfist1.vue')
	},
	//我的-地点
	{
		path: '/wodedidian',
		name: 'Wodedidian',
		component: () => import('../views/wodedidian/wodedidian.vue')
	},
	//我的-地点-详细地址
	{
		path: '/XiangXiDiZhi1',
		name: 'XiangXiDiZhi1',
		component: () => import('../views/XiangXiDiZhi1/index.vue')
	},
	//我的-地点-意见反馈
	{
		path: '/YiJianFanKui',
		name: 'YiJianFanKui',
		component: () => import('../views/YiJianFanKui/index.vue')
	},
	//登录
	{
		path: '/DengLu',
		name: 'DengLu',
		component: () => import('../views/DengLu/index.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
