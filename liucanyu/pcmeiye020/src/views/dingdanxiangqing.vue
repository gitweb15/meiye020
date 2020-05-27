<template>
	<!-- 订单管理详情页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<div class="neirong-shang">
					<div class="neirong-shang-zuo">
						<p class="wenzi zhiti">
							订单编号：{{bianhao}}
						</p>
						<p class="wenzi zhiti">
							服务项目：{{name}}
						</p>
						<p class="wenzi zhiti">
							服务时间：{{time}}
						</p>
						<p class="wenzi zhiti">
							服务地点：{{dizhi}}
						</p>
						<p class="wenzi zhiti" style="margin-bottom: 35px;">
							服务门店：{{mendianname}}
						</p>
						<p class="wenzi zhiti">
							下单时间：{{xiandantime}}
						</p>
						<p class="wenzi zhiti">
							手机号码：{{phone}}（此为下单时填写的手机号码）
						</p>
						<p class="wenzi zhiti">
							预约账户：{{phone1}}（此为下单时使用的账号）
						</p>
						<p class="wenzi zhiti">
							订单金额：{{money}}
						</p>
						<p class="wenzi zhiti">
							服务费用：{{fuwu}}
						</p>
						<p class="wenzi zhiti">
							订单状态：
							　<span v-if="valueType=== 1">确认</span>
							<span v-if="valueType=== 2">待确认</span>
						</p>
					</div>
					<div class="neirong-shang-you">
						<p class="wenzi1 zhiti" style="font-size: 14px;">评价信息</p>
						<p class="wenzi1 zhiti" style="font-size: 14px;">服务态度 <span class="xing"><img src="../assets/u200.png" class="img"><img
								 src="../assets/u200.png" class="img"><img src="../assets/u200.png" class="img"><img src="../assets/u200.png"
								 class="img"><img src="../assets/u200.png" class="img"></span></p>
						<p class="wenzi1 zhiti" style="font-size: 14px;">满意度<span class="xing"><img src="../assets/u200.png" class="img"><img
								 src="../assets/u200.png" class="img"><img src="../assets/u200.png" class="img"><img src="../assets/u200.png"
								 class="img"><img src="../assets/u200.png" class="img"></span></p>
						<p class="wenzi1 zhiti" style="font-size: 14px;">专业水平<span class="xing"><img src="../assets/u200.png" class="img"><img
								 src="../assets/u200.png" class="img"><img src="../assets/u200.png" class="img"><img src="../assets/u200.png"
								 class="img"><img src="../assets/u200.png" class="img"></span></p>
						<p class="wenzi1 zhiti" style="font-size: 14px;">评价描述：</p>
						<p class="wenzi1 zhiti">{{pingjia}}</p>
						<p class="wenzi1 zhiti" style="font-size: 14px;">{{time1}}</p><!-- 留言时间 -->
					</div>
				</div>
				<div class="neirong-xia">
					<div class="zise zhiti">
						退款申请：{{tuikuanmiaoshu}}
					</div>
					<p class="biaoti zhiti">
						操作备注
					</p>
					<input type="text" class="text" />
					<div class="anniu-kuang">
						<span class="anniu zhiti" @click="gongneng(1)">确认订单</span>
						<span class="anniu zhiti" @click="gongneng(2)">取消订单</span>
						<span class="anniu zhiti" @click="gongneng(3)">修改预约时间</span>

						<span class="tishi zhiti">待确认订单可执行操作</span>
					</div>
					<div class="anniu-kuang">
						<span class="anniu zhiti" @click="gongneng(4)">核销订单</span>
						<span class="anniu zhiti" @click="gongneng(5)">修改预约时间</span>

						<span class="tishi zhiti">待服务订单可执行操作</span>
					</div>
					<div class="anniu-kuang">
						<span class="anniu zhiti" @click="gongneng(6)">同意退款</span>
						<span class="anniu zhiti" @click="gongneng(7)">拒绝退款</span>

						<span class="tishi zhiti">申请退款订单可执行操作</span>
					</div>
					<div class="anniu-kuang">
						<span class="zhiti beizhu">备注：{{beizhu1}}</span>
					</div>
					<p class="biaoti zhiti">
						操作记录
					</p>
					<!-- <table cellpadding="0" class="zhiti">
						<tr>
							<td>操作者</td>
							<td>操作时间</td>
							<td>操作动作</td>
							<td>备注</td>
						</tr>
						<tr>
							<td>操作者账号</td>
							<td>2014-02-11 17:35:20</td>
							<td>确认订单</td>
							<td>无</td>
						</tr>
					</table> -->
					<el-table :data="tableData" style="width: 720px">
						<el-table-column prop="name" label="操作者">
						</el-table-column>
						<el-table-column prop="time" label="操作时间">
						</el-table-column>
						<el-table-column prop="dongzuo" label="操作动作">
						</el-table-column>
						<el-table-column prop="beizhu" label="备注">
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	export default {
		name: 'dingdanxiangqing',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				bianhao: '201412101234', //订单编号
				name: '项目名称', //服务项目
				time: '2014-12-10 15:30', //服务时间
				dizhi: '广州市白云区汇桥新城13栋14号（到店服务）', //服务地点
				mendianname: '门店名称', //服务门店
				xiandantime: '2014-12-08 14:22:30', //下单时间
				phone: '13800138000', //手机号码
				phone1: '13800138000', //预约账户
				money: '128.0', //订单金额
				fuwu: '12.8', //服务费用
				valueType: 2, //订单状态
				tuikuanmiaoshu: '这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述，这里是客户的退款描述', //退款申请
				pingjia: '很好很强大，很好很强大，很好很强大，很好很强大，很好很强大，很好很强大，', //评价描述
				time1: '2014-12-22 17:00', //留言时间
				beizhu1: '待支付、待评价、已完成、已取消这几种订单，门店无需操作', //备注
				tableData: [{
					name: '操作者账号', //操作者
					time: '2014-02-11  17:35:20', //操作时间
					dongzuo: '确认订单', //操作动作
					beizhu: '无' //备注
				}]
			}
		},
		methods: {
			gongneng(index) {
				var gongneng = index;
				console.log(gongneng)
			}
		}
	}
</script>

<style scoped>
	#zhongxin {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		position: relative;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1058px;
		/* height: 715px; */
		position: relative;
		margin: 0px auto;
		background-color: #fff;
	}

	.content:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong {
		display: inline-block;
		float: left;
		margin-top: 5px;
		width: 895px;
		/* height: 710px; */
		position: relative;
		border-left: 1px solid #e4e4e4;
	}

	.neirong:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong-shang {
		width: 100%;
		position: relative;
		/* height: 400px; */
		margin: 25px 0px 10px;
	}

	.neirong-shang:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong-xia {
		width: 98%;
		position: relative;
		/* height: 400px; */
		margin: 0px 0px 0px 16px;
	}

	..neirong-xia:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong-shang-zuo {
		width: 65%;
		position: relative;
		float: left;
		border-right: 1px solid #e4e4e4;
		margin-bottom: 10px;
	}

	.neirong-shang-zuo:after {
		display: block;
		clear: both;
		content: '';
	}

	.neirong-shang-you {
		width: 34.8%;
		position: relative;
		float: left;
	}

	.neirong-shang-you:after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.wenzi {
		font-size: 14px;
		margin: 0px 0px 22px 12px;
	}

	.wenzi:last-child {
		margin: 0px 0px 0px 12px;
	}

	.xing {
		float: right;
		margin-right: 53px;
	}

	.img {
		width: 22px;
		height: 22px;
	}

	.wenzi1 {
		margin: 0px 0px 22px 32px;
		width: 80%;
	}

	.wenzi1:first-child {
		margin-top: 10px;
	}

	.zise {
		width: 570px;
		height: 80px;
		background-color: #e4e4e4;
		box-sizing: border-box;
		padding: 19px;
	}

	.biaoti {
		margin: 20px 0px 8px;
		font-size: 14px;
	}

	.text {
		width: 570px;
		height: 61px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
	}

	.anniu-kuang {
		padding: 22px 0px;
		width: 720px;
		border-bottom: 1px solid #E4E4E4;
	}

	.anniu {
		display: inline-block;
		width: 100px;
		height: 25px;
		color: #000;
		border: 1px solid #797979;
		cursor: pointer;
		text-align: center;
		line-height: 28px;
		margin-right: 22px;
		cursor: pointer;
	}

	.tishi {
		float: right;
		margin-right: 195px;
		line-height: 32px;
		width: 145px;
	}

	table {
		width: 720px;
		position: relative;
	}

	table tr td {
		width: 25%;
		padding-bottom: 10px;
	}
</style>
