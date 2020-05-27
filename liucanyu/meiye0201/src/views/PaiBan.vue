<template>
	<div id="center">
		<!-- 头部 -->
		<Header title="我的排班"></Header>
		<!-- 主体 -->
		<div id="body">
			<p class="title zhiti">勾选相应的班次即可设置排班</p>
			<ul class="zuo zhiti">
				<router-link v-for="n in list" :key="n.index" :to="n.to" tag="li" exact>
					<p>{{n.time}}</p>
					<p>{{n.data}}</p>
				</router-link>
			</ul>
			<div class="you">
				<!-- 二级路由渲染 -->
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
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
		name: 'paiban',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				list: [{
						to: '/paiban/time1', //跳转路径
						time: '周日', //周天
						data: '12.12', //时间
					},
					{
						to: '/paiban/time2',
						time: '周一',
						data: '12.13',
					},
					{
						to: '/paiban/time3',
						time: '周二',
						data: '12.14',
					},
					{
						to: '/paiban/time4',
						time: '周三',
						data: '12.15',
					},
					{
						to: '/paiban/time5',
						time: '周四',
						data: '12.16',
					},
					{
						to: '/paiban/time6',
						time: '周五',
						data: '12.17',
					},
					{
						to: '/paiban/time7',
						time: '周六',
						data: '12.18',
					},
					{
						to: '/paiban/time8',
						time: '周天',
						data: '12.19',
					},
					{
						to: '/paiban/time9',
						time: '周一',
						data: '12.20',
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

	.title {
		background-color: #e5e5e5;
		box-sizing: border-box;
		padding: 8px;
	}

	.zuo {
		width: 30%;
		float: left;
		position: relative;
		background-color: #d7d7d7;
		overflow: hidden;
	}

	.zuo::after {
		display: block;
		clear: both;
		content: '';
	}

	.zuo li {
		text-align: center;
		padding: 16px 0px;
	}

	.zuo li:last-child {
		margin-bottom: 50px;
	}

	/* 当router-link被点击时候的样式 */
	.router-link-active {
		background: url(../assets/u1974.png) 123% 50% no-repeat;
		background-size: 25% 25%;
	}

	.you {
		width: 70%;
		float: left;
		position: relative;
	}

	.you::after {
		display: block;
		clear: both;
		content: '';
	}
</style>
