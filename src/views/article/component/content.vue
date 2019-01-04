<template>
  <div class="content-container">
  	<div class="essay-content">
      <div class="articleTime_Name">
        <img src="@/assets/img/brain.png" alt="">
        <div class="time_name">
          <span class="name">{{articleDetail.author}}</span>
          <span class="time">{{articleDetail.time}}</span>
        </div>
      </div>
      <div class="article_title">
        <p>{{articleDetail.article_name}}</p>
        <div class="article_title-info">
          <span class="iconfont">&#xe625;</span><span>{{articleDetail.time}}</span> | 
          <span class="iconfont">&#xe677;</span><span>{{articleDetail.author}}</span> |
          <span class="iconfont">&#xe64a;</span><span>{{articleDetail.category}}</span><!--  |
          <span class="iconfont">&#xe6ec;</span><span>北京</span> -->
        </div>
      </div>
      <div class="article-detail" v-html="articleDetail.article_content"></div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'ArticleContent',
  data () {
    return {
    }
  },
  props: {
    articleDetail: Object
  },
  methods: {
    handleData () {
    }
  },
  created () {

  }
}
</script>

<style lang="stylus" scoped>
  .content-container
    width 50%
    margin 20px auto 0 auto
    background #fff
    box-sizing border-box
    padding 20px 
    .essay-content
      border-bottom 1px solid #f1f1f1
      position relative
      .articleTime_Name
        display flex
        img
          width 50px
          height 50px
        .time_name
          display flex
          flex-direction column
          justify-content center
          padding-left 10px
          span
            line-height 20px
          .name
            font-size 16px
            font-weight 600
      .article_title
        padding-top 10px
        p
          line-height .8rem 
          font-size .38rem 
          font-weight 600
          text-align center
        .article_title-info
          text-align center
      .article-detail
        padding 20px 0 40px 0
        line-height 20px
        #toComment
          height 0
          position absolute
          bottom 0
</style>