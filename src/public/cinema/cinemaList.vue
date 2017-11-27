<template>
    <ul class="movies-list">
        <li v-for="(item, index) in CinemaLists" :key="index" @click="movieChange(item, index)">
            <h4>{{item.title}}<span>{{item.price}}<b>元起</b></span></h4>
            <p class="address">{{item.address}}</p>
            <p class="ticket-change">
                <span v-for="(i, ind) in item.leadingRole" :key="ind">{{i}}</span>
            </p>
            <p class="newpeople">
                <img src="static/images/icon/new.jpg" alt="">新人专享
            </p>
        </li>
        </ul>
</template>

<script>
export default {
  props: ['CinemaLists'],
  data () {
    return {}
  },
  methods: {
    movieChange (item, index) {
      this.$router.push({
        name: 'cinema',
        params: {movie_id: index, datas: item}
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .movies-list
    padding-left: .15rem
    li
      padding: .1rem 0
      border-bottom: 1px solid #ccc
      h4
        font-size: .16rem
        line-height: .26rem
        span
          color: red
          font-weight: normal
          font-size: .12rem
          margin-left: .06rem
          b
            color: #8a869e
            font-weight: normal
      .address
        color: #8a869e
      .ticket-change
        line-height: .3rem
        span
          border: 1px solid skyblue
          color: skyblue
          padding: 0 .03rem
          border-radius: 20%
          margin-right: .05rem
      .newpeople
        display: flex
        align-items: center
        color: #8a869e
        img
          margin-right: .06rem
</style>

