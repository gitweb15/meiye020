<template>
	<!-- 详细地址 -->
	<div id="center">
		<!-- 头部 -->
		<Header1 title="详细地址"></Header1>
		<div class="center">
			<!-- vue引入的百度地图组件 -->
			<baidu-map :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
				<bm-view class="map"></bm-view>
				<bm-control :offset="{width: '10px', height: '10px'}">
					<bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
					</bm-auto-complete>
				</bm-control>
				<bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
				<!-- 比例尺 -->
				<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
				<!-- 缩放 -->
				<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
				<!-- 定位 -->
				<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
			</baidu-map>
			<van-button type="primary" size="large" class="anniu" @click="baocun">保存</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header1 from '../../components/Header1/index.vue';
	export default {
		name: 'xxdizhi',
		components: {
			Header1
		},
		data() {
			return {
				keyword: ''
			}
		},
		methods: {
			baocun: function() {
				var dizhi = this.keyword;
				console.log(dizhi);
				this.$router.push("/nicheng");
			}
		}
	}
</script>

<style scoped>
	#center {
		width: 100%;
		position: relative;
		background-color: #e5e5e5;
		padding-bottom: 100px;
	}

	#center::after {
		content: '';
		display: block;
		clear: both;
	}

	.center {
		width: 100%;
		position: relative;
	}

	.center::after {
		content: '';
		display: block;
		clear: both;
	}

	.shuru {
		position: absolute;
		top: 0px;
		width: 100%;
		z-index: 5;
	}

	.anniu {
		background-color: #fff;
		color: #333333;
		border: 1px solid #fff;
		position: absolute;
		width: 100%;
		bottom: -50px;
		z-index: 10;
	}

	.map {
		width: 100%;
		height: 449px;
		z-index: 1;
		padding: 44px 0px 50px 0px;
	}
</style>
