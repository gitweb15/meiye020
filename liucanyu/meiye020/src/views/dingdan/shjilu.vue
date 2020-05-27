<template>
	<!-- 售后记录 -->
	<div id="shjilu">
		<Header3 title="售后记录"></Header3>
		<div class="shjilu">
			<div class="center">
				<div class="shang">
					<p class="h1">
						售后类型:
					</p>
					<p>
						申请退款
					</p>
					<p class="h1">
						申请描述:
					</p>
					<p>
						这里是申请描述.这里是申请描述.这里是申请描述.这里是申请描述.这里是申请描述.
					</p>
				</div>
				<div class="xia">
					<img src="../../../public/image/u320.png" class="xian" />
					<img src="../../../public/image/u321.png" class="zi" />
					<img src="../../../public/image/u322.png" class="hui1" />
					<img src="../../../public/image/u322.png" class="hui2" />
					<img src="../../../public/image/u322.png" class="hui3" />
					<div class="buju">
						<p>申请退款</p>
						<p>{{shenqing}}</p>
					</div>

					<div class="buju">
						<p>等待商家同意</p>
						<p>{{tongyi}}</p>
					</div>

					<div class="buju">
						<p>退款处理</p>
						<p>{{tuikuan}}</p>
					</div>

					<div class="buju">

						<p>预计到帐时间</p>
						<p>{{yuji}}</p>
					</div>
				</div>
			</div>
			<van-button type="default" class="anniu" is-link url="">取消退款申请</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'shjilu',
		components: {
			Header3
		},
		data() {
			return {
				shenqing: '2014-12-15 17:30;25', //申请退款时间
				tongyi: '2014-12-18 17:30;25', //等待商家同意时间
				tuikuan: '2014-12-18 17:30;25', //退款处理时间
				yuji: '2014-12-18 17:30;25' //预计到帐时间
			}
		}
	}
</script>

<style scoped>
	.shjilu {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 3px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.center {
		width: 100%;
		height: 440px;
		background-color: #fff;
	}

	.anniu {
		width: 100%;
		margin-top: 20px;
		cursor: pointer;
	}

	.h1 {
		font-weight: 700;
	}

	.shang {
		height: 153px;
	}

	.shang p {
		margin: 0px auto;
		width: 95%;
		padding: 9px 0px;
	}

	.xia {
		width: 100%;
		position: relative;
		height: 280px;
		margin-top: 7px;
	}

	.xian {
		position: absolute;
		left: 29px;
	}

	.zi {
		position: absolute;
		left: 20px;
	}

	.hui1 {
		position: absolute;
		left: 20px;
		top: 70px;
	}

	.hui2 {
		position: absolute;
		left: 20px;
		top: 140px;
	}

	.hui3 {
		position: absolute;
		left: 20px;
		top: 210px;
	}

	.buju {
		margin: 0px 0px 24px 45px
	}

	.buju p:nth-of-type(1) {
		margin-bottom: 15px;
	}
</style>
