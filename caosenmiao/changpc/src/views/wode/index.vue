<template>
	<!-- 我的 -->
	<div id="wd">
		<Header1 title="我的"></Header1>
		<div id="content">
			<div class="content-div1">

				<van-image round width="4rem" height="4rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
				<p>13800138000</p>
			</div>
			<div class="content-div2">
				<van-cell title="代金券" icon="cash-on-deliver" is-link to="/daijingjuan" />
				<van-cell title="常用地址" icon="wap-home-o" is-link to="/daijingjuanfist1" />
			</div>
			<div class="content-div3">
				<van-cell title="意见反馈" icon="records" is-link to="/YiJianFanKui" />
				<van-cell title="联系客服" icon="phone-o" is-link value="400-123-456" />
				<van-cell title="版本更新" icon="setting-o" is-link value="已是最新版本" />
			</div>
			<div class="content-div4">
				<van-button type="default" block @click="Click">登录</van-button>
			</div>
			<div class="content-div5">
				<van-button type="default" block @click="Click">注销</van-button>
			</div>
		</div>
		<BiaoQianYe></BiaoQianYe>
	</div>
</template>

<script>
	//引入组件
	import Header1 from '../../components/Header1';
	import BiaoQianYe from '../../components/BiaoQianYe';
	export default {
		name: 'WoDe',
		data() {
			return {
				active: 'setting',
			};
		},
		components: {
			Header1,
			BiaoQianYe
		},
		methods: {
			Click: function() {
				this.$router.push('/DengLu');
			}
		}
	}
</script>

<style scoped>
	.content-div1 {
		border-top: 1px solid #e4e4e4;
		height: 120px;
		background-color: #ffffff;
		width: 100%;
		text-align: center;
		padding-top: 20px;
	}

	.content-div1 p {
		font-size: 14px;
		margin-top: 10px;
	}

	.content-div2 {
		margin-top: 10px;
	}

	.content-div3 {
		margin-top: 10px;
	}

	.content-div4 {
		margin-top: 10px;
	}

	.content-div5 {
		margin-top: 10px;
	}

	.van-sidebar-item__text {
		text-align: center;
	}
</style>
