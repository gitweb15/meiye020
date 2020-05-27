<template>
	<!-- 我的-昵称 -->
	<div id="conten">
		<!-- 头部 -->
		<Header1 title="个人资料"></Header1>
		<div class="conten">
			<div class="phone zhiti">
				<!-- <span class="biaoti zhiti">手机号码</span> -->
				<van-field v-model="phone" type="tel" label="手机号" />
			</div>
			<div class="dizhi">
				<p class="zhiti" style="color: #666666;margin: 10px 0px 18px 16px;">联系地址</p>
				<!-- <p style="margin-bottom: 10px;"><span class="biaoti zhiti">省市区</span>{{dizhi}}</p> -->
				<van-field v-model="dizhi" label="省市区" />
			</div>
			<router-link tag="div" to="/xxdizhi" class="xxdizhi">
				<!-- <p style="margin: 10px 0px;"><span class="biaoti zhiti">详细地址</span>{{dizhi1}}<img src="../../assets/u155.png" class="img"></p> -->
				<van-cell title="详细地址" is-link v-model="dizhi1"/>
			</router-link>
			<van-button type="primary" size="large" class="anniu" url="/wode">提交</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'nicheng',
		components: {
			Header1
		},
		data() {
			return {
				phone: '13800138000', //手机号
				dizhi: '广东省广州市白云区', //地址
				dizhi1: '汇桥路10号212A', //详细地址
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.conten {
		position: relative;
		width: 100%;
		background-color: rgba(229, 229, 229, 1);
		padding-top: 10px;
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

	.phone {
		width: 100%;
		position: relative;
		background-color: #fff;
		border-bottom: 1px solid #e3e3e3;
		box-sizing: border-box;
		padding: 0.625rem 0rem;
	}

	.biaoti {
		width: 30%;
		float: left;
	}

	.dizhi {
		width: 100%;
		position: relative;
		background-color: #fff;
		border-bottom: 1px solid #e3e3e3;
		box-sizing: border-box;
		padding: 0.625rem 0rem;
	}

	.xxdizhi {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		background-color: #fff;
		padding: 0.625rem 0rem;
		margin-bottom: 15px;
	}

	.img {
		width: 22px;
		height: 22px;
		float: right;
		display: inline-block;
	}

	.anniu {
		background-color: #fff;
		color: #333333;
		border: 1px solid #fff;
		margin-bottom: 320px;
	}
</style>
