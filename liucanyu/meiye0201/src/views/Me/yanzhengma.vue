<template>
	<div id="center">
		<!-- <!-- 头部 -->
		<Header1 title="验证消息"></Header1>
		<!-- 主体 -->
		<div id="body">
			<p class="title zhiti">验证码以及发至您的注册手机{{haoma}}</p>
			<van-form @submit="onSubmit">
				<van-field v-model="password" type="password" placeholder="验证码" :rules="[{ required: true, message: '请填写验证码' }]">
					<!-- 60秒倒计时 -->
					<template #button>
						<van-button style="width: 105px;" size="small" type="primary" @click="sendMsg" :disabled="isDisabled">{{buttonName}}</van-button>
					</template>
				</van-field>
				<div style="margin: 16px 0px;">
					<van-button round block type="info" native-type="submit" style="background-color: #fff; color: #333333;border:0px solid; border-radius: 0;">
						下一步
					</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'fuwudizhi',
		components: {
			Header1,
		},
		data() {
			return {
				buttonName: "发送短信", //第一次发送信息
				isDisabled: false, //是否禁用
				time: 60, //倒计时
				username: '', //账号
				password: '', //密码
				haoma: '138****0000', //手机号码
			}
		},
		methods: {
			// 60秒倒计时
			sendMsg() {
				let me = this;
				me.isDisabled = true;
				let interval = setInterval(function() {
					// console.log(111)
					me.buttonName = me.time + 'S后再次获取';
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
				this.$router.push('/bangding')
			},
		}
	}
</script>

<style scoped>
	#body {
		position: relative;
		width: 100%;
		background-color: #e5e5e5;
		padding-bottom: 425px;
	}

	#body::after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #333333;
	}

	.anniu {
		width: 100%;
		background-color: #fff;
		color: #333;
		border-radius: 0px;
	}

	.title {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		padding: 10px 8px;
	}
</style>
