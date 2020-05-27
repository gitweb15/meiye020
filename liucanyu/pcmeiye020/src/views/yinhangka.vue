<template>
	<!-- 资金管理-银行卡页面 -->
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
					<p class="biaoti zhiti">您尚未绑定银行卡，请先绑定银行卡，融资款项会打到该银行卡</p>
					<p class="xinxi zhiti"><span class="wenzi">商户银行信息</span><span class="input"></span></p>
					<p class="xinxi zhiti"><span class="wenzi">银行账户所有人</span><span class="input">
							<el-input v-model="input" size="mini" style="width: 318px;"></el-input>
						</span></p>
					<p class="xinxi zhiti"><span class="wenzi">开户银行</span><span class="input">
							<el-input v-model="input1" size="mini" style="width: 318px;"></el-input>
						</span></p>
					<p class="xinxi zhiti"><span class="wenzi">开户银行省市信息</span><span class="input">
							<el-input v-model="input2" size="mini" style="width: 318px;"></el-input>
						</span></p>
					<p class="xinxi zhiti"><span class="wenzi">开户银行详细名称</span><span class="input">
							<el-input v-model="input3" size="mini" style="width: 318px;"></el-input>
						</span></p>
					<p class="xinxi zhiti"><span class="wenzi">银行账号</span><span class="input">
							<el-input v-model="input4" size="mini" style="width: 318px;"></el-input>
						</span>
					</p>
					<p class="xinxi zhiti"><span class="wenzi">开户名称</span><span class="input">
							<el-input v-model="input5" size="mini" style="width: 318px;"></el-input>
						</span></p>
					<p class="xinxi zhiti"><span class="wenzi">账号证明函</span><span class="input">
							<!-- <el-button plain size="mini" style="padding: 7px 36px;">上传</el-button> -->
							<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
							 :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
							 :file-list="fileList">
								<el-button size="small" type="primary">上传</el-button>
							</el-upload>
						</span>
						<span style="color: rgb(0, 0, 255); margin-left: 20px;cursor: pointer;display: block;margin: 10px 0px 0px 140px;">点击下载证明模版</span></p>
					<p class="xinxi zhiti"><span class="wenzi"></span><span class="input">
							<img src="../assets/u2787.png"></span></p>
					<p class="xinxi zhiti"><span class="wenzi"></span><span class="input">
							<router-link tag="el-button" plain size="mini" style="padding: 7px 24px;" to="/zijin">提交绑定</router-link>
						</span></p>
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
		name: 'yinhangka',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				input: '对公账户', //银行账户所有人
				input1: '工商银行', //开户银行
				input2: '广东省广州市', //开户银行省市信息
				input3: '中国工商银行广州汇侨新城支行', //开户银行详细名称
				input4: '444444444444444444', //银行账号
				input5: '来美美吧有限公司', //开户名称
				fileList: [] //上传文件
			};
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${ file.name }？`);
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
		margin-bottom: 265px;
	}

	.center:after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		letter-spacing: normal;
		color: #333333;
	}

	.biaoti {
		margin: 32px 0px 25px;
	}

	.xinxi {
		margin-bottom: 25px;
	}

	.wenzi {
		display: inline-block;
		width: 140px;
	}

	.input {
		display: inline-block;
	}
</style>
