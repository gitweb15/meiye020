<template>
	<!-- 我的-认证信息 -->
	<div id="conten">
		<!-- 头部 -->
		<Header1 title="个人资料"></Header1>
		<div class="conten">
			<p class="biaoti zhiti">认证之后，可以为用户提供服务</p>
			<div class="neirong">
				<div class="neirong1">
					<div class="one zhiti">
						<span style="display: inline-block;float: left;margin-top: 24px;">头像</span>
						<span style="display: inline-block;float: right;margin: 5px 10px;border: 1px solid #D8D8D8;">
							<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
							 :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
						</span>
					</div>
					<div class="one">
						<!-- <span class="title">姓名</span>
						<input type="text" v-model="name" /> -->
						<van-field v-model="name" type="tel" label="姓名" placeholder="请输入姓名" />
					</div>
					<div class="one">
						<!-- <span class="title">身份证号</span> -->
						<van-field v-model="digit" type="tel" label="身份证号" placeholder="请输入身份证号" />
					</div>
					<div class="one">
						<p class="zhengjian">证件照片</p>
						<div class="shangchuan">
							<span class="span">
								<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
								 :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload1">
									<img v-if="imageUrl1" :src="imageUrl1" class="avatar1">
									<!-- <i v-else class="el-icon-plus avatar-uploader-icon1"></i> -->
									<span class="zhiti avatar-uploader-icon1" v-show="show1">正面</span>
								</el-upload>
							</span>
							<span class="span">
								<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
								 :on-success="handleAvatarSuccess2" :before-upload="beforeAvatarUpload2">
									<img v-if="imageUrl2" :src="imageUrl2" class="avatar1">
									<!-- <i v-else class="el-icon-plus avatar-uploader-icon1"></i> -->
									<span class="zhiti avatar-uploader-icon1" v-show="show2">反面</span>
								</el-upload>
							</span>
						</div>
					</div>
					<div class="one">
						<!-- <span class="title">所属机构</span> -->
						<van-field v-model="jigou" type="tel" label="所属机构" placeholder="请输入所属机构" />
					</div>
					<div class="one">
						<!-- <span class="title" style="padding-bottom: 50px;">简介</span> -->
						<van-field v-model="message" rows="3" autosize label="简介" type="textarea" placeholder="请输入简介" />
					</div>
					<div class="one">
						<p class="zhengjian">证件照片</p>
						<div class="shangchuan">
							<span class="span">
								<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
								 :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload1">
									<img v-if="imageUrl1" :src="imageUrl1" class="avatar1">
									<!-- <i v-else class="el-icon-plus avatar-uploader-icon1"></i> -->
									<span class="zhiti avatar-uploader-icon1" v-show="show1">正面</span>
								</el-upload>
							</span>
						</div>
					</div>
					<div class="one">
						<p class="zhengjian">证件照片</p>
						<div class="shangchuan">
							<span class="span">
								<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
								 :on-success="handleAvatarSuccess2" :before-upload="beforeAvatarUpload2">
									<img v-if="imageUrl2" :src="imageUrl2" class="avatar1">
									<!-- <i v-else class="el-icon-plus avatar-uploader-icon1"></i> -->
									<span class="zhiti avatar-uploader-icon1" v-show="show2">反面</span>
								</el-upload>
							</span>
						</div>
					</div>
				</div>
			</div>
			<van-button type="primary" size="large" class="anniu" url="/wode">提交审核</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'renzheng',
		components: {
			Header1
		},
		data() {
			return {
				imageUrl: '', //头像
				imageUrl1: '', //证件照片正面
				imageUrl2: '', //证件照片反面
				show1: true, //显示文字
				show2: true,
				name: '', //姓名
				digit: '', //身份证号
				jigou: '', //所属机构
				message: '', //简介
			};
		},
		methods: {
			//上传图片
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}

				return isJPG && isLt2M;
			},


			handleAvatarSuccess1(res, file) {
				this.imageUrl1 = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload1(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
					this.show1 = !this.show1;
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
					this.show1 = !this.show1;
				}
				this.show1 = !this.show1;
				return isJPG && isLt2M;
			},


			handleAvatarSuccess2(res, file) {
				this.imageUrl2 = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload2(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
					this.show2 = !this.show2;
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
					this.show2 = !this.show2;
				}
				this.show2 = !this.show2;
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style scoped>
	.conten {
		position: relative;
		width: 100%;
		background-color: rgba(229, 229, 229, 1);
		padding-bottom: 50px;
	}

	.conten::after {
		content: '';
		display: block;
		clear: both;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #333333;
	}

	.anniu {
		background-color: #fff;
		color: #333333;
		border: 1px solid #fff;
	}

	.biaoti {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		padding: 10px 8px;
	}

	.neirong {
		width: 100%;
		position: relative;
		background-color: #FFFFFF;
		margin-bottom: 30px;
		padding-bottom: 30px;
	}

	.neirong::after {
		content: '';
		display: block;
		clear: both;
	}

	.neirong1 {
		float: right;
		width: 95%;
	}

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
	}

	.avatar {
		width: 50px;
		height: 50px;
		display: block;
	}

	.avatar-uploader-icon1 {
		font-size: 14px;
		color: #8c939d;
		width: 100px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		display: inline-block;
	}

	.avatar1 {
		width: 100px;
		height: 60px;
		display: block;
	}

	.one {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #E5E5E5;
	}

	.one:last-child {
		border-bottom: 1px solid #fff;
	}

	.one::after {
		content: '';
		display: block;
		clear: both;
	}

	.tupian {
		width: 100px;
		height: 60px;
		display: inline-block;
	}

	.shangchuan {
		float: left;
		padding-bottom: 10px;
	}

	.zhengjian {
		float: left;
		margin: 10px 0px;
		width: 100%;
	}

	.span {
		display: inline-block;
		float: left;
		margin: 5px 10px;
		border: 1px solid #D8D8D8;
	}

	.title {
		display: inline-block;
		float: left;
		margin: 10px 0px;
	}

	.van-cell {
		box-sizing: content-box;
		padding: 0.625rem 0rem;
	}
</style>
