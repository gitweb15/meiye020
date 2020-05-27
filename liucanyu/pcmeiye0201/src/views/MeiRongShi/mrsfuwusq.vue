<template>
	<!-- 服务详情 -->
	<div class="content">
		<!-- 头部 -->
		<Header></Header>
		<div class="body">
			<!-- 侧边栏 -->
			<div class="zuo">
				<Aside></Aside>
			</div>
			<div class="you">
				<div class="you-div ziti">
					<h3 style="margin: 18px 0px 30px;">{{zhanghu}}</h3>
				</div>
				<ul class="tab ziti">
					<router-link tag="li" to="/mrszhanghu">
						账户信息
					</router-link>
					<router-link tag="li" to="/mrsdingdan">
						订单信息
					</router-link>
					<router-link tag="li" to="/mrszijin">
						资金信息
					</router-link>
					<router-link tag="li" to="/mrsfuwu" class="active">
						服务管理
					</router-link>
				</ul>
				<div class="you-div ziti">
					<p style="font-size: 18px;margin: 30px 0px 30px;">项目名称</p>
					<p class="p"><span class="span">服务类型：</span><span>{{leixing}}</span></p>
					<p class="p"><span class="span">项目编号：</span><span>{{bianhao}}</span></p>
					<p class="p"><span class="span">项目名称：</span><span>{{name}}</span></p>
					<p class="p"><span class="span">服务价格：</span><span>{{money}}</span></p>
					<p class="p"><span class="span">服务时长：</span><span>{{time}}分钟</span></p>
					<p class="p"><span class="span">商品主图：</span><span>请上传1-5张商品主图</span></p>
					<div>
						<img v-for="n in tupian" :key="n.index" :src="n.tupian1" class="img">
					</div>
					<p class="p" style="margin-top:15px;"><span class="span">项目简介：</span></p>
					<div style="width: 350px;">
						<textarea v-model="textarea" :rows="10" disabled style="background-color: #fff;width: 100%;margin-left: 80px;"></textarea>
					</div>
					<el-button plain size="mini" style="padding: 7px 36px;margin: 25px 0px 90px 80px;" @click="click">返回</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../../components/Header/index.vue';
	import Aside from '../../components/Aside/index.vue';
	export default {
		name: 'mrsfuwu',
		components: {
			Header,
			Aside,
		},
		parent,
		data() {
			return {
				zhanghu: '13800138000', //账户
				leixing: '美体', //服务类型
				bianhao: '美体', //项目编号
				name: '显示项目名称', //项目名称
				money: '128.0', //服务价格
				time: '80', //服务时长
				//项目主图
				tupian: [{
						tupian1: 'data:image/png;base64,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'
					},
					{
						tupian1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAABkCAYAAAC2C8OoAAAItUlEQVR4nO2dW3OiShhFtyI2iEhUjLeqOf//Z03VKKKi8Q4ich7OaavjJMYLl6ZhPWYidhU7Hz3l6m1pNBr9DsPwFwoKblAul39XwjD8Va/XcTqd0G63015TAWfM53PIsoztdvtPGQAMw4CmaRiNRvA8L+31FXCA67oYjUbQdR2GYQAAyvQfFUXBcDjEZrPBarVKbZEF6bNarbDb7TAcDkEIufy8fP2LpmlCkiTYto0gCBJdZEG6BEEA27YhSdKXW5LKVy+q1+tQFAWz2Qy6rkPTtNgXWpAuu90Om80GpmmiUvkyFn9PFkqlUkGv14Pv+1gsFrEtsiB9HMeB7/vo9XrfBgW4ERbK29sbVFXFeDzG8XiMdJEF6eJ5HsbjMTRNw9vb24+//32MGFRVhaIomM/nIISg0Wi8vNCCdFmv1zgej+j3+yiVSne95sfJQimVSuh0OiiVSphOpzifz08vtCA9zuczptMpSqUSTNO8OyjAnZOFRdd1KIoC27ZhGAZqtdqjlyhIif1+j9VqBdM0Icvyw6+/e7KwyLKMfr8Pz/OwXC6fuURBwiwWC3ieh36//1RQgCfDQmk2myCEwLIs+L7/yqUKYuJ4PMKyLKiqimaz+dK1Hn4MXVOr1S6bX1VVoev6q5csiIjNZgPXddHtdlEuvzQXALw4WS4XKZfx/v6OMAwxm80QhmEUly14EvY+dDqdSIICRDBZWBqNxmXsNZtNqKoa5eUL7uBwOGC5XMI0TVSr1UivHU3kGKrVKgaDAQ6HAz4+PqK+fMENlsslDocDBoNB5EEBYggLpdVqQZZlTCYTnE6nuN6mAIDv+5hMJiCEoNVqxfY+kT6GrtE07bL51TQN9Xo9zrfLJdvtFvv9Hp1OB5IkxfpesU0WiiRJ6Ha7CIIA8/k87rfLFfP5HEEQ4P39PfagAAmEhWIYBnRdx2g0guu6Sb2tkHxlsSVBYmEBAEIIhsMhdrtdYeM9ycfHx5cWWxIkGhZKu90ubLwHOZ1OsG0bsiynJtbHusG9RWHj3c9ut8N2u0W73b4pJ8VNKpOFwtp4juOkuRRuoRZbt9tNNShAymGhvL29QdM0jMfj4ijK/zxqsSVBulFlUBQF/X4fjuPA87xc23ir1Qq+7z9ksSUBF5OFwtpbebTxgiDAdDqFJEkPW2xJwM1kYcmjjbff77Fer9Fut5+Wk+KGq8nCwtp4oh9FoRZbr9fjNigAx2GhUNXBsizhjqIcj0eMx+NILLYk4PIxdI2qqiCEwHEcKIoihI23Xq8vTixve5Pv4H6yUMrlMjqdTuZtvPP5jNls9uloTVbIxGRhybKNR4Wwdrsdi5wUN5mZLCysjZeVoyjUYuv3+5kMCpDRsFBarRYIIZhMJtweRUnKYkuCzD2GrqnVapfNb61W48rG22w2OBwOiVhsSZDpyUKRJAnv7+/c2HhhGGI+nyMMw8QstiQQIiwUHmw813VhWRZ0XRfu8y2hwgJ8tvGSPopCLbbBYJC4xZYEwoWFQj9jsW079qMop9MJk8kkVYstCTK/wb2FpmmXzW+9Xo/Fxttut9jtdsJsYm8h7GShVCoVdLvdWGw8x3EQBAG63a7wQQFyEBZKlDae53kYjUbQNC3RoxhpI/Rj6BrWxnNd96kbTS224XAYwwr5JjeThUJtPEmSMJ1O7z6Kcm2x5ZFcTRaWer0OQghmsxkajcZNG48WCvNssSVB7iYLiyzL6PV6N228xWJxKRTOc1CAnIeFQlUHthiatdh4OYqRNrl9DF3DFkNTsmSxJUExWRiofUcDklUbLy6KyfI/tFCYWmzH4xG2bV++u6CgmCwA/rPYqDxNLbZqtYp+v58pGy9uch0W3/dhWRYIId8exciCjZcUuX0MUYvtnkJh1sbLczF07ibLtcV2b6EwtfHY1+eNXIXlcDi8bLE1Gg3oug7LsnLXjZebsHx8fFwKhV+12AghGAwGqdh4aSJ8WFiLLeqjGPSzorwUQwu9wU3CYstTMbSwkyVJi40thha5G0+4sNBC4TQsNsMwoGkaRqORkN14QoVltVpdCoUVRUllDYqiYDgcYrPZCFcMLURYgiCAbduQJImboxjP2Hi8k/kNLrXYTNNMvSf2GtbGE6EYOtOThbXYeAsKhdp4vu9nvhsvk2GhhcJZstio6sDaeFmDzz/HG6zXaxyPx0xabKyNRwjJ3MH5zEyW8/mM6XT6qVg5i7BdcrPZLFPF0JmYLNRiM01TGMNe13UQQjJVDM39ZGEtNlGCQqE2nud5mbDxuA0LbaS8ZbGJQrPZBCEElmVxbeNx+RjabDZwXfcui00UarXaZfPLq43H1Z1gC5E7nU5ugkIpl8tc23jc3A1qsRmGkbn/UkYNa+MdDoe0l3OBi7CwFltWC4Wjhtp4tJWbB1INCy0UjsNiE4VWq8WNjZfaBne73WK/3+eii+1VeLHxUpks8/kcQRAIVSgcNzzYeImGhVpsuq7nqostSlgbL+mjKImFhbXYRCwUThJq4+12u0RtvNjDwqPFJgrtdhuSJMG27URsvFg3uDxbbKJQr9ehKEoiNl5sk8VxHO4tNlGoVCqJ2HiRh4VabJqmZcZiEwXWxovjKEqkf/JZtthEgdp4juPA87xIPzqJZLLQQuGsW2yiwN6H6XQamY338mTZ7/dYr9e5LxTmEV3XoShKZDbeS5NlsVjA87yiUJhjZFmOzMZ7KizUYlNVVXiLTRRYG+/ZoygPP4byaLGJArXxHMeBoigP23h33+28W2yiUC6X0el0Pt3Pe7lrstAuWNM0CzlJEBqNxmU7Qb+74Cd+HA/L5bKw2ASlWq0+ZON9GxZqsRFCCotNcFgb79ZRlC8fQ4XFlj+ojec4Dmq12pc23qfJQo8gFBZbPqHF0EEQfPoqHcolLK7rXgqFC4st3xiGAV3X/7LxSn/+/Ak1TUMQBIWcVPAXjuOgUqlgu92iNB6Pf5/P519pL6qAb0ql0u9/AZLSf9C89Wz/AAAAAElFTkSuQmCC'
					},
					{
						tupian1: 'data:image/png;base64,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'
					}
				],
				textarea: '项目简介', //项目简介
			}
		},
		methods: {
			// 返回服务页面
			click: function() {
				this.$router.push('/mrsfuwu')
			}
		}

	};
</script>

<style scoped>
	.content {
		width: 100%;
		position: relative;
		background-color: #f2f2f2;
	}

	.content::after {
		content: '';
		clear: both;
		display: block;
	}

	.body {
		width: 90%;
		position: relative;
		background-color: #fff;
		margin: 0px auto;
	}

	.body::after {
		content: '';
		clear: both;
		display: block;
	}

	.ziti {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-size: 15px;
		color: #333333;
	}

	.zuo {
		width: 17%;
		position: relative;
		display: inline-block;
		float: left;
	}

	.zuo::after {
		content: '';
		clear: both;
		display: block;
	}

	.you {
		width: 82.5%;
		position: relative;
		display: inline-block;
		float: left;
		border-left: solid 1px #e6e6e6;
		padding-bottom: 150px;
	}

	.you::after {
		content: '';
		clear: both;
		display: block;
	}

	.you-div {
		width: 98%;
		position: relative;
		float: right;
	}

	.you-div::after {
		content: '';
		clear: both;
		display: block;
	}

	.tab {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #e3e3e3;
	}

	.tab::after {
		content: '';
		clear: both;
		display: block;
	}

	.active {
		border-bottom: 2px solid #969b35;
	}

	.tab li {
		float: left;
		padding: 0px 25px 15px 15px;
		margin-right: 20px;
		cursor: pointer;
	}

	.p {
		margin-bottom: 30px;
		font-size: 14px;
	}

	.span {
		width: 80px;
		display: inline-block;
	}

	.img {
		margin-left: 20px;
	}

	.img:first-child {
		margin-left: 80px;
	}
</style>
