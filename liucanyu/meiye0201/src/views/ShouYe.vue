<template>
	<div id="center">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div id="body">
			<div class="dingdan">
				<router-link tag="div" to="/dingdan" class="dingdan-zuo">
					<p class="dingdanTitle zhiti">待服务订单</p>
					<p class="dingdanNum zhiti1">{{daiFuWu}}</p>
				</router-link>
				<router-link tag="div" to="/dingdan" class="dingdan-you">
					<p class="dingdanTitle zhiti">申请退款订单</p>
					<p class="dingdanNum zhiti1">{{tuiKuan}}</p>
				</router-link>
			</div>
			<div class="dingdan1">
				<p class="dingdanTitle1 zhiti">最近7日预期收益</p>
				<p class="dingdanNum1 zhiti1">{{qiRi}}</p>
			</div>
			<!-- 曲线图 -->
			<p class="zhiti" style="margin: 14px 0px 0px 10px;">最近7日成交金额</p>
			<div id="main" style="width: 100%; height: 250px;">

			</div>
		</div>
		<!-- 尾部 -->
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Footer from '../components/Footer/index.vue';
	import echarts from 'echarts';
	export default {
		name: 'meiba',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				daiFuWu: '4', //待服务订单
				tuiKuan: '0', //申请退款订单
				qiRi: '628.00', //最近7日预期收益
				//曲线图
				option: {
					title: {
						text: '' //标题
					},
					// x轴
					xAxis: {
						type: 'category',
						data: ['12-19', '12-20', '12-21', '12-22', '12-23', '12-24', '12-25']
					},
					// y轴
					yAxis: {
						type: 'value'
					},
					series: [{
						name: '销售量',
						type: 'line',
						stack: '销售量',
						//颜色
						itemStyle: {
							normal: {
								color: '#5478ac',
								lineStyle: {
									color: '#5478ac'
								}
							}
						},
						//对应值
						data: [130, 230, 165, 260, 245, 275, 210]
					}]
				}
			}
		},
		mounted() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(this.option);
			//建议加上以下这一行代码，当浏览器窗口缩小的时候超过了div的界限
			window.addEventListener('resize', function() {
				myChart.resize()
			});
		}
	}
</script>

<style scoped>
	#body {
		position: relative;
		width: 100%;
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

	.zhiti1 {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
	}

	.dingdan {
		width: 100%;
		height: 100px;
		position: relative;
		border-bottom: 1px solid #d8d8d8;
		box-sizing: border-box;
		padding: 5px 0px;
	}

	.dingdan-zuo {
		width: 49.5%;
		float: left;
		height: 90px;
		border-right: 1px solid #d7d7d7;
		position: relative;
	}

	.dingdan-you {
		width: 49.5%;
		float: right;
		height: 90px;
		position: relative;
	}

	.dingdanTitle {
		margin: 6px 0px 0px 6px;
	}

	.dingdanNum {
		text-align: center;
		margin-top: 12px;
	}

	.dingdan1 {
		width: 100%;
		height: 110px;
		position: relative;
		border-bottom: 1px solid #d8d8d8;
	}

	.dingdanTitle1 {
		margin: 10px 0px 0px 10px;
	}

	.dingdanNum1 {
		text-align: left;
		margin: 25px 0px 0px 10px;
	}

	#main {
		margin-bottom: 15px;
		cursor: pointer;
	}
</style>
