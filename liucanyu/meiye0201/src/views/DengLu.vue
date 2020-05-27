<template>
	<!-- 登录页面 -->
	<div id="dengLu">
		<!-- 头部 -->
		<Header1 title="登录"></Header1>
		<div id="dengLu1">
			<p class="tishi">输入手机号码登录</p>
			<van-form @submit="onSubmit">
				<van-field v-model="username" name="账号" label="账号" placeholder="账号" :rules="[{ required: true, message: '请填写账号' }]" />
				<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]">
					<!-- 60秒倒计时 -->
					<template #button>
						<van-button style="width: 105px;" size="small" type="primary" @click="sendMsg" :disabled="isDisabled">{{buttonName}}</van-button>
					</template>
				</van-field>
				<div style="margin: 16px 0px;">
					<van-button round block type="info" native-type="submit" style="background-color: #fff; color: #333333;border:0px solid; border-radius: 0;">
						登录并绑定
					</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../components/Header1/index.vue';
	export default {
		name: 'dengLu',
		components: {
			Header1
		},
		data() {
			return {
				buttonName: "发送短信", //第一次发送信息
				isDisabled: false, //是否禁用
				time: 60, //倒计时
				username: '', //账号
				password: '' //密码
			}
		},
		methods: {
			// 60秒倒计时
			sendMsg() {
				let me = this;
				me.isDisabled = true;
				let interval = setInterval(function() {
					// console.log(111)
					me.buttonName = me.time + '秒后重新发送';
					--me.time;
					if (me.time < 0) {
						me.buttonName = "重新发送";
						me.time = 60;
						me.isDisabled = false;
						clearInterval(interval);
					}
				}, 1000);
			},
			// 判断非空,跳转页面
			onSubmit(values) {
				console.log('submit', values);
				this.$router.push('/wode')
			},
		}
	}
</script>

<style scoped>
	#dengLu1 {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
	}

	.tishi {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
		line-height: normal;
		box-sizing: border-box;
		padding: 16px;
	}

	.dengLu {
		position: relative;
		width: 100%;
		height: 49px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 1px solid rgba(228, 228, 228, 1);
		margin-top: 30px;
		cursor: pointer;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
		text-align: center;
		padding-top: 13px;

	}
</style>
