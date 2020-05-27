<template>
	<!-- 注册页面1 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header1></Header1>
		<!-- 主体 -->
		<div class="content">
			<div class="header">
				<div class="header1">
					<img src="../../assets/u3008.png" class="img">
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
					<img src="../../assets/u3006.png" class="img">
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
			<!-- 注册 -->
			<div class="zhongjian">
				<div class="zhongjian-zuo">
					<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="登录邮箱" prop="text">
							<el-input type="text" v-model="ruleForm.text" autocomplete="off" size="small"></el-input>
						</el-form-item>
						<el-form-item label="登录密码" prop="pass">
							<el-input type="password" v-model="ruleForm.pass" autocomplete="off" size="small"></el-input>
						</el-form-item>
						<el-form-item label="确认密码" prop="checkPass">
							<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" size="small"></el-input>
						</el-form-item>
						<el-form-item label="确认密码" prop="age">
							<el-input v-model.number="ruleForm.age" style="width: 150px;" size="small"></el-input>
							<img src="../../assets/u3000.jpg" class="tu" />
							<a class="zhiti" style="color: #0033FF;">换一张</a>
						</el-form-item>
						<el-form-item>
							<el-checkbox v-model="checked">我同意并遵守</el-checkbox><span class="zhiti">《<a class="zhiti" style="color: #0033FF;">来美美吧注册协议</a>》</span>
						</el-form-item>
						<el-form-item>
							<el-button class="anniu" type="primary" @click="submitForm('ruleForm')">提交注册</el-button>
						</el-form-item>
					</el-form>
				</div>
				<!-- 登录 -->
				<div class="zhongjian-you">
					<span class="zhiti">
						已有账号？
						<router-link class="zhiti" style="color: #0033FF;" to="/">立即登录</router-link>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'zhuce',
		components: {
			Header1
		},
		data() {
			// rule:规则, value:值, callback:回调
			var text1 = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('邮箱不能为空'));
				}
			};

			var checkAge = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('密码不能为空'));
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				checked: true,//复选框的判断
				ruleForm: {
					text: '',//登录邮箱
					pass: '',//登录密码
					checkPass: '',//确认密码
					age: '',//输入验证码
				},
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					age: [{
						validator: checkAge,
						trigger: 'blur'
					}],
					text: [{
						validator: text1,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			// 点击跳转到下一注册页面
			submitForm(formName) {
				//一定要选择复选框
				if (this.checked == false) {
					alert('！！！')
				} else {
					this.$refs[formName].validate((valid) => {
						if (valid) {
							alert('submit!');

							//未配对
							this.$router.push('/zhuce1');
						} else {
							//未配对
							this.$router.push('/zhuce1');

							console.log('error submit!!');
							return false;
						}
					});
				}
			},
			// resetForm(formName) {
			// 	this.$refs[formName].resetFields();
			// }
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
		height: 566px;
		position: relative;
		margin: 0px auto;
		background-color: #fff;
		border-left: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		overflow: hidden;
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
		width: 100%;
		margin: 10px 0px;
		height: 496px;
	}

	.zhongjian-zuo {
		width: 52%;
		display: inline-block;
		float: left;
		height: 100%;
		box-sizing: border-box;
		padding: 43px 110px 0px 0px;
	}

	.zhongjian-you {
		border-left: 1px solid #E4E4E4;
		display: inline-block;
		float: left;
		width: 47.5%;
		height: 100%;
		box-sizing: border-box;
		padding: 48px 0px 0px 106px;
	}

	.tu {
		vertical-align: middle;
		width: 70px;
		height: 25px;
		display: inline-block;
		margin: 0px 10px;
	}

	.anniu {
		padding: 5px 30px;
		background-color: #fff;
		color: #333;
		/* border: 1px solid #333; */
		/* border-radius: 0px; */
	}
</style>
