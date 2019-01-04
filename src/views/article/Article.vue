<template>
  <div class="container">
    <div class="headerFixed">
      <article-header></article-header>  
    </div>
    <div class="content">
      <article-content :articleDetail="article_detail"></article-content>
    </div>
    <div class="comment">
      <article-comment :articleDetail="comment_info" :length="length"></article-comment>
    </div>
    <div class="slide">
      <article-slide :articleDetail="article_detail" :length="length" @updateLikeNum="updateLikeNum"></article-slide>
    </div>
  </div>
</template>

<script>
import ArticleHeader from './component/Header'
import ArticleContent from './component/Content'
import ArticleSlide from './component/Slide'
import ArticleComment from './component/Comment'
export default {
  name: "Article",
  components: {
    ArticleHeader,
    ArticleContent,
    ArticleSlide,
    ArticleComment
  },
  data () {
    return {
      article_detail: {},
      comment_info: [],
      length: 0,
      rnum: 0
    }
  },
  methods: {
    getArticleDetail () {
      var str = this.$route.path;
      var index = str.lastIndexOf("\/");
      var _id = str.substring(index+1,str.length);
      this.axios.post('/editor/getArticleDetail',{
        article_id: _id
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          this.article_detail = res.result.list[0];
          this.rnum = res.result.list[0].read_num;
          if(res.result.list[0].article_comment.length <= 1){
            this.comment_info = []
          }else{
            for(var i = 1;i < res.result.list[0].article_comment.length;i++){
              this.comment_info.push(res.result.list[0].article_comment[i])
            }
          }
          this.length = res.result.list[0].article_comment.length;
          /*console.log(this.article_detail);
          console.log(this.comment_info)*/
          //查询结束改变阅读次数
          console.log(_id);
          this.axios.post('/editor/updateReadNum',{
            read_num: this.rnum + 1,
            _id: _id
          }).then((response)=>{
            let res = response.data;
            if(res.status == '0'){

            }else{
              console.log("res.msg")
            }
          })
        }else{
          console.log(res.msg);
        }
      })
    },
    updateLikeNum (val) {
      var str = this.$route.path;
      var index = str.lastIndexOf("\/");
      var _id = str.substring(index+1,str.length);
      this.axios.post('/editor/updateLikeNum',{
          like_num: val,
          _id: _id
        }).then((response)=>{
          let res = response.data;
          if(res.status == '0'){

          }else{
            console.log(res.msg)
          }
        })
    }/*,
    updateReadNum () {
      var str = this.$route.path;
      var index = str.lastIndexOf("\/");
      var _id = str.substring(index+1,str.length);
      this.axios.post('/editor/updateReadNum',{
        read_num: this.rnum + 1,
        _id: _id
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){

        }else{
          console.log("res.msg")
        }
      })
    }*/
  },
  mounted () {
   /* this.updateReadNum();*/
  },
  created () {
    this.getArticleDetail();
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 100%
    position relative
    background #f5f5f5
    .headerFixed
      position fixed 
      top 0
      width 100%
      z-index 9
    .content
      margin-top 80px
</style>