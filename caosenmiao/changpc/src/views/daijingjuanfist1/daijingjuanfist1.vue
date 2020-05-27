<template>
	<!-- 地点1 -->
	<div id="dd1">
		<Header title="我的地址"></Header>
		<div id="content">
			<div class="content-div1">
				<a href="###">
					<van-cell title="汇桥路10号212A,广州市白云区" to="/WoDe" /></a>
			</div>
			<div class="content-div2">
				<a href="###">
					<van-cell title="汇桥路10号212A,广州市白云区" to="/WoDe" /></a>
			</div>
			<div class="content-div3">
				<a href="###">
					<van-cell title="汇桥路10号212A,广州市白云区" to="/WoDe" /></a>
			</div>
			<div class="content-div4">
				<van-button type="default" block @click="Click">+新增地址</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'DiDian1',
		components: {
			Header
		},
		methods: {
			//绑定单击事件
			Click: function() {
				this.$router.push('/XiangXiDiZhi1');
			}
		}
	}
</script>

<style scoped>
	.content-div2 {
		margin-top: 10px;
	}

	.content-div3 {
		margin-top: 10px;
	}

	.content-div4 {
		margin-top: 25px;
	}
</style>
