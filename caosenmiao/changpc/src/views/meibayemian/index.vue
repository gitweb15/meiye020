<template>
	<!-- 美吧 -->
	<div id="mb">
		<Header2 title="美容店"></Header2>
		<div id="content">
			<div class="content-div1">
				<van-image width="100%" height="200px" fit="contain" src="https://img.yzcdn.cn/vant/logo.png" />
			</div>
			<div class="content-div2">
				<ul class="content-div2-ul">
					<router-link tag="li" to="/meifudaodian">
						<a href="###">
							<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						</a>
						<p class="content-div2-ul-li-p">美肤到店</p>
					</router-link>
					<router-link tag="li" to="/meitishangmen">
						<a href="###">
							<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						</a>
						<p class="content-div2-ul-li-p">美体上门</p>
					</router-link>
					<router-link tag="li" to="/fengcai">
						<a href="###">
							<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						</a>
						<p class="content-div2-ul-li-p">门店风采</p>
					</router-link>
					<router-link tag="li" to="/meitishi">
						<a href="###">
							<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						</a>
						<p class="content-div2-ul-li-p">美体师风采</p>
					</router-link>
				</ul>
			</div>
		</div>
		<BiaoQianYe></BiaoQianYe>
	</div>
</template>

<script>
	//引入组件
	import Header2 from '../../components/Header2';
	import BiaoQianYe from '../../components/BiaoQianYe';
	export default {
		name: 'MeiBa',
		components: {
			Header2,
			BiaoQianYe
		}
	}
</script>

<style scoped>
	.content-div1 {
		width: 100%;
	}

	.content-div2 {
		background-color: #ffffff;
	}

	.content-div2-ul {
		padding-left: 10px;
	}

	.content-div2-ul li {
		display: inline-block;
		margin-top: 10px;
		width: 50%;
		position: relative;
	}

	.content-div2-ul-li-p {
		font-size: 14px;
		text-align: center;
		background-color: #e4e4e4;
		width: 95%;
		margin-top: -4px;
		padding-top: 2px;
		padding-bottom: 2px;
	}
</style>
