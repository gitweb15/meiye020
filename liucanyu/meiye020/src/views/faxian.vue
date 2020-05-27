<template>
	<!-- 发现 -->
	<div id="faxian">
		<!-- 头部 -->
		<Header2 title="发现"></Header2>
		<!-- 商品加载 -->
		<ul class="faxian">
			<li v-for="n in list" :key="n.index">
				<!-- <img src="../assets/商品.jpg" class="u418" /> -->
				<van-image width="85%" fit="cover" :src="n.tupian" class="u418" />
				<!-- :src="n.tupian" -->
				<p class="jiage">
					<span class="jiage-zuo">{{n.title}}</span>
					<span class="jiage-you">￥{{n.jiage}}</span>
				</p>
			</li>
		</ul>
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header2 from '../components/header2.vue';
	import Footer from '../components/weibu.vue';
	// import backImg from "../assets/商品.jpg";
	export default {
		name: 'faxian',
		components: {
			Header2,
			Footer
		},
		data() {
			return {
				list: [{
						title: '美容', //项目名字
						jiage: '99.0', //价格
						tupian: '../img/商品.89f30fa9.jpg' //图片
					},
					{
						title: '美容',
						jiage: '99.0',
						tupian: '../img/商品.89f30fa9.jpg'
					},
					{
						title: '美容',
						jiage: '99.0',
						tupian: '../img/商品.89f30fa9.jpg'
					},
					{
						title: '美容',
						jiage: '99.0',
						tupian: '../img/商品.89f30fa9.jpg'
					},
					{
						title: '美容',
						jiage: '99.0',
						tupian: '../img/商品.89f30fa9.jpg'
					},
					{
						title: '美容',
						jiage: '99.0',
						tupian: '../img/商品.89f30fa9.jpg'
					}
				]
			}
		}
	}
</script>

<style scoped>
	#faxian {
		position: relative;
		width: 100%;
	}

	.faxian {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		padding: 0px 0px 0px 30px;
	}

	.faxian li {
		float: left;
		/* width: 145px; */
		width: 50%;
		height: 145px;
		/* padding: 25px 25px 0px 0px; */
		margin-top: 15px;
		margin-bottom: 5px;
		overflow: hidden;
		position: relative;
	}

	.u418 {
		width: 100%;
		height: 100%;
	}

	.jiage {
		width: 85%;
		height: 21px;
		position: absolute;
		background: url(../../public/image/u420.png) no-repeat;
		bottom: 0px;
		background-size: 100% 100%;
	}

	.jiage-zuo,
	.jiage-you {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.jiage-zuo {
		float: left;
		margin: 3px 2px 2px 6px;
	}

	.jiage-you {
		float: right;
		margin: 3px 5px 3px 3px;
	}
</style>
