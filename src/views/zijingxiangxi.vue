<template>
	<div>
		<!-- 头部 -->
		<Head mingzi="资金详情"></Head>
		
		
		
		<!-- 主体内容部分-->
		<div class="waibiankuang">
			<!-- 客户账号部分 -->
			<div class="kehuzhanghao">
				<div class="zuofudong" style="margin-top: 10px;">
					<span class="zuofudong">
						<img src="../assets/zijin.png" width="80%"/>
					</span>
					<span>
						13800138000（客户账号）					
					</span>
				</div>
			</div>
			
			<!-- 交易金额 -->
			<div>
				
			</div>
			
			
			
			
			
			
			
			
			
			
			
			
		</div>
	</div>
</template>

<script>
	import Head from '../components/head.vue'
	 
	export default{
		name:"zijingxiangxi",
		data(){
			return{
				
			}
		},
		components:{
			Head
		}
	}
</script>

<style scoped>
	div{
		overflow: hidden;
	}
	.kehuzhanghao{
		line-height: 40px;
		font-size: 12px;
	}
	.waibiankuang{
		border: 1px solid #E4E4E4;
	}
	.zuofudong{
		float: left;
	}
	.youfudong{
		float: right;
	}
</style>
