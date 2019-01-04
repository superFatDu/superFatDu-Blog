<template>
  <div class="bread-container">
    <router-link to="/"><span class="iconfont">&#xe62f;</span>HOME</router-link>/
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryBread"
}
</script>

<style lang="stylus" scoped>
  .bread-container
    width 55%
    margin 0 auto
    box-sizing border-box
    padding-left 20px
    line-height .6rem
    background #fff
    border-bottom 1px solid #f1f1f1
    a
      color #2872d8
</style>