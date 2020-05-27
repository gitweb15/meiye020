<template>
	<!-- 服务设置页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<div class="center">
					<div class="center-head">
						<div class="center-head-zuo">
							<p class="zuo-pp zhiti"><span class="span">项目编号</span><span class="span">项目名称</span></p>
							<el-input v-model="input" size="mini" class="input"></el-input>
							<el-input v-model="input1" size="mini" class="input"></el-input>
							<el-button plain size="mini" style="padding: 7px 36px;" @click="sousuo">搜索</el-button>
						</div>
						<div class="center-head-you">
							<el-button plain class="tianjia" v-on:click="tianjia">+添加项目</el-button>
						</div>
					</div>
					<!-- table表 -->
					<el-table :data="tableData" style="width: 100%;margin-bottom: 305px;">
						<el-table-column prop="date" label="项目编号">
						</el-table-column>
						<el-table-column prop="name" label="项目介绍" width="76">
							　<template slot-scope="scope">
								　　　　<img :src="scope.row.img" width="50" height="50" class="head_pic" />
								　　</template>
						</el-table-column>
						<el-table-column prop="wenzi" label="">
							<template slot-scope="scope" class="jieshao">
								<p class="zhiti">{{scope.row.wenzi1}}</p>
								<p class="jianjie zhiti">{{scope.row.wenzi2}}</p>
							</template>
						</el-table-column>
						<el-table-column prop="time" label="服务时长">
						</el-table-column>
						<el-table-column prop="money" label="服务价格">
						</el-table-column>
						<el-table-column prop="caozuo" label="操作">
							<template slot-scope="scope">
								<router-link class="aa" :to="scope.row.lianjei">查看</router-link>
								<el-button type="text" @click="open" class="aa">上架</el-button>
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
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	export default {
		name: 'fuwu',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				input: '', //项目编号
				input1: '', //项目名称
				tableData: [{
					date: '8888168', //项目编号
					name: '', //项目介绍
					time: '80分钟', //服务时长
					money: '128.0', //服务价格
					wenzi1: '项目名称', //项目名称
					wenzi2: '项目简介，最显示多两行，项目简介，，', //项目简介
					lianjei: '/fuwuxiangqing', //跳转路径
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					lianjei: '/fuwuxiangqing',
					img: '../img/商品.89f30fa9.jpg'
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					lianjei: '/fuwuxiangqing',
					img: '../img/商品.89f30fa9.jpg'
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					lianjei: '/fuwuxiangqing',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg'
				}]
			}
		},
		methods: {
			//跳转到新增项目
			tianjia: function() {
				this.$router.push('/fuwunew')
			},
			//搜索功能
			sousuo() {
				//项目编号
				var bianhao = this.input;
				//项目名称
				var name = this.input1;
				console.log("项目编号:" + bianhao, "项目名称:" + name)

				this.input = null;
				this.input1 = null;
			},
			//点击上架
			open() {
				this.$confirm('是否上架?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '上架成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消上架'
					});
				});
			}
		}
	}
</script>

<style scoped>
	#zhongxin {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		position: relative;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1058px;
		/* height: 715px; */
		position: relative;
		margin: 0px auto;
		background-color: #fff;
	}

	.content:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong {
		display: inline-block;
		float: left;
		margin-top: 5px;
		width: 895px;
		/* height: 710px; */
		position: relative;
		border-left: 1px solid #e4e4e4;
	}

	.neirong:after {
		display: block;
		clear: both;
		content: '';
	}

	.center {
		width: 879px;
		display: inline-block;
		float: right;
		position: relative;
	}

	.center:after {
		display: block;
		clear: both;
		content: '';
	}

	.center-head {
		width: 100%;
		height: 105px;
		position: relative;
	}

	.zhiti {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.input {
		width: 171px;
		margin-right: 35px;
	}

	.center-head-zuo {
		float: left;
		display: inline-block;
		width: 60%;
		height: 100%;
		position: relative;
	}

	.center-head-you {
		float: right;
		display: inline-block;
		width: 40%;
		height: 100%;
		position: relative;
	}

	.zuo-pp {
		width: 100%;
		margin: 30px 0px 8px;
	}

	.span {
		font-size: 15px;
	}

	.span:first-child {
		margin-right: 145px;

	}

	.tianjia {
		padding: 13px 23px;
		background-color: #fbc15e;
		color: #fff;
		float: right;
		margin: 32px 40px 0px 0px;
	}

	.tianjia:hover {
		color: #fff;
		border-color: #fbc15e;
		background-color: #fbc15e;
	}

	.tianjia:active {
		color: #fff;
		border-color: #fbc15e;
	}

	.jieshao {
		width: 75%;
		height: 50px;
		display: inline-block;
		margin-left: 15px;
	}

	.jianjie {
		font-size: 12px;
		color: #999999;
	}

	.aa {
		display: inline-block;
		margin: 0px 40px 0px 0px;
	}

	.aa:first-child {
		color: #0000FF;
		font-size: 13px;
	}

	.aa:first-child:hover {
		text-decoration: underline;
	}

	.el-table__header {
		border-top: 1px solid #E4E4E4;
		border-left: 1px solid #E4E4E4;
		border-right: 1px solid #E4E4E4;
	}

	.el-table_1_column_5 .cell {
		text-align: center;
	}
</style>
