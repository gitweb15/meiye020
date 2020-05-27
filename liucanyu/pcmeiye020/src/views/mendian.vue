<template>
	<!-- 门店信息页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<p class="biaoti">门店设置</p>
				<div class="one">
					<span class="one-zuo zhiti">登录帐号</span>
					<span class="one-zhong zhiti" :v-model="zhanghao">{{zhanghao}}</span>
					<!-- <span class="one-you zhiti">修改密码</span> -->
					<el-button type="text" @click="dialogVisible = true" class="one-you zhiti">修改密码</el-button>

					<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
						<el-input v-model="zhanghao1"></el-input>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false;">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false ; queidng()">确 定</el-button>
						</span>
					</el-dialog>
				</div>
				<div class="one">
					<span class="one-zuo zhiti">门店地址</span>
					<span class="one-zhong zhiti" :v-model="dizhi">{{dizhi}}</span>
					<!-- <span class="one-you zhiti">修改</span> -->
					<el-button type="text" @click="dialogVisible1 = true" class="one-you zhiti">修改</el-button>

					<el-dialog title="提示" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose">
						<el-input v-model="dizhi1"></el-input>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible1 = false;">取 消</el-button>
							<el-button type="primary" @click="dialogVisible1 = false ; queidng1()">确 定</el-button>
						</span>
					</el-dialog>
				</div>
				<div class="one">
					<span class="one-zuo zhiti">门店坐标</span>
					<span class="one-zhong zhiti" :v-model="zuobiao">{{zuobiao}}</span>
					<!-- <span class="one-you zhiti">修改</span> -->
					<el-button type="text" @click="dialogVisible2 = true" class="one-you zhiti">修改</el-button>

					<el-dialog title="提示" :visible.sync="dialogVisible2" width="30%" :before-close="handleClose">
						<el-input v-model="zuobiao1"></el-input>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible2 = false;">取 消</el-button>
							<el-button type="primary" @click="dialogVisible2 = false ; queidng2()">确 定</el-button>
						</span>
					</el-dialog>
				</div>
				<div class="one">
					<span class="one-zuo zhiti">门店电话</span>
					<span class="one-zhong zhiti" :v-model="phone">{{phone}}</span>
					<!-- <span class="one-you zhiti">修改</span> -->
					<el-button type="text" @click="dialogVisible3 = true" class="one-you zhiti">修改</el-button>

					<el-dialog title="提示" :visible.sync="dialogVisible3" width="30%" :before-close="handleClose">
						<el-input v-model="phone1"></el-input>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible3 = false;">取 消</el-button>
							<el-button type="primary" @click="dialogVisible3 = false ; queidng3()">确 定</el-button>
						</span>
					</el-dialog>
				</div>
				<div class="one">
					<p class="zhiti">以下信息修改需要审核才能生效</p>
					<p style="margin-top: 25px;">
						<span class="one-zuo zhiti" style="line-height: 69px;">门店头像</span>
						<span class="one-zhong zhiti"><img :src="backImg" style="width: 60px;height: 60px;"></span>
						<span class="one-you zhiti" style="line-height: 69px;">修改</span>
					</p>
				</div>
				<div class="one">
					<span class="one-zuo zhiti">门店运营者姓名</span>
					<span class="one-zhong zhiti" :v-model="xingming">{{xingming}}</span>
					<!-- <span class="one-you zhiti">修改</span> -->
					<el-button type="text" @click="dialogVisible4 = true" class="one-you zhiti">修改</el-button>

					<el-dialog title="提示" :visible.sync="dialogVisible4" width="30%" :before-close="handleClose">
						<el-input v-model="xingming1"></el-input>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible4 = false;">取 消</el-button>
							<el-button type="primary" @click="dialogVisible4 = false ; queidng4()">确 定</el-button>
						</span>
					</el-dialog>
				</div>
				<div class="one">
					<span class="one-zuo zhiti">门店运营者电话</span>
					<span class="one-zhong zhiti" :v-model="dianhua">{{dianhua}}</span>
					<!-- <span class="one-you zhiti">修改</span> -->
					<el-button type="text" @click="dialogVisible5 = true" class="one-you zhiti">修改</el-button>

					<el-dialog title="提示" :visible.sync="dialogVisible5" width="30%" :before-close="handleClose">
						<el-input v-model="dianhua1"></el-input>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible5 = false;">取 消</el-button>
							<el-button type="primary" @click="dialogVisible5 = false ; queidng5()">确 定</el-button>
						</span>
					</el-dialog>
				</div>
				<div class="one">
					<span class="one-zuo zhiti">门店介绍</span>
					<span class="one-zhong zhiti" style="font-size: 13px;">{{jieshao}}</span>
					<span class="one-you zhiti" style="cursor: auto;">审核中</span>
				</div>
				<div class="one">
					<span class="one-zuo zhiti">法人委托书</span>
					<span class="one-zhong zhiti tu" style="margin-left: 60px;">
						<img v-for="n in tupian" :key="n.index" :src="n.tupian1" class="img">
					</span>
					<span class="one-you zhiti" style="line-height: 86px;">修改</span>
				</div>
				<span class="xiugai" @click="tijiao">提交修改</span>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	// import backImg from "../img/美容店.102d24f4.jpg";

	export default {
		name: 'mendian',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				dialogVisible: false, //判断修改登录账号弹出框
				dialogVisible1: false, //判断修改门店地址弹出框
				dialogVisible2: false, //判断修改门店坐标弹出框
				dialogVisible3: false, //判断修改门店电话弹出框
				dialogVisible4: false, //判断修改门店运营者姓名弹出框
				dialogVisible5: false, //判断修改门店运营者电话弹出框

				zhanghao: 'meirong@163.com', //登录帐号
				zhanghao1: 'meirong@163.com', //修改登录账号

				dizhi: '白云区汇侨路10212A', //门店地址
				dizhi1: '白云区汇侨路10212A', //修改门店地址

				zuobiao: '经度XXX，维度XX', //门店坐标
				zuobiao1: '经度XXX，维度XX', //修改门店坐标

				phone: '020-12345678', //门店电话
				phone1: '020-12345678', //修改门店电话

				xingming: '', //门店运营者姓名
				xingming1: '', //修改门店运营者姓名

				dianhua: '', //门店运营者电话
				dianhua1: '', //修改门店运营者电话

				backImg: '/img/美容店.102d24f4.jpg', //门店头像

				tupian: [{
						tupian1: 'data:image/png;base64,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'
					},
					{
						tupian1: 'data:image/png;base64,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'
					}
				],

				//门店介绍
				jieshao: '这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，这是介绍，',
			}
		},
		methods: {
			//判断弹出框
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},

			//确认修改密码
			queidng() {
				this.zhanghao = this.zhanghao1;
			},
			//确认修改地址
			queidng1() {
				this.dizhi = this.dizhi1;
			},
			//确认修改门店坐标
			queidng2() {
				this.zuobiao = this.zuobiao1;
			},
			//确认修改门店电话
			queidng3() {
				this.phone = this.phone1;
			},
			//确认修改门店运营者姓名
			queidng4() {
				this.xingming = this.xingming1;
			},
			//确认修改门店运营者电话
			queidng5() {
				this.dianhua = this.dianhua1;
			},
			//提交信息
			tijiao() {
				var zhanghao = this.zhanghao;
				var dizhi = this.dizhi;
				var zuobiao = this.zuobiao;
				var phone = this.phone;
				var backImg = this.backImg;
				var xingming = this.xingming
				var dianhua = this.dianhua;
				var tupian = this.tupian;

				console.log(zhanghao, dizhi, zuobiao, phone, backImg, xingming, dianhua, tupian)
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


	.biaoti {
		width: 850px;
		float: right;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 18px;
		color: #666666;

		margin-top: 20px;
	}

	.one {
		width: 850px;
		float: right;
		padding: 36px 0px;
		border-bottom: 1px #E4E4E4 solid;
	}

	.one-zuo {
		float: left;
	}

	.one-zhong {
		width: 457px;
		margin-left: 108px;
		float: left;
	}

	.one-you {
		float: right;
		margin-right: 43px;
		cursor: pointer;
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		letter-spacing: normal;
		color: #333333;
	}

	.xiugai {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
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

		margin: 44px 0px 32px 106px;

		line-height: 23px;
		cursor: pointer;
	}

	.img:first-child {
		margin-left: 0px;
	}

	.img {
		width: 140px;
		height: 100px;
		margin-left: 20px;
	}
</style>
