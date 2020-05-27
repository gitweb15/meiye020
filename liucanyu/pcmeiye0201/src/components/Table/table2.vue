<template>
	<!-- 资金管理页面的table表 -->
	<div id="center">
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="time" label="入账时间">
			</el-table-column>
			<el-table-column prop="bianhao" label="订单编号">
			</el-table-column>
			<el-table-column prop="jiaoyi" label="交易流水">
			</el-table-column>
			<el-table-column prop="zhangtai" label="状态">
			</el-table-column>
			<el-table-column prop="money" label="收支金额">
			</el-table-column>
			<el-table-column label="操作" width="120">
				<template slot-scope="scope">
					　<span v-if="scope.row.valueType=== 1">
						<router-link to="/xiangqing" style="color: #0000FF;float: right;margin-right: 25px;">详情</router-link>
					</span>
					<span v-if="scope.row.valueType=== 2">
						<a>结算</a>
						<router-link to="/xiangqing" style="color: #0000FF;margin-left: 20px;">详情</router-link>
					</span>
					<span v-if="scope.row.valueType=== 3">
						<a class="aa">返款</a>
						<router-link to="/xiangqing" style="color: #0000FF;margin-left: 20px;">详情</router-link>
					</span>
					<span v-if="scope.row.valueType=== 4">
						<a class="aa">退款</a>
						<router-link to="/xiangqing" style="color: #0000FF;margin-left: 20px;">详情</router-link>
					</span>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "Table2",
		props: {

		},
		data() {
			return {
				tableData: [{
						time: '2014-12-10 14:22:12',
						bianhao: '201412241234',
						jiaoyi: '12014122412300',
						zhangtai: '待结算',
						money: '+128.0',
						valueType: 2 //操作
					},
					{
						time: '2014-12-10 14:22:12',
						bianhao: '201412241234',
						jiaoyi: '12014122412300',
						zhangtai: '待返款',
						money: '+128.0',
						valueType: 3 //操作
					},
					{
						time: '2014-12-10 14:22:12',
						bianhao: '201412241234',
						jiaoyi: '12014122412300',
						zhangtai: '已返款',
						money: '+128.0',
						valueType: 1 //操作
					},
					{
						time: '2014-12-10 14:22:12',
						bianhao: '201412241234',
						jiaoyi: '12014122412300',
						zhangtai: '待退款',
						money: '+128.0',
						valueType: 4 //操作
					},
					{
						time: '2014-12-10 14:22:12',
						bianhao: '201412241234',
						jiaoyi: '12014122412300',
						zhangtai: '已退款',
						money: '+128.0',
						valueType: 1 //操作
					}
				],
				multipleSelection: []
			}
		},
		methods: {
			//table表
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		}

	}
</script>

<style scoped>
	#center {
		width: 100%;
		border-top: 1px solid #E5E5E5;
	}
</style>
