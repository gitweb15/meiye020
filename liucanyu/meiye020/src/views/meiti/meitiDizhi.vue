<template>
	<!-- 美体地址 -->
	<div id="dizhi">
		<Header3 title="我的地址"></Header3>
		<div class="dizhi">
			<ul class="list">
				<router-link tag="li" v-for="(n,index) in list" :key="index" :to="n.to" @click="getItem(index)">
					<div class="kuan" @click="getItem(index)">
						<span class="dizhi1">{{n.dizhi}}</span>
					</div>
					<div class="gou" @click="getItem(index)">
						<p class="pp" :class="activeClass== index ? 'active':''">√</p>
					</div>
				</router-link>
			</ul>

			<van-button type="default" class="anniu" is-link url="/meitiNew">+新增地址</van-button>
		</div>
	</div>
</template>

<script>
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'meitiShouye',
		components: {
			Header3
		},
		data() {
			return {
				activeClass: 0,
				list: [{
						to: '/meitiYuyue',
						dizhi: '汇桥路10号212A，广州市白云区'
					},
					{
						to: '/meitiYuyue',
						dizhi: '汇桥路10号212A，广州市白云区'
					},
					{
						to: '/meitiYuyue',
						dizhi: '汇桥路10号212A，广州市白云区'
					},
				]
			};
		},
		methods: {
			//点击切换打钩
			getItem(index) {
				this.activeClass = index;
				console.log(index);
			}
		}
	}
</script>

<style scoped>
	.dizhi {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 3px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.list {
		width: 100%;
		position: relative;
	}

	.list li {
		width: 100%;
		height: 70px;
		background-color: #fff;
		margin-bottom: 10px;
		font-size: 15px;
	}

	.kuan {
		width: 75%;
		height: 100%;
		position: relative;
		/* margin: 0px auto; */
		display: inline-block;
		float: left;
	}

	.gou {
		width: 25%;
		height: 100%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.dizhi1 {
		line-height: 75px;
		float: left;
		margin-left: 10px;
	}


	.anniu {
		width: 100%;
		margin-top: 20px;
		cursor: pointer;
	}

	/* .van-tree-select__item--active{
		color: #0000FF;
	} */
	.van-sidebar-item--select::before {
		color: #0000FF;
	}

	.pp {
		margin: 0px auto;
		line-height: 81px;
		display: none;
	}

	.active {
		width: 16px;
		height: 16px;
		font-size: 16px;
		color: #996633;
		display: block;
	}
</style>
