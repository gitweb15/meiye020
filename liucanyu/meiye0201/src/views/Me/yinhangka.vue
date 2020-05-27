<template>
	<div id="center">
		<!-- <!-- 头部 -->
		<Header1 title="绑定银行卡"></Header1>
		<!-- 主体 -->
		<div id="body">
			<van-form @submit="onSubmit">
				<van-field v-model="username" name="姓名" label="姓名" placeholder="请如实填写，否则无法正常提现" :rules="[{ required: true, message: '请填写姓名' }]" />
				<van-field v-model="shenfz" name="身份证号" label="身份证号" placeholder="必须与身份证一致" :rules="[{ required: true, message: '请填写身份证号' }]" />
				<van-field v-model="haoma" name="开户银行" label="开户银行" placeholder="开户人必须与上面填写的姓名一致" :rules="[{ required: true, message: '请填写开户银行' }]" />
				<van-field v-model="yhk" name="银行卡号" label="银行卡号" placeholder="请填写储蓄卡号" :rules="[{ required: true, message: '请填写储蓄卡号' }]" />
				<div style="margin: 16px 0px;">
					<van-button round block type="info" native-type="submit" class="anniu">
						确定
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
				username: '', //姓名
				shenfz: '', //身份证
				haoma: '', //开户银行
				yhk: '', //银行卡号
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
				this.$router.push('/yanzhengma')
			},
		},
	};
</script>

<style scoped>
	#body {
		position: relative;
		width: 100%;
		background-color: #e5e5e5;
		padding-top: 20px;
		padding-bottom: 320px;
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
</style>
