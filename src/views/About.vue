<template>
	<div>
		<!-- 美容师 -->
			<div class="meistyl">
				美容师
			</div>
			
			
			<!-- 中间内容部分 -->
			<div class="zhongjiankuang">
				<!-- 待服务订单 -->
				<div class="fuwudingdan">
					<div class="zuofudong dingdanxiahuxian">
						<p style="text-align: left;">
							待服务订单
						</p>
						
						<span class="shuzi4">
							4
						</span>
					</div>
					
					<div class="youfudong shengqingkuandu">
						<p style="text-align: left;">
							申请退款订单
						</p>
						<span class="shuzi4"> 
							0
						</span>
					</div>
				</div>
				
				<!-- 最近7日预期收益 -->
				<div class="shouyi">
					<p class="shouyiwenzi">
						最近7日预期收益 
					</p>
					<p class="shuzi4 shouyiwenzi">
						628.00
					</p>
				</div>
				
				<!-- 最近7日成交金额 -->
				<div>
					<p class="shouyiwenzi">
						最近7日成交金额
					</p>
					<img src="../assets/meirong.png" />
				</div>
				
				<!-- 按钮部分 -->
				<div class="anniu">
					<span class="shouyebeijing">
						首页
					</span>
					<span class="shouyebeijing">
						订单
					</span>
					<span class="shouyebeijing">
						排班
					</span>
					<span class="shouyebeijing">
						我的
					</span>
				</div>
				
			</div>
			
			
			
			
	</div>
</template>

<script>
	export default{
		name:"About",
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.shouyebeijing:hover{
		background: #cce6e6;
	}
	.shouyebeijing{
		display: inline-block;
		width: 20%;
		line-height: 40px;
	}
	.anniu{
		border: 1px solid #d7d7d7;
		border-bottom: none;
		padding-left: 10px;
		padding-right: 10px;
	}
	.shouyiwenzi{
		text-align: left;
		padding-left: 5px;
	}
	.shouyi{
		width: 100%;
		border: 1px solid  #d7d7d7;
	}
	.shuzi4{
		font-weight: bold;
		font-size: 30px;
	}
	.fuwudingdan{
		margin: 10px;
	}
	.shengqingkuandu{
		width: 170px;
	}
	.meistyl{
		background: #f8f8f8;
		padding-top: 5px;
		padding-bottom: 5px;
		color: #000000;
		font-size: 18px;
	}
	
	div{
		overflow: hidden;
	}
	.zhongjiankuang{
		border: 1px solid #d7d7d7;
	}
	.zuofudong{
		float: left;
	}
	.youfudong{
		float: right;
	}
	.dingdanxiahuxian{
		border-right: 1px solid #d7d7d7;
		width: 180px;
	}
</style>
