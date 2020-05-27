<template>
	<!-- 发现 -->
	<div id="wode">
		<!-- 头部 -->
		<Header2 title="我的"></Header2>
		<!-- 登录显示 -->
		<div class="dengLu">
			<div class="touxiang">
				<img src="../assets/touxiang.png" width="100%" style="border-radius: 50%;">
				<!-- :src="tupian" -->
			</div>
			<div class="name">
				{{haoma}}
			</div>
		</div>
		<div class="one">
			<van-cell title="代金券" is-link url="/daijinquan" />
			<img src="../../public/image/u113.png" class="xian" />
			<van-cell title="常用地址" is-link url="/cydizhi" />

			<!-- <router-link tag="div" to="/daijinquan">
				<img src="../../public/image/u492.png" class="yuan">
				<span class="neirong">代金券</span>
				<img src="../../public/image/u155.png" class="jiantou">
			</router-link>
			<img src="../../public/image/u113.png" class="xian" />
			<router-link tag="div" to="/cydizhi">
				<img src="../../public/image/u492.png" class="yuan">
				<span class="neirong">常用地址</span>
				<img src="../../public/image/u155.png" class="jiantou">
			</router-link> -->
		</div>
		<div class="two">
			<van-cell title="意见反馈" is-link url="/yijian" />
			<img src="../../public/image/u113.png" class="xian" />
			<van-cell title="联系内容" is-link url="" />
			<img src="../../public/image/u113.png" class="xian1" />
			<van-cell title="版本更新" is-link url="" />

			<!-- <router-link tag="div" to="/yijian">
				<img src="../../public/image/u492.png" class="yuan">
				<span class="neirong">意见反馈</span>
				<img src="../../public/image/u155.png" class="jiantou">
			</router-link>
			<img src="../../public/image/u113.png" class="xian" />
			<div>
				<img src="../../public/image/u492.png" class="yuan">
				<span class="neirong">联系内容</span>
				<img src="../../public/image/u155.png" class="jiantou">
			</div>
			<img src="../../public/image/u113.png" class="xian1" />
			<div>
				<img src="../../public/image/u492.png" class="yuan">
				<span class="neirong">版本更新</span>
				<img src="../../public/image/u155.png" class="jiantou">
			</div> -->
		</div>
		<router-link tag="div" to="/denglu" class="zhuxiao">
			注销
		</router-link>
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header2 from '../components/header2.vue';
	import Footer from '../components/weibu.vue';
	export default {
		name: 'wode',
		components: {
			Header2,
			Footer
		},
		data() {
			return {
				haoma: '13800138000', //账号
				tupian: '../img/touxiang.966fe5a4.png', //头像
			}
		}
	}
</script>

<style scoped>
	#wode {
		position: relative;
		width: 100%;
		height: 600px;
		background-color: rgba(229, 229, 229, 1);
	}

	.dengLu {
		background-color: #fff;
		width: 100%;
		height: 129px;
		margin: 1px 0px 8px 0px;
	}

	.touxiang {
		margin: 0px auto;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 1px #f0f0f0 solid;
		position: relative;
		top: 14px;
	}

	.name {
		margin: 0px auto;
		width: 83px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		position: relative;
		top: 29px;
		left: 2px;
	}

	.one {
		position: relative;
		margin-bottom: 8px;
	}

	.two {
		position: relative;
		margin-bottom: 10px;
	}

	.xian {
		position: absolute;
		top: 49px;
		right: 0px;
		/* width: 95%; */
		width: 98%;
	}

	.xian1 {
		position: absolute;
		top: 98px;
		right: 0px;
		/* width: 95%; */
		width: 98%;
		height: 2px;
	}

	.one div,
	.two div {
		background-color: #fff;
		position: relative;
		width: 100%;
		height: 50px;
		border: 0;
		cursor: pointer;
	}

	.yuan {
		position: relative;
		top: 12px;
		left: 22px;
	}

	.neirong {
		position: relative;
		top: 5px;
		left: 40px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.jiantou {
		/* width: 10%;
		height: 51%; */
		width: 37.5px;
		height: 25.5px;
		float: right;
		margin: 13px 20px 0px 0px;
	}

	.zhuxiao {
		position: relative;
		width: 100%;
		height: 40px;
		background-color: #fff;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
		letter-spacing: normal;
		color: #333333;
		text-align: center;
		line-height: 42px;
		cursor: pointer;
	}
</style>
