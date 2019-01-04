<template>
	<div class="admin-header">
		<img src="@/assets/img/logo.png" alt="">
		<ul>
			<li v-for="(items,index) in ulList" :key="items.id" @click="handleUl(index)" :class="{'active':dex == index}">{{items.name}}</li>
		</ul>
		<div class="name">
			欢迎您，<span>{{this.$store.state.name}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AdminHeader',
	data () {
		return {
			ulList: [{
				id: 1,
				name: '文章管理'
			},{
				id: 2,
				name: '文章录入'
			},{
				id: 3,
				name: '博客主页'
			}],
			dex: 0
		}
	},
	methods: {
		handleUl (index) {
			this.dex = index;
			if(index == 2){
				this.$router.push("/")
			}else if(index == 1){
				console.log(index);
				this.$emit('handleNavShow',index);
			}else{
				console.log(index)
				this.$emit('handleNavShow',index);
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.admin-header
		width 100%
		height 60px
		line-height 60px
		box-shadow 0px 3px 20px 0px rgba(208,208,208,.83)
		background #fff
		position fixed
		top 0
		z-index 99
		display flex
		align-items center
		img
			padding 0 20px
			height 38px
		span
			font-size .32rem
		.name
			position absolute
			top: 50%
			right 20px
			transform translateY(-50%)
			span
				color #2872d8
		ul
			display flex
			li
				padding 0 20px
				font-size .3rem
				cursor pointer
			.active
				color #2872d8
</style>