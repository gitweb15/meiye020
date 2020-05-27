<template>
	<!-- 排班管理页面 -->
	<div id="zhongxin">
		<!-- 头部 -->
		<Header></Header>
		<!-- 主体 -->
		<div class="content">
			<!-- 侧边栏 -->
			<Aside></Aside>
			<!-- 中心内容 -->
			<div class="neirong">
				<div class="toubu">
					<span class="baocun" @click="baocun">保存</span>
					<span class="biaoti">排班设置</span>
				</div>
				<!-- table表,但是未做点击选择打钩功能,还未遍历 -->
				<table cellspacing="0" border="1">
					<tr>
						<th>班次</th>
						<th>周日<br>{{time}}</th>
						<th>周一<br>{{time1}}</th>
						<th>周二<br>{{time2}}</th>
						<th>周三<br>{{time3}}</th>
						<th>周四<br>{{time4}}</th>
						<th>周五<br>{{time5}}</th>
						<th>周六<br>{{time6}}</th>
					</tr>
					<tr v-for="n in list" :key="n.index">
						<td>{{n.list}}</td>
						<td><input class="mb_awesome" type="checkbox" v-model="n.list1"></td>
						<td><input class="mb_awesome" type="checkbox" v-model="n.list2"></td>
						<td><input class="mb_awesome" type="checkbox" v-model="n.list3"></td>
						<td><input class="mb_awesome" type="checkbox" v-model="n.list4"></td>
						<td><input class="mb_awesome" type="checkbox" v-model="n.list5"></td>
						<td><input class="mb_awesome" type="checkbox" v-model="n.list6"></td>
						<td><input class="mb_awesome" type="checkbox" v-model="n.list7"></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件
	import Header from '../components/Header/index.vue';
	import Aside from '../components/Aside/index.vue';
	export default {
		name: 'paibang',
		components: {
			Header,
			Aside
		},
		data() {
			return {
				//周日到周六的时间
				time: '12-14',
				time1: '12-15',
				time2: '12-16',
				time3: '12-17',
				time4: '12-18',
				time5: '12-19',
				time6: '12-20',
				list: [{
						list: '08:00', //日期
						list1: false, //周日
						list2: true, //周一
						list3: false, //周二
						list4: false, //周三
						list5: true, //周四
						list6: false, //周五
						list7: true, //周六
					},
					{
						list: '09:00',
						list1: false,
						list2: true,
						list3: true,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					},
					{
						list: '10:00',
						list1: false,
						list2: false,
						list3: true,
						list4: false,
						list5: true,
						list6: false,
						list7: false,
					}, {
						list: '11:00',
						list1: false,
						list2: false,
						list3: true,
						list4: false,
						list5: false,
						list6: true,
						list7: false,
					},
					{
						list: '12:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					},
					{
						list: '13:00',
						list1: true,
						list2: false,
						list3: true,
						list4: true,
						list5: false,
						list6: true,
						list7: false,
					}, {
						list: '14:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					},
					{
						list: '15:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					}, {
						list: '16:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					},
					{
						list: '17:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					}, {
						list: '18:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					},
					{
						list: '19:00',
						list1: false,
						list2: false,
						list3: true,
						list4: false,
						list5: false,
						list6: false,
						list7: true,
					}, {
						list: '20:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					},
					{
						list: '21:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					},
					{
						list: '22:00',
						list1: false,
						list2: false,
						list3: false,
						list4: false,
						list5: false,
						list6: false,
						list7: false,
					}
				]
			}
		},
		methods: {
			baocun() {
				var list1 = this.list
				console.log("保存")
				console.log(list1)
			}
		}
	}
</script>

<style scoped>
	#zhongxin {
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		position: relative;
	}

	#zhongxin:after {
		display: block;
		clear: both;
		content: '';
	}

	.content {
		width: 1058px;
		height: 715px;
		position: relative;
		margin: 0px auto;
		background-color: #fff;
	}

	.neirong {
		display: inline-block;
		float: left;
		padding-top: 5px;
		width: 895px;
		height: 710px;
		position: relative;
		border-left: 1px solid #e4e4e4;
	}

	.toubu {
		width: 817px;
		height: 85px;
		margin: 0px auto;
	}

	.biaoti {
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
		font-weight: 700;
		font-style: normal;
		font-size: 32px;
		text-align: left;
		float: right;
		position: relative;
		top: 17px;
		left: -99px;
	}

	.baocun {
		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #000;

		float: right;

		display: inline-block;
		text-align: center;
		width: 110px;
		height: 25px;
		background-color: rgba(255, 255, 255, 0);
		box-sizing: border-box;
		border: 1px solid rgba(121, 121, 121, 1);

		position: relative;
		top: 21px;
		left: -12px;

		line-height: 23px;
		cursor: pointer;
	}

	table {
		width: 820px;
		margin: 0px auto;
		border-width: 0px 0px 1px 1px;
		border-style: solid;
		border-color: black;
	}

	th,
	td {
		width: 109px;
		height: 36px;

		font-family: 'Arial Normal', 'Arial';
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
		letter-spacing: normal;
		color: #333333;

		text-align: center;
	}

	th {
		border-width: 1px 1px 0px 0px;
		border-style: solid;
		border-color: black
	}

	td {
		border-width: 1px 1px 0px 0px;
		border-style: solid;
		border-color: black
	}

	input[type="checkbox"].mb_awesome {
		width: 97%;
		height: 93%;
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		line-height: 35px;
		position: relative;
		border: 1px solid #fff;
		cursor: pointer;
	}

	input[type="checkbox"].mb_awesome::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
		width: 100%;
		height: 100%;
		border: 1px solid #fff;
	}

	input[type="checkbox"].mb_awesome:checked::before {
		content: "\2713";
		background-color: #fff;
		color: #333;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border: 1px solid #fff;
		font-size: 12px;
		font-weight: bold;
	}
</style>
