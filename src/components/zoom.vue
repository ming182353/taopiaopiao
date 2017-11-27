<template>
<div class="wrap">
  <main>
    <div class="movie-order">
      <div class="order-item">
        <a href="">
          <img src="static/images/icon/icon1.gif"><span>我的电影票</span><img src="static/images/icon/icon_right.gif" class="pos-img" alt="">
        </a>
        <a href="">
          <img src="static/images/icon/icon2.gif"><span>优惠券 </span><img src="static/images/icon/icon_right.gif" class="pos-img" alt="">
          <span></span>
        </a>
      </div>
      <div class="order-item">
        <a href="" class="pos-img" alt="">
        </a>
        <a href="" class="order-item--child opinion">
          <img src="static/images/icon/icon4.gif"><span>意见反馈</span><img src="static/images/icon/icon_right.gif" class="pos-img" alt="">
        </a>
      </div>
    </div>
  </main>
  <footerBar></footerBar>
</div>

</template>
<script>
import footerBar from '@/public/footer/footer.vue'
export default {
  data () {
    return {}
  },
  components: {
    footerBar
  }
}
</script>

<style lang="less" scoped>
main{
  padding: 0;
  background: #f0f0ff;

}
.order-item{
    margin-top: .15rem;
    padding-left: .26rem;
    background: #fff;
  .order-item--child{
    display: flex;
    height: 0.5rem;
    line-height: .5rem;
    color: #505050;
    border-bottom: 1px solid #ccc;
    text-align: left;
    position: relative;
    .pos-img{
      position: absolute;
      right: .15rem;
    }
    img{
      width: .24rem;
      height: .24rem;
      margin-top: .14rem;
      margin-right: .1rem;
    }
  }
}
</style>

