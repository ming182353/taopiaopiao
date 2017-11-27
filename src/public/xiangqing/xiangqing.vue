<template>
    <div class="wrap">
        <section class="content">
            <div class="head">
                <div class="picleft">
                    <img :src="$route.params.datas.image" alt="" />
                </div>
                <div class="contright">
                    <div class="top">
                        <h3>{{$route.params.datas.name}}</h3>
                        <span>JD</span>
                        <span>IMAX</span>
                        <p>Spider-Man:Homecoming</p>
                    </div>
                    <div class="bottom">
                        <p>动作 冒险 科幻</p>
                        <p>美国 | {{$route.params.datas.movieTime}}分钟</p>
                        <p>{{$route.params.datas.date}} 在中国大陆上映</p>
                    </div>
                </div>
                <div class="footbottom">
                    <div class="pinlf">
                        <h3>{{$route.params.datas.remark}}</h3>
                        <p>用户评分
                            <span> > </span>
                        </p>
                        <p>{{$route.params.datas.remarkCount}}人</p>
                    </div>
                    <div class="changdu"></div>
                </div>
            </div>
            <movieMessBar></movieMessBar>
            <actorsBar :MessArr="$route.params.datas.imageArr" :titles="titles1" :views="views"></actorsBar>
            <actorsBar :MessArr="$route.params.datas.imageArr1" :titles="titles2" :views="views1"></actorsBar>
            <ticketsBar :tickets="$route.params.datas"></ticketsBar>
        </section>
        <footer class="footer">
            <button>18.8元起抢票</button>
        </footer>
    </div>
</template>
<script>
import actorsBar from '../actors/actors'
import movieMessBar from '../movieMess/movieMess'
import ticketsBar from '../ticketTop/ticketTop'
export default {
  data () {
    return {
      titles1: '演职人员',
      titles2: '视频和剧照',
      views: 3.8,
      views1: 1.8
    }
  },
  components: {
    actorsBar,
    movieMessBar,
    ticketsBar
  },
  created () {
    // console.log(this.$route.params.datas)
  },
  destroyed () {
    console.log('销毁详情页')
  }
}
</script>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    padding-bottom: .45rem;
    background: #f0f0f0;
}

.head {
    width: 100%;
    opacity: 0.8;
    background-color: #000202;
    color: #ffffff;
    display: -webkit-flex;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    background: rgba(7,17,27,0.5);
    padding-bottom: .1rem;
}

.head .picleft {
    padding: .2rem .15rem;
}

.head .picleft img {
    width: 100%;
    height: auto;
}

.head .contright {
    flex: auto;
    margin-top: .2rem;
}

.head .contright .bottom {
    margin-top: .5rem;
}

.head .footbottom {
    width: 100%;
    display: -webkit-flex;
    justify-content: center;
}

.head .footbottom .pinlf {
    width: 35%;
}

.head .footbottom .changdu {
    width: 55%;
}

.footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
}
.footer button {
    border: none;
    display: block;
    width: 100%;
    height: 0.45rem;
    background-color: #ff4d64;
    color: #ffffff;
    text-align: center;
}


/*# sourceMappingURL=style.css.map */
</style>


