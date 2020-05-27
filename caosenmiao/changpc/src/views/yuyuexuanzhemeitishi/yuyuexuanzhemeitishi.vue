<template>
	<!-- 选择美体师 -->
	<div id="xzmts">
		<Header title="选择美体师"></Header>
		<div id="content">
			<div class="content-div1">
				<ul class="content-div1-ul">
					<router-link tag="li" to="/YuYueXiaDan">
						<a href="###">
							<p>
								<van-image width="4rem" height="4rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>美体师名称</span>
								<span>110米</span><br />
								<span>守时5.0</span>
								<span>专业5.0</span>
								<span>沟通5.0</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/YuYueXiaDan">
						<a href="###">
							<p>
								<van-image width="4rem" height="4rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>美体师名称</span>
								<span>110米</span><br />
								<span>守时5.0</span>
								<span>专业5.0</span>
								<span>沟通5.0</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/YuYueXiaDan">
						<a href="###">
							<p>
								<van-image width="4rem" height="4rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>美体师名称</span>
								<span>110米</span><br />
								<span>守时5.0</span>
								<span>专业5.0</span>
								<span>沟通5.0</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/YuYueXiaDan">
						<a href="###">
							<p>
								<van-image width="4rem" height="4rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>美体师名称</span>
								<span>110米</span><br />
								<span>守时5.0</span>
								<span>专业5.0</span>
								<span>沟通5.0</span>
							</p>
						</a>
					</router-link>
					<router-link tag="li" to="/YuYueXiaDan">
						<a href="###">
							<p>
								<van-image width="4rem" height="4rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
							</p>
							<p>
								<span>美体师名称</span>
								<span>110米</span><br />
								<span>守时5.0</span>
								<span>专业5.0</span>
								<span>沟通5.0</span>
							</p>
						</a>
					</router-link>
				</ul>
			</div>
			<div class="content-div2">
				没有更多了
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	import BiaoQianYe from '../../components/BiaoQianYe';
	export default {
		name: 'XuanZeMeiTiShi',
		components: {
			Header,
			BiaoQianYe
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
	}

	.content-div1-ul li a {
		display: block;
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 5px;

	}

	.content-div1-ul li~li {
		border-top: 1px solid #e4e4e4;

	}

	.content-div1-ul li a p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div1-ul li a p:nth-child(2) {
		margin-left: 10px;
		width: 72%;
	}

	.content-div1-ul li a p span {
		display: inline-block;
		font-size: 12px;
		color: #000000;
	}

	.content-div1-ul li a p span:nth-child(1) {
		font-size: 14px;
	}

	.content-div1-ul li a p span:nth-child(2) {
		float: right;
		font-size: 14px;
	}

	.content-div1-ul li a p span:nth-child(4) {
		margin-top: 20px;
		color: #999999;
	}

	.content-div1-ul li a p span:nth-child(5) {
		margin-left: 8px;
		color: #999999;
	}

	.content-div1-ul li a p span:nth-child(6) {
		margin-left: 8px;
		color: #999999;
	}

	.content-div2 {
		text-align: center;
		font-size: 14px;
		margin-top: 10px;
		color: #999999;
	}
</style>
