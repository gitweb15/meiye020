<template>
	<!-- 评价订单 -->
	<div id="pjdd">
		<Header title="评价订单"></Header>
		<div id="content">
			<div class="content-div1">
				评价描述
			</div>
			<div class="content-div2">
				<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea">
				</el-input>
			</div>
			<div class="content-div3">
				<table>
					<tr>
						<td>专业</td>
						<td>
							<van-rate v-model="value1" color="#0d7aff" void-icon="star" />
						</td>
					</tr>
					<tr>
						<td>态度</td>
						<td>
							<van-rate v-model="value2" color="#0d7aff" void-icon="star" />
						</td>
					</tr>
					<tr>
						<td>守时</td>
						<td>
							<van-rate v-model="value3" color="#0d7aff" void-icon="star" />
						</td>
					</tr>
				</table>
			</div>
			<div class="content-div4">
				<van-button type="default" block @click="Click">提交评价</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'PingJiaDingDan',
		components: {
			Header
		},
		data() {
			return {
				value1: 5,
				value2: 5,
				value3: 5,
				textarea: ''
			}
		},
		methods: {
			//绑定单击事件
			Click: function() {
				this.$router.push('/DaiZhiFu');
			}
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
		font-size: 14px;
		padding-left: 10px;
		padding-top: 10px;
	}

	.content-div2 {
		background-color: #ffffff;
		font-size: 14px;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 10px;
	}

	table {
		margin-left: 15px;
		width: 95%;
	}

	table tr {
		line-height: 35px;
		font-size: 14px;
	}

	.content-div3 {
		background-color: #ffffff;
		padding-top: 15px;
		padding-bottom: 10px;
	}

	.content-div4 {
		margin-top: 20px;
	}
</style>
