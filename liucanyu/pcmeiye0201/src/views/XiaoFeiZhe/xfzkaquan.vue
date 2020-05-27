<template>
	<!-- 资金信息 -->
	<div class="content">
		<!-- 头部 -->
		<Header></Header>
		<div class="body">
			<!-- 侧边栏 -->
			<div class="zuo">
				<Aside></Aside>
			</div>
			<div class="you">
				<div class="you-div ziti">
					<h3 style="margin: 18px 0px 30px;">{{zhanghu}}</h3>
				</div>
				<ul class="tab ziti">
					<router-link tag="li" to="/xfzzhanghu">
						账户信息
					</router-link>
					<router-link tag="li" to="/xfzdingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/xfzziji">
						资金信息
					</router-link>
					<router-link tag="li" to="/xfzkaquan" class="active">
						卡卷管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<ul class="list">
						<li v-for="n in list" :key="n.index">
							<div class="list-zuo ziti1">
								<p class="shuzi">{{n.num}}</p>
							</div>
							<div class="list-you" style="font-size: 13px;">
								<p style="margin-bottom: 10px;">有效期至：{{n.time}}</p>
								<p>状态：{{n.zhangtai}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	import Table5 from '../../components/Table/table5.vue'
	export default {
		name: 'mrszijin',
		components: {
			Header,
			Aside,
			Table5
		},
		parent,
		data() {
			return {
				zhanghu: '13800138000', //账户
				list: [{
						num: '20.0', //价格
						time: '2014-12-25', //时间
						zhangtai: '已使用', //状态
					},
					{
						num: '20.0', //价格
						time: '2014-12-25', //时间
						zhangtai: '已失效', //状态
					},
					{
						num: '20.0', //价格
						time: '2014-12-25', //时间
						zhangtai: '未使用', //状态
					}
				]
			}
		},
		methods: {

		}

	};
</script>

<style scoped>
	.content {
		width: 100%;
		position: relative;
		background-color: #f2f2f2;
	}

	.content::after {
		content: '';
		clear: both;
		display: block;
	}

	.body {
		width: 90%;
		position: relative;
		background-color: #fff;
		margin: 0px auto;
	}

	.body::after {
		content: '';
		clear: both;
		display: block;
	}

	.ziti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 15px;
		color: #333333;
	}

	.ziti1 {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
		text-align: left;
	}

	.zuo {
		width: 17%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you {
		width: 82.5%;
		position: relative;
		display: inline-block;
		float: left;
		border-left: solid 1px #e6e6e6;
		padding-bottom: 150px;
	}

	.you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-div {
		width: 98%;
		position: relative;
		float: right;
	}

	.you-div::after {
		content: '';
		clear: both;
		display: block;
	}

	.tab {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #e3e3e3;
	}

	.tab::after {
		content: '';
		clear: both;
		display: block;
	}

	.active {
		border-bottom: 2px solid #969b35;
	}

	.tab li {
		float: left;
		padding: 0px 25px 15px 15px;
		margin-right: 20px;
		cursor: pointer;
	}

	.list {
		width: 100%;
		position: relative;
		margin-top: 35px;
	}

	.list::after {
		content: '';
		display: block;
		clear: both;
	}

	.list li {
		margin-bottom: 15px;
		border: 1px solid #e4e4e4;
		width: 400px;
		height: 75px;
	}

	.list-zuo,
	.list-you {
		display: inline-block;
		float: left;
		position: relative;
		height: 100%;
	}

	.list-zuo {
		width: 35%;
		border-right: 1px solid #E4E4E4;
	}

	.list-you {
		width: 64.5%;
		box-sizing: border-box;
		padding: 16px 20px;
	}

	.shuzi {
		width: 100%;
		height: 100%;
		position: relative;
		text-align: center;
		line-height: 75px;
	}
</style>
