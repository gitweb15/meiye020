<template>
	<div id="center">
		<!-- <!-- 头部 -->
		<Header2></Header2>
		<!-- 主体 -->
		<div id="body">
			<baidu-map :center="{lng: 116.403765, lat: 39.914850}" :zoom="11" center="北京">
				<bm-view class="map"></bm-view>
				<bm-control :offset="{width: '10px', height: '10px'}">
					<bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
					</bm-auto-complete>
				</bm-control>
				<bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>

				<!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->

				<!-- 比例尺 -->
				<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
				<!-- 缩放-->
				<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
				<!-- 定位 -->
				<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
			</baidu-map>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header2 from '../../components/Header2/index.vue';
	export default {
		name: 'fuwudizhi',
		components: {
			Header2,
		},
		data() {
			return {
				keyword: ''
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

	.map {
		width: 100%;
		height: 590px;
		position: relative;
	}
</style>
