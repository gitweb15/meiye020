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
					<router-link tag="li" to="/xfzzhanghu" class="active">
						账户信息
					</router-link>
					<router-link tag="li" to="/xfzdingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/xfzziji">
						资金信息
					</router-link>
					<router-link tag="li" to="/xfzkaquan">
						卡卷管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<p class="xinxi">注册账号：{{zhanghu}}</p>
					<p class="xinxi">注册时间：{{time}}</p>
					<p class="xinxi">上次登录：{{time1}}</p>
					<p class="xinxi">地址信息</p>
					<p class="xinxi">{{dizhi}}</p>
					<p class="xinxi">{{dizhi1}}</p>
					<p class="xinxi">{{dizhi2}}</p>
					<div class="xinxi">
						<el-checkbox v-model="checked">禁用账户</el-checkbox>
						<p style="display: inline-block;color: red;margin-left: 50px;">注：禁用账户后，该用户将无法登录，请谨慎操作</p>
					</div>
					<el-button plain size="mini" class="xinxi" style="padding: 7px 36px;margin: 0px 0px 90px 0px;" @click="click">保存</el-button>
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
				zhanghu: '13800138000', //登录帐号
				time: '2014-12-15  17:25', //注册时间
				time1: '2014-12-15  17:25', //上次登录
				dizhi: '广东省广州市白云区汇侨路10号212A，13800138000', //地址
				dizhi1: '广东省广州市白云区汇侨路10号212A，13800138000',
				dizhi2: '广东省广州市白云区汇侨路10号212A，13800138000',
				checked: false, //禁用
			}
		},
		methods: {
			click() {
				this.$router.push('/xiaofeizhe');
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

	.xinxi {
		margin-bottom: 18px;
	}

	.xinxi:first-child {
		margin-top: 35px;
	}
</style>
