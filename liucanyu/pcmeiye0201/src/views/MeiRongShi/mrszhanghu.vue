<template>
	<!-- 账户信息 -->
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
					<h3 style="margin: 18px 0px 30px;">{{zhanghu}}</h3>
				</div>
				<ul class="tab ziti">
					<router-link tag="li" to="/mrszhanghu" class="active">
						账户信息
					</router-link>
					<router-link tag="li" to="/mrsdingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/mrszijin">
						资金信息
					</router-link>
					<router-link tag="li" to="/mrsfuwu">
						服务管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<div class="you-zuo">
						<p><img src="../../assets/u2627.png" style="width: 80px;height: 76px;"></p>
						<p>登录帐号：{{zhanghao}}</p>
						<p>昵称：{{nichen}}</p>
						<p>手机号码：{{phone}}</p>
						<p>联系地址：{{dizhi}}</p>
						<p>服务地址：{{dizhi1}}</p>
						<p>姓名：{{name}}</p>
						<p>身份证号：{{shenfz}}</p>
						<p>所属机构：{{jigou}}</p>
						<p style="padding-bottom: 25px;">简介：{{jianjie}}</p>
					</div>
					<div class="you-you">
						<div class="center">

							<p>银行卡信息</p>

							<p>开户银行：{{yinhang}}</p>

							<p>开户姓名：{{kaihuname}}</p>

							<p>银行账号：{{yhzh}}</p>
						</div>
					</div>
					<div class="you-div ziti">
						<div class="tupain" style="float: left;">
							<div class="tupian1">
								<p>身份证照片</p>
								<img src="../../assets/u4709.png">
							</div>
							<div class="tupian1">
								<p>法人委托书</p>
								<img src="../../assets/u4709.png">
							</div>
						</div>
					</div>
					<div class="you-div ziti" style="border-bottom: 1px solid #E5E5E5;padding-bottom: 15px;">
						<el-button plain size="mini" style="padding: 7px 36px;margin: 25px 0px 0px 0px;float: left;display: inline-block;"
						 @click="click">通过审核</el-button>
						<el-button plain size="mini" style="padding: 7px 36px;margin: 25px 0px 0px 25px;float: left;display: inline-block;"
						 @click="open">审核失败</el-button>
						<p style="float: left;display: inline-block;    margin: 32px 0px 0px 25px;">门店注册提交审核后可执行操作</p>
					</div>
					<div class="you-div ziti">
						<el-button plain size="mini" style="padding: 7px 36px;margin: 25px 0px 0px 0px;float: left;display: inline-block;">禁用账户</el-button>
						<p style="float: left;display: inline-block;    margin: 32px 0px 0px 170px;">审核通过后可执行操作</p>
					</div>
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
		name: 'mrszhanghu',
		components: {
			Header,
			Aside
		},
		parent,
		data() {
			return {
				zhanghu: '13800138000', //账户
				zhanghao: '13800138000', //登录帐号
				nichen: '小苹果', //昵称
				phone: '13800138000', //手机号码
				dizhi: 'XXX省XXX市XXX区XXX街道XXX号', //联系地址
				dizhi1: 'XXX省XXX市XXX区XXX街道XXX号', //服务地址
				name: 'xxx', //姓名
				shenfz: 'xxxxxxxxxxxxxxxxxxxx', //身份证号
				jigou: '所属机构', //所属机构
				jianjie: '', //
				yinhang: 'XXX银行XXX支行', //卡户用户
				kaihuname: '张三丰', //卡户姓名
				yhzh: '6226 1234 5678 1234', //银行账号
			}
		},
		methods: {
			// 返回服务页面
			click: function() {
				this.$router.push('/meirongdian')
			},
			open: function() {
				this.$prompt('请输入审核失败的理由', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '提交理由'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
				// this.$router.push('/fuwu')
			},
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

	.tab {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #e3e3e3;
	}

	.tab::after {
		content: '';
		clear: both;
		display: block;
	}

	.active {
		border-bottom: 2px solid #969b35;
	}

	.tab li {
		float: left;
		padding: 0px 25px 15px 15px;
		margin-right: 20px;
		cursor: pointer;
	}

	.you-zuo,
	.you-you {
		position: relative;
		display: inline-block;
		float: left;
	}

	.you-zuo {
		width: 35%;
	}

	.you-you {
		width: 65%;
	}

	.you-zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-zuo p {
		margin: 25px 0px;
	}

	.center {
		width: 355px;
		margin: 0px auto;
		border: 1px solid #cccccc;
		box-sizing: border-box;
		padding: 15px 15px;
		margin-top: 40px;
	}

	.center p {
		margin-top: 15px;
	}

	.tupain {
		width: 100%;
		position: relative;
	}

	.tupian1 {
		width: 35%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.tupian1 p {
		margin-bottom: 20px;
	}
</style>
