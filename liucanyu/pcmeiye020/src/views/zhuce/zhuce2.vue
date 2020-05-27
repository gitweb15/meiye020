<template>
	<!-- 注册页面3 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header1></Header1>
		<!-- 主体 -->
		<div class="content">
			<div class="header">
				<div class="header1">
					<img src="../../assets/u3006.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">1.帐号信息</span></p>
					</div>
				</div>
				<div class="header2">
					<img src="../../assets/u3006.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">2.注册成功</span></p>
					</div>
				</div>
				<div class="header3">
					<img src="../../assets/u3008.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">3.基本信息</span></p>
					</div>
				</div>
				<div class="header4">
					<img src="../../assets/u3006.png" class="img">
					<div id="u3008_text" class="text ">
						<p style="margin: 15px 0px;"><span style="display: block;text-align: center;" class="zhiti">4.审核</span></p>
					</div>
				</div>
			</div>
			<!-- 填写注册信息 -->
			<div class="zhongjian">
				<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
					<el-form-item label="门店名称" size="mini">
						<el-input v-model="formLabelAlign.name"></el-input>
					</el-form-item>
					<el-form-item label="门店地址" size="mini">
						<el-input v-model="formLabelAlign.region"></el-input>
					</el-form-item>
					<el-form-item label="门店坐标" size="mini">
						<el-button size="mini" style="margin-right: 20px;">选择标记</el-button>
						<el-input v-model="formLabelAlign.type" style="width: 339px;" placeholder="显示经纬度"></el-input>
					</el-form-item>
					<el-form-item label="固定电话" size="mini">
						<el-input v-model="formLabelAlign.phone"></el-input>
					</el-form-item>
					<el-form-item label="营业执照扫描件" size="mini">
						<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
						 :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
							<el-button size="small" type="primary">点击上传</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>
					</el-form-item>
					<el-form-item label="法人委托书" size="mini">
						<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
						 :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
							<el-button size="small" type="primary">点击上传</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>
						<a class="zhiti" style="color: #0033CC;">点击下载模板</a>
					</el-form-item>
					<el-form-item label="" size="mini">
						<p class="zhiti" style="color: #666666;">所有照片须加盖公章，清晰可见；<br>照片内容真实有效，不得做任何修改；<br>支持jpg，bmg，gif格式照片，大小不超过2M</p>
					</el-form-item>
					<el-form-item label="门店运营者姓名" size="mini">
						<el-input v-model="formLabelAlign.yunying"></el-input>
					</el-form-item>
					<el-form-item label="运营者手机号码" size="mini">
						<el-input v-model="formLabelAlign.haoma"></el-input>
					</el-form-item>
					<el-button class="anniu" @click="click">提交审核</el-button>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'zhuce2',
		components: {
			Header1
		},
		data() {
			return {
				labelPosition: 'left', //文字向左对齐
				formLabelAlign: {
					name: '', //门店名称
					region: '', //门店地址
					type: '', //门店坐标
					phone: '', //固定电话
					yunying: '', //门店运营者姓名
					haoma: '', //运营者手机号码
				},
				fileList: [], //接受图片文件，营业执照扫描件-，法人委托书共有一个
			};
		},
		methods: {
			//跳转到下一注册页面
			click: function() {
				this.$router.push('/zhuce3')
			},

			//营业执照扫描件-，法人委托书共有一个->element框架上传
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
			},
		}
	}
</script>

<style scoped>
	#zhongxin {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		position: relative;
		padding-bottom: 300px;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1024px;
		height: 100%;
		position: relative;
		margin: 0px auto;
		background-color: #fff;
		border-left: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		overflow: hidden;
		padding-bottom: 50px;
	}

	.content:after {
		display: block;
		clear: both;
		content: '';
	}

	.header {
		width: 100%;
		height: 50px;
		position: relative;
		/* border-bottom: 1px solid #E4E4E4; */
	}

	.header1 {
		display: inline-block;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 272px;
		height: 50px;
		z-index: 10;
	}

	.header2 {
		display: inline-block;
		position: absolute;
		left: 252px;
		top: 0px;
		width: 272px;
		height: 50px;
		z-index: 8;
	}

	.header3 {
		display: inline-block;
		position: absolute;
		right: 244px;
		top: 0px;
		width: 272px;
		height: 50px;
		z-index: 6;
	}

	.header4 {
		display: inline-block;
		position: absolute;
		right: -16px;
		top: 0px;
		width: 276px;
		height: 50px;
		z-index: 4;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.img {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 50px;
	}

	.text {
		position: absolute;
		align-self: center;
		padding: 2px 2px 2px 2px;
		box-sizing: border-box;
		width: 100%;
	}

	.zhongjian {
		position: relative;
		box-sizing: border-box;
		padding: 50px 455px 0px 50px;
	}

	.el-form-item el-form-item--mini.el-form-item__label {
		width: 120px;
	}

	.el-form-item__content {
		margin-left: 120px;
	}

	.anniu {
		padding: 5px 30px;
		background-color: #fff;
		color: #333;
		/* border: 1px solid #333;
		border-radius: 0px; */
		margin-top: 10px;
		margin-left: 75px;
	}
</style>
