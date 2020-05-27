<template>
	<!-- 返回日记头部 -->
	<div id="header4">
		<van-nav-bar :title="title" :left-text="diandan" left-arrow class="title" @click-left="onClickLeft">
			<template #right>
				<span style="color: #2087FC;">客服</span>
			</template>
		</van-nav-bar>
	</div>
</template>

<script>
	export default {
		name: "Header4",
		// props是子组件访问父组件数据的唯一接口
		props: {
			// 标题
			title: {
				type: String,
				default: '代金券'
			},
			//左侧
			diandan: {
				type: String,
				default: '订单'
			}
		},
		methods: {
			//跳转到登录后的页面
			prev() {
				// this.$router.go(-1); //返回上一页
				// 前进就是this.$router.go(1)
				this.$router.push("/dingdan1");
			},
			//跳转到登录后的页面
			onClickLeft() {
				this.$router.push("/dingdan1");
			}
		}
	}
</script>

<style scoped>
	#header4 {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 46px;
		display: flex;
		background: url(../../public/image/u3.png) no-repeat;
		background-size: 100% 100%;
	}

	.title {
		width: 100%;
		background: url(../../public/image/u3.png) no-repeat;
		background-size: 100% 100%;
	}

	/* #fanhui {
		border-width: 0px;
		width: 90px;
		height: 40px;
		float: left;
		overflow: hidden;
		border: 2px #f8f8f8 solid;
		cursor: pointer;
	}

	#fanhui:active {
		border: 2px #387edd solid;
	}

	#fanhui img {
		width: 20%;
		height: 48%;
		position: relative;
		top: 11px;
		left: 18px;
	}

	#fanhui span {
		border-width: 0px;
		width: 39px;
		height: 18px;
		display: flex;
		font-family: 'Helvetica Neue Normal', 'Helvetica Neue';
		font-weight: 400;
		font-style: normal;
		font-size: 16px;
		color: #2087FC;
		position: relative;
		top: -14px;
		left: 44px;
	}

	.title {
		text-align: center;
		width: 50%;
		margin-top: 10px;
		font-family: 'Helvetica Neue Normal', 'Helvetica Neue';
		font-weight: 400;
		font-style: normal;
		font-size: 21px;
		color: #000000;
	}

	.kefu {
		font-family: 'Helvetica Neue Normal', 'Helvetica Neue';
		font-weight: 400;
		font-style: normal;
		font-size: 16px;
		color: #2087FC;
		position: absolute;
		right: 0px;
		margin: 13px 8px 0px 0px;
	} */
</style>
