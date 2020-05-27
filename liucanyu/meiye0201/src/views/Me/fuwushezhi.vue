<template>
	<div id="center">
		<!-- <!-- 头部 -->
		<Header1 title="服务设置"></Header1>
		<!-- 主体 -->
		<div id="body">
			<p class="title zhiti">请勾选您提供的服务项目</p>
			<ul class="list">
				<li v-for="n in list" :key="n.index">
					<div class="list-zuo">
						<van-checkbox v-model="n.checked" class="xuanze"></van-checkbox>
					</div>
					<router-link tag="div" :to="n.to" class="list-you">
						<p class="pp zhiti">{{n.title}}</p>
						<p class="zhiti pp1"><span class="pp1-one">价格：{{n.jiage}}</span><span class="pp1-two">服务时长：{{time}}分钟</span></p>
					</router-link>
				</li>
			</ul>
			<van-button type="primary" size="large" class="anniu" url="/wode">保存</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'fuwudizhi',
		components: {
			Header1,
		},
		data() {
			return {
				list: [{
					checked: true, //复选框
					to: '/fuwuxq', //跳转路径
					title: '全身经络疏通', //项目名称
					jiage: '200.0', //价格
					time: '80', //时间
				}, {
					checked: true, //复选框
					to: '/fuwuxq', //跳转路径
					title: '美胸保健', //项目名称
					jiage: '128.0', //价格
					time: '60', //时间
				}, {
					checked: true, //复选框
					to: '/fuwuxq', //跳转路径
					title: '肩颈调理', //项目名称
					jiage: '98.0', //价格
					time: '60', //时间
				}, {
					checked: true, //复选框
					to: '/fuwuxq', //跳转路径
					title: '头部理疗', //项目名称
					jiage: '68.0', //价格
					time: '30', //时间
				}]
			}
		}
	}
</script>

<style scoped>
	#body {
		position: relative;
		width: 100%;
		background-color: #e5e5e5;
		/* padding-bottom: 100px; */
	}

	#body::after {
		display: block;
		clear: both;
		content: '';
	}

	.zhiti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #333333;
	}

	.title {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		padding: 10px 8px;
	}

	.anniu {
		background-color: #fff;
		color: #333333;
		border: 1px solid #fff;
		margin: 30px 0px 122px;
	}

	.list {
		width: 100%;
		position: relative;
		background-color: #fff;
	}

	.list::after {
		display: block;
		clear: both;
		content: '';
	}

	.list li {
		float: right;
		width: 95%;
		border-bottom: 1px solid #E5E5E5;
	}

	.list li::after {
		display: block;
		clear: both;
		content: '';
	}

	.list-zuo {
		width: 15%;
		position: relative;
		float: left;
		height: 100%;
	}

	.list-you {
		width: 85%;
		position: relative;
		float: left;
	}

	.pp {
		font-size: 17px;
		padding: 15px 0px;
	}

	.pp1 {
		padding-bottom: 15px;
	}

	.pp1::after {
		display: block;
		clear: both;
		content: '';
	}


	.pp1-one,
	.pp1-two {
		width: 50%;
		display: inline-block;
		float: left;
	}

	.xuanze {
		box-sizing: border-box;
		padding: 33px 16px 33px 16px;
	}
</style>
