<template>
	<!-- 已完成 -->
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
					<div class="one">
						<div class="one-zuo">
							<p class="pp">订单编号：{{bianhao}}</p>

							<p class="pp">服务项目：{{name}}</p>

							<p class="pp">服务时间：{{time}}</p>

							<p class="pp">服务地点：{{dizhi}}</p>

							<p class="pp">服务门店：{{mendian}}</p>

							<p class="pp">下单时间：{{xiadan}}</p>

							<p class="pp">手机号码：{{phone}}（此为下单时填写的手机号码）</p>

							<p class="pp">预约账户：{{zhanghu1}}（此为下单时使用的账号）</p>

							<p class="pp">订单金额：{{money}}</p>

							<p class="pp">服务费用：{{fuwu}}</p>

							<p class="pp">订单状态：{{zhangtai}}</p>
						</div>
						<div class="one-you">
							<p class="pp">评价信息</p>

							<div class="pp1" style="margin-top: 18px;"><span class="span">服务态度</span>
								<el-rate v-model="value1" :colors="colors" disabled style="display: inline-block;float: left;"></el-rate>
							</div>

							<div class="pp1"><span class="span">满意度</span>
								<el-rate v-model="value1" :colors="colors" disabled style="display: inline-block;float: left;"></el-rate>
							</div>

							<div class="pp1"><span class="span">专业水平</span>
								<el-rate v-model="value1" :colors="colors" disabled style="display: inline-block;float: left;"></el-rate>
							</div>

							<p class="pp" style="margin-bottom: 18px;">评价描述</p>

							<p style="font-size: 13px;margin-bottom: 18px;">{{miaoshu1}}</p>

							<p>{{time1}}</p>
						</div>
					</div>

					<p style="border-bottom: 1px solid #E4E4E4;width: 715px;"></p>

					<p class="pp">
						<p class="pp" style="margin-bottom: 10px;">操作记录</p>
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
					</p>
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
		name: 'index6',
		components: {
			Header,
			Aside
		},
		parent,
		data() {
			return {
				zhanghu: '13800138000',
				bianhao: '201412101234', //订单编号
				name: '项目名称', //服务项目
				time: '2014-12-10 15:30', //服务时间
				dizhi: '广州市白云区汇桥新城13栋14号（到店服务）', //服务地址
				xiadan: '2014-12-08 14:22:30', //下单时间
				mendian: '门店名称', //服务门店
				phone: '13800138000', //手机号码
				zhanghu1: '13800138000', //预约账户
				money: '128.0', //订单金额
				fuwu: '12.8', //服务费用
				zhangtai: '已完成（超过售后期限）', //订单状态
				tableData: [{
					name: '操作者账号', //操作者
					time: '2014-02-11  17:35:20', //操作时间
					dongzuo: '确认订单', //操作动作
					beizhu: '无' //备注
				}],
				value1: 5,
				colors: ['#067fff', '#067fff', '#067fff'],
				miaoshu1: '很好很强大，很好很强大，很好很强大，很好很强大，很好很强大，很好很强大，',
				time1: '2014-12-22  17:00'
			}
		},
		methods: {

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

	.pp {
		margin-top: 23px;
	}

	.one {
		margin-top: 15px;
		width: 100%;
		position: relative;
	}

	.one::after {
		content: '';
		display: block;
		clear: both;
	}

	.one-zuo {
		width: 580px;
		display: inline-block;
		float: left;
		border-right: 1px solid #E4E4E4;
	}

	.one-zuo::after {
		content: '';
		display: block;
		clear: both;
	}

	.one-you {
		width: 310px;
		height: 500px;
		display: inline-block;
		float: left;
		box-sizing: border-box;
		padding: 0px 32px;
	}

	.span {
		width: 85px;
		display: inline-block;
		float: left;
	}

	.pp1 {
		width: 100%;
		height: 20px;
		margin-bottom: 18px;
	}

	.miaoshu {
		width: 580px;
		height: 78px;
		background-color: #e4e4e4;
		box-sizing: border-box;
		padding: 15px 24px 0px 24px;
		font-size: 13px;

	}
</style>
