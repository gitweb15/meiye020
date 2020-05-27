<template>
	<div id="center">
		<!-- 头部 -->
		<Header title="我的订单"></Header>
		<!-- 主体 -->
		<div id="body">
			<ul id="list">
				<router-link v-for="n in list" :key="n.index" tag="li" :to="n.to">
					<div class="list">
						<div class="one zhiti">
							<span class="one-zuo">订单编号：{{n.bianhao}}</span><span class="one-you">{{n.daicaozuo}}</span>
						</div>
						<div class="two zhiti">
							服务时间：{{n.time}}
						</div>
						<div class="three zhiti">
							服务地点：{{n.didian}}
						</div>
					</div>
					<template>
						<div v-if="n.list1==0" class="four zhiti">
							<span class="four-span zhiti">
								{{n.yanxu}}
							</span>
						</div>
						<div v-else="n.list1==1">

						</div>
					</template>
				</router-link>
			</ul>
		</div>
		<!-- 尾部 -->
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Footer from '../components/Footer/index.vue';
	export default {
		name: 'dingdan',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				list: [{
						bianhao: '201412081234', //订单编号
						daicaozuo: '待服务', //待操作
						time: '2014-12-10 17:00', //服务时间
						didian: '白云区汇桥新城12#55号', //服务地点
						list1: 0, //是否有延续
						yanxu: '核销订单', //延续
						to:'/fuwu',//跳转路径
					},
					{
						bianhao: '201412081234',
						daicaozuo: '申请退款',
						time: '2014-12-10 17:00',
						didian: '白云区汇桥新城12#55号',
						list1: 0,
						yanxu: '处理退款',
						to:'/tuikuan',
					},
					{
						bianhao: '201412081234',
						daicaozuo: '已完成',
						time: '2014-12-10 17:00',
						didian: '白云区汇桥新城12#55号',
						list1: 1,
						yanxu: '',
						to:'/wancheng',
					},
					{
						bianhao: '201412081234',
						daicaozuo: '已取消',
						time: '2014-12-10 17:00',
						didian: '白云区汇桥新城12#55号',
						list1: 1,
						yanxu: '',
						to:'/quexiao',
					}
				]
			}
		}
	}
</script>

<style scoped>
	#body {
		position: relative;
		width: 100%;
	}

	#body::after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #333333;
	}

	.zhiti1 {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
	}

	#list {
		width: 100%;
		background-color: #e5e5e5;
		position: relative;
	}

	#list::after {
		display: block;
		clear: both;
		content: '';
	}

	#list li {
		width: 100%;
		position: relative;
		background-color: #fff;
		margin-bottom: 5px;
		cursor: pointer;
	}

	#list li:last-child {
		margin-bottom: 150px;
	}

	#list li::after {
		display: block;
		clear: both;
		content: '';
	}

	.list {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		padding: 8px 8px 0px 8px;
	}

	.list::after {
		display: block;
		clear: both;
		content: '';
	}

	.one,
	.two,
	.three {
		width: 100%;
		float: left;
		position: relative;
		margin-bottom: 15px;
	}

	.one-zuo {
		float: left;
		display: inline-block;
	}

	.one-you {
		float: right;
		display: inline-block;
	}

	.four {
		width: 100%;
		float: left;
		position: relative;
		border-top: 1px solid #e3e3e3;
	}

	.four-span {
		float: right;
		margin: 10px 8px 10px 0px;
		color: #8a0cd0;
	}
</style>
