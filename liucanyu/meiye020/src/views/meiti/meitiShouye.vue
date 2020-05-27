<template>
	<!-- 美体首页 -->
	<div id="meiti">
		<Header3 title="服务项目"></Header3>
		<div class="meiti">
			<ul class="list">
				<router-link tag="li" v-for="n in list" :key="n.index" :to="n.lujing">
					<span style="width: 100px;height: 100px;float: left;margin-top: 16px;">
						<img :src="n.tupian" style="width: 100%;height: 100%;" />
					</span>
					<div class="you">
						<p style="font-size: 15px;">{{n.name}}</p>

						<p style="font-size: 12px;">{{n.content}}</p>

						<p><span style="font-size: 14px;">￥{{n.jiage}}</span>

							<span>{{n.time}}</span></p>
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
		name: 'meitiShouye',
		components: {
			Header3
		},
		data() {
			return {
				list: [{
						"name": '项目名称', //项目名称
						"content": '疏肝理气、预防乳腺疾病；雕塑身形，疏通胸部经络；调节内分泌，青春永驻', //项目简介
						"jiage": '128.0', //价格
						"time": '60分钟', //时间
						"lujing": '/meitiXiangmu', //跳转地址
						tupian: '/img/服务.236c3fcf.png' //图片
					},
					{
						"name": '项目名称',
						"content": '疏肝理气、预防乳腺疾病；雕塑身形，疏通胸部经络；调节内分泌，青春永驻',
						"jiage": '128.0',
						"time": '60分钟',
						"lujing": '/meitiXiangmu',
						tupian: '/img/服务.236c3fcf.png'
					},
					{
						"name": '项目名称',
						"content": '疏肝理气、预防乳腺疾病；雕塑身形，疏通胸部经络；调节内分泌，青春永驻',
						"jiage": '128.0',
						"time": '60分钟',
						"lujing": '/meitiXiangmu',
						tupian: '/img/服务.236c3fcf.png'
					},
					{
						"name": '项目名称',
						"content": '疏肝理气、预防乳腺疾病；雕塑身形，疏通胸部经络；调节内分泌，青春永驻',
						"jiage": '128.0',
						"time": '60分钟',
						"lujing": '/meitiXiangmu',
						tupian: '/img/服务.236c3fcf.png'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.meiti {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 5px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.list {
		width: 100%;
		position: relative;
	}

	.list li {
		width: 95%;
		height: 130px;
		float: right;
		background-color: #fff;
		padding-left: 5%;
		border-bottom: 1px solid #e4e4e4;
		cursor: pointer;
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
