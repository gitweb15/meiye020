<template>
	<!-- 美体添加地址 -->
	<div id="cydizhi">
		<Header3 title="详情"></Header3>
		<div class="dizhi">
			<div class="one">
				<div @click="Click()">
					<img src="../../../public/image/u582.png" class="yuan">
					<van-cell :title="title" is-link style="width: 85%;float: left;padding: 14px 32px 0px 9px;margin-left: 32.5px;" />
				</div>
				<img src="../../../public/image/u113.png" class="xian" />
				<div>
					<img src="../../../public/image/u584.png" class="yuan">
					<van-field style="width: 85%;float: left;padding: 14px 32px 0px 9px;margin-left: 32.5px;" v-model="value1"
					 right-icon="arrow" placeholder="请填写详细门牌号" />
				</div>
				<ul class="list" v-show="message">
					<li v-for="n in list" :key="n.index" @click="Click(n.name)">
						{{n.name}}
					</li>
				</ul>
				<van-button type="default" class="anniu" @click="sure">确定</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'meitiNew',
		components: {
			Header3
		},
		data() {
			return {
				message: false, //隐藏和显示title
				title: '请选择所在地址',
				list: [{
						"name": '会桥新城' //地址
					},
					{
						"name": '丽都大厦'
					},
					{
						"name": '百信广场'
					},
					{
						"name": '会桥新城'
					},
					{
						"name": '丽都大厦'
					},
					{
						"name": '百信广场'
					},
					{
						"name": '会桥新城'
					},
					{
						"name": '丽都大厦'
					},
					{
						"name": '百信广场'
					},
					{
						"name": '会桥新城'
					},
					{
						"name": '丽都大厦'
					},
					{
						"name": '百信广场'
					}
				],
				value1: '', //填写详细地址
			}
		},
		methods: {
			//点击切换隐藏和显示
			Click: function(name) {
				this.message = !this.message;
				this.title = name;
			},
			sure() {
				var title = this.title;
				var value = this.value1;
				console.log(title, value)
				this.$router.push('/meitiDizhi')
			}
		}
	}
</script>

<style scoped>
	.dizhi {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 585px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 8px;
		overflow: hidden;
	}

	.one {
		position: relative;
		margin-bottom: 8px;
	}

	.xian {
		position: absolute;
		top: 59px;
		right: 0px;
		width: 95%;
	}

	.one div {
		background-color: #fff;
		position: relative;
		width: 100%;
		height: 60px;
		border: 0;
		cursor: pointer;
	}

	.yuan {
		position: relative;
		top: 15px;
		left: 16px;
		width: 22.5px;
		display: inline-block;
		float: left;
	}

	.neirong {
		position: relative;
		top: 4px;
		left: 40px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.jiantou {
		width: 10%;
		height: 51%;
		float: right;
		margin: 19px 20px 0px 0px;
	}

	.anniu {
		width: 100%;
		margin-top: 10px;
		cursor: pointer;
	}

	.anniu:nth-of-type(1) {
		margin-top: 40px;
	}

	.list {
		position: absolute;
		width: 92%;
		height: 520px;
		background-color: #fff;
		z-index: 10;
		left: 14px;
		top: 63px;
		border: 1px solid #E4E4E4;
	}

	.list li {
		width: 90%;
		font-size: 14px;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		letter-spacing: normal;
		color: #333333;
		margin: 23px 33px;
	}
</style>
