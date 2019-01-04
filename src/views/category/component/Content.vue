<template>
  <div class="content-container">
    <div class="essayList" v-for="(item,index) in categoryList" :key="index">
      <div class="title">
        <router-link :to="'/article/'+item._id"><p class="essay-name">{{item.article_name}}</p></router-link>
        <div class="essay-info">
          <span class="iconfont">&#xe625;</span><span>{{item.time}}</span> | 
          <span class="iconfont">&#xe677;</span><span>{{item.author}}</span> |
          <span class="iconfont">&#xe64a;</span><span>{{item.category}}</span><!--  |
          <span class="iconfont">&#xe6ec;</span><span>北京</span> -->
        </div>
        <div class="essay-abstract">{{item.abstract}}</div>
        <div class="essay-more">
          <div class="more-info">
            <!-- <span class="essay-cate">前端</span>  --><span>{{item.author}}</span> . <span>{{item.read_num}}次阅读</span>
          </div>
          <div class="more-btn">
            <router-link :to="'/article/'+item._id"><span>阅读全文</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryContent',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>
.content-container
  width 55%
  margin 0 auto
  background #fff
  box-sizing border-box
  padding 30px 20px 20px 20px
  .essayList
    /*border-bottom 1px solid #f1f1f1*/
    border 1px solid #f1f1f1
    padding 20px
    margin-bottom 30px
    transition all .5s
    cursor default
    .essay-name
      color #333
      font-size .38rem
      text-align center
      line-height .8rem
      font-weight 600
    .essay-info
      text-align center
    .essay-abstract
      text-align justify
      margin 30px auto 0 auto
      letter-spacing .01rem
      line-height .4rem
    .essay-more 
      position relative
      padding 15px 0 30px 0
      .more-info
        color #999
      .more-btn
        position absolute
        top 50%
        right 0
        transform translateY(-50%)
        cursor pointer
        span
          padding 5px 7px
          color #fff
          background #2872d8
          border-radius .05rem
  .essayList:hover
    box-shadow 0 6px 18px 0 rgba(232,237,250,.8)
    transform translateY(-5px)
  .essayList:last-child
    margin-bottom 10px
</style>