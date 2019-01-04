<template>
  <div class="container">
    <!-- <div class="title">
      <a href="javascript:void(0)">superFatDu</a>
    </div> -->
    <div class="personInfo">
      <div class="img">
        <img src="@/assets/img/me.jpg" alt="">
      </div>
      <div class="info">
        <p class="name">superFatDu</p>
        <!-- <p>This is Robin Du's blog.</p> -->
        <p>I'm a front-end developer.</p>
        <p>to keep thinking all the time.</p>
      </div>
      <div class="contact">
        <a href="mailto:superduchengwu@163.com"><img class="email" src="@/assets/img/email.png" alt="" title="superduchengwu@163.com"></a>
        <a href="https://github.com/superFatDu"><img class="github" src="@/assets/img/github.png" alt="" title="github"></a>
        <a href="http://www.cnblogs.com/duchengwu/"><img class="bky" src="@/assets/img/bokeyuan.png" alt="" title="博客园"></a>
      </div>
    </div>
    <div class="copyright">
      <div class="gitee">
        <a href="https://gitee.com/duchengwu" title="Gitee/superFatDu" target="_blank"><img src="@/assets/img/gitee.png" alt=""></a><br>
        <span>Fork & Star</span>
      </div>
      <div class="footer">
        <p>Page designed by superFatDu</p>
        <p>&copy; 2018 In China  <img src="@/assets/img/China.png" alt=""></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe'
}
</script>

<style lang="stylus" scoped>
  .container
    background #fff
    width 100%
    display flex
    flex-direction column
    position relative
    .personInfo
      width 100%
      padding-top 50px
      .img
        width 100%
        text-align center
        img
          width 100px
          height 100px
          border-radius 50%
      .info
        p
          color #333
          box-sizing border-box
          padding 0 10px
          line-height 16px
          text-align center
        .name
          font-size 18px
          font-weight 600
          margin 20px 0 10px 0
          color #2872d8
      .contact
        box-sizing border-box
        padding 0 30px
        margin-top 20px
        width 100%
        display flex
        justify-content space-around
        .email
          height 25px
        .github
          height 20px
          padding-left 8px
        .bky 
          height 20px
    .copyright
      width 100%
      color #333
      position absolute
      bottom 10px
      .gitee
        width 100%
        text-align center
        margin-bottom 15px
        img
          width 20px
        span
          line-height 25px
      .footer
        width 100%
        p
          width 100%
          text-align center
          line-height 20px
          img
            height .5rem
</style>