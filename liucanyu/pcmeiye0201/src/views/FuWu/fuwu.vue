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

					<template>
						<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
							<el-tab-pane label="美体项目" name="first">
								<el-table :data="tableData" style="width: 100%;margin-bottom: 305px;">
									<el-table-column prop="date" label="项目编号">
									</el-table-column>
									<el-table-column prop="name" label="项目介绍" width="76">
										　<template slot-scope="scope">
											　　　　<img src="../../../public/image/商品.jpg" width="50" height="50" class="head_pic" />
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
											<router-link :to="scope.row.lianjei">查看</router-link>
											<el-button type="text" @click="open" class="aa">上架</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
							<el-tab-pane label="美肤项目" name="second">
								<el-table :data="tableData1" style="width: 100%;margin-bottom: 305px;">
									<el-table-column prop="date" label="项目编号">
									</el-table-column>
									<el-table-column prop="name" label="项目介绍" width="76">
										　<template slot-scope="scope">
											　　　　<img src="../../../public/image/商品.jpg" width="50" height="50" class="head_pic" />
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
									<el-table-column prop="shenhe" label="审核状态">
									</el-table-column>
									<el-table-column prop="caozuo" label="操作">
										<template slot-scope="scope">
											<!-- <router-link :to="scope.row.lianjei">查看</router-link> -->
											<el-button type="text" @click="open" class="aa">上架</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
							<el-tab-pane label="染发项目" name="third">
								<el-table :data="tableData2" style="width: 100%;margin-bottom: 305px;">
									<el-table-column prop="date" label="项目编号">
									</el-table-column>
									<el-table-column prop="name" label="项目介绍" width="76">
										　<template slot-scope="scope">
											　　　　<img src="../../../public/image/商品.jpg" width="50" height="50" class="head_pic" />
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
											<router-link :to="scope.row.lianjei">查看</router-link>
											<el-button type="text" @click="open" class="aa">上架</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
							<el-tab-pane label="化妆项目" name="fourth">
								<el-table :data="tableData3" style="width: 100%;margin-bottom: 305px;">
									<el-table-column prop="date" label="项目编号">
									</el-table-column>
									<el-table-column prop="name" label="项目介绍" width="76">
										　<template slot-scope="scope">
											　　　　<img src="../../../public/image/商品.jpg" width="50" height="50" class="head_pic" />
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
									<el-table-column prop="shenhe" label="审核状态">
									</el-table-column>
									<el-table-column prop="caozuo" label="操作">
										<template slot-scope="scope">
											<!-- <router-link :to="scope.row.lianjei">查看</router-link> -->
											<el-button type="text" @click="open" class="aa">上架</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
						</el-tabs>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	let id = 1000;

	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	export default {
		name: 'fuwu',
		components: {
			Header,
			Aside
		},
		parent,
		data() {
			return {
				input: '', //项目编号
				input1: '', //项目名称
				activeName: 'first', //默认
				//美体项目
				tableData: [{
					date: '8888168', //项目编号
					name: '', //项目介绍
					time: '80分钟', //服务时长
					money: '128.0', //服务价格
					wenzi1: '项目名称', //项目名称
					wenzi2: '项目简介，最显示多两行，项目简介，，', //项目简介
					lianjei: '/fuwuXiangQing', //跳转路径
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					lianjei: '/fuwuXiangQing',
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					lianjei: '/fuwuXiangQing',
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					lianjei: '/fuwuXiangQing',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}],
				//美肤项目
				tableData1: [{
					date: '8888168', //项目编号
					name: '', //项目介绍
					time: '80分钟', //服务时长
					money: '128.0', //服务价格
					wenzi1: '项目名称', //项目名称
					wenzi2: '项目简介，最显示多两行，项目简介，，', //项目简介
					// lianjei: '', //跳转路径
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '待审核', //审核状态
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '审核通过', //审核状态
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '审核失败', //审核状态
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '已通过', //审核状态
				}], //染发项目
				tableData2: [{
					date: '8888168', //项目编号
					name: '', //项目介绍
					time: '80分钟', //服务时长
					money: '128.0', //服务价格
					wenzi1: '项目名称', //项目名称
					wenzi2: '项目简介，最显示多两行，项目简介，，', //项目简介
					lianjei: '/fuwuXiangQing', //跳转路径
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					lianjei: '/fuwuXiangQing',
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					lianjei: '/fuwuXiangQing',
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					lianjei: '/fuwuXiangQing',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg' //商品图片
				}],
				//化妆项目
				tableData3: [{
					date: '8888168', //项目编号
					name: '', //项目介绍
					time: '80分钟', //服务时长
					money: '128.0', //服务价格
					wenzi1: '项目名称', //项目名称
					wenzi2: '项目简介，最显示多两行，项目简介，，', //项目简介
					// lianjei: '', //跳转路径
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '待审核', //审核状态
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '审核通过', //审核状态
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '审核失败', //审核状态
				}, {
					date: '8888168',
					name: '',
					time: '80分钟',
					money: '128.0',
					wenzi1: '项目名称',
					wenzi2: '项目简介，最显示多两行，项目简介，，',
					img: '../img/商品.89f30fa9.jpg', //商品图片
					shenhe: '已通过', //审核状态
				}]
			};
		},
		methods: {
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
			//跳转到新增项目
			tianjia: function() {
				this.$router.push('/fuwuNew')
			},
			//选项卡样式
			handleClick(tab, event) {
				console.log(tab, event);
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
		/* padding-bottom: 150px; */
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

	.center-head {
		width: 100%;
		height: 105px;
		position: relative;
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

	/* .el-tabs__item:hover {
	    color: #9933FF;
	    cursor: pointer;
	}
	.el-tabs__item.is-active {
		color: #9933FF;
	} */

	a {
		color: #0079FF;
	}

	.aa {
		margin-left: 15px;
	}
</style>
