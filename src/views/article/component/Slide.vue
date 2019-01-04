<template>
  <div class="slide-container">
    <div class="like" :class="{'likeBlue':showLike}"  @click="addLike">
      <span class="iconfont">&#xe6a4;</span>
      <span class="like-n">{{articleDetail.like_num}}</span>
    </div>
    <div class="comment">
      <span class="iconfont">&#xe605;</span>
      <span class="comment-n" v-show="showComment">{{length - 1}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleSlide',
  props: {
    articleDetail: Object,
    length: Number
  },
  data () {
    return {
      showLike: false,
      showComment: true,
      add: 'no'
    }
  },
  methods: {
    addLike () {
      if(this.add == 'no'){
        this.articleDetail.like_num += 1;
        this.add = 'yes';
        this.showLike = true;
      }else{
        this.articleDetail.like_num -= 1;
        this.add = 'no';
        this.showLike = false;
      }
      this.$emit("updateLikeNum",this.articleDetail.like_num);
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
  .slide-container
    position fixed
    top 100px
    left 18%
    .like
      background #fff
      width 35px
      height 35px
      border-radius 50%
      display flex
      justify-content center
      align-items center
      margin-bottom 10px
      cursor pointer
      position relative
      .iconfont
        color #bbb
      .like-n
        font-size .2rem
        padding 0 2px
        border-radius 5px
        color #fff
        background #bbb
        position absolute
        top -2px
        left 25px  
    .like:hover
      .iconfont
        color #2872d8
    .likeBlue
      .iconfont
        color #2872d8
    .comment
      background #fff
      width 35px
      height 35px
      border-radius 50%
      display flex
      justify-content center
      align-items center
      margin-bottom 17px
      cursor pointer
      position relative
      .iconfont
        color #bbb
      .comment-n
        font-size .2rem
        padding 0 2px
        border-radius 5px
        color #fff
        background #bbb
        position absolute
        top -2px
        left 25px
    .comment:hover
      .iconfont
        color #2872d8
</style>