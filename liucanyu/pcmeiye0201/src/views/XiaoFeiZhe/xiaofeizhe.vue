<template>
	<!-- 消费者 -->
	<div class="content">
		<!-- 头部 -->
		<Header></Header>
		<div class="body">
			<!-- 侧边栏 -->
			<div class="zuo">
				<Aside></Aside>
			</div>
			<div class="you">
				<div style="margin-top: 25px;">
					<div class="xiaji">
						<div class="one ziti">
							<div class="one-div">
								<p style="margin-bottom: 10px;">注册账号</p>
								<el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
							</div>
							<div class="one-div" style="width: 35%;">
								<p style="margin-bottom: 10px;">注册时间</p>
								<el-date-picker size="mini" v-model="value2" type="daterange" align="right" unlink-panels range-separator="至"
								 start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
								</el-date-picker>
							</div>
							<div class="one-div">
								<el-button size="mini" style="padding: 7px 37px;position:relative;bottom: -29px;">搜索</el-button>
							</div>
						</div>
					</div>
					<div class="xiaji">
						<el-table :data="tableData" style="width: 100%;font-size: 10px;">
							<el-table-column prop="zhanghao" label="注册账号">
							</el-table-column>
							<el-table-column prop="time" label="注册时间">
							</el-table-column>
							<el-table-column prop="denglu" label="上次登录时间">
							</el-table-column>
							<el-table-column prop="zhuagtai" label="状态">
							</el-table-column>
							<el-table-column prop="caozuo" label="操作">
								<template slot-scope="scope">
									<router-link to="/xfzzhanghu" class="aa">查看</router-link>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	export default {
		name: 'xiaofeizhe',
		components: {
			Header,
			Aside
		},
		parent,
		data() {
			return {
				//选择时间
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value1: '',
				value2: '',
				input:'',
				//table表
				tableData: [{
						zhanghao: '13800138000',
						time: '2014-15-2-25   17:25',
						denglu: '2014-15-2-25   17:25',
						zhuagtai: '待审核'
					},
					{
						zhanghao: '13800138000',
						time: '2014-15-2-25   17:25',
						denglu: '2014-15-2-25   17:25',
						zhuagtai: '待审核'
					},
					{
						zhanghao: '13800138000',
						time: '2014-15-2-25   17:25',
						denglu: '2014-15-2-25   17:25',
						zhuagtai: '待审核'
					},
					{
						zhanghao: '13800138000',
						time: '2014-15-2-25   17:25',
						denglu: '2014-15-2-25   17:25',
						zhuagtai: '待审核'
					}
				]
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}

	};
</script>

<style scoped>
	.content {
		width: 100%;
		position: relative;
		background-color: #f2f2f2;
	}

	.content::after {
		content: '';
		clear: both;
		display: block;
	}

	.body {
		width: 90%;
		position: relative;
		background-color: #fff;
		margin: 0px auto;
	}

	.body::after {
		content: '';
		clear: both;
		display: block;
	}

	.ziti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 15px;
		color: #333333;
	}

	.zuo {
		width: 17%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you {
		width: 82.5%;
		position: relative;
		display: inline-block;
		float: left;
		border-left: solid 1px #e6e6e6;
		padding-bottom: 250px;
	}

	.you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-div {
		width: 98%;
		position: relative;
		float: right;
	}

	.you-div::after {
		content: '';
		clear: both;
		display: block;
	}

	.xiaji {
		width: 98%;
		float: right;
		position: relative;
	}

	.one {
		width: 100%;
		position: relative;
	}

	.one::after {
		content: '';
		clear: both;
		display: block;
	}

	.one-div {
		width: 23%;
		position: relative;
		float: left;
		margin-right: 30px;
	}

	.aa {
		color: #0074D9;
	}
</style>
