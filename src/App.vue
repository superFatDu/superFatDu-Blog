<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  @import '~@/assets/styles/variable.styl'
  #app 
  	height 100%
  	width 100%
</style>
