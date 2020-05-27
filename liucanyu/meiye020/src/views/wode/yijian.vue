<template>
	<!-- 我的-意见反馈 -->
	<div id="yijian">
		<!-- 头部 -->
		<Header3 title="意见反馈"></Header3>
		<div class="yijian">
			<p class="tishi">
				请描述您宝贵的意见
			</p>
			<textarea id="input" v-model="id_input"></textarea>
			<div class="tijiao" @click="qiekong()">
				确定
			</div>
			<!-- <img src="../../../public/image/u617.png" class="jianpan" /> -->
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'yijian',
		components: {
			Header3
		},
		data() {
			return {
				id_input: "" //意见
			}
		},
		methods: {
			// 跳转回我的页面,然后清空textarea里的内容
			qiekong: function() {
				this.$router.push('/wode');
				this.id_input = "";
			}
		}
	}
</script>

<style scoped>
	.yijian {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 10px;
	}

	.tishi {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
		margin: 0px 0px 8px 10px;
	}

	#input {
		position: relative;
		width: 99.5%;
		height: 160px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgba(228, 228, 228, 1);
		border-radius: 0px;
	}

	.tijiao {
		height: 40px;
		width: 100%;
		background-color: #fff;
		margin-top: 20px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}

	.jianpan {
		width: 100%;
		position: absolute;
		bottom: 16px;
		height: 255px;
	}
</style>
