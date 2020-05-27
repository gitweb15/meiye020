<template>
	<!-- 消费者资金管理页面的table表 -->
	<div id="center">
		<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
			<el-table-column prop="time" label="入账时间">
			</el-table-column>
			<el-table-column prop="bianhao" label="订单编号">
			</el-table-column>
			<el-table-column prop="liushuihao" label="交易流水号">
			</el-table-column>
			<el-table-column prop="zhuangtai" label="交易类型">
			</el-table-column>
			<el-table-column prop="money" label="收支金额">
			</el-table-column>
			<el-table-column prop="caozuo" label="操作">
				<template slot-scope="scope">
					<router-link to="/xfzzijixq" class="aa">详情</router-link>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "Table3",
		props: {

		},
		data() {
			return {
				tableData: [{
						time: '2014-12-10 14:22:12', //入账时间
						bianhao: '201412241234', //订单编号
						liushuihao: '12014122412300', //交易流水号
						zhuangtai: '交易', //状态
						money: '+128.0', //收支金额
					},
					{
						time: '2014-12-10 14:22:12', //入账时间
						bianhao: '201412241234', //订单编号
						liushuihao: '12014122412300', //交易流水号
						zhuangtai: '交易', //状态
						money: '+128.0（有退款）', //收支金额
					}
				]
			}
		},
		methods: {

		}

	}
</script>

<style scoped>
	#center {
		width: 100%;
	}

	.aa {
		float: left;
		/* color: #333333; */
		color: #0000FF;
	}

	/* a:hover {
		text-decoration: underline;
	} */
</style>
