<template>
	<!-- 代金券1 -->
	<div id="djq1">
		<Header title="代金券"></Header>
		<div id="content">
			<div class="content-div1">
				<van-cell-group class="van-cell-group">
					<van-field v-model="value" placeholder="输入代金券号" />
				</van-cell-group>
				<van-button class="van-button" color="#ffccff">兑换</van-button>
			</div>
			<div class="content-div2">

				<a href="###">
					<p>￥99.0</p>
					<p>
						<span>有效期至:2014-12-30</span><br />
						<span>使用限制:满100可用</span>
					</p>
				</a>


				<a href="###">
					<p>￥99.0</p>
					<p>
						<span>有效期至:2014-12-30</span><br />
						<span>使用限制:满100可用</span>
					</p>
				</a>

				<a href="###">
					<p>￥99.0</p>
					<p>
						<span>有效期至:2014-12-30</span><br />
						<span>使用限制:满100可用</span>
					</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'DaiJinQuan1',
		components: {
			Header
		},
		data() {
			return {
				value: ''
			}
		}
	}
</script>

<style scoped>
	.content-div1 {
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.van-cell-group {
		width: 75%;
	}

	.van-button {
		width: 25%;
	}

	.van-cell-group,
	.van-button {
		display: inline-block;
	}

	a {
		display: block;
		background-color: #ffffff;
		color: #000000;
		margin-top: 12px;
	}

	.content-div2 a p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div2 a p:nth-child(1) {
		font-weight: bold;
		font-size: 30px;
		border-right: 1px solid #e4e4e4;
		padding-right: 30px;
		padding: 30px 30px 30px 10px;
	}

	.content-div2 a p:nth-child(2) {
		font-size: 14px;
		padding-left: 15px;
	}

	.content-div2 a p span {
		display: inline-block;
	}

	.content-div2 a p:nth-child(2) span:nth-child(3) {
		margin-top: 10px;
	}
</style>
