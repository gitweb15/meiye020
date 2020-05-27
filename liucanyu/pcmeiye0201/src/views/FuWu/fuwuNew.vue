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
					<p class="biaoti zhiti">
						项目名称
					</p>
					<p class="neirong1">
						<span class="neirong1-span zhiti">选择服务类型</span>
						<el-radio-group v-model="radio">
							<el-radio :label="1">美肤</el-radio>
							<el-radio :label="2">美体</el-radio>
							<el-radio :label="3">化妆</el-radio>
							<el-radio :label="4">染发</el-radio>
						</el-radio-group>
					</p>
					<p class="neirong1"><span class="neirong1-span zhiti">项目名称</span><span class="neirong1-span zhiti">
							<el-input v-model="input" size="mini"></el-input>
						</span></p>
					<p class="neirong1"><span class="neirong1-span zhiti">副标题</span><span class="neirong1-span zhiti">
							<el-input v-model="input1" size="mini"></el-input>
						</span></p>
					<p class="neirong1"><span class="neirong1-span zhiti">服务价格</span><span class="neirong1-span zhiti">
							<el-input v-model="input2" size="mini"></el-input>
						</span></p>
					<p class="neirong1"><span class="neirong1-span zhiti">服务时长</span><span class="neirong1-span zhiti">
							<el-input v-model="input3" size="mini"></el-input>
						</span></p>
					<p class="neirong1"><span class="neirong1-span zhiti">商品主图</span><span class="neirong1-span zhiti">请上传1-5张商品主图</span></p>
					<div class="img">
						<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
						 :on-remove="handleRemove">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</div>
					<div class="jianjie" style="margin-bottom: 20px;">
						<span class="zhiti" style="display: inline-block;position: relative;top: -204px;">服务简介</span>
						<el-input type="textarea" :rows="10" v-model="textarea" class="textarea">
						</el-input>
					</div>
					<el-button plain size="mini" style="padding: 7px 36px;margin: 0px 0px 90px 100px;" @click="click">保存</el-button>
					<el-button plain size="mini" style="padding: 7px 36px;margin: 0px 0px 90px 25px;" @click="click1">保存并发布</el-button>
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
		name: 'fuwuNew',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				textarea: '', //服务简介
				input: '', //项目名称
				input1: '', //副标题
				input2: '', //服务价格
				input3: '', //服务时长
				dialogImageUrl: '', //接受图片地址
				dialogVisible: false, //展示图片
				radio: 1, //选择服务类型
			};
		},
		methods: {
			// 返回服务页面
			click: function() {
				var radio = this.radio; //radio
				var input = this.input; //项目名称
				var input1 = this.input1; //副标题
				var input2 = this.input2; //服务价格
				var input3 = this.input3; //服务时长
				var dialogImageUrl = this.dialogImageUrl; //接受图片
				var textarea = this.textarea; //服务简介
				console.log("服务类型" + radio, "项目名称" + input, "副标题" + input1, "服务价格" + input2, "服务时长" + input3, "服务简介" + textarea)
				// this.$router.push('/fuwu')
			},
			click1: function() {
				this.$router.push('/fuwu')
			},

			//element框架上传图片
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
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

	.biaoti {
		margin: 35px 0px 40px;
		font-size: 18px;
	}

	.neirong1 {
		margin-bottom: 30px;
	}

	.neirong1-span {
		display: inline-block;
		font-size: 14px;
	}

	.neirong1-span:first-child {
		width: 100px;
	}

	.img {
		margin-bottom: 30px;
		position: relative;
		margin-left: 116px;
	}

	.img p {
		position: relative;
		display: inline-block;
		margin-right: 33px;
		cursor: pointer;
	}

	.tishi {
		position: absolute;
		display: inline-block;
		width: 40px;
		top: 40px;
		left: 40px;
		background-color: #fff;
	}

	.textarea {
		width: 400px;
		margin-left: 45px;
		margin-bottom: 20px;
	}
</style>
