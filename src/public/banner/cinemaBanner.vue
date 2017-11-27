<template>
  <swiper :options="swiperOption" class="cinema-banner">
    <swiper-slide v-for="(item,index) in bannerImages" :key="index"><img :src="item.img" /></swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['bannerImages'],
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperind: 0,
      swiperOption: {
        slidesPerView: 3.5,
        centeredSlides: true,
        // effect: 'coverflow',
        // grabCursor: true,
        spaceBetween: 20,
        slideToClickedSlide: true,
        lazyLoading: true,
        normalizeSlideIndex: false,
        onSlideChangeStart: (swiper) => {
          this.$emit('swiperIndex', swiper.activeIndex)
        },
        onDoubleTap: function(swiper) {
          alert('你双击了Swiper');
        }
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
.cinema-banner {
  .swiper-slide {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>

