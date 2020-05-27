<template>
	<!-- 服务详情 -->
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
					<router-link tag="li" to="/mrdzhanghu">
						账户信息
					</router-link>
					<router-link tag="li" to="/mrddingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/mrdziji">
						资金信息
					</router-link>
					<router-link tag="li" to="/mrdfuwu" class="active">
						服务管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<p class="p" style="margin-top: 30px;"><span class="span">项目编号：</span><span>{{bianhao}}</span></p>
					<p class="p"><span class="span">项目名称：</span><span>{{name}}</span></p>
					<p class="p"><span class="span">副标题：</span><span>{{funame}}</span></p>
					<p class="p"><span class="span">项目价格：</span><span>{{money}}</span></p>
					<p class="p"><span class="span">服务时长：</span><span>{{time}}</span></p>
					<p class="p"><span class="span">创建时间：</span><span>{{time1}}</span></p>
					<p class="p"><span class="span">审核状态：</span><span>{{zhuangti}}</span></p>
					<p class="p"><span class="span">项目主图：</span></p>
					<div>
						<img v-for="n in tupian" :key="n.index" :src="n.tupian1" class="img">
					</div>
					<p class="p" style="margin-top:15px;"><span class="span">项目简介：</span></p>
					<div style="width: 350px;">
						<textarea v-model="textarea" :rows="10" disabled style="background-color: #fff;width: 100%;"></textarea>
					</div>
					<el-button plain size="mini" style="padding: 7px 36px;margin: 25px 0px 90px 0px;" @click="click">审核通过</el-button>
					<el-button plain size="mini" style="padding: 7px 36px;margin: 25px 0px 90px 25px;" @click="open">审核失败</el-button>
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
		name: 'mrsfuwu',
		components: {
			Header,
			Aside,
		},
		parent,
		data() {
			return {
				zhanghu: 'kang@kzj365.com', //账户
				bianhao: '201402142345', //项目编号
				name: '项目名称', //项目名称
				funame: '副标题', //副标题
				money: '80', //项目价格
				time: '80', //服务时长
				time1: '2014-12-10 14:22:12', //创建时间
				zhuangti: '审核状态', //审核状态
				//项目主图
				tupian: [{
						tupian1: 'data:image/png;base64,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'
					},
					{
						tupian1: 'data:image/png;base64,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'
					},
					{
						tupian1: 'data:image/png;base64,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'
					}
				],
				textarea: '项目简介', //项目简介
			}
		},
		methods: {
			// 返回服务页面
			click: function() {
				var bianhao = this.bianhao; //项目编号
				var name = this.name; //项目名称
				var funame = this.funame; //副标题
				var money = this.money; //项目价格
				var time = this.time; //服务时长
				var time1 = this.time1; //创建时间
				var zhuangti = this.zhuangti; //审核状态
				var tupian = this.tupian; //项目主图
				var textarea = this.textarea //项目简介
				console.log(bianhao, name, funame, money, time, time1, zhuangti, tupian, textarea)
				this.$router.push('/mrdfuwu')
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
				// this.$router.push('')
			},
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

	.p {
		margin-bottom: 18px;
	}

	.span {
		width: 80px;
		display: inline-block;
	}

	.img {
		margin-left: 20px;
	}

	.img:first-child {
		margin: 0;
	}
</style>
