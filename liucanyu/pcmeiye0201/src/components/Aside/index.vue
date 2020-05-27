<template>
	<!-- 侧边栏 -->
	<div id="aside">
		<el-menu default-active="index" active-text-color="#303133" class="el-menu-vertical-demo" @select="handleSelect"
		 router>
			<el-menu-item index="1" @click="shouye">
				<i class="el-icon-s-goods" style="color: #909399;"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-s-cooperation" style="color: #909399;"></i>
					<span>权限管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="3" @click="liebiao">权限列表</el-menu-item>
					<el-menu-item index="4" @click="juese">角色管理</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-s-custom" style="color: #909399;"></i>
					<span>会员管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="6" @click="xiaofeizhe">消费者</el-menu-item>
					<el-menu-item index="7" @click="meirongdian">美容店</el-menu-item>
					<el-menu-item index="8" @click="meirongshi">美容师</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="9" @click="dingdangl">
				<i class="el-icon-s-order" style="color: #909399;"></i>
				<span slot="title">订单管理</span>
			</el-menu-item>
			<el-menu-item index="10" @click="zijingl">
				<i class="el-icon-s-operation" style="color:#909399;"></i>
				<span slot="title">资金管理</span>
			</el-menu-item>
			<el-menu-item index="11" @click="fuwu">
				<i class="el-icon-s-tools" style="color: #909399;"></i>
				<span slot="title">服务设置</span>
			</el-menu-item>
			<el-menu-item index="12" @click="yijianfankui">
				<i class="el-icon-s-order" style="color: #909399;"></i>
				<span slot="title">意见反馈</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: "Aside",
		data() {
			return {

			}
		},
		computed: {
			activeIndex() {
				return this.$route.path.replace('/', '')
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(this);
				console.log(key, keyPath);
			},
			//跳转页面
			shouye() {
				this.$router.push('/');
			},
			//权限列表
			liebiao() {
				this.$router.push('/liebiao');
			},
			//角色管理
			juese() {
				this.$router.push('/juese');
			},
			//订单管理
			dingdangl() {
				this.$router.push('/dingdan');
			},
			//资金管理
			zijingl() {
				this.$router.push('/guanli');
			},
			//服务设置
			fuwu() {
				this.$router.push('/fuwu');
			},
			//意见反馈
			yijianfankui() {
				this.$router.push('/yijianfankui');
			},
			//消费者
			xiaofeizhe() {
				this.$router.push('/xiaofeizhe');
			},
			//美容店
			meirongdian() {
				this.$router.push('/meirongdian');
			},
			//美容店
			meirongshi() {
				this.$router.push('/meirongshi');
			}
		}
	}
</script>

<style scoped>
	#aside {
		width: 100%;
		position: relative;
		color: #666666;
		display: inline-block;
		float: left;
	}

	.el-menu {
		border-right: solid 0px #e6e6e6;
	}
</style>
