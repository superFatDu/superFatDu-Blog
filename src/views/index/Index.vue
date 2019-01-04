<template>
  <div class="container wrapper">
    <div class="left">
      <about-me></about-me>
    </div>
    <div class="right">
      <div class="right-header" >
        <index-header></index-header>
      </div>
      <div class="right-container">
        <div class="right-content">
          <bread-nav class="bnav">首页</bread-nav>
          <index-content :indexArticleList="indexArticleList"></index-content>
          <index-pagination :allCount="article_count" @handleIndexPagination="handleIndexPagination"></index-pagination>
        </div>
        <div class="right-tips">
          <index-tips :indexTipInfo="indexTipInfo"></index-tips>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutMe from './component/aboutMe'
import IndexHeader from './component/Header'
import IndexContent from './component/Content'
import IndexTips from './component/Tips'
import BreadNav from '@/components/BreadNav'
import IndexPagination from './component/Pagination'
export default {
  name: 'Index',
  data () {
    return {
      indexArticleList: [],
      article_count: 0,
      indexTipInfo: []
    }
  },
  components: {
    aboutMe,
    IndexHeader,
    IndexContent,
    IndexTips,
    BreadNav,
    IndexPagination
  },
  methods: {
    getIndexArticleInfo () {
      this.axios.get('/editor/getArticleInfo').then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          for(let i = 0;i < 5;i++){
            var temp = [];
            this.indexArticleList.push(res.result.list[i]);
          }
          this.article_count = res.result.count;
        }else{
          console.log(res.msg);
        }
      })
    },
    getIndexTipsInfo () {
      this.axios.get('/editor/getIndexTipsInfo').then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          this.indexTipInfo = res.result.list;
          console.log(this.indexTipInfo)
        }else{
          console.log(res.msg);
        }
      })
    },
    handleIndexPagination (index) {
      this.axios.post("/editor/getArticleInfoPagination",{
        pageNum: index
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          this.indexArticleList = res.result.list;
        }else{
          console.log(res.msg)
        }
      })
    }
  },
  created () {
    this.getIndexArticleInfo();
    this.getIndexTipsInfo();
  },
  mounted () {
    
  }
}
</script>

<style lang="stylus" scoped>/*
  .wrapper
    border-top 2px solid #2872d8*/
  .container 
    width 100%
    height 100%
    display flex
    background #f5f5f5
    .left 
      width 250px
      height 100%
      border-right 1px solid #f1f1f1
      position fixed
      top 0
      left 0
    .right 
      flex 1
      margin 0 0px 0 270px
      position relative
      .right-header
        width calc(100% - 270px)
        height 60px
        background #fff
        /*box-shadow 0 2px 20px 0px rgba(0,0,0,.2)*/
        border 1px solid #f1f1f1
        border-width 0 1px 1px 1px
        position fixed 
        top 0
        z-index 99
      .right-container
        /*height calc(100% - 80px)
        position absolute*/
        margin-top 80px
        display flex
        .right-content
          position relative
          box-sizing border-box
          padding 65px 20px 40px 20px
          flex 1
          background #fff
          border 1px solid #f1f1f1
          margin-right 270px
          .bnav
            color #999
            line-height .6rem
            width 100%
            position absolute
            top 0px
            left 0
            border-bottom 1px solid #f1f1f1
        .right-tips
          position fixed 
          top 0
          right 0
          /*margin-left 20px*/
          margin-top 80px
          margin-left 20px
          width 250px
         /* border 1px solid #f1f1f1*/
</style>