<template>
  <div class="wrap">
    <HeaderBar>
      <SelectCityBar slot="left-group" @selectCity="selectCity"></SelectCityBar>
      <FilterBar slot="right-group" :filterVal.sync="filterVal"></FilterBar>
      <SearchBar slot="right-group" :filterVal.sync="filterVal"></SearchBar>
      <!-- <headerMenuBar slot="right-group" @tabList='tabList'></headerMenuBar> -->
    </HeaderBar>
      <main>
        <div class="label-show" v-if="filterVal.length >= 1">
          <span v-for="(item,index) in filterVal" :key="index">{{item}}</span>
          <button class="cancel" @click="filterVal=[]">取消筛选</button>
        </div>
        <cinemaListBar :CinemaLists="MovieMainList"></cinemaListBar>
      </main>
      <footerBar></footerBar>
  </div>
</template>

<script>
import HeaderBar from '@/public/header/header'
import footerBar from '@/public/footer/footer'
import FilterBar from '@/public/movieFilter/filterBar'
// import headerMenuBar from '@/public/header/components/headerMenu'
import SelectCityBar from '@/public/SelectCity/SelectCity'
import cinemaListBar from '@/public/cinema/cinemaList'
import SearchBar from '@/public/search/searchBar'
export default {
  data () {
    return {
      title: '上海',
      MovieMainList: [],
      page: 0,
      pageSize: 10,
      flg: true,
      countFlg: true,
      filterVal: ['静安区','4D厅']
    }
  },
  components: {
    HeaderBar,
    footerBar,
    FilterBar,
    SelectCityBar,
    cinemaListBar,
    SearchBar
  },
  methods: {
    isScrollBottom () {
      let [
          scrollTop,
          winHeight,
          bodyHeight
      ] = [
          (document.body.scrollTop),
          (window.outerHeight),
          (document.body.clientHeight)
      ]

      if (bodyHeight-scrollTop <= winHeight+50) {
          return true
      } else {
          return false
      }
    },
    scrollLoad () {
      $(document).on( 'scroll',() => {
        if (!this.countFlg) return
        if (this.isScrollBottom()) {
          if (this.flg) {
            this.getList()
          }
        }
      })
    },
    getList () {
      this.flg = false
      this.$axios.get('/api/moviemainList', {
        params:{
          page:this.page,
          pageSize:this.pageSize
        }
      }).then((response) => {
          this.MovieMainList = this.MovieMainList.concat(response.data.data)
          this.page += 1
          this.flg = true
          if ( response.data.data.length <= 0 ) {
            this.countFlg = false
          }
      }).catch((error)=>{
          console.log(error)
      })
    },
    tabList (index) {
      this.tabFlg = index
    },
    selectCity (data) {
      console.log(data)
    }
  },
  mounted () {
    this.scrollLoad()
  },
  created () {
    this.getList()
    // setTimeout(() => {
    //   this.filterVal = ['', '']
    // }, 3000)
  }
}
</script>

<style lang="sass" scope>
main
  padding: .45rem 0;
  .label-show
    height: .4rem
    line-height: .4rem
    background: #f0f0f0
    position: relative
    span
      border-radius: .2rem
      padding: .05rem .1rem
      border: 1px solid #ccc
      margin: 0 .02rem
      font-size: .12rem
    .cancel
      padding: .05rem
      position: absolute
      right: .1rem
      top: 0.05rem
      border: 0
      background: #ccc
      border-radius: .1rem
</style>
