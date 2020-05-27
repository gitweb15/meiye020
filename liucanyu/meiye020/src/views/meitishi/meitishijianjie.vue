<template>
	<!-- 美体师简历 -->
	<div id="mtszhuye">
		<Header3 title="美体师姓名"></Header3>
		<div class="mtszhuye">
			<router-link tag="div" to="/mtszhuye1" class="mtsxm">
				<span style="width: 50px;height: 50px;margin: 18px 0px 0px 20px;float: left;"><img :src="tupian" style="width: 100%;" /></span>
				<p id="jieshao">
					<span>{{xingming}}</span>
					<span>{{pingjia}}</span>
				</p>
				<img src="../../../public/image/u155.png" style="float: right;width: 37.5px; margin: 25px 0px 0px 0px;" />
			</router-link>
			<p style="width: 100%;margin: 6px 0px 6px 20px;">我提供的项目</p>
			<ul class="list">
				<router-link tag="li" v-for="n in list" :key="n.index" :to="n.to">
					<span style="width: 100px;height: 100px;float: left;margin-top: 16px;">
						<img :src="n.tupian" style="width: 100%;height: 100%;" />
					</span>
					<div class="you">
						<p style="font-size: 15px;">{{n.name}}</p>

						<p style="font-size: 12px;">{{n.jianjie}}</p>

						<p><span style="font-size: 14px;">￥{{n.jiage}}</span>

							<span>{{n.time}}分钟</span></p>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'meitishijianjie',
		components: {
			Header3
		},
		data() {
			return {
				list: [{
						name: '项目名称', //项目名称
						jianjie: '疏肝理气、预防乳腺疾病；雕塑身形，疏通胸部经络；调节内分泌，青春永驻', //项目简介
						jiage: '128.0', //价格
						time: '60', //时间
						to: '/meitishiXiangmu', //跳转路径
						tupian: '/img/服务.236c3fcf.png' //服务图片
					},
					{
						name: '项目名称',
						jianjie: '疏肝理气、预防乳腺疾病；雕塑身形，疏通胸部经络；调节内分泌，青春永驻',
						jiage: '128.0',
						time: '60',
						to: '/meitishiXiangmu',
						tupian: '/img/服务.236c3fcf.png'
					},
					{
						name: '项目名称',
						jianjie: '疏肝理气、预防乳腺疾病；雕塑身形，疏通胸部经络；调节内分泌，青春永驻',
						jiage: '128.0',
						time: '60',
						to: '/meitishiXiangmu',
						tupian: '/img/服务.236c3fcf.png'
					}
				],
				tupian: '../img/美容师.76d81d89.jpg', //美体师图片
				xingming: '美体师姓名', //美体师姓名
				pingjia: '守时：5.0 专业5.0 沟通5.0', //评分
			}
		}
	}
</script>

<style scoped>
	.mtszhuye {
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

	.mtsxm {
		height: 90px;
		border-bottom: 1px solid #e3e3e3;
		background-color: #fff;
		width: 100%;
		cursor: pointer;
	}

	#jieshao {
		width: 65%;
		display: inline-block;
		float: left;
	}

	#jieshao span {
		margin: 17px 0px 0px 20px;
		width: 85%;
		display: block;
	}

	.list {
		width: 100%;
		background-color: #fff;
		height: 394px;
		position: relative;
	}

	.list li {
		width: 95%;
		height: 130px;
		float: right;
		border-bottom: 1px solid #e4e4e4;
	}

	.you {
		height: 100%;
		width: 67%;
		display: inline-block;
	}

	.you p {
		margin: 13px 12px 0px;
	}

	.you p span {
		margin-right: 10px;
	}

	.you p span:nth-of-type(1) {
		color: #d80901;
	}
</style>
