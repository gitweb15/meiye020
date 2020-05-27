<template>
	<!-- 退款详情 -->
	<div id="tkzt">
		<!-- 头部 -->
		<Header3 title="日记详情"></Header3>
		<div class="tkzt">
			<div class="center">
				<img src="../../../public/image/u320.png" class="xian" />
				<img src="../../../public/image/u321.png" class="zi" />
				<img src="../../../public/image/u321.png" class="zi1" />
				<img src="../../../public/image/u322.png" class="hui1" />
				<div class="buju">
					<p>取消订单</p>
					<p>{{quexiao}}</p>
				</div>
				<div class="buju">
					<p>退款处理</p>
					<p>{{tuikuan}}</p>
				</div>

				<div class="buju">
					<p>预计到帐时间</p>
					<p>{{yuji}}</p>
				</div>
			</div>
			<!-- 	<van-steps direction="vertical" :active="1">
				<van-step>
					<h3>取消订单</h3>
					<p>2014-12-15 17:30;25</p>
				</van-step>
				<van-step>
					<h3>退款处理</h3>
					<p>2014-12-16 17:30;25</p>
				</van-step>
				<van-step>
					<h3>预计到帐时间</h3>
					<p>2014-12-18 17:30;25</p>
				</van-step>
			</van-steps> -->
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'tkzt',
		components: {
			Header3
		},
		data() {
			return {
				quexiao: '2014-12-15 17:30;25', //取消订单时间
				tuikuan: '2014-12-18 17:30;25', //退款处理时间
				yuji: '2014-12-18 17:30;25' //预计到帐时间
			}
		}
	}
</script>

<style scoped>
	.tkzt {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 3px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.center {
		width: 100%;
		height: 330px;
		background-color: #fff;
		position: relative;
	}

	.xian {
		position: absolute;
		left: 29px;
		top: 36px;
	}

	.zi {
		position: absolute;
		left: 20px;
		top: 35px;
	}

	.zi1 {
		position: absolute;
		left: 20px;
		top: 130px;
	}

	.hui1 {
		position: absolute;
		left: 20px;
		top: 236px;
	}

	.buju {
		margin: 0px 0px 10px 53px;
		padding-top: 38px;
	}

	.buju:nth-of-type(3) {
		padding-top: 47px;
	}

	.buju p:nth-of-type(1) {
		margin-bottom: 15px;
	}
</style>
