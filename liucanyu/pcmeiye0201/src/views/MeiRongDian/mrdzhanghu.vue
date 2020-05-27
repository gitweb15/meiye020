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
					<router-link tag="li" to="/mrdzhanghu" class="active">
						账户信息
					</router-link>
					<router-link tag="li" to="/mrddingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/mrdziji">
						资金信息
					</router-link>
					<router-link tag="li" to="/mrdfuwu">
						服务管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<div class="you-zuo">
						<p style="margin-top: 50px;">登录帐号：{{zhanghu}}</p>
						<p>门店名称：{{mendian}}</p>
						<p>门店地址：{{dizhi}}</p>
						<p>固定电话：{{phone}}</p>
						<p>门店运营者姓名：{{name}}</p>
						<p>门店运营者电话：{{phone1}}</p>
					</div>
					<div class="you-you">
						<div class="center">
							<p>银行卡信息</p>
							<p>银行账户所有人：{{suoyouren}}</p>
							<p>开户银行：{{yinghang}}</p>
							<p>开户地区：{{diqu}}</p>
							<p>开户支行：{{zhihang}}</p>
							<p>银行账号：{{yhzhanghao}}</p>
							<p>开户名称：{{kaihuname}}</p>
						</div>
					</div>
					<div class="you-div ziti">
						<div class="tupain" style="float: left;">
							<div class="tupian1">
								<p>营业执照扫描件</p>
								<img src="../../assets/u4709.png">
							</div>
							<div class="tupian1">
								<p>法人委托书</p>
								<img src="../../assets/u4709.png">
							</div>
						</div>
					</div>
					<div class="you-div ziti">
						<div class="tupian1">
							<p>法人委托书</p>
							<img src="../../assets/u4709.png">
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
		name: 'mrdzhanghu',
		components: {
			Header,
			Aside
		},
		parent,
		data() {
			return {
				zhanghu: 'kang@kzj365.com', //登录帐号
				mendian: '门店名称', //门店名称
				dizhi: 'XXX省XXX市XXX区XXX街道XXX号', //门店地址
				phone: '020-1234578', //固定电话
				name: 'XXX', //门店运营者姓名
				phone1: '13800138000', //门店运营者电话
				suoyouren: '对公帐户', //银行账户所有人
				yinghang: '工商银行', //开户银行
				diqu: '广东省广州市', //开户地区
				zhihang: 'XXX支行', //
				yhzhanghao: '6226 1234 1232 1234', //
				kaihuname: '来美美吧有限公司', //
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
