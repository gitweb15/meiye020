<template>
	<!-- 美体师主页 -->
	<div id="mtszy">
		<Header title="美体师项目"></Header>
		<div id="content">
			<div class="content-div1">
				<router-link to="/jianjie">
					<a href="###">
						<p>
							<van-image width="3.5rem" height="3.5rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						</p>
						<p>
							<span>美体师姓名<p class="content-div1-p">v</p></span><br />
							<span>专业:5.0</span>
							<span>守时:5.0</span>
							<span>沟通:5.0</span>
						</p>
						<p>
							<van-icon name="arrow" color="#999999" />
						</p>
					</a>
				</router-link>
			</div>
			<div class="content-div2">
				我提供的项目
			</div>
			<div class="content-div3">
				<ul class="content-div3-ul">
					<router-link tag="li" to="/xiangmuxiangqingfist1">
						<a href="###">
							<p>
								<van-image width="6.25rem" height="6.25rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>项目名称</span><br />
								<span>
									疏肝理气、预防乳腺疾病；雕塑身<br />
									形，疏通胸部经络；调节内分泌，<br />
									青春永驻
								</span><br />
								<span>￥128.0</span>
								<span>60分钟</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/xiangmuxiangqingfist1">
						<a href="###">
							<p>
								<van-image width="6.25rem" height="6.25rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>项目名称</span><br />
								<span>
									疏肝理气、预防乳腺疾病；雕塑身<br />
									形，疏通胸部经络；调节内分泌，<br />
									青春永驻
								</span><br />
								<span>￥128.0</span>
								<span>60分钟</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/xiangmuxiangqingfist1">
						<a href="###">
							<p>
								<van-image width="6.25rem" height="6.25rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>项目名称</span><br />
								<span>
									疏肝理气、预防乳腺疾病；雕塑身<br />
									形，疏通胸部经络；调节内分泌，<br />
									青春永驻
								</span><br />
								<span>￥128.0</span>
								<span>60分钟</span>
							</p>
						</a>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'MeiTiShiZhuYe',
		components: {
			Header
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
	}

	.content-div1-p {
		color: #0000FF;
		margin-left: 10px;
		font-size: 16px;
		font-weight: bold;
		margin-top: -10px;
	}

	.content-div1 a {
		display: block;
		padding-left: 5px;
		padding-top: 7.5px;
		padding-bottom: 5px;
	}

	.content-div1 a p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div1 a p:nth-child(2) {
		margin-left: 10px;
	}

	.content-div1 a p:nth-child(3) {
		float: right;
		padding-top: 20px;
		margin-right: 20px;
	}

	.content-div1 a p span {
		font-size: 14px;
		display: inline-block;
		color: #000000;
	}

	.content-div1 a p span:nth-child(1) {
		margin-bottom: 15px;
	}

	.content-div1 a p span:nth-child(3) {
		font-size: 12px;
	}

	.content-div1 a p span:nth-child(4) {
		font-size: 12px;
		margin-left: 8px;
	}

	.content-div1 a p span:nth-child(5) {
		font-size: 12px;
		margin-left: 8px;
	}

	.content-div2 {
		margin-left: 10px;
		margin-bottom: 10px;
		margin-top: 10px;
		font-size: 14px;
	}

	.content-div3 {
		background-color: #ffffff;
	}

	.content-div3-ul li a {
		display: block;
		margin-left: 10px;
		padding-top: 10px;
		padding-bottom: 6px;
	}

	.content-div3-ul li~li a {
		border-top: 1px solid #e4e4e4;
	}

	.content-div3-ul li a p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div3-ul li a p:nth-child(2) {
		margin-left: 10px;
	}

	.content-div3-ul li a p span {
		display: inline-block;
		font-size: 12px;
		color: #000000;
	}

	.content-div3-ul li a p span:nth-child(1) {
		font-size: 14px;
	}

	.content-div3-ul li a p span:nth-child(3) {
		margin-top: 8px;
	}

	.content-div3-ul li a p span:nth-child(5) {
		margin-top: 8px;
		color: red;
	}

	.content-div3-ul li a p span:nth-child(6) {
		margin-left: 10px;
	}
</style>
