<template>
  <div id="app">
    <!-- <keep-alive include="movie"> -->
      <router-view></router-view>
      
    <!-- </keep-alive> -->
  </div>

</template>
<script>
import '../static/css/reset.css'
import '../static/css/swiper.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
</style>
