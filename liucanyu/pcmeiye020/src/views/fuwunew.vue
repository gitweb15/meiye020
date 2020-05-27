<template>
	<!-- 添加服务项目页面 -->
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
					<p class="biaoti zhiti">
						项目名称
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
						<!-- <p>
							<img src="../assets/u2627.png">
							<span class="tishi zhiti">照片1</span>
						</p>
						<p>
							<img src="../assets/u2627.png">
							<span class="tishi zhiti">照片2</span>
						</p>
						<p>
							<img src="../assets/u2627.png">
							<span class="tishi zhiti">+添加</span>
						</p> -->

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
						<p class="zhiti" style="margin-left: 100px;">备注：提交的服务需要审核后才可以展现给用户</p>
					</div>
					<el-button plain size="mini" style="padding: 7px 36px;margin: 0px 0px 90px 100px;" @click="click">提交审核</el-button>
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
		name: 'fuwunew',
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
				dialogImageUrl: '', //接受图片
				dialogVisible: false //展示图片
			}
		},
		methods: {
			// 返回服务页面
			click: function() {
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

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
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
