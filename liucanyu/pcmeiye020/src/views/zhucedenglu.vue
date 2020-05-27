<template>
	<!-- 注册登录页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header1></Header1>
		<!-- 主体 -->
		<div class="content">
			<div class="content1">
				<div class="content1-zuo">
					<img src="../../public/image/首页.jpg" style="width: 103%;height: 120%;">
					<!-- <span class="wenzi zhiti">
						形象图
					</span> -->
				</div>
				<!-- 登录 -->
				<div class="content1-you">
					<p class="denglu">登录</p>
					<div class="denglukuan">
						<p style="margin-bottom: 8px;">
							<span class="i"><i class="el-icon-s-custom"></i></span>
							<el-input v-model="form.name" style="width: 89%;"></el-input>
						</p>
						<p>
							<span class="i"><i class="el-icon-s-cooperation"></i></span>
							<el-input type="password" v-model="form.pass" autocomplete="off" style="width:89%;"></el-input>
						</p>
					</div>
					<p class="tishi">
						<span style="display: inline-block;float: left;">
							<el-checkbox v-model="checked">记住账号</el-checkbox>
						</span>
						<span style="display: inline-block;float: right;">
							<router-link class="aa zhiti" to="/zhaomima">无法登陆？</router-link>
						</span>
					</p>
					<router-link tag="el-button" to="/shouye/quxian1" class="tianjia">登录</router-link>
				</div>
			</div>
			<!-- 亮点介绍 -->
			<ul class="list">
				<li>
					<img src="../../public/image/shangpin1.png" style="width: 240px;height: 180px;">
					<!-- <span class="wenzi1 zhiti">亮点介绍</span> -->
				</li>
				<li>
					<img src="../../public/image/shangpin3.jpg" style="width: 240px;height: 180px;">
					<!-- <span class="wenzi1 zhiti">亮点介绍</span> -->
				</li>
				<li>
					<img src="../../public/image/商品.jpg" style="width: 240px;height: 180px;">
					<!-- <span class="wenzi1 zhiti">亮点介绍</span> -->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../components/Header1/index.vue';
	export default {
		name: 'zhucedenglu',
		components: {
			Header1
		},
		data() {
			return {
				form: {
					name: '',//用户名
					pass: ''//密码
				},
				checked: false,//判断复选框
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
		width: 968px;
		height: 715px;
		position: relative;
		margin: 0px auto;
		/* background-color: #D0EDED; */
	}

	.content1 {
		width: 100%;
		position: relative;
		height: 258px;
	}

	.content1-zuo {
		width: 577px;
		height: 100%;
		position: relative;
		float: left;
		background-color: #fff;
		overflow: hidden;
	}

	.content1-you {
		width: 368px;
		height: 100%;
		position: relative;
		float: right;
		background-color: #fff;
		box-sizing: border-box;
		padding: 18px 29px 0px 29px;
	}

	.wenzi {
		position: absolute;
		top: 121px;
		left: 271px;
		background-color: #fff;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.denglu {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 20px;
		text-align: left;
		color: #333;
		margin-bottom: 18px;
	}

	.denglukuan {
		width: 100%;
		height: 78px;
		/* border: 1px solid #E4E4E4; */
	}

	.denglukuan p {
		width: 100%;
		height: 50%;
	}

	.denglukuan p:first-child {
		/* border-bottom: 1px solid #E4E4E4; */
	}

	.i {
		display: inline-block;
		width: 11%;
		height: 83%;
		float: left;
	}

	i {
		margin: 8px 4px;
		font-size: 24px;
	}

	el-input {
		display: inline-block;
	}

	.tishi {
		padding: 16px 0px 22px;
	}

	.aa {
		color: rgb(0, 0, 255);
	}

	.aa:hover {
		text-decoration: underline;
	}

	.tianjia {
		padding: 10px 60px;
		background-color: #fbc15e;
		/* color: #000; */
		color: #fff;
		float: left;
		margin-top: 18px;
	}

	.tianjia:hover {
		/* color: #000; */
		color: #fff;
		border-color: #fbc15e;
		background-color: #fbc15e;
	}

	.tianjia:active {
		/* color: #000; */
		color: #fff;
		border-color: #fbc15e;
	}

	.list {
		margin-top: 80px;
		width: 100%;
		position: relative;
	}

	.list li {
		float: left;
		position: relative;
	}

	.list li:nth-of-type(2) {
		margin: 0px 124px;
	}

	.wenzi1 {
		position: absolute;
		top: 81px;
		left: 94px;
		background-color: #fff;
	}
</style>
