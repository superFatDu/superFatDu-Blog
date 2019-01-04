<template>
	<div class="category-container">
		<div class="header">
			<category-header></category-header>
		</div>
		<div class="content">
			<category-bread class="cnav">分类：{{this.$route.params.name}}</category-bread>
			<category-content :categoryList="categoryList"></category-content>	
			<category-pagination :count="allCount" @handlePage="handlePage"></category-pagination>
		</div>
	</div>
</template>

<script>
import CategoryHeader from './component/Header'
import CategoryContent from './component/Content'
import CategoryBread from './component/BreadNav'
import CategoryPagination from './component/Pagination'
export default {
	name: "Category",
	components: {
		CategoryHeader,
		CategoryContent,
		CategoryBread,
		CategoryPagination
	},
	data () {
    return {
      categoryList: [],
      allCount: 0
    }
  },
  methods: {
    getCategoryArticle () {
      var category = this.$route.params.name;
      this.axios.post('/editor/getCategoryArticle',{
        category: category
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          if(res.result.count){
            if(res.result.count < 5){
              for(let i = 0;i < res.result.count;i++){
                this.categoryList.push(res.result.list[i]);
              }
            }else{
              for(let i = 0;i < 5;i++){
                this.categoryList.push(res.result.list[i]);
              }
            }
            this.allCount = res.result.count;
            console.log(this.categoryList)
          }else{
            this.$message({
            type: 'success',
            message: '陛下，暂时没有相关文章!'
          });
          }
        }else{
          console.log(res.msg)
        }
      })
    },
    handlePage (index) {
    	this.axios.post('/editor/getCategoryPage',{
    		category: this.$route.params.name,
    		pageNum: index
    	}).then((response)=>{
    		let res = response.data;
    		if(res.status == '0'){
    			this.categoryList = res.result.list;
    		}else{
    			console.log(res.msg);
    		}
    	})
    }
  },
  created () {
    this.getCategoryArticle();
  },
  watch:{
      $route() {
      	this.categoryList = []
      	this.getCategoryArticle();
      }
  }
}
</script>

<style lang="stylus" scoped>
	.category-container
		.content 
			position relative
			margin-top 80px
			.cnav
				color #999
</style>