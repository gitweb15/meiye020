<template>
	<div id="xiangxidizhi" class="beijingyanse">
		<!-- 头部代码部分 -->
		<Head mingzi="详细地址"></Head>
		<!-- 搜索部分 -->
		<br/>
		<div>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
		</div>
		<!-- 地图部分 -->
		<div>
			
		</div>
	</div>
</template>

<script>
	import Head from '../components/head.vue'
	
	export default{
		name:"xiangxidizhi",
		data(){
			return{
				input: ''
			}
		},
		components:{
			Head
		}
	}
</script>

<style scoped>
	.beijingyanse{
		background: #E4E4E4;
	}
</style>
