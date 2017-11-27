<template>
    <swiper :options="swiperOption" class="movie-banner">
        <swiper-slide v-for="(item,index) in bannerImages" :key="index"><img :src="item.img" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['bannerImages'],
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption: {
        autoplay: 1000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
.movie-banner{
  .swiper-slide{
    img{
        display: block;
        width: 100%;
        height: auto;
    }
  }
}
</style>

