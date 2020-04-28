<template>
	<div id="gerenziliao" class="beijing">
		<!-- head -->
		<Head mingzi="个人资料"></Head>
		
		<!-- 中间内容部分 -->
		<div class="neirongbeijing">
			<div class="jianju">
				<span class="wenzijianju">
					手机号码
				</span>
				<span class="zuofudong">
					18178685556
				</span>
			</div>
			<div class="jianju">
				
				<div class="jianju1">
					<span class="wenzijianju">
						联系地址
					</span>
					
				</div>
				<span class="wenzijianju">
					省市区
				</span>
				<span class="zuofudong">
					湖南省
				</span>
			</div>
			<div class="jianju">
				<span class="wenzijianju">
					详细地址
				</span>
				<span class="zuofudong">
					湖南省岳阳市
				</span>
			</div>
			
		</div>
		
		
		<!-- 提交按钮 -->
		<div class="anniu">
			提交
		</div>
	</div>
</template>

<script>
	import Head from '../components/head.vue'
	export default{
		name:"gerenziliao",
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
	.anniu{
		background: #FFFFFF;
		margin-top: 10px;
		margin-bottom: 100px;
		line-height: 50px;
		font-size: 18px;
	}
	.wenzijianju{
		display: inline-block;
		width: 40%;
		text-align: left;
		float: left;
		margin-left: 15px;
	}
	div{
		overflow: hidden;
	}
	.zuofudong{
		float: left;
	}
	.jianju{
		line-height: 60px;
		border-bottom: 1px solid #e4e4e4;
	}
	.jianju1{
		line-height: 40px;
		
	}
	.beijing{
		background: #e5e5e5;
	}
	.neirongbeijing{
		background: #FFFFFF;
		margin-top: 10px;
		border: 1px solid #e4e4e4;
	}
</style>