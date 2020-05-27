<template>
	<!-- 售后记录 -->
	<div id="shjl">
		<Header title="售后记录"></Header>
		<div id="content">
			<div class="content-div1">
				<p>售后类型:</p>
				<p>申请退款</p>
				<p>申请描述:</p>
				<p>这里是申请描述.这里是申请描述.这里是申请描述.这里是申请描述.这里是申请描述.</p>
			</div>
			<div class="content-div2">
				<van-steps direction="vertical" :active="0">
					<van-step>
						<h3 class="content-div2-h3">申请退款</h3>
						<p class="content-div2-p">2014-12-15 17:30;25</p>
					</van-step>
					<van-step>
						<h3 class="content-div2-h3">等待商家同意</h3>
						<p class="content-div2-p">2014-12-18 17:30;25</p>
					</van-step>
					<van-step>
						<h3 class="content-div2-h3">退款处理</h3>
						<p class="content-div2-p">2014-12-18 17:30;25</p>
					</van-step>
					<van-step>
						<h3 class="content-div2-h3">预计到帐时间</h3>
						<p class="content-div2-p">2014-12-18 17:30;25</p>
					</van-step>
				</van-steps>
			</div>
			<div class="content-div3">
				<van-button type="default" block>取消退款申请</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'ShouHouJiLu',
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
	.content-div1 {
		background-color: #ffffff;
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.content-div1 p {
		font-size: 14px;
		margin-top: 10px;
	}

	.content-div1 p:nth-child(1) {
		font-weight: bold;
	}

	.content-div1 p:nth-child(3) {
		font-weight: bold;
	}

	.content-div2-h3 {
		font-size: 14px;
	}

	.content-div2-p {
		font-size: 14px;
	}

	.content-div3 {
		margin-top: 20px;
	}
</style>
