<template>
	<!-- 资金信息 -->
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
					<h3 style="margin: 18px 0px 30px;">{{zhanghu}}</h3>
				</div>
				<ul class="tab ziti">
					<router-link tag="li" to="/xfzzhanghu">
						账户信息
					</router-link>
					<router-link tag="li" to="/xfzdingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/xfzziji" class="active">
						资金信息
					</router-link>
					<router-link tag="li" to="/xfzkaquan">
						卡卷管理
					</router-link>
				</ul>
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
						<p class="time1 zhiti" :class="activeClass== index ? 'active1':''" v-for="(n,index) in list" :key="index" @click="getItem(index)">
							{{n.text}}</p>
						<el-input v-model="input" placeholder="请输入内容" style="width: 200px;margin-left: 100px;"></el-input>
						<el-button style="width: 100px;margin-left: 30px;" @click="sousuo">搜索</el-button>
					</div>

					<div class="shouyi">
						<div class="shouyi1">
							<p style="margin-bottom: 10px;display: inline-block;">消费总额</p>
							<p style="font-size: 22px;font-weight: 700;display: inline-block;margin-left: 35px;">{{zonge}}</p>
						</div>
					</div>
					
					<!-- table表加载 -->
					<Table5></Table5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	import Table5 from '../../components/Table/table5.vue'
	export default {
		name: 'mrszijin',
		components: {
			Header,
			Aside,
			Table5
		},
		parent,
		data() {
			return {
				zhanghu: '13800138000', //账户
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
				zonge: '1999.0', //消费总额
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

	.tab {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #e3e3e3;
	}

	.tab::after {
		content: '';
		clear: both;
		display: block;
	}

	.active {
		border-bottom: 2px solid #969b35;
	}

	.tab li {
		float: left;
		padding: 0px 25px 15px 15px;
		margin-right: 20px;
		cursor: pointer;
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

	.active1 {
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
