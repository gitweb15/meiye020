<template>
	<!-- 权限列表 -->
	<div class="content">
		<!-- 头部 -->
		<Header></Header>
		<div class="body">
			<!-- 侧边栏 -->
			<div class="zuo">
				<Aside></Aside>
			</div>
			<div class="you">
				<div class="you-div ziti">
					<p class="title ziti">权限列表</p>
					<div class="table">
						<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
							<el-table-column prop="zhanghao" label="角色账号">
							</el-table-column>
							<el-table-column prop="date" label="开通日期">
							</el-table-column>
							<el-table-column prop="people" label="操作者">
							</el-table-column>
							<el-table-column prop="caozuo" label="操作">
								<template slot-scope="scope">
									<router-link to="/juese" class="aa">详情</router-link>
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
		name: 'liebiao',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				tableData: [{
						zhanghao: '13800138000',
						date: '2014-12-25 17：35：22',
						people: '开通该账号权限的人',
					}, {
						zhanghao: '13800138000',
						date: '2014-12-25 17：35：22',
						people: '开通该账号权限的人',
					},
					{
						zhanghao: '13800138000',
						date: '2014-12-25 17：35：22',
						people: '开通该账号权限的人',
					}
				]
			}
		},
		methods: {

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
		padding-bottom: 150px;
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

	.title {
		width: 99%;
		position: relative;
		margin-top: 32px;
		margin-bottom: 5px;
		float: right
	}

	.table {
		width: 100%;
	}

	.aa {
		color: #0000FF;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
