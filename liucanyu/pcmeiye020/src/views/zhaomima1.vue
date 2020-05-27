<template>
	<!-- 找回密码2 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header1></Header1>
		<!-- 主体 -->
		<div class="content">
			<p class="biaoti">找回密码</p>
			<div style="margin-left: 205px;">
				<img src="../assets/u1722.png">
				<p class="zhiti" style="display: inline-block;">请访问邮件中给出的网页链接地址，<br />
					根据页面提示完成密码重设。</p>
			</div>
		<!-- 	<div class="prompt_text"><span id="num">{{count}}</span></div> -->
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../components/Header1/index.vue';
	export default {
		name: 'zhaomima1',
		components: {
			Header1
		},
		data() {
			return {
				count: "10", //倒计时
			}
		},
		created() {
			//根据需求确定在哪里调用
			this.goGrdoupRecor()
		},
		methods: {
			//  10秒后进入跳转
			goGrdoupRecor() {
				const TIME_COUNT = 10;
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
							//跳转的页面写在此处
							this.$router.push('/')
						}
					}, 1000)
				}
			},
		}
	}
</script>

<style scoped>
	#zhongxin {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		position: relative;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1068px;
		height: 715px;
		position: relative;
		margin: 0px auto;
		background-color: #fff;
		border: 1px solid #e4e4e4;
	}

	.biaoti {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 20px;
		text-align: left;
	}

	.biaoti {
		margin: 20px 0px 100px 47px;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		letter-spacing: normal;
		color: #333333;
	}

	img {
		width: 22px;
		height: 22px;
		display: inline-block;
		margin-right: 42px;
		vertical-align: super;
	}
</style>
