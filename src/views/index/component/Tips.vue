<template>
	<div class="tips-container">
		<div class="tip-qq">
			<img src="@/assets/img/qq.jpg" alt="">
			<div class="qq-word">
				<p class="word-name">前端开发创想群</p>
				<p>创想使人进步</p>
			</div>
		</div>
		<div class="tip-content">
			<p><span class="iconfont">&#xe646;</span> 热文推荐</p>
			<div class="tipList">
				<ul>
					<li v-for="(item,index) in indexTipInfo" :key="index"><router-link :to="'/article/'+item._id">{{item.article_name}}</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IndexTips',
	props: {
		indexTipInfo: Array
	}
}
</script>

<style lang="stylus" scoped>
	.tip-qq
		display flex
		padding 15px 10px
		background #fff
		img
			width 60px
			height 60px
		.qq-word
			flex 1
			margin-left 10px
			p
				line-height .6rem
				color #999
			.word-name
				color #333
				font-size .3rem
	.tip-content
		margin-top 20px
		background #fff
		p
			box-sizing border-box
			font-size .3rem
			padding 15px 10px
			width 100%
			border-bottom 1px solid #f1f1f1
		.tipList
			padding 5px 0
			li
				box-sizing border-box
				padding 10px 10px
				line-height .3rem
				cursor pointer
				a
					color #333
			li:hover 
				background #f5f5f5
				a
					color #2872d8
</style>