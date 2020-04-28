<template>
	
	<div>
		
		<div class="beijingyanse">
			<span class="zuofudong">
				<span class="el-icon-arrow-left">
					
				</span>
				<span class="fanhuisize">
					返回
				</span>
			</span>
			<span style="font-weight: bold;">
				{{mingzi}}
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				buwei:'个人资料'
			}
		},
		props:['mingzi'],
		
	}
</script>

<style scoped>
	.beijingyanse{
		background: #f8f8f8;
		padding: 10px;
	}
	div{
		overflow: hidden;
	}
	.el-icon-arrow-left{
		color: #017aff;
		font-size: 20px;
		font-weight: bold;
	}
	.fanhuisize{
		font-size: 15px;
		color: #017aff;
	}
	.zuofudong{
		float: left;
	}
</style>
