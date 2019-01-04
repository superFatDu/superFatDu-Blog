<template>
	<div class="header-container">
		<ul>
			<router-link to="/"><li><img src="@/assets/img/logo.png"></li></router-link>
			<a href="javascript:void(0)" v-for="(item,index) in navList" :key="index" @click="turnCategory(index)"><li class="liHover" :class="{'active':dex == index}" @click="dex=index">{{item}}</li></a>
		</ul>
		<div class="loginCheck">
			<div class="loginY" v-show="loginY">
				<i class="iconfont">&#xe677;</i>  {{this.$store.state.name}}
			</div>
			<div class="loginN" v-show="loginN">
				<router-link to="/login">登录</router-link> . <router-link to="/login">注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IndexHeader',
	data () {
		return {
			navList: ['首页','HTML','CSS','JS','生活杂谈'],
			dex: 0,
			loginY: false,
			loginN: true
		}
	},
	methods: {
		turnCategory (index) {
			if(index == 0){
				this.$router.push("/");
			}else{
				this.$router.push({name: 'Category',params: { 
					category:index,
					name: this.navList[index]
				}});
			}
		},
		handleHeader () {
			if(this.$store.state.name != ''){
				this.loginY = true;
				this.loginN = false;
			}
		}
	},
	created () {
		this.handleHeader();
	}
}
</script>

<style lang="stylus" scoped="">
	.header-container
		width 100%
		line-height 60px
		color #333
		position relative
		ul
			display flex
			a
				color #333
			li
				padding 0 20px
				font-size .3rem
				img
					height 38px
			.liHover:hover
				color #2872d8
			.active
				color #2872d8
				font-weight 600
		.loginCheck
			position absolute
			top 50%
			right 20px
			font-size .3rem
			transform translateY(-50%)
			.loginY
				color #2872d8
				.iconfont
					color #333
					
			a
				color: #2872d8	
</style>