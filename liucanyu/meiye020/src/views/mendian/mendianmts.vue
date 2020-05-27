<template>
	<!-- 门店美体师 -->
	<div id="mtszhuye1">
		<Header3 title="美体师姓名"></Header3>
		<div class="mtszhuye1">
			<div class="mtsxm">
				<span style="width: 50px;height: 50px;margin: 18px 0px 0px 20px;float: left;"><img src="../../assets/美容师.jpg" style="width: 100%;" /></span>
				<p id="jieshao">
					<span>{{xingming}}</span>
					<span>{{pingjia}}</span>
				</p>
			</div>
			<div class="jianjie1">
				<p>联系地址:{{dizhi}}</p>
				<p>联系电话:{{dianhua}}</p>
			</div>
			<p style="width: 100%;margin: 12px 0px 12px 10px;">门店简介</p>
			<div class="jianjie">
				<p>{{jianjie}}</p>
			</div>
			<p style="width: 100%;margin: 12px 0px 12px 10px;">来自用户的评价</p>
			<ul class="list">
				<li v-for="n in list" :key="n.index">
					<p style="padding: 8px 0px;height: 15px;"><span style="float: left">{{n.phone}}</span><span style="float: right;">{{n.time}}</span></p>
					<p>{{n.pingjia}}</p>
					<p style="padding:10px 0px">{{n.pingfen}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'mtszhuye1',
		components: {
			Header3
		},
		data() {
			return {
				tupian: '../img/美容师.76d81d89.jpg', //美容师图片
				xingming: '美体师姓名', //美体师姓名
				pingjia: '专业5.0 守时5.0 沟通5.0', //评分
				dizhi: '广州市百云区汇侨路10号212A', //地址
				dianhua: '020-12345678', //电话
				jianjie: '这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,这是简介内容,', //简介内容
				list: [{
					phone: '1380****138', //账户
					time: '2014-12-02 17:00', //评价时间
					pingjia: '美容师很细心，服务很周到，技术也不错容师很细心，服务很周到，技术也不错', //评价
					pingfen: '专业5.0 沟通5.0 守时5.0' //评分
				}, {
					phone: '1380****138',
					time: '2014-12-02 17:00',
					pingjia: '美容师很细心，服务很周到，技术也不错容师很细心，服务很周到，技术也不错',
					pingfen: '专业5.0 沟通5.0 守时5.0'
				}]
			}
		}
	}
</script>

<style scoped>
	.mtszhuye1 {
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
	}

	#jieshao {
		width: 70%;
		display: inline-block;
		float: left;
	}

	#jieshao span {
		margin: 17px 0px 0px 20px;
		width: 85%;
		display: block;
	}

	.jianjie {
		width: 100%;
		height: 108px;
		background-color: #FFFFFF;
		position: relative;
		box-sizing: border-box;
		padding-top: 10px;
	}

	.jianjie p {
		width: 95%;
		text-align: left;
		margin: 0px auto;
		line-height: 20px;
	}

	.list {
		width: 100%;
		position: relative;
		background-color: #fff;
	}

	.list li {
		width: 100%;
		height: 104px;
		border-bottom: 1px solid #E4E4E4;
		overflow: hidden;
	}

	.list li p {
		width: 95%;
		text-align: left;
		margin: 0px auto;
	}

	.jianjie1 {
		width: 100%;
		height: 64px;
		border-top: 1px solid #E4E4E4;
		background-color: #fff;
	}

	.jianjie1 p {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		margin: 9px 0px 0px 19px;
	}
</style>
