<template>
	<!-- 日记-待服务页面 -->
	<div id="center">
		<!-- 头部 -->
		<Header1 title="订单详情"></Header1>
		<!-- 信息加载 -->
		<div class="center">
			<div class="neirong">
				<p class="one zhiti">
					<span class="one-zuo">订单编号：{{bianhao}}</span>
					<span class="one-you">{{dai}}</span>
				</p>
				<div class="two zhiti">
					<p>服务项目：{{name}}</p>
					<p>服务时间：{{time}}</p>
					<p>服务地点：{{dizhi}}</p>
					<p>联系电话：{{phone}}（用户电话）</p>
				</div>
				<div class="two zhiti">
					<p>下单时间：{{xiadantime}}</p>
					<p>订单金额：{{money}}</p>
				</div>
			</div>
			<van-button type="default" class="anniu" is-link url="">联系客户</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'quexiao',
		components: {
			Header1
		},
		data() {
			return {
				bianhao: '201412081234', //订单编号
				dai: '已取消', //服务状态
				name: '项目名称', //服务项目
				time: '2014-12-15 17:30', //服务时间
				dizhi: '用户地址/门店地址', //服务地点
				phone: '13800138000', //联系电话
				xiadantime: '2014-12-15 17:25:24', //下单时间
				money: '128.00', //订单金额
			}
		}
	}
</script>

<style scoped>
	.center {
		border-width: 0px;
		position: relative;
		width: 100%;
		background-color: rgba(229, 229, 229, 1);
		padding-top: 5px;
		padding-bottom: 245px;
	}

	.center::after {
		content: '';
		display: block;
		clear: both;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		letter-spacing: normal;
		color: #333333;
	}

	.neirong {
		position: relative;
		width: 100%;
		background-color: #fff;
		margin-top: 5px;
		margin-bottom: 10px;
	}

	.neirong::after {
		content: '';
		display: block;
		clear: both;
	}

	.one {
		border-bottom: 1px solid #e3e3e3;
		width: 95%;
		float: right;
	}

	.one-zuo {
		float: left;
		line-height: 55px;
		height: 100%;
	}

	.one-you {
		float: right;
		line-height: 55px;
		height: 100%;
		margin-right: 10px;
	}

	.two {
		border-bottom: 1px solid #e3e3e3;
		width: 95%;
		float: right;
	}

	.two p {
		width: 100%;
		margin: 13px 0px;
	}

	.anniu {
		width: 100%;
		margin-top: 10px;
		cursor: pointer;
	}
</style>
