<template>
	<!-- 首页 -->
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
					<p class="title ziti"><strong>意见反馈</strong></p>
					<div class="table">
						<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
							<el-table-column prop="zhanghao" label="反馈者账号">
							</el-table-column>
							<el-table-column prop="date" label="反馈时间">
							</el-table-column>
							<el-table-column prop="neirong" label="反馈内容" width="680px">
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
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	export default {
		name: 'yijianfankui',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				tableData: [{
						zhanghao: '1380013800',
						date: '2014-12-15 17：35',
						neirong: '这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，',
					},
					{
						zhanghao: '1380013800',
						date: '2014-12-15 17：35',
						neirong: '这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，',
					},
					{
						zhanghao: '游客',
						date: '2014-12-15 17：35',
						neirong: '这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，这里是反馈内容，',
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
		width: 95%;
		position: relative;
		margin: 0px auto;
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
</style>
