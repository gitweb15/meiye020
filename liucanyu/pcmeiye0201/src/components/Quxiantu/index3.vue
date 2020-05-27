<template>
	<!-- 取消订单 -->
	<div class="queshi" id="main">


	</div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		name: 'quxian3',
		data() {
			return {
				//曲线图
				option: {
					title: {
						text: '' //标题
					},
					// x轴
					xAxis: {
						type: 'category',
						data: ['2014-11-10', '2014-11-11', '2014-11-12', '2014-11-13', '2014-11-14', '2014-11-15', '2014-11-16',
							'2014-11-17', '2014-11-18', '2014-11-19', '2014-11-20', '2014-11-21', '2014-11-22', '2014-11-23', '2014-11-24',
							'2014-11-25', '2014-11-26', '2014-11-27', '2014-11-28', '2014-11-29', '2014-11-30', '2014-12-01', '2014-12-02',
							'2014-12-03', '2014-12-04', '2014-12-05', '2014-12-06', '2014-12-07', '2014-12-08', '2014-12-09'
						]
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
								color: '#7cb9e5',
								lineStyle: {
									color: '#7cb9e5',
								}
							}
						},
						//对应值
						data: [19, 18, 20, 20, 17, 16, 17, 20, 25, 30, 35, 20, 15, 20, 33, 60, 70, 75, 12, 18, 19, 18, 20, 21, 15, 19,
							26, 20, 21, 17
						]
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
	.queshi {
		width: 100%;
		height: 265px;
	}
</style>
