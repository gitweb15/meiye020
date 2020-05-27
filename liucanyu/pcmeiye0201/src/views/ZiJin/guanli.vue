<template>
	<!-- 权限列表 -->
	<div class="content">
		<!-- 头部 -->
		<Header></Header>
		<div class="body">
			<!-- 侧边栏 -->
			<div class="zuo">
				<Aside></Aside>
			</div>
			<div class="you">
				<div class="you-div ziti">
					<!-- 点击查询时间 -->
					<div class="xiadan">
						<p class="time1 zhiti" @click="tianshu(1)">今日</p>
						<p class="time1 zhiti" @click="tianshu(7)">最近7天</p>
						<p class="time1 zhiti" @click="tianshu(15)">最近15天</p>
						<p class="time1 zhiti" @click="tianshu(30)">最近30天</p>
						<el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期"
						 end-placeholder="结束日期" @change="chooseTimeRange" value-format="yyyy-MM-dd">
						</el-date-picker>
					</div>
					<!-- 复选框 -->
					<div class="xuanze">
						<span style="display: inline-block;padding-right: 43px;line-height: 19px;font-size: 14px;">交易类型</span>
						<el-checkbox-group v-model="checkList" style="display:inline-block">
							<el-checkbox label="全部"></el-checkbox>
							<el-checkbox label="待结算"></el-checkbox>
							<el-checkbox label="待返款"></el-checkbox>
							<el-checkbox label="已返款"></el-checkbox>
							<el-checkbox label="待退款"></el-checkbox>
							<el-checkbox label="已退款"></el-checkbox>
						</el-checkbox-group>
					</div>

					<div class="xiadan">
						<p class="time1 zhiti" :class="activeClass== index ? 'active':''" v-for="(n,index) in list" :key="index" @click="getItem(index)">
							{{n.text}}</p>
						<el-input v-model="input" placeholder="请输入内容" style="width: 200px;margin-left: 100px;"></el-input>
						<el-button style="width: 100px;margin-left: 30px;" @click="sousuo">搜索</el-button>
					</div>

					<div class="shouyi">
						<div class="shouyi1">
							<p style="margin-bottom: 10px;">待结算收益</p>
							<p style="font-size: 22px;font-weight: 700;">{{daijiesuan}}</p>
						</div>
						<div class="shouyi1">
							<p style="margin-bottom: 10px;">预期收益</p>
							<p style="font-size: 22px;font-weight: 700;">{{yuqi}}</p>
						</div>
						<div class="shouyi1">
							<p style="margin-bottom: 10px;">已返款收益</p>
							<p style="font-size: 22px;font-weight: 700;">{{yifnakuan}}</p>
						</div>
					</div>

					<div style="margin-bottom: 20px;">
						<el-button>批量结算</el-button>
						<el-button style="margin: 0px 15px 0px 25px;">批量返款</el-button>
						<el-button>批量退款</el-button>
					</div>

					<!-- table表加载 -->
					<Table2></Table2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	import Table2 from '../../components/Table/table2.vue'
	export default {
		name: 'guanli',
		components: {
			Header,
			Aside,
			Table2
		},
		data() {
			return {
				value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)], //element框架时间
				value2: '', //element框架时间接收值
				list: [{
						text: '全部' //点击按钮
					},
					{
						text: '收入'
					},
					{
						text: '支出'
					}
				],
				activeClass: 0, //变色接受数据
				checkList: [], //复选框遍历
				input: '', //搜索
				daijiesuan: '1999.0', //待结算收益
				yuqi: '1999.0', //预期收益
				yifnakuan: '1999.0', //已返款收益
			}
		},
		methods: {
			//接受天数
			tianshu(index) {
				var tianshu = index;
				console.log(tianshu + "天");
			},
			//时间
			chooseTimeRange(t) {
				console.log(t); //结果为一个数组，如：["2018-08-04", "2018-08-06"]
			},
			//点击变色
			getItem(index) {
				this.activeClass = index;
				console.log(index + "类型")
			},
			//搜索
			sousuo() {
				var input1 = this.input;
				console.log(input1)
			}
		}

	};
</script>

<style scoped>
	.content {
		width: 100%;
		position: relative;
		background-color: #f2f2f2;
	}

	.content::after {
		content: '';
		clear: both;
		display: block;
	}

	.body {
		width: 90%;
		position: relative;
		background-color: #fff;
		margin: 0px auto;
	}

	.body::after {
		content: '';
		clear: both;
		display: block;
	}

	.ziti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 15px;
		color: #333333;
	}

	.zuo {
		width: 17%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you {
		width: 82.5%;
		position: relative;
		display: inline-block;
		float: left;
		border-left: solid 1px #e6e6e6;
		padding-bottom: 150px;
	}

	.you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-div {
		width: 98%;
		position: relative;
		float: right;
	}

	.you-div::after {
		content: '';
		clear: both;
		display: block;
	}

	.xiadan {
		margin-top: 25px;
		margin-bottom: 20px;
		font-size: 15px;
	}

	.time {
		display: inline-block;
		margin: 11px 12px 11px 0px;
	}

	.time1 {
		display: inline-block;
		padding: 11px 30px;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		cursor: pointer;
		border-radius: 7px;
	}

	.time1:nth-of-type(1) {
		border-left: 1px solid #e4e4e4;
	}

	.xuanze {
		margin-bottom: 22px;
	}

	.xiadan {
		margin-top: 12px;
		margin-bottom: 20px;
	}

	.time1 {
		display: inline-block;
		padding: 11px 30px;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		cursor: pointer;
		border-radius: 6px;
	}

	.time1:nth-of-type(1) {
		border-left: 1px solid #e4e4e4;
	}

	.active {
		background-color: #fbc15e;
	}

	.shouyi {
		width: 100%;
		position: relative;
		margin-bottom: 30px;
	}

	.shouyi::after {
		content: '';
		display: block;
		clear: both;
	}

	.shouyi1 {
		display: inline-block;
		width: 33%;
		height: 100%;
		position: relative;
	}
</style>
