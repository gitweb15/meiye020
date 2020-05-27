<template>
	<!-- 预约下单2 -->
	<div id="yyxd2">
		<Header title="预约信息"></Header>
		<div id="content">
			<div class="content-div1">
				<van-cell title="2014-12-04 15:00" icon="underway-o" is-link @click="showpopup" />
				<van-cell title="联系电话" icon="phone-o" />
			</div>
			<div class="content-div2">
				<van-cell title="XXXX项目名称" value="￥128.00" />
				<van-cell title="100元代金券" is-link to="/DaiJinQuan" />
			</div>
			<div class="content-div3">
				<p>未服务随时退，服务不满意可退款</p>
				<p>￥28.0</p>
			</div>
			<div class="content-div4">
				<van-button type="default" block @click="Click1">支付宝支付</van-button>
			</div>
			<div class="content-div5">
				<van-button type="default" block @click="Click2">微信支付</van-button>
			</div>
			<div class="content-div6">
				<van-popup v-model="show" position="bottom">
					<van-datetime-picker v-model="currentDate" type="datetime" title="选择完整时间" :min-date="minDate" :max-date="maxDate" />
				</van-popup>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'YuYueXiaDan2',
		components: {
			Header
		},
		data() {
			return {
				show: false,
				minDate: new Date(2020, 0, 1),
				maxDate: new Date(2025, 10, 1),
				currentDate: new Date()
			};
		},
		methods: {
			popup: function() {
				if (!this.show) {
					this.show = true;
				} else {
					this.show = false;
				}
			},
			showpopup() {
				this.show = true
			},
			Click1: function() {
				this.$router.push('/dingdandaizhifu');
			},
			Click2: function() {
				this.$router.push('/dingdandaizhifu');
			}
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
	}

	.content-div2 {
		margin-top: 10px;
	}

	.content-div3 {
		background-color: #ffffff;
		border-top: 1px solid #e4e4e4;
	}

	.content-div3 p:nth-child(1) {
		font-size: 14px;
		text-align: center;
		margin-top: 10px;
	}

	.content-div3 p:nth-child(2) {
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		margin-top: 10px;
		padding-bottom: 10px;
	}

	.content-div4 {
		margin-top: 25px;
	}

	.content-div5 {
		margin-top: 6px;
	}
</style>
