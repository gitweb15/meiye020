<template>
	<!-- 美体上门 -->
	<div id="mtsm">
		<Header title="美体项目"></Header>
		<div id="content">
			<div class="content-div1">
				<ul class="content-div1-ul">
					<router-link tag="li" to="/xiangmuxiangqingfist1">
						<a href="###">
							<p>
								<van-image width="7rem" height="7rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>项目名称</span><br />
								<span>
									疏肝理气、预防乳腺疾病；<br />
									雕塑身形，疏通胸部经络；<br />
									调节内分泌，青春永驻
								</span><br />
								<span>￥128.0</span>
								<span>60分钟</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/xiangmuxiangqingfist1">
						<a href="###">
							<p>
								<van-image width="7rem" height="7rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>项目名称</span><br />
								<span>
									疏肝理气、预防乳腺疾病；<br />
									雕塑身形，疏通胸部经络；<br />
									调节内分泌，青春永驻
								</span><br />
								<span>￥128.0</span>
								<span>60分钟</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/xiangmuxiangqingfist1">
						<a href="###">
							<p>
								<van-image width="7rem" height="7rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>项目名称</span><br />
								<span>
									疏肝理气、预防乳腺疾病；<br />
									雕塑身形，疏通胸部经络；<br />
									调节内分泌，青春永驻
								</span><br />
								<span>￥128.0</span>
								<span>60分钟</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/xiangmuxiangqingfist1">
						<a href="###">
							<p>
								<van-image width="7rem" height="7rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>项目名称</span><br />
								<span>
									疏肝理气、预防乳腺疾病；<br />
									雕塑身形，疏通胸部经络；<br />
									调节内分泌，青春永驻
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
		name: 'MeiTiShangMen',
		components: {
			Header
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
		padding-left: 10px;
		padding-top: 5px;
	}

	.content-div1-ul li~li {
		border-top: 1px solid #e4e4e4;
	}

	.content-div1-ul li a {
		display: block;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.content-div1-ul li a p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div1-ul li a p:nth-child(2) {
		margin-left: 10px;
	}

	.content-div1-ul li a p span {
		font-size: 12px;
		display: inline-block;
		color: #000000;
	}

	.content-div1-ul li a p span:nth-child(1) {
		font-size: 14px;
	}

	.content-div1-ul li a p span:nth-child(5) {
		color: red;
	}

	.content-div1-ul li a p span:nth-child(6) {
		margin-left: 15px;
	}

	.content-div1-ul li a p span~span {
		margin-top: 10px;
	}
</style>
