<template>
	<div id="zijinguanli" class="beijingse">
		<!-- 资金管理头部 -->
		<Head  mingzi="资金管理"></Head>
		<!-- 中间内容部分 -->
		<div class="waibiankuang">
			<div class="zhouerwenzi">
				每周二结算上周收益，结算至您绑定的银行卡中
			</div>
			
			
			<!-- 待返部分 -->
			<div class="baisebeijing">
				<div class="jianju">
					<span class="daifan">
						待返款收益
						<strong>
							￥99.0
						</strong>
					</span>
					<span class="bangka">
						<span style="margin-left: 10px;">绑定银行卡</span>
					</span>
					
					
				</div>
				<div class="fankuansize">
					<span class="shouyi1">
						待结算收益￥128.0
					</span>
					<span>
						已返款收益￥128.0
					</span>
				</div>
			</div>
			
			
			
			<div class="zhouerwenzi">
				本月
			</div>
			
			
			
			<!-- 主体部分-->
			<div class="baisebeijing" style="border-bottom: 1px solid #E4E4E4;">
				<br/>
				<div>
					<span class="zuofudong dindanbianhao">
						订单编号:2887876567756
					</span>
					<span class="youfudong daijiesuanwenzi">
						待结算
					</span>
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						订单金额:128.0
					</span>
					
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						服务佣金:12.8
					</span>
					<span class="youfudong daijiesuanwenzi">
						12.8
					</span>
				</div>
				<br/>
			</div>
			
			<div class="baisebeijing" style="border-bottom: 1px solid #E4E4E4;">
				<br/>
				<div>
					<span class="zuofudong dindanbianhao">
						订单编号:2887876567756
					</span>
					<span class="youfudong daijiesuanwenzi">
						待结算
					</span>
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						订单金额:128.0
					</span>
					
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						服务佣金:12.8
					</span>
					<span class="youfudong daijiesuanwenzi">
						12.8
					</span>
				</div>
				<br/>
			</div>
			
			<div class="baisebeijing" style="border-bottom: 1px solid #E4E4E4;">
				<br/>
				<div>
					<span class="zuofudong dindanbianhao">
						订单编号:2887876567756
					</span>
					<span class="youfudong daijiesuanwenzi">
						待结算
					</span>
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						订单金额:128.0
					</span>
					
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						服务佣金:12.8
					</span>
					<span class="youfudong daijiesuanwenzi">
						12.8
					</span>
				</div>
				<br/>
			</div>
			
			
			<div class="baisebeijing" style="border-bottom: 1px solid #E4E4E4;">
				<br/>
				<div>
					<span class="zuofudong dindanbianhao">
						订单编号:2887876567756
					</span>
					<span class="youfudong daijiesuanwenzi">
						待结算
					</span>
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						订单金额:128.0
					</span>
					
				</div>
				
				<div>
					<span class="zuofudong dindanbianhao">
						服务佣金:12.8
					</span>
					<span class="youfudong daijiesuanwenzi">
						12.8
					</span>
				</div>
				<br/>
			</div>
			
			
			
			
			
			
		</div>
	</div>
</template>

<script>
	import Head from '../components/head.vue'
	export default{
		name:"zijinguanli",
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
	.baisebeijing>div{
		line-height: 30px;
	}
	.dindanbianhao{
		font-size: 12px;
		padding-left: 10px;
	}
	.daijiesuanwenzi{
		font-size: 12px;
		padding-right: 10px;
	}
	.zuofudong{
		float: left;
	}
	.youfudong{
		float: right;
	}
	.shouyi1{
		display: inline-block;
		width: 40%;
		text-align: left;
		float: left;
		padding-left: 10px;
	}
	.fankuansize{
		line-height: 50px;
		font-size: 12px;
	}
	.bangka{
		width: 37%;
		border: 1px solid #E4E4E4;
		border-right: none;
		text-align: left;
		display: inline-block;
		font-size: 14px;
	}
	.waibiankuang{
		border: 1px solid #E4E4E4;
	}
	.jianju{
		line-height: 50px;
	}
	.daifan{
		width: 60%;
		display: inline-block;
		text-align: left;
		float: left;
		font-size: 14px;
		padding-left: 10px;
		border-bottom: 1px solid #E4E4E4;
	}
	.baisebeijing{
		background: #FFFFFF;
	}
	div{
		overflow: hidden;
		
	}
	.zhouerwenzi{
		line-height: 40px;
		font-size: 13px;
		text-align: left;
		padding-left: 10px;
	}
	.beijingse{
		background: #E4E4E4;
	}
</style>
