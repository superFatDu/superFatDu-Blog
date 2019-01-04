<template>
	<div class="bread-container">
		<router-link to="/"><span class="iconfont">&#xe62f;</span>HOME</router-link>/ 
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "BreadNav"
}
</script>

<style lang="stylus" scoped>
	.bread-container
		box-sizing border-box
		padding-left 20px
		a
			color #2872d8
</style>