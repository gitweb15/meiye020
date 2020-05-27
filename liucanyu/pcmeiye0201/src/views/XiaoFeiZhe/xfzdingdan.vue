<template>
	<!-- 订单信息 -->
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
					<router-link tag="li" to="/xfzdingdan" class="active">
						订单信息
					</router-link>
					<router-link tag="li" to="/xfzziji">
						资金信息
					</router-link>
					<router-link tag="li" to="/xfzkaquan">
						卡卷管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<!-- 搜索框 -->
					<table class="table zhiti" cellpadding="0">
						<tr>
							<td>订单编号</td>
							<td>手机号码</td>
							<td>项目名称</td>
						</tr>
						<tr>
							<td>
								<input type="text" class="text" v-model="bianhao" />
							</td>
							<td>
								<input type="text" class="text" v-model="phone1" />
							</td>
							<td>
								<input type="text" class="text" v-model="name1" />
							</td>
							<td>
								<span class="xiugai" @click="tijiao">提交修改</span>
							</td>
						</tr>
					</table>
					<!-- 点击查询时间 -->
					<div class="xiadan">
						<span class="time">下单时间</span>
						<p class="time1 zhiti" @click="tianshu(7)">最近7天</p>
						<p class="time1 zhiti" @click="tianshu(15)">最近15天</p>
						<p class="time1 zhiti" @click="tianshu(30)">最近30天</p>
						<el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期"
						 end-placeholder="结束日期" @change="chooseTimeRange" value-format="yyyy-MM-dd">
						</el-date-picker>
					</div>
					<!-- 查询订单类型 -->
					<ul class="dindan zhiti">
						<li :class="activeClass== index ? 'active1':''" v-for="(n,index) in list" :key="index" @click="getItem(index)">
							{{n.tishi}}
						</li>
					</ul>
					<el-table :data="tableData" style="width: 100%;font-size: 10px;margin-bottom: 250px;">
						<el-table-column prop="bianhao" label="订单编号">
						</el-table-column>
						<el-table-column prop="name" label="项目名称">
						</el-table-column>
						<el-table-column prop="timefuwu" label="服务方">
						</el-table-column>
						<el-table-column prop="xiaofei" label="消费者">
						</el-table-column>
						<el-table-column prop="time" label="创建时间" width="160px">
						</el-table-column>
						<el-table-column prop="zhuantai" label="订单状态">
						</el-table-column>
						<el-table-column prop="money" label="金额">
						</el-table-column>
						<el-table-column prop="caozuo" label="操作">
							<template slot-scope="scope">
								<router-link :to="scope.row.lianjie" class="aa">查看</router-link>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	export default {
		name: 'mrsdingdan',
		components: {
			Header,
			Aside
		},
		parent,
		data() {
			return {
				zhanghu: '13800138000', //账户
				zhanghao: '13800138000', //登录帐号
				nichen: '小苹果', //昵称
				phone: '13800138000', //手机号码
				dizhi: 'XXX省XXX市XXX区XXX街道XXX号', //联系地址
				dizhi1: 'XXX省XXX市XXX区XXX街道XXX号', //服务地址
				name: 'xxx', //姓名
				shenfz: 'xxxxxxxxxxxxxxxxxxxx', //身份证号
				jigou: '所属机构', //所属机构
				jianjie: '', //
				yinhang: 'XXX银行XXX支行', //卡户用户
				kaihuname: '张三丰', //卡户姓名
				yhzh: '6226 1234 5678 1234', //银行账号
				//table表
				tableData: [{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待支付',
						money: '128.0',
						lianjie: '/index', //链接
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待确认',
						money: '128.0',
						lianjie: '/index1', //链接
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待服务',
						money: '128.0',
						lianjie: '/index2', //链接
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '已取消',
						money: '128.0',
						lianjie: '/index3', //链接
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '申请售后',
						money: '128.0',
						lianjie: '/index4', //链接
					},
					{
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '待评价',
						money: '128.0',
						lianjie: '/index5', //链接
					}, {
						bianhao: '201412110321',
						name: '项目名称',
						timefuwu: '门店名称/美体师',
						xiaofei: '13800138000',
						time: '2014-11-11  17:35:22',
						zhuantai: '已完成',
						money: '128.0',
						lianjie: '/index6', //链接
					}
				],
				bianhao: '', //订单编号
				phone1: '', //手机号码
				name1: '', //项目名称
				value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)], //element框架时间
				value2: '', //element框架时间接收值
				list: [{
						tishi: '全部订单', //订单类型
					},
					{
						tishi: '待支付订单',
					},
					{
						tishi: '待确认订单',
					},
					{
						tishi: '待服务订单',
					},
					{
						tishi: '待评价订单',
					},
					{
						tishi: '已完成订单',
					},
					{
						tishi: '已取消订单',
					},
					{
						tishi: '售后订单',
					}
				],
				activeClass: 0
			}
		},
		methods: {
			// 返回服务页面
			click: function() {
				this.$router.push('/meirongdian')
			},
			open: function() {
				this.$prompt('请输入审核失败的理由', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '提交理由'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
				// this.$router.push('/fuwu')
			},
			//点击切换变色
			getItem(index) {
				this.activeClass = index;
				console.log(index);
			},
			//提交修改
			tijiao() {
				//订单编号
				var bianhao1 = this.bianhao;
				//手机号码
				var phone1 = this.phone;
				//项目名称
				var name1 = this.name;
				console.log("订单编号:" + bianhao1, "手机号码:" + phone1, "项目名称:" + name1)

				this.bianhao = null;
				this.phone = null;
				this.name = null;
			},
			//接受天数
			tianshu(index) {
				var tianshu = index;
				console.log(tianshu + "天");
			},
			//时间
			chooseTimeRange(t) {
				console.log(t); //结果为一个数组，如：["2018-08-04", "2018-08-06"]
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

	.you-zuo,
	.you-you {
		position: relative;
		display: inline-block;
		float: left;
	}

	.you-zuo {
		width: 35%;
	}

	.you-you {
		width: 65%;
	}

	.you-zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-zuo p {
		margin: 25px 0px;
	}

	.center {
		width: 355px;
		margin: 0px auto;
		border: 1px solid #cccccc;
		box-sizing: border-box;
		padding: 15px 15px;
		margin-top: 40px;
	}

	.center p {
		margin-top: 15px;
	}

	.tupain {
		width: 100%;
		position: relative;
	}

	.tupian1 {
		width: 35%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.tupian1 p {
		margin-bottom: 20px;
	}

	.table {
		font-size: 15px;
		margin: 30px 0px 14px;
	}

	.text {
		width: 171px;
		height: 21px;
		/* padding: 3px 2px 3px 2px; */
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		text-decoration: none;
		text-align: left;
		border: 1px solid rgba(121, 121, 121, 1);
	}

	.table tr td {
		width: 171px;
		margin-bottom: 8px;
		margin-right: 40px;
		display: inline-block;
	}

	.xiugai {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		color: #000;

		float: left;

		display: inline-block;
		text-align: center;
		width: 110px;
		height: 25px;
		background-color: rgba(255, 255, 255, 0);
		box-sizing: border-box;
		border: 1px solid rgba(121, 121, 121, 1);

		position: relative;

		line-height: 23px;
		cursor: pointer;
	}

	.xiadan {
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

	.dindan {
		width: 100%;
		margin-bottom: 10px;
		height: 38px;
		border: 1px solid #e4e4e4;
		font-size: 15px;
	}

	.dindan li {
		float: left;
		border-right: 1px solid #E4E4E4;
		margin: 10px 0px;
		padding: 0px 18px;
		cursor: pointer;
	}

	.active1 {
		color: #9933FF;
	}

	.dindan li:last-child {
		border-right: 0px solid #E4E4E4;
	}

	.dindan1 {
		width: 100%;
		margin-bottom: 10px;
		height: 38px;
		border: 1px solid #e4e4e4;
	}

	.dindan1 li {
		float: left;
		margin: 11px 0px;
		width: 10%;
	}

	a {
		color: #0000FF;
		/* 	color: #333333; */
	}
</style>
