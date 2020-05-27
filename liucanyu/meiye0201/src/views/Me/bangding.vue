<template>
	<div id="center">
		<!-- <!-- 头部 -->
		<Header1 title="验证信息"></Header1>
		<!-- 主体 -->
		<div id="body">
			<div class="body zhiti">
				<p>修改银行卡需要验证您的账户信息</p>
				<p>当前开户银行：{{kaihu}}</p>
				<p>当前开户姓名：{{name}}</p>
				<p>当前银行卡号：{{yhk}}</p>
			</div>

			<van-button type="primary" size="large" class="anniu" url="/zijiguanli">确认绑定</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'fuwudizhi',
		components: {
			Header1,
		},
		data() {
			return {
				kaihu: '中国工商银行',
				name: '张三丰',
				yhk: '6226 **** **** 1234'
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	#center {
		position: relative;
		width: 100%;
		background-color: #e5e5e5;
		padding-bottom: 425px;
	}

	#center::after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		color: #333333;
	}

	.anniu {
		width: 100%;
		background-color: #fff;
		color: #333;
		border-radius: 0px;
	}

	.body {
		width: 100%;
		position: relative;
		background-color: #FFFFFF;
		top: 15px;
		margin-bottom: 25px;
		box-sizing: border-box;
		padding: 0px 8px;
	}

	.body::after {
		display: block;
		clear: both;
		content: '';
	}

	.body p {
		padding: 10px 0px;
	}

	.anniu {
		background-color: #fff;
		color: #333333;
		border: 1px solid #fff;
		margin: 30px 0px 122px;
	}
</style>
