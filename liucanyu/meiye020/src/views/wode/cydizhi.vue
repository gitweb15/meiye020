<template>
	<!-- 我的-我的地址 -->
	<div id="cydizhi">
		<!-- 头部 -->
		<Header3 title="我的地址"></Header3>
		<!-- 地址遍历 -->
		<div class="dizhi">
			<van-cell v-for="n in list" :key="n.index" v-bind:title="n.dizhi" v-bind:url="n.lianjie" />
			<!-- <van-cell title="汇桥路10号212A，广州市白云区" is-link url="/xxdizhi" />
			<van-cell title="汇桥路10号212A，广州市白云区" is-link url="/xxdizhi" />
			<van-cell title="汇桥路10号212A，广州市白云区" is-link url="/xxdizhi" /> -->

			<van-button type="default" class="anniu" is-link url="/xxdizhi">+新增地址</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'cydizhi',
		components: {
			Header3
		},
		data() {
			return {
				list: [{
						dizhi: '汇桥路10号212A，广州市白云区',//地址
						lianjie: 'xxdizhi'//跳转链接
					},
					{
						dizhi: '汇桥路10号212A，广州市白云区',
						lianjie: 'xxdizhi'
					},
					{
						dizhi: '汇桥路10号212A，广州市白云区',
						lianjie: 'xxdizhi'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.dizhi {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 800px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		padding-top: 1px;
	}

	.van-cell {
		padding: 24px 16px;
		height: 69px;
		margin: 1px 0px 10px 0px;
		cursor: pointer;
	}

	.anniu {
		width: 100%;
		margin-top: 10px;
		cursor: pointer;
	}
</style>
