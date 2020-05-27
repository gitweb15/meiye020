<template>
	<!-- 订单管理页面的table表 -->
	<div id="center">
		<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
			<el-table-column prop="date" label="订单编号">
			</el-table-column>
			<el-table-column prop="bianhao" label="服务项目">
			</el-table-column>
			<el-table-column prop="time" label="服务时间">
			</el-table-column>
			<el-table-column prop="phone" label="手机号码">
			</el-table-column>
			<el-table-column prop="money" label="订单金额">
			</el-table-column>
			<el-table-column prop="zhuantai" label="订单状态">
			</el-table-column>
			<el-table-column prop="caozuo" label="操作">
				<template slot-scope="scope">
					　<span v-if="scope.row.valueType=== 1">
						<!-- <a class="aa1">确认</a> -->
						<el-button type="text" @click="open" class="aa1">确认</el-button>
						<router-link to="/dingdanxiangqing" class="aa1" style="margin-left: 20px;">详情</router-link>
					</span>
					<span v-if="scope.row.valueType=== 2"><a class="aa1" @click="handleEdit(scope.$index,scope.row)">核销</a>
						<router-link to="/dingdanxiangqing" class="aa1" style="margin-left: 20px;">详情</router-link>
					</span>
					<span v-if="scope.row.valueType=== 3">
						<router-link to="/dingdanxiangqing" class="aa1" style="margin-left: 20px;">详情</router-link>
					</span>
				</template>
			</el-table-column>
		</el-table>
		<div class="hexiao" v-show="message">
			<p class="show">确认核销</p>
			<div class="show1 zhiti">订单编号：<input type="text" disabled v-model="editDetail.date"></div>

			<div class="show1 zhiti">手机号码：<input type="text" disabled v-model="editDetail.phone"></div>

			<div class="show1 zhiti">项目名称：<input type="text" disabled v-model="editDetail.bianhao"></div>

			<p class="show1 zhiti"><span v-on:click="dianji1">确认核销</span><span v-on:click="dianji1">不核销</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Table1",
		props: {

		},
		data() {
			return {
				message: false, //v-show绑定判断是否true和false
				editDetail: {}, //接受信息
				tableData: [{
						date: '201412101234', //订单编号
						bianhao: '显示项目名称1', //服务项目
						time: '2014-12-20  15:30', //服务时间
						phone: '13800138000', //手机号码
						money: '128.0', //订单金额
						zhuantai: '待确认', //订单状态
						valueType: 1 //操作
					},
					{
						date: '201412101234',
						bianhao: '显示项目名称2',
						time: '2014-12-20  15:30',
						phone: '13800138000',
						money: '128.0',
						zhuantai: '待服务',
						valueType: 2
					}, {
						date: '201412101234',
						bianhao: '显示项目名称3',
						time: '2014-12-20  15:30',
						phone: '13800138000',
						money: '128.0',
						zhuantai: '申请退款',
						valueType: 3
					},
					{
						date: '201412101234',
						bianhao: '显示项目名称4',
						time: '2014-12-20  15:30',
						phone: '13800138000',
						money: '128.0',
						zhuantai: '待评价',
						valueType: 3
					}, {
						date: '201412101234',
						bianhao: '显示项目名称5',
						time: '2014-12-20  15:30',
						phone: '13800138000',
						money: '128.0',
						zhuantai: '已完成',
						valueType: 3
					},
					{
						date: '201412101234',
						bianhao: '显示项目名称6',
						time: '2014-12-20  15:30',
						phone: '13800138000',
						money: '128.0',
						zhuantai: '已取消',
						valueType: 3
					}
				]
			}
		},
		methods: {
			//点击确认
			open() {
				this.$confirm('确定点击确认?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '确认成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消确认'
					});
				});
			},
			//点击核销，出现
			handleEdit(index, row) {
				console.log(index, row);
				this.editDetail = {
					date: row.date,
					phone: row.phone,
					bianhao: row.bianhao
				}
				console.log(this.editDetail)
				this.message = true
			},
			//点击,隐藏核销内容
			dianji1() {
				this.message = false
			}
		}

	}
</script>

<style scoped>
	#center {
		width: 100%;
	}

	.aa {
		float: right;
		padding: 0px 20px;
		color: #0000FF;
	}

	a:hover {
		text-decoration: underline;
	}

	.aa:nth-of-type(2) {
		border-right: 1px solid #e4e4e4;
	}

	.aa1 {
		color: #0000FF;
	}

	.hexiao {
		border-width: 0px;
		position: absolute;
		top: 241px;
		left: 200px;
		width: 330px;
		height: 220px;
		border: 1px solid rgba(204, 204, 204, 1);
		background-color: #fff;
		z-index: 99;
	}

	.show {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 24px;
		margin: 20px 0px;
		width: 100%;
		height: 32px;
		text-align: center;
	}

	.show1 {
		width: 100%;
		height: 13px;
		text-align: center;
		margin: 0px auto 20px;
		display: inline-block;
	}

	.show1 span {
		color: #000000;
		width: 100px;
		height: 25px;
		display: inline-block;
		border: 1px solid rgba(121, 121, 121, 1);
		line-height: 28px;
		cursor: pointer;
		margin: 0px 15px;
	}

	.show1 input {
		border: 1px solid #fff;
		background-color: #fff;
	}
</style>
