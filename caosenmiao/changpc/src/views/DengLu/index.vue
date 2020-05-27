<template>
	<!-- 登录 -->
	<div id="dl">
		<Header title="登录"></Header>
		<div id="content">
			<div class="content-div1">
				输入手机号码登录
			</div>
			<van-form @submit="onSubmit">
				<div class="content-div2">
					<van-cell-group>
						<van-field v-model="username" center clearable required label="账号" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]"></van-field>
					</van-cell-group>
				</div>
				<div class="content-div3">
					<van-field v-model="password" center clearable required label="密码" placeholder="请输入短信验证码" :rules="[{ required: true, message: '请填写密码' }]">
						<template #button>
							<van-button slot="button" size="small" type="primary" v-show="show" @click="getCode">发送验证码</van-button>
							<van-button slot="button" size="small" type="primary" v-show="!show">{{count}}S后再次获取</van-button>
						</template>
					</van-field>
				</div>
				<div class="content-div4">
					<van-button type="default" block native-type="submit">登录并绑定</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'DengLu',
		components: {
			Header
		},
		data() {
			return {
				show: true,
				count: '',
				timer: null,
				username: '', //账号
				password: '' //密码
			}
		},
		methods: {
			getCode() {
				const TIME_COUNT = 60;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			},
			//如果通过验证就跳转到指定路由
			onSubmit(values) {
				console.log('submit', values);
				this.$router.push('/WoDe');
			},
		}
	}
</script>

<style scoped>
	.content-div1 {
		font-size: 14px;
		background-color: #e5e5e5;
		padding: 12px;
	}

	.content-div2 {
		border-bottom: 1px solid #e4e4e4;
	}

	.content-div4 {
		margin-top: 24px;
	}
</style>
