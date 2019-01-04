<template>
	<div class="category-pagination">
		<div class="block">
	    <el-pagination
	    	background
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page.sync="currentPage"
	      :page-size="5"
	      layout="prev, pager, next, jumper"
	      :total="count">
	    </el-pagination>
	  </div>
	</div>
</template>

<script>
export default {
	name: 'CategoryPagination',
	props: {
		count: Number
	},
	data () {
		return {
			currentPage: 1,
			pageNum: 0
		}
	},
	methods: {
		handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
    	console.log("查询中……")
      console.log(`当前页: ${val}`);
      this.pageNum = val
      this.$emit("handlePage",this.pageNum);
    }
	}
}
</script>

<style lang="stylus" scoped>
	>>> .el-pagination
		text-align right
	>>> .el-pagination.is-background .el-pager li:not(.disabled).active
		background-color #2872d8
	.category-pagination
		background #fff
		width 55%
		margin 0px auto 0px auto
		box-sizing border-box
		padding 0 20px 40px 0
</style>