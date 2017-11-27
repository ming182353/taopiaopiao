<template>
  <div class="wrap">
    <HeaderBar>
      <!-- <SelectCityBar slot="left-group" @selectCity="selectCity"></SelectCityBar> -->
      <SelectCityBar slot="left-group" :cityId.sync='cityId'></SelectCityBar>
      <!-- <SelectCity slot="left-group" v-model="cityId" :foo=""></SelectCity> -->
      <tabMenuBar slot="right-group" @tabList='tabList'></tabMenuBar>
    </HeaderBar>
    <main v-if="tabFlg == 0">
      <bannerBar :banner-images='bannerImages'></bannerBar>
      <movieListBar :movieLists="movieList" v-scrollBottom='scrollLoad'></movieListBar>
    </main>
    <main v-if="tabFlg == 1">
      <h4>即将上映{{title | wode}}</h4>
      <movieListBar :movieLists="movieList" v-scrollBottom='scrollLoad'></movieListBar>
    </main>
    <footerBar></footerBar>
  </div>
</template>

<script>
import HeaderBar from '@/public/header/header'
import tabMenuBar from '@/public/header/components/tabMenu'
import bannerBar from '@/public/banner/banner'
import footerBar from '@/public/footer/footer'
import SelectCityBar from '@/public/SelectCity/SelectCity'
import movieListBar from '@/public/movieList/movieList'
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '上海',
      tabFlg: 0,
      bannerImages: [
        {
          id: 0,
          img: 'static/images/banner/1.jpg'
        },
        {
          id: 1,
          img: 'static/images/banner/2.jpg'
        },
        {
          id: 2,
          img: 'static/images/banner/3.jpg'
        },
        {
          id: 3,
          img: 'static/images/banner/4.jpg'
        },
        {
          id: 4,
          img: 'static/images/banner/5.jpg'
        }
      ],
      // movieLists: [],
      cityId: 0,
      page: 0,
      pageSize: 10,
      flg: true,
      // keepAlive: true
    }
  },
  computed: {
    ...mapGetters('movie', [
      'movieList'
    ])
  },
  components: {
    HeaderBar,
    tabMenuBar,
    bannerBar,
    footerBar,
    SelectCityBar,
    movieListBar
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

      if (bodyHeight - scrollTop <= winHeight + 50) {
        return true
      } else {
        return false
      }
    },
    scrollLoad () {
      $(document).on('scroll', () => {
        if (this.isScrollBottom()) {
          if(this.flg) {
            this.page += 1
            this.getMovieList()
          }
        }
      })
    },
    tabList (index) {
      this.tabFlg = index
    },
    selectCity (data) {
      this.cityId = data[0];
    },
    getMovieList () {
      this.flg = false
      this.$store.dispatch('movie/getMovieList', {
        cityId: 12345,
        page: this.page,
        pageSize: this.pageSize,
        type: 1
      }).then((data) => {
        this.flg = true
      }, () => {
        this.flg = true
      })
    }
    // getMovieList () {
    //   this.flg = false
    //   this.$axios.get('/api/queryAdvertise', {
    //     params: {
    //       cityId: 12345,
    //       page: this.page,
    //       pageSize: this.pageSize
    //     }
    //   }).then((response) => {
    //     this.movieLists = this.movieLists.concat(response.data.data)
    //     this.flg = true
    //   }).catch((error) => {
    //     console.log(error)
    //     this.flg = true
    //   })
    // }
  },
  watch: {
    '$route': (to, from) => {
      // console.log(to, from)
    },
    'cityId': function () {
      this.getMovieList()
    }
  },
  created () {
    console.log(this.$store)
    this.getMovieList()
  },
  mounted () {
    this.scrollLoad()
  },
  activated () {
    console.log('组件启用')
    this.keepAlive = true
  },
  deactivated () {
    this.keepAlive = false
    $( document ).off('scroll')
    console.log('组件停用')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wrap{
  font-size: 14px;
  main{
    padding: .45rem 0;
    overflow: auto;
    h4{
      font-size: .16rem;
      line-height: .4rem;
      padding-left: .15rem;
    }
  }
}
</style>
