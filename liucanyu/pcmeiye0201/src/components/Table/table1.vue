<template>
	<!-- 订单管理页面的table表 -->
	<div id="center">
		<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
			<el-table-column prop="bianhao" label="订单编号">
			</el-table-column>
			<el-table-column prop="name" label="项目名称">
			</el-table-column>
			<el-table-column prop="timefuwu" label="服务方">
			</el-table-column>
			<el-table-column prop="xiaofei" label="消费者">
			</el-table-column>
			<el-table-column prop="time" label="创建时间" width="160px">
			</el-table-column>
			<el-table-column prop="zhuantai" label="订单状态">
			</el-table-column>
			<el-table-column prop="money" label="金额">
			</el-table-column>
			<el-table-column prop="caozuo" label="操作">
				<template slot-scope="scope">
					<router-link to="" class="aa">查看</router-link>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "Table1",
		props: {

		},
		data() {
			return {
				tableData: [{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待支付',
						money: '128.0',
						caozuo: ''
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待确认',
						money: '128.0',
						caozuo: ''
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待服务',
						money: '128.0',
						caozuo: ''
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '已取消',
						money: '128.0',
						caozuo: ''
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '申请售后',
						money: '128.0',
						caozuo: ''
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待评价',
						money: '128.0',
						caozuo: ''
					}, {
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '已完成',
						money: '128.0',
						caozuo: ''
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
		color: #333333;
		/* color: #0000FF; */
	}

	/* a:hover {
		text-decoration: underline;
	} */
</style>
