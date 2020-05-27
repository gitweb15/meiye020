<template>
	<!-- 退款状态 -->
	<div id="tkzt">
		<Header title="退款状态"></Header>
		<div id="content">
			<div class="content-div1">
				<van-steps direction="vertical" :active="active" class="van-steps">
					<van-step>
						<h3 class="content-div2-h3">取消订单</h3>
						<p class="content-div2-p">2014-12-15 17:30;25</p>
					</van-step>
					<van-step>
						<h3 class="content-div2-h3">退款处理</h3>
						<p class="content-div2-p">2014-12-16 17:30;25</p>
					</van-step>
					<van-step>
						<h3 class="content-div2-h3">预计到帐时间</h3>
						<p class="content-div2-p">2014-12-18 17:30;25</p>
					</van-step>
				</van-steps>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'TuiKuanZhuangTai',
		components: {
			Header
		},
		data() {
			return {
				active: 1
			}
		}
	}
</script>

<style scoped>
	.van-steps {
		padding-top: 10px;
		padding-bottom: 40px;
	}

	.content-div2-h3 {
		font-size: 14px;
	}

	.content-div2-p {
		font-size: 14px;
	}
</style>
