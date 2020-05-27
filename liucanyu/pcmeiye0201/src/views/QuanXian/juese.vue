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
					<div class="one ziti">
						<span class="zhanghao">{{zhanghao}}</span>
						<el-button size="mini" class="anniu">添加角色</el-button>
					</div>
					<div class="two ziti">
						<div class="two-zuo">
							<p class="title">所有权限</p>
							<p style="margin-bottom: 15px;height: 28px;">
								<el-input v-model="input" size="mini" style="width: 200px;"></el-input>
								<span style="margin-left: 15px;">双击权限名称可加入已选权限</span>
							</p>
							<div style="width: 200px;border-right: 1px solid #e4e4e4;">
								<el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode"
								 ref="tree">
								</el-tree>
							</div>
						</div>
						<div class="two-you">
							<p class="title">已选择权限</p>
							<p style="margin-bottom: 15px;height: 28px;"><span style="margin-left: 165px;">查看权限</span><span style="margin-left: 15px;">编辑权限</span></p>
							<div style="">
								<el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false">
									<span class="custom-tree-node" slot-scope="{ node, data }">
										<span style="width: 150px;display: inline-block;">{{ node.label }}</span>
										<span v-if="node.label=='一级权限'"></span>
										<span v-else>
											<el-checkbox v-model="data.checked"></el-checkbox>
											<el-checkbox style="margin-left: 25px;" v-model="data.checked1"></el-checkbox>
											<el-button style="margin-left: 35px;" type="text" size="mini" @click="() => remove(node, data)">
												×
											</el-button>
										</span>
									</span>
								</el-tree>
							</div>
						</div>
					</div>
					<el-button size="mini" class="anniu1" @click="baocun">保存</el-button>
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
		name: 'juese',
		components: {
			Header,
			Aside
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},
		data() {
			return {
				zhanghao: '13800138000', //账号
				input: '', //输入
				//管理权限
				data: [{
					id: 1,
					label: '一级权限',
					children: [{
							id: 4,
							label: '二级权限',
							checked: false,
							checked1: false,
						},
						{
							id: 5,
							label: '二级权限',
							checked: false,
							checked1: false,
						}, {
							id: 6,
							label: '二级权限',
							checked: false,
							checked1: false,
						}
					]
				}, {
					id: 2,
					label: '一级权限',
					children: [{
							id: 7,
							label: '二级权限',
							checked: false,
							checked1: false,
						},
						{
							id: 8,
							label: '二级权限',
							checked: false,
							checked1: false,
						}, {
							id: 9,
							label: '二级权限',
							checked: false,
							checked1: false,
						}
					]
				}, {
					id: 3,
					label: '一级权限',
					children: [{
							id: 10,
							label: '二级权限',
							checked: false,
							checked1: false,
						},
						{
							id: 11,
							label: '二级权限',
							checked: false,
							checked1: false,
						}, {
							id: 12,
							label: '二级权限',
							checked: false,
							checked1: false,
						}
					]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
			};
		},
		methods: {
			//组件tree树状控件
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			},
			//移除控件
			remove(node, data) {
				const parent = node.parent;
				const children = parent.data.children || parent.data;
				const index = children.findIndex(d => d.id === data.id);
				children.splice(index, 1);
			},
			//保存
			baocun(){
				console.log(this.data)
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

	.one {
		width: 100%;
		height: 85px;
		position: relative;
	}

	.zhanghao {
		display: inline-block;
		line-height: 85px;
		float: left;
	}

	.anniu {
		float: right;
		margin-right: 130px;
		margin-top: 30px;
		width: 80px;
	}
	
	.anniu1{
		float: left;
		margin-right: 130px;
		margin-top: 30px;
		width: 80px;
	}

	.two {
		width: 100%;
		position: relative;
	}

	.two::after {
		content: '';
		clear: both;
		display: block;
	}

	.two-zuo,
	.two-you {
		width: 50%;
		float: left;
		position: relative;
	}

	.two-zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.two-you::after {
		content: '';
		clear: both;
		display: block;
	}

	.title {
		width: 100%;
		position: relative;
		margin-bottom: 20px;
		font-weight: 700;
	}
</style>
