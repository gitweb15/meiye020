<template>
	<!-- 美体项目 -->
	<div id="xiangmu">
		<Header3 title="服务项目1"></Header3>
		<div class="xiangmu">
			<div class="content">
				<img :src="tupian" class="tupian" style="height:314px; width: 350px;">
				<p class="one"><span class="zuo">项目名称</span><span class="you">￥{{jiage}}</span></p>
				<p class="two">服务时长：{{time}}分钟</p>
				<div class="three">{{jieshao}}</div>
			</div>

			<van-button type="default" class="anniu" is-link url="/meitiYuyue">立即预约</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'meitiXiangmu',
		components: {
			Header3
		},
		data() {
			return {
				tupian: '/img/服务.236c3fcf.png', //服务项目图片
				jiage: '99.0', //价格
				time: '60', //时间
				jieshao: '项目服务内容简介，最多显示2行，多余省略项目服务内容简介，最多显示2行，多余省略', //项目服务内容简介
				tupian1: '../img/美容师.76d81d89.jpg', //美体师图片
				name: '美体师名称', //美体师姓名
				pingfen: '守时5.0 专业5.0 沟通5.0' //评分
			}
		}
	}
</script>

<style scoped>
	.xiangmu {
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
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
	}

	.content {
		width: 100%;
		height: 450px;
		background-color: #fff;
	}

	.tupian {
		display: block;
		margin: 0px auto;
		padding-top: 10px;
		/* width: 93%; */
		width: 350px;
	}

	.one {
		margin: 20px auto 14px;
		width: 93%;
		height: 15px;
	}

	.one .zuo {
		float: left;
		font-size: 15px;
	}

	.one .you {
		float: right;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		color: #FF0000;
		text-align: right;
	}

	.two {
		margin: 0px auto 10px;
		width: 93%;
		height: 13px;
	}

	.three {
		margin: 0px auto;
		width: 93%;
		/* height: 13px; */
		padding-bottom: 23px;
	}

	.anniu {
		width: 100%;
		margin-top: 20px;
		cursor: pointer;
	}
</style>
