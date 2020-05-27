<template>
	<!-- 排班管理-预约 -->
	<div id="contet">
		<van-checkbox-group v-model="result">
			<van-cell-group>
				<van-cell v-for="(item, index) in list" clickable :key="item" :title="`${item}`" @click="toggle(index)">
					<template #right-icon>
						<van-checkbox :name="item" ref="checkboxes" shape="square" />
					</template>
				</van-cell>
			</van-cell-group>
		</van-checkbox-group>
	</div>
</template>

<script>
	export default {
		name: 'time2',
		data() {
			return {
				//复选框内容
				list: ['09：00', '10：00', '11：00', '12：00', '13：00', '14：00', '15：00', '16：00', '17：00', '18：00'],
				//接受复选框内容
				result: [],
			};
		},
		methods: {
			//切换
			toggle(index) {
				this.$refs.checkboxes[index].toggle();
			},
		},
	};
</script>

<style scoped>
	#contet {
		width: 100%;
		position: relative;
	}

	.van-cell--clickable {
		cursor: pointer;
		padding: 18px 10px;
	}

	.van-cell--clickable:last-child {
		margin-bottom: 45px;
	}
</style>
