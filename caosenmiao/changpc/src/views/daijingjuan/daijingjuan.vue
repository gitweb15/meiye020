<template>
	<!-- 代金券 -->
	<div id="djq">
		<Header title="代金券"></Header>
		<div id="content">
			<div class="content-div1">
				<van-cell-group class="van-cell-group">
					<van-field v-model="value" placeholder="输入代金券号" />
				</van-cell-group>
				<van-button class="van-button" color="#ffccff">兑换</van-button>
			</div>
			<div class="content-div2">
				<router-link to="/yuyuexiadanfist2">
					<a href="###" @click="curId=1" :class="{'cur':curId===1}">
						<p>￥20.0</p>
						<p>
							<span>有效期至:2014-12-30</span><br />
							<span>使用限制:满100可用</span>
						</p>
					</a>
				</router-link>
				<router-link to="/YuYueXiaDan2">
					<a href="###" @click="curId=2" :class="{'cur':curId===2}">
						<p>￥99.0</p>
						<p>
							<span>有效期至:2014-12-30</span><br />
							<span>使用限制:满100可用</span>
						</p>
					</a>
				</router-link>
				<router-link to="/YuYueXiaDan2">
					<a href="###" @click="curId=3" :class="{'cur':curId===3}">
						<p>￥99.0</p>
						<p>
							<span>有效期至:2014-12-30</span><br />
							<span>使用限制:满100可用</span>
						</p>
					</a>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'DaiJinQuan',
		components: {
			Header
		},
		data() {
			return {
				value: '',
				curId: 1
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
		background-color: #f3f3f3;
		color: #818181;
		margin-top: 12px;
	}

	.cur {
		background-color: #ffffff;
		color: #000000;
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
