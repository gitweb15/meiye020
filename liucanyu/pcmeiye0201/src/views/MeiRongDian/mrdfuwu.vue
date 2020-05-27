<template>
	<!-- 服务信息 -->
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
					<h3 style="margin: 18px 0px 30px;">{{zhanghu}}</h3>
				</div>
				<ul class="tab ziti">
					<router-link tag="li" to="/mrdzhanghu">
						账户信息
					</router-link>
					<router-link tag="li" to="/mrddingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/mrdziji">
						资金信息
					</router-link>
					<router-link tag="li" to="/mrdfuwu" class="active">
						服务管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<div class="xiadan">
						<el-input v-model="input" placeholder="请输入内容" style="width: 200px;" size="mini"></el-input>
						<el-button style="width: 100px;margin-left: 30px;" @click="sousuo" size="mini">搜索</el-button>
					</div>
					<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
						<el-table-column prop="bianhao" label="项目编号">
						</el-table-column>
						<el-table-column prop="name" label="项目名称">
						</el-table-column>
						<el-table-column prop="fuwu" label="服务方">
						</el-table-column>
						<el-table-column prop="cjtime" label="创建时间">
						</el-table-column>
						<el-table-column prop="zhangtai" label="服务状态">
						</el-table-column>
						<el-table-column prop="money" label="金额">
						</el-table-column>
						<el-table-column prop="caozuo" label="操作">
							<template slot-scope="scope">
								<router-link to="/mrdfuwuxq" class="aa">详情</router-link>
							</template>
						</el-table-column>
					</el-table>
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
		name: 'mrsfuwu',
		components: {
			Header,
			Aside,
		},
		parent,
		data() {
			return {
				zhanghu: 'kang@kzj365.com', //账户
				input: '', //input搜索
				tableData: [{
					bianhao: '项目编号',
					name: '项目名称',
					fuwu: '服务方',
					cjtime: '创建时间',
					zhangtai: '服务状态',
					money: '金额',
				}]
			}
		},
		methods: {
			//搜索
			sousuo() {
				console.log(this.input)
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

	.tab {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #e3e3e3;
	}

	.tab::after {
		content: '';
		clear: both;
		display: block;
	}

	.active {
		border-bottom: 2px solid #969b35;
	}

	.tab li {
		float: left;
		padding: 0px 25px 15px 15px;
		margin-right: 20px;
		cursor: pointer;
	}

	.xiadan {
		margin-top: 25px;
		margin-bottom: 20px;
		font-size: 15px;
	}

	.aa {
		float: left;
		/* color: #333333; */
		color: #0000FF;
	}
</style>
