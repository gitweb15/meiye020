  <template>
	<!-- 申请售后 -->
	<div id="sqsh">
		<Header title="申请售后"></Header>
		<div id="content">
			<div class="content-div1">
				售后描述
			</div>
			<div class="content-div2">
				<van-cell-group>
					<van-field class="van-field" placeholder="请填写您的申请描述" />
				</van-cell-group>
			</div>
			<div class="content-div3">
				<van-button type="default" block @click="Click">我要退款</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import Header from '../../components/Header';
	export default {
		name: 'ShenQingShouHou',
		components: {
			Header
		},
		methods: {
			//绑定单击事件
			Click: function() {
				
			}
		}
	}
</script>

<style scoped>
	.content-div1 {
		font-size: 14px;
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.content-div2 {
		background-color: #ffffff;
	}

	.content-div3 {
		margin-top: 20px;
	}

	.van-field {
		height: 180px;
	}
</style>
