<template>
    <div class="contexts">
        <div class="context" v-for="(item, index) in movieLists" :key="index" @click="contextMeta(item, index)">
          <!-- <router-link :to="{name:'xiangqing', params:{
              movie_id: index,
              title: item.name,
              watcher: item.remarkCount
            }
          }"> -->
            <dl class="dl">
                <dt>
                    <img :src="item.image" />
                </dt>
                <dd>
                    <h4><b>{{item.name}}</b></h4>
                    <div class="show-star-ranking" v-if="item.type == 1">
                        <span class="star-ranking">{{item.star}}</span>
                        <span>{{item.remark}}分</span>
                    </div>
                    <div class="show-star-ranking" v-else>
                        <span>{{item.remarkCount}}人想看</span>
                    </div>
                    <p class="action">导演：{{item.director}}</p>
                    <p class="mainaction">
                      主演：<span v-for="(ite, ind) in item.leadingRole" :key="ind">{{ite}}</span>
                    </p>
                    <div class="buy" v-if="item.type == 1">购票</div>
                    <div class="blue" v-else>预约</div>
                    <div class="fantastic" v-if="item.type == 1">
                        <img src="static/images/icon/hot0.png" />
                        <img src="static/images/icon/hot1.png" />
                    </div>
                    <div class="fantastic" v-else></div>
                </dd>
            </dl>
          <!-- </router-link> -->

          <div class="dy-list-brief">
              <span class="orange">新人专享</span>
              <span class="gap">新人首张特惠，名额有限抢完即止</span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['movieLists'],
  methods: {
    contextMeta (item, index) {
      this.$router.push({
        name: 'xiangqing',
        params: {movie_id: index, datas: item}
      })
    }
  }
}
</script>


<style lang="sass" scoped>
.contexts
  padding: 0 .1rem
  .context
    border-bottom: 1px solid #ccc
    padding-top: .1rem
    a
      color: #000
  .dl
    width: 100%
    display: flex
    dt
      width: .65rem
      margin: 0 0.1rem 0 0 
      img
        width: 100%
        height: auto
    dd
      flex: auto
      padding-bottom: .06rem
      position: relative
      border-bottom: 1px solid #ccc
      h4
        font-size: .16rem
        display: flex
        b
          width: 45%
          position: relative
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
        span
          position: absolute
          border: 1px solid #ccc
          color: #ccc
          font-size: .12rem
          margin-left: .05rem
      .show-star-ranking
        height: .3rem
        display: flex
        align-items: center
        color: #666
        font-size: .14rem
        .star-ranking
          color: oranged
        img
          width: .15rem
          height: .15rem
        span
          margin-left: .05rem
      .action,.mainaction
        height: .24rem
        line-height: .24rem
        color: #8a869e
        font-size: .14rem
        span
          padding-right: .05rem
      .buy
        width: .5rem
        position: absolute
        right: 0
        bottom: .25rem
        text-align: center
        border: 1px solid red
        color: red
        padding: .05rem .08rem
        border-radius: .08rem
        font-size: .14rem
      .blue
        width: .5rem
        position: absolute
        right: 0
        bottom: .25rem
        text-align: center
        border: 1px solid #108ee9
        color: #108ee9
        padding: .05rem .08rem
        border-radius: .08rem
        font-size: .14rem
      .fantastic
        display: flex
        position: absolute
        top: -.1rem
        right: 0
        img
          width: .23rem
          height: .3rem
          margin-left: .02rem
  .dy-list-brief
    padding-left: .7rem
    height: .36rem
    display: flex
    align-items: center
    font-size: .14rem
    .orange
      width: .8rem
      color: orange
      text-align: center
    .gap
      flex: auto
      color: #8a869e
      border-left: 1px solid #8a869e
      margin-left: .1rem
      padding-left: .1rem
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
</style>

