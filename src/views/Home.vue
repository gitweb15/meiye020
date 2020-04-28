<template>
  <div class="home">
    <!-- 我的 -->
	<div class="wodesize">
		我的
	</div>
	
		<!-- 中间代码内容 -->     
	<div class="zhongjian">
		<!-- 圆圈部分 -->
		<div class="dianhuabufen">
			<span class="yuanquan">
				
			</span>
			<p>
				19887897678
			</p>
			<br>
		</div>
		<!-- 资金记录部分 -->
		<div>
			<ul>
				<li>
					<span class="xiaoyuanquan">
						
					</span>
					资金记录
					<span class="youfudong">
						>
					</span>
				</li>
				<li>
					<span class="xiaoyuanquan">
						
					</span>
					认证信息
					<span class="youfudong">
						>
					</span>
				</li>
				<li>
					<span class="xiaoyuanquan">
						
					</span>
					服务设置
					<span class="youfudong">
						>
					</span>
				</li>
				<li>
					<span class="xiaoyuanquan">
						
					</span>
					服务地址
					<span class="youfudong">
						>
					</span>
				</li>
			</ul>
			
			<ul>
				<li>
					<span class="xiaoyuanquan">
						
					</span>
					意见反馈
					<span class="youfudong">
						>
					</span>
				</li>
				<li>
					<span class="xiaoyuanquan">
						
					</span>
					联系客服
					<span class="youfudong">
						>
					</span>
				</li>
				
			</ul>
			<!-- 注销按钮 -->
			<div class="zhuxiao">
				注销
			</div>
			
			
		</div>
	</div>
	<!-- 底部按钮部分 -->
	<div class="anniu">
		<span class="shouyebeijing">
			首页
		</span>
		<span class="shouyebeijing">
			订		单
		</span>
		<span class="shouyebeijing">
			排班
		</span>
		<span class="shouyebeijing">
			我的
		</span>
	</div>
	
	
	
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
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
	.zhuxiao{
		background-color: #FFFFFF;
		margin-top: 10px;
		margin-bottom: 10px;
		line-height: 40px;
	}
	.youfudong{
		float: right;
		margin-right: 20px;
		margin-top: 5px;
		font-size: 24px;
		color: #e5e5e5;
	}
	.xiaoyuanquan{
		border-radius: 50%;
		display: inline-block;
		width: 30px;
		height: 30px;
		margin-left: 10px;
		margin-right: 10px;
		vertical-align: middle;
		border: 2px solid #e5e5e5;
	}
	div{
		overflow: hidden;
	}
	.wodesize{
		background: #f8f8f8;
		padding-top: 5px;
		padding-bottom: 5px;
		color: #000000;
		font-size: 22px;
		
	}
	.zhongjian{
		border: 1px solid #4444;
		background:#e5e5e5 ;
	}
	
	.yuanquan{
		display: inline-block;
		border-radius: 50%;
		width: 60px;
		border: 1px solid #4444;
		height: 60px;
		margin-top: 20px;
	}
	.dianhuabufen{
		
		background: #FFFFFF;
	}
	li{
		list-style: none;
		text-align: left;
		padding-top: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e5e5e5;
	}
	ul{
		background:#FFFFFF;
		margin: 0px;
		padding: 0px;
		margin-top: 10px;
	}
</style>