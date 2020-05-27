<template>
	<!-- 美体师首页 -->
	<div id="choose">
		<Header3 title="选择美体师"></Header3>
		<div class="choose">
			<ul class="list">
				<router-link tag="li" v-for="n in list" :key="n.index" :to="n.four">
					<div class="content">
						<span class="img" style="width: 60px;height: 60px;">
							<img :src="n.tupian" style="width: 100%;height: 100%;" />
						</span>
						<div class="neirong">
							<p class="p1">{{n.one}}</p>
							<p class="p2">{{n.two}}</p>
						</div>
						<span class="mi">{{n.three}}米</span>
					</div>
				</router-link>
			</ul>
			<p class="more">没有更多了</p>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'meitishi',
		components: {
			Header3
		},
		data() {
			return {
				list: [{
					"one": '美体师名称', //美体师名称
					"two": '守时5.0 专业5.0 沟通5.0', //评分
					"three": '110', //距离
					"four": '/meitishijianjie', //跳转地址
					tupian: '../img/美容师.76d81d89.jpg' //美体师图片
				}, {
					"one": '美体师名称',
					"two": '守时5.0 专业5.0 沟通5.0',
					"three": '110',
					"four": '/meitishijianjie',
					tupian: '../img/美容师.76d81d89.jpg'
				}, {
					"one": '美体师名称',
					"two": '守时5.0 专业5.0 沟通5.0',
					"three": '110',
					"four": '/meitishijianjie',
					tupian: '../img/美容师.76d81d89.jpg'
				}, {
					"one": '美体师名称',
					"two": '守时5.0 专业5.0 沟通5.0',
					"three": '110',
					"four": '/meitishijianjie',
					tupian: '../img/美容师.76d81d89.jpg'
				}, {
					"one": '美体师名称',
					"two": '守时5.0 专业5.0 沟通5.0',
					"three": '110',
					"four": '/meitishijianjie',
					tupian: '../img/美容师.76d81d89.jpg'
				}]
			}
		}
	}
</script>

<style scoped>
	.choose {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		/* padding-top: 3px; */

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.list {
		position: relative;
		width: 100%;
		background-color: #fff;
	}

	.list li {
		width: 100%;
		background-color: #fff;
		height: 88px;
		border-bottom: 1px solid #E4E4E4;
		cursor: pointer;
	}

	.content {
		width: 95%;
		height: 100%;
		float: right;
	}

	.img {
		display: inline-block;
		margin-top: 14px;
		float: left;
	}

	.neirong {
		display: inline-block;
		width: 65%;
		float: left;
	}

	.neirong p {
		margin-top: 16px;
		margin-left: 10px;
	}

	.p1 {
		font-size: 14px;
	}

	.p2 {
		font-size: 12px;
		color: #999999;
	}

	.mi {
		float: right;
		margin: 28px 10px 0px 0px;

	}

	.more {
		color: #999999;
		text-align: center;
		margin-top: 10px;
	}
</style>
