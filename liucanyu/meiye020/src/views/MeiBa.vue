<template>
	<!-- 初始化首页 -->
	<div id="meiba">
		<!-- 头部 -->
		<Header1></Header1>
		<div id="body1">
			<div class="banner" style="overflow: hidden;">
				<!-- <div class="banner1">banner</div> -->
				<img src="../../public/image/首页.jpg" class="banner1">
				<!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				  <van-swipe-item>
					  <img src="../../public/image/shangpin1.png" style="width: 100%;">
				  </van-swipe-item>                                                   
				  <van-swipe-item>                                                    
					  <img src="../../public/image/shangpin2.jpg" style="width: 100%;">
				  </van-swipe-item>                                                   
				  <van-swipe-item>                                                    
					  <img src="../../public/image/shangpin3.jpg" style="width: 100%;">
				  </van-swipe-item>                                                   
				  <van-swipe-item>                                                    
					  <img src="../../public/image/shangpin4.jpg" style="width: 100%;">
				  </van-swipe-item>
				</van-swipe> -->
			</div>
			<!-- 选择不同的商品服务 -->
			<div class="list">
				<van-row>
					<van-col span="12">
						<router-link tag="div" to="/meifuShouye" class="kuan kuan1">
							<p class="p1"><span style="text-decoration:none;">美肤到店</span></p>
						</router-link>
					</van-col>
					<van-col span="12">
						<router-link tag="div" to="/meitiShouye" class="kuan kuan2">
							<p class="p2"><span style="text-decoration:none;">美体上门</span></p>
						</router-link>
					</van-col>
				</van-row>
				<van-row>
					<van-col span="12">
						<router-link tag="div" to="/mendian" class="kuan kuan3">
							<p class="p3"><span style="text-decoration:none;">门店风采</span></p>
						</router-link>
					</van-col>
					<van-col span="12">
						<router-link tag="div" to="/meitishi" class="kuan kuan4">
							<p class="p4"><span style="text-decoration:none;">美体师风采</span></p>
						</router-link>
					</van-col>
				</van-row>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../components/header1.vue';
	import Footer from '../components/weibu.vue';
	export default {
		name: 'meiba',
		components: {
			Header1,
			Footer
		}
	}
</script>

<style scoped>
	#body1 {
		position: relative;
		width: 100%;
	}

	.banner {
		width: 100%;
		/* height:250px; */
		/* height: 165px; */
		/* 	background: url(../../public/image/首页.jpg) no-repeat;
		background-size: 100% 100%;
		background-position: 6px 18px; */
	}

	.banner1 {
		/* font-size: 16px;
		background-color: #fff;
		margin: 0 auto;
		width: 51px;
		position: relative;
		top: 72px; */
		width: 103%;
	}

	.kuan {
		width: 83%;
		text-align: center;
		height: 145px;
		margin: 20px auto;
		line-height: 145px;
		border: 2px #e3e3e3 solid;
	}
	
	span{
		color: #fff;
		font-size:16px ;
	}
	
	.kuan1{
		background: url(../../public/image/shangpin2.jpg) no-repeat;
		background-size: 100% 100%;
	}
	
	.kuan2{
		background: url(../../public/image/shangpin1.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.kuan3{
		background: url(../../public/image/shangpin4.jpg) no-repeat;
		background-size: 100% 100%;
	}
	
	.kuan4{
		background: url(../../public/image/shangpin3.jpg) no-repeat;
		background-size: 100% 100%;
	}
</style>
