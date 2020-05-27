<template>
	<!-- 门店-代金券 -->
	<div id="daijinquan">
		<Header3 title="代金券"></Header3>
		<div id="center">
			<div class="input">
				<input type="text" class="yanzm" placeholder="  输入代金券" v-model="daijinquan" />
				<div class="jieshou" @click="duihuan">兑换</div>
			</div>
			<ul class="list">
				<li :class="activeClass== index ? 'active':''" class="li" v-for="(n,index) in liebiao" :key="n.index" @click="getItem(index)">
					<div class="list-zuo">
						<p>￥{{n.jiage}}</p>
					</div>
					<div class="list-you">
						<p>有效期至：{{n.youxiao}}</p>
						<p>使用限制：{{n.xianzhi}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'mddaijinquan',
		components: {
			Header3
		},
		data() {
			return {
				activeClass: 0,
				liebiao: [{
						"jiage": '99.0', //优惠价格
						"youxiao": '2014-12-30', //有效期至
						"xianzhi": '满100元可用' //使用限制
					},
					{
						"jiage": '99.0',
						"youxiao": '2014-12-30',
						"xianzhi": '满100元可用'
					},
					{
						"jiage": '99.0',
						"youxiao": '2014-12-30',
						"xianzhi": '满100元可用'
					}
				],
				daijinquan: '', //代金券
			}
		},
		methods: {
			//点击兑换
			duihuan() {
				var value = this.daijinquan;
				console.log(value);
				this.daijinquan = "";
			},
			//点击切换选择
			getItem(index) {
				this.activeClass = index;
				console.log(index);
				this.$router.go(-1); //返回上一页
			}
		}
	}
</script>

<style scoped>
	#center {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 11px;
	}

	.input {
		position: relative;
		width: 100%;
		height: 49px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgba(228, 228, 228, 1);
		border-radius: 0px;
		margin: 11px 0px;
	}

	.input .yanzm {
		width: 75%;
		height: 100%;
		border: 0px;
	}

	.input .jieshou {
		position: absolute;
		right: 0px;
		top: 0px;
		width: 25%;
		height: 49px;
		background-color: rgba(255, 204, 255, 1);
		box-sizing: border-box;
		border: 1px rgba(228, 228, 228, 1) solid;
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		box-sizing: border-box;
		padding: 15px 9px 15px 9px;
		cursor: pointer;
		text-align: center;
	}

	.list {
		position: relative;
		width: 99%;
	}

	.li {
		width: 100%;
		height: 100px;
		background-color: #fff;
		border: 1px solid rgba(228, 228, 228, 1);
		margin-bottom: 11px;

		/* 可以看的到某个元素，但是你无法摸的着 */
		/* pointer-events: none; */
		cursor: default;
		opacity: 0.6;
	}

	.active {
		cursor: pointer;
		opacity: 1;
	}

	.list-zuo {
		height: 100%;
		position: relative;
		width: 42%;
		border-right: 1px solid #e4e4e4;
		float: left;
	}

	.list-zuo p {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
		text-align: center;
		line-height: 101px;
	}

	.list-you {
		height: 100%;
		position: relative;
		width: 57%;
		float: left;
	}

	.list-you p {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
		float: left;
		margin: 20px 0px 0px 20px;
	}
</style>
