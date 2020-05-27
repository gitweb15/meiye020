<template>
	<!-- 发现 -->
	<div id="fx">
		<Header1 title="发现"></Header1>
		<div id="content">
			<div class="content-div1">
				<ul class="content-div1-ul">
					<li>
						<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						<p class="content-div1-ul-li-p"><span>美容</span><span>￥99.0</span></p>
					</li>
					<li>
						<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						<p class="content-div1-ul-li-p"><span>美容</span><span>￥99.0</span></p>
					</li>
					<li>
						<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						<p class="content-div1-ul-li-p"><span>美容</span><span>￥99.0</span></p>
					</li>
					<li>
						<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						<p class="content-div1-ul-li-p"><span>美容</span><span>￥99.0</span></p>
					</li>
					<li>
						<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						<p class="content-div1-ul-li-p"><span>美容</span><span>￥99.0</span></p>
					</li>
					<li>
						<van-image width="95%" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
						<p class="content-div1-ul-li-p"><span>美容</span><span>￥99.0</span></p>
					</li>
				</ul>
			</div>
		</div>
		<BiaoQianYe></BiaoQianYe>
	</div>
</template>

<script>
	//引入组件
	import Header1 from '../../components/Header1';
	import BiaoQianYe from '../../components/BiaoQianYe';
	export default {
		name: 'FaXian',
		components: {
			Header1,
			BiaoQianYe
		}
	}
</script>

<style scoped>
	.content-div1{
		background-color: #ffffff;
		padding-bottom: 10px;
	}
	.content-div1-ul {
		padding-left: 10px;
	}

	.content-div1-ul li {
		display: inline-block;
		margin-top: 10px;
		width: 50%;
	}
	.content-div1-ul-li-p{
		background-color: #e4e4e4;
		margin-top: -4px;
		width: 95%;
		height: 28px;
	}
	.content-div1-ul-li-p span{
		font-size: 14px;
		padding: 5px 10px;
		display: inline-block;
	}
	.content-div1-ul-li-p span:nth-child(2){
		float: right;
	}
</style>
