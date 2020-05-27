<template>
	<!-- 美体师简介 -->
	<div id="mtsjj">
		<Header title="美体师简介"></Header>
		<div id="content">
			<div class="content-div1">
				<a href="###">
					<p>
						<van-image width="3.5rem" height="3.5rem" fit="cover" src="https://img.yzcdn.cn/vant/logo.png" />
					</p>
					<p>
						<span>美体师姓名</span><br />
						<span>专业:5.0</span>
						<span>守时:5.0</span>
						<span>沟通:5.0</span>
					</p>
				</a>
			</div>
			<div class="content-div2">
				<p><span>证件信息</span><span>440*************1234</span></p>
				<p>
					<van-tag color="#ffe1e1">已认证</van-tag>
				</p>
			</div>
			<div class="content-div3">
				个人简介
			</div>
			<div class="content-div4">
				<p>所属单位：XXXXXXXXXX</p>
				<p>简介信息：这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，这是简介，</p>
			</div>
			<div class="content-div5">
				来自用户的评价
			</div>
			<div class="content-div6">
				<van-panel title="1380****138" status="2014-12-02  17:00">
					<p class="van-panel-p1">美容师很细心，服务很周到，技术也不错容师很细心，服务很周到，技术也不错</p>
					<p class="van-panel-p2"><span>专业5.0 </span><span>沟通5.0</span><span>守时5.0</span></p>
				</van-panel>
			</div>
			<div class="content-div7">
				<van-panel title="1380****138" status="2014-12-02  17:00">
					<p class="van-panel-p1">美容师很细心，服务很周到，技术也不错容师很细心，服务很周到，技术也不错</p>
					<p class="van-panel-p2"><span>专业5.0 </span><span>沟通5.0</span><span>守时5.0</span></p>
				</van-panel>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'MeiTiShiJianJie',
		components: {
			Header
		}
	}
</script>

<style scoped>
	.content-div1 {
		background-color: #ffffff;
	}

	.content-div1 a {
		display: block;
		padding-left: 10px;
		padding-top: 15px;
		padding-bottom: 10px;
	}

	.content-div1 a p {
		display: inline-block;
		vertical-align: middle;
	}

	.content-div1 a p:nth-child(2) {
		margin-left: 10px;
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
		margin-top: 5px;
		padding-left: 10px;
		padding-bottom: 10px;
		padding-top: 10px;
		background-color: #ffffff;
	}

	.content-div2 p {
		display: inline-block;
		font-size: 14px;
	}

	.content-div2 p:nth-child(2) {
		margin-left: 10px;
	}

	.content-div2 p span:nth-child(2) {
		margin-left: 10px;
	}

	.content-div3 {
		margin-left: 10px;
		margin-bottom: 10px;
		margin-top: 10px;
		font-size: 14px;
	}

	.content-div4 {
		background-color: #ffffff;
		font-size: 14px;
		padding: 10px;
	}

	.content-div4 p:nth-child(2) {
		margin-top: 5px;
	}

	.content-div5 {
		margin-left: 10px;
		margin-bottom: 10px;
		margin-top: 10px;
		font-size: 14px;
	}

	.content-div6 {
		background-color: #ffffff;

	}

	.van-cell:not(:last-child)::after {
		border: 0px;
	}

	.van-panel-p1 {
		font-size: 14px;
		margin-left: 15px;
		padding-bottom: 12px;
	}

	.van-panel-p2 {
		margin-left: 15px;
		font-size: 14px;
		padding-bottom: 12px;
	}

	.van-panel-p2 span:nth-child(2) {
		margin-left: 10px;
	}

	.van-panel-p2 span:nth-child(3) {
		margin-left: 10px;
	}

	.content-div7 {
		border-top: 1px solid #e4e4e4;
	}
</style>
