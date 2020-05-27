<template>
	<!-- 美体师主页详情 -->
	<div id="mtszhuye1">
		<!-- 头部 -->
		<Header3 title="美体师姓名"></Header3>
		<!-- 美体师信息 -->
		<div class="mtszhuye1">
			<div class="mtsxm">
				<span style="width: 50px;height: 50px;margin: 18px 0px 0px 20px;float: left;"><img :src="tupian" style="width: 100%;" /></span>
				<p id="jieshao">
					<span>{{xingming}}</span>
					<span>{{pingjia}}</span>
				</p>
			</div>
			<div class="dianhua">
				<span style="margin: 14px 10px;display: inline-block;">证件信息</span><span style="margin: 0px 10px;display: inline-block;">{{zhengjian}}</span>
				<div class="renzheng">
					<span>已认证</span>
				</div>
			</div>
			<p style="width: 100%;margin: 12px 0px 12px 10px;">个人简介</p>
			<div class="jianjie">
				<p style="padding: 10px 0px;">所属单位：{{danwei}}</p>
				<p>简介信息：{{jianjie}}</p>
			</div>
			<p style="width: 100%;margin: 12px 0px 12px 10px;">来自用户的评价</p>
			<!-- 顾客评价 -->
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
				tupian: '../img/美容师.76d81d89.jpg', //美体师图片
				xingming: '美体师姓名', //美体师姓名
				pingjia: '守时：5.0 专业5.0 沟通5.0', //评分
				zhengjian: '440*************1234', //证件号
				danwei: 'XXXXXXXXXX', //单位
				jianjie: '这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，', //简介
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
		font-size: 15px;
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

	.dianhua {
		width: 100%;
		height: 44px;
		background-color: #fff;
		margin: 5px 0px;
		position: relative;
	}

	.renzheng {
		position: absolute;
		left: 240px;
		top: 13px;
		width: 52px;
		height: 18px;
		background: inherit;
		background-color: rgba(255, 204, 255, 1);
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgba(228, 228, 228, 1);
		border-radius: 0px;
	}

	.renzheng span {
		font-size: 11px;
		color: #FFFFFF;
		text-align: center;
		display: block;
	}

	.jianjie {
		width: 100%;
		height:124px;
		background-color: #FFFFFF;
		position: relative;
	}

	.jianjie p {
		width: 95%;
		text-align: left;
		margin: 0px auto;
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
</style>
