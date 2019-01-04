<template>
	<div class="index-pagination">
		<div class="block">
	    <el-pagination
	    	background
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page.sync="currentPage"
	      :page-size="5"
	      layout="prev, pager, next, jumper"
	      :total="allCount">
	    </el-pagination>
	  </div>
	</div>
</template>

<script>
export default {
	name: 'IndexPagination',
	props: {
		allCount: Number
	},
	data () {
		return {
			currentPage: 1,
			handlePage: 0
		}
	},
	methods: {
		handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
    	console.log("查询中……")
      console.log(`当前页: ${val}`);
      this.handlePage = val;
      this.$emit("handleIndexPagination",this.handlePage)
    }
	}
}
</script>

<style lang="stylus" scoped>
	>>> .el-pagination
		text-align right
	>>> .el-pagination.is-background .el-pager li:not(.disabled).active
		background-color #2872d8
</style>