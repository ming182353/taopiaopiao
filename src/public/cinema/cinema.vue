<template>
    <div class="wrap">
        <main>
            <div class="mess">
                <h3>{{cinemas.title}}</h3>
                <div class="addre">
                    <p class="address">{{cinemas.address}}</p>
                    <p class="address-bg" :class="{'address-red': saveFlag}" @click.stop="save">收藏</p>
                </div>
                <p class="label">
                    <span v-for="(item, ind) in cinemas.spans" :key="ind">{{item}}</span>
                </p>
                <div class="cinema-banners">
                    <div class="card-content">申请浦发信用卡专享</div>
                    <div class="card-title">联名卡送影票</div>
                    <div class="arrow"></div>
                </div>
            </div>
            <section class="cinema-movies">
                <div class="scroll-wrap">
                    <div class="scroll-layer">
                        <!-- 轮播图 -->
                        <cinemaBannerBar :bannerImages="cinemas.imageArr" @swiperIndex="swiperIndex"></cinemaBannerBar>
                    </div>
                    <div class="movie-name">
                        <h3>
                            <span class="showname" data-id="198714">{{movieMess[moviindex].name}}</span>
                            <span class="show-star-remark">
                                <span class="star-remark">{{movieMess[moviindex].remark}}</span>
                                <span>分</span>
                            </span>
                        </h3>
                        <p>{{movieMess[moviindex].times}}</p>
                    </div>
                </div>
            </section>
            <ul class="weekday">
                <li class="orange">今天09-17
                    <span>惠</span>
                    <b></b>
                </li>
                <li>明天09-18
                    <span>惠</span>
                    <b></b>
                </li>
                <li>后天09-19
                    <span>惠</span>
                    <b></b>
                </li>
                <li>周日09-20
                    <span>惠</span>
                    <b></b>
                </li>
            </ul>
            <div class="newspeole">
                <p>
                    <span class="new">新</span>新人首张特惠，名额有限抢完即止</p>
                <p>仅限1张></p>
            </div>
            <div class="ticketshows">
                <h5>开场前15分钟停止售票</h5>
                <div class="ticket">
                    <div class="ticket-left">
                        <p class="time">21:30</p>
                        <p>23:17散场</p>
                    </div>
                    <div class="ticket-center">
                        <p class="language">英语2D</p>
                        <p>1号厅</p>
                    </div>
                    <div class="ticket-right">
                        <p class="newpeo">新人专享
                            <span class="red">17.8</span>元</p>
                        <p class="throughline">40元</p>
                        <button class="btn">购票</button>
                    </div>
                </div>
                <div class="ticket">
                    <div class="ticket-left">
                        <p class="time">21:30</p>
                        <p>23:17散场</p>
                    </div>
                    <div class="ticket-center">
                        <p class="language">英语2D</p>
                        <p>2号厅</p>
                    </div>
                    <div class="ticket-right">
                        <p class="newpeo">新人专享
                            <span class="red">17.8</span>元</p>
                        <p class="throughline">40元</p>
                        <button class="btn">购票</button>
                    </div>
                </div>

            </div>
            <footer>
                <span>登陆后可查看实际能享受的价格</span>
                <button class="login">登录</button>
            </footer>
        </main>

    </div>
</template>

<script>
import cinemaBannerBar from '@/public/banner/cinemaBanner'
export default {
  data () {
    return {
      cinemas: {},
      saveFlag: false,
      movieMess: [
          {
              name: '敦刻尔克0',
              remark: 7.6,
              times: '107分钟 | 剧情 | 芬恩·怀特海德 汤姆·格林-卡尼 杰克·劳登'
          },
          {
              name: '敦刻尔克1',
              remark: 7.7,
              times: '100分钟 | 动作 | 汤姆·格林-卡尼 杰克·劳登'
          },
          {
              name: '敦刻尔克2',
              remark: 8.6,
              times: '116分钟 | 剧情 | 杰克·劳登'
          },
          {
              name: '敦刻尔克3',
              remark: 6.7,
              times: '125分钟 | 爱情 | 芬恩·怀特海德 汤姆·格林-卡尼'
          },
          {
              name: '敦刻尔克4',
              remark: 9.0,
              times: '138分钟 | 剧情 | 汤姆·格林-卡尼 杰克·劳登'
          }
      ],
      moviindex: 0
    }
  },
  created () {
    console.log(this.$route.params.datas)
    this.cinemas = this.$route.params.datas
  },
  components: {
    cinemaBannerBar
  },
  methods: {
    save () {
      this.saveFlag = !this.saveFlag
    },
    swiperIndex (data) {
      this.moviindex = data
    }
  }
}
</script>


<style lang="less" scoped>
    .wrap {
        width: 100%;
        height: 100%;
    }
    main {
        margin: 0;
        padding: 0;
        padding-bottom: .45rem;
        .mess {
            padding: .15rem;
            h3 {
                line-height: .26rem;
                font-size: .16rem;
            }
            .addre {
                font-size: .14rem;
                color: #8a869e;
                display: flex;
                justify-content: space-between;
                p {
                    height: .3rem;
                    line-height: .3rem;
                    &.address {
                        margin-right: .2rem;
                    }
                    &.address-bg {
                        width: 0.3rem;
                        height: 0.3rem;
                        text-align: center;
                        background: #ccc;
                        border-radius: 100%;
                        color: #000;
                    }
                    &.address-red {
                        background: yellow;
                        color: #000;
                    }
                }
            }
            .label {
                line-height: 0.3rem;
                span {
                    color: skyblue;
                    border-radius: .2rem;
                    border: .005rem solid skyblue;
                    padding: .02rem .05rem;
                    font-size: .12rem;
                    margin-right: .05rem;
                }
            }
            .cinema-banners {
                padding: 0 .2rem;
                margin-top: .1rem;
                background-color: #f3f9fd;
                color: #65b1db;
                font-size: .12rem;
                position: relative;
                .card-content,
                .card-title {
                    line-height: .24rem;
                }
                &.cinema-banners:after {
                    position: absolute;
                    content: "";
                    top: .18rem;
                    right: .1rem;
                    box-sizing: border-box;
                    width: .08rem;
                    height: .08rem;
                    border-right: .005rem solid rgba(128, 193, 229, .7);
                    border-top: .005rem solid rgba(128, 193, 229, .7);
                    transform: rotate(45deg); // border-radius: .08rem;
                    pointer-events: none;
                }
            }
        }
        .scroll-layer {
            height: 1.5rem;
            background: #000;
            padding-top: .1rem;
        }
        .movie-name {
            text-align: center;
            line-height: .3rem;
            border: .005rem solid #ccc;
            p {
                color: #8a869e;
                font-size: .12rem;
            }
            span {
                color: orangered;
                font-size: .12rem;
            }
            .showname {
                color: #000;
                font-size: .16rem;
            }
        }
        .weekday {
            display: flex;
            padding: 0 .1rem;
            border: .005rem solid #ccc;
            li {
                flex: auto;
                line-height: .4rem;
                text-align: center;
                font-size: .12rem;
                span {
                    background: orangered;
                    color: #fff;
                    margin-left: .05rem;
                    padding: 0 .02rem;
                    border-radius: .02rem;
                }
                &.orange {
                    color: orangered;
                    position: relative;
                    padding: 0 .1rem;
                    b {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        background: orangered;
                        width: 100%;
                        height: 0.02rem;
                    }
                }
            }
        }
        .newspeole {
            display: flex;
            justify-content: space-between;
            line-height: .4rem;
            border: .005rem solid #ccc;
            .new {
                background: orangered;
                color: #fff;
                margin-right: .05rem;
                padding: 0 .02rem;
                border-radius: .02rem;
            }
        }
        .ticketshows {
            padding: 0 .1rem;
            h5 {
                margin: 0;
                line-height: .4rem;
                color: #8a869e;
                font-weight: normal;
            }
            .ticket {
                display: flex;
                padding-bottom: .15rem;
                padding-top: .1rem;
                border-bottom: .005rem solid #ccc;
                p {
                    color: #8a869e;
                    font-size: .12rem;
                }
                .ticket-left {
                    flex: 2;
                    .time {
                        font-weight: 900;
                        color: #000;
                        line-height: .36rem;
                        font-size: .2rem;
                    }
                }
                .ticket-center {
                    flex: 3;
                    .language {
                        color: #000;
                        line-height: .36rem;
                        font-size: .14rem;
                    }
                }
                .ticket-right {
                    flex: 5;
                    position: relative;
                    .btn {
                        position: absolute;
                        right: 0;
                        top: .1rem;
                        outline: 0;
                        border: 1px solid red;
                        background: #fff;
                        color: red;
                        padding: .05rem .08rem;
                        border-radius: .06rem;
                    }
                    .newpeo {
                        color: red;
                        font-size: .14rem;
                        line-height: .36rem;
                        .red {
                            font-size: .2rem;
                            font-weight: 600;
                        }
                    }
                    .throughline {
                        width: 60%;
                        text-decoration: line-through;
                        text-align: right;
                    }
                }
            }
        }
    }

    footer {
        width: 100%;
        height: 0.45rem;
        line-height: 0.45rem;
        z-index: 1000;
        position: fixed;
        background: #f0f0f0;
        bottom: 0;
        left: 0;
        font-size: .14rem;
        span {
            position: absolute;
            left: .1rem;
            top: 0;
        }
        .login {
            background: red;
            color: #fff;
            border-radius: .05rem;
            padding: .05rem .1rem;
            position: absolute;
            border: 1px solid red;
            right: .1rem;
            top: .05rem;
            outline: 0;
        }
    }
</style>
