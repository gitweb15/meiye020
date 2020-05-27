<template>
	<!-- 详细地址1 -->
	<div id="xxdz1">
		<Header title="详细地址"></Header>
		<div id="content">
			<div class="content-div1">
				<van-cell title="请选择所在地区" icon="location-o" />
				<van-cell title="请填写详细门牌号" icon="calender-o" />
			</div>
			<div class="content-div2">
				<van-button type="default" block @click="Click">确定</van-button>
			</div>
			<div class="content-div3">
				<van-button type="default" block>删除</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'XiangXiDiZhi1',
		components: {
			Header
		},
		methods: {
			//绑定单击事件
			Click: function() {
				this.$router.push('/DiDian1');
			}
		}
	}
</script>

<style scoped>
	.content-div1 {
		margin-top: 10px;
	}

	.content-div2 {
		margin-top: 40px;
	}

	.content-div3 {
		margin-top: 10px;
	}
</style>
