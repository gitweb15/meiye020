<template>
	<!-- 门店预约 -->
	<div id="yuyue">
		<Header3 title="预约信息"></Header3>
		<div class="yuyue">
			<div class="one">
				<div class="two">
					<span style="width: 10%;float: left;"><img class="img" src="../../../public/image/u680.png" style="width: 30px;margin: 7px 0px 0px 2px;"></span>

					<div style="width: 89%;float: right;">
						<van-cell title="开始时间" is-link :value-class="className" :value="timeValue" @click="showPopup" />
						<van-popup v-model="show" position="bottom">
							<van-datetime-picker v-model="currentDate" type="datetime" title="选择时间" :loading="isLoadingShow" :min-date="minDate"
							 :max-date="maxDate" :formatter="formatter" @cancel="show = false" @confirm="confirmPicker" />
						</van-popup>
					</div>
				</div>
			</div>
			<div class="one">
				<router-link to="" tag="div" class="two">
					<span style="width: 10%;float: left;">
						<img class="img" src="../../../public/image/u683.png" style="width: 20px;margin: 6px 0px 0px 6px;">
					</span>
					<div class="span" style="width: 89%;float: right;">
						<!-- <div style="margin: 14px 14px 14px 16px;">联系电话</div> -->
						<van-field v-model="digit" type="digit" label="联系电话" placeholder="请输入联系电话"/>
					</div>
				</router-link>
			</div>

			<div class="three" style="margin-top: 8px;">
				<div class="three-changdu">
					<span class="zuo">{{mingchen}}</span>
					<span class="you">￥{{jiage}}</span>
				</div>
			</div>
			<router-link tag="div" to="/mddaijinquan" class="three">
				<div class="three-changdu">
					<span class="yuan">{{diajinquan}}</span>
					<img src="../../../public/image/u155.png" class="jiantou" />
				</div>
			</router-link>
			<div class="three" style="height: 82px;">
				<p style="text-align: center;padding:16px 0px;">未服务随时退，服务不满意可退款</p>
				<p class="jiage">￥{{tuikuan}}</p>
			</div>

			<van-button type="default" class="anniu" is-link url="/meifuZhifu">支付宝支付</van-button>
			<van-button type="default" class="anniu" is-link url="/meifuZhifu">微信支付</van-button>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header3 from '../../components/header3.vue';
	export default {
		name: 'meifuYuyue',
		components: {
			Header3
		},
		data() {
			return {
				timeValue: '请选择时间', //element组件的开始时间
				digit:'',//联系电话
				show: false, //element组件的隐藏和显示
				isLoadingShow: true, //element组件
				currentDate: new Date(), //element组件
				minDate: new Date(2014, 0, 1), //element组件
				maxDate: new Date(2025, 10, 1), //element组件
				className: '', //element组件
				mingchen: 'XXXX项目名称', //项目名称
				jiage: '128.00', //价格
				diajinquan: '100元代金券', //代金券
				tuikuan: '28.0' //退款
			}
		},
		methods: {
			// 显示弹窗
			showPopup() {
				this.show = true
				this.isLoadingShow = true
				setTimeout(() => {
					this.isLoadingShow = false
				}, 500)
			},
			// 确认选择的时间
			confirmPicker(val) {
				let year = val.getFullYear()
				let month = val.getMonth() + 1
				let day = val.getDate()
				let hour = val.getHours()
				let minute = val.getMinutes()
				if (month >= 1 && month <= 9) {
					month = `0${month}`
				}
				if (day >= 1 && day <= 9) {
					day = `0${day}`
				}
				if (hour >= 0 && hour <= 9) {
					hour = `0${hour}`
				}
				if (minute >= 0 && minute <= 9) {
					minute = `0${minute}`
				}
				this.className = 'timeClass'
				this.timeValue = `${year}-${month}-${day} ${hour}:${minute}`
				this.show = false
			},
			// 选项格式化函数
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				} else if (type === 'month') {
					return `${value}月`
				} else if (type === 'day') {
					return `${value}日`
				} else if (type === 'hour') {
					return `${value}时`
				} else if (type === 'minute') {
					return `${value}分`
				} else if (type === 'second') {
					return `${value}秒`
				}
				return value
			}
		}
	}
</script>

<style scoped>
	.yuyue {
		border-width: 0px;
		position: relative;
		width: 100%;
		height: 600px;
		background: inherit;
		background-color: rgba(229, 229, 229, 1);
		border: none;
		border-radius: 0px;
		/* padding-top: 3px; */

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;
	}

	.one {
		width: 100%;
		height: 45px;
		background-color: #fff;
	}

	.two {
		float: right;
		width: 95%;
		height: 100%;
		border-bottom: 1px solid #E4E4E4;
		overflow: hidden;
	}

	.two .img {
		float: left;
	}

	.two .span {
		font-size: 15px;
	}

	.jiantou {
		width: 28.5px;
		/* width: 8%; */
		float: right;
		margin: 10px 10px 0px 0px;
	}

	.huise {
		color: #CCCCCC;
		float: right;
		margin: 14px 16px 0px 0px;
	}

	.three {
		width: 100%;
		height: 45px;
		background-color: #fff;
		border-bottom: 1px solid #E4E4E4;
	}

	.three-changdu {
		width: 88%;
		margin: 0px auto;
		height: 45px;
		line-height: 45px;
	}

	.zuo {
		float: left;
	}

	.you {
		float: right;
	}

	.yuan {
		float: left;
		/* margin: 15px 0px 0px 22px; */
	}

	.jiage {
		text-align: center;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 20px;
	}

	.anniu {
		width: 100%;
		margin-bottom: 8px;
		cursor: pointer;
	}

	.anniu:nth-of-type(1) {
		margin-top: 20px;
	}

	.list {
		width: 100%;
		height: 250px;
		background-color: #fff;
		position: absolute;
		bottom: 0px;
		border: 1px solid #E4E4E4;
	}

	.qxqr {
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #E4E4E4;
	}

	a {
		font-size: 15px;
		color: #0000FF;
		line-height: 40px;
	}

	a:hover {
		text-decoration: underline;
	}

	.time {
		width: 76%;
		height: 40px;
		margin: 0px auto;
	}

	.time-zuo {
		float: left;
		line-height: 40px;
	}

	.time-you {
		float: right;
		line-height: 40px;
	}
</style>
