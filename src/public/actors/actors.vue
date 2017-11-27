<template>
    <div class="actor">
        <h3 class="active">{{titles}}</h3>
        <swiper :options="swiperOption" class="actorpic">
            <swiper-slide v-for="(item,index) in MessArr" :key="index">
                <dl v-if="item.names">
                    <dt><img :src="item.img" /></dt>
                    <dd>
                        <p>{{item.names}}</p>
                        <p>{{item.text}}</p>
                    </dd>
                </dl>
                <img :src="item.img" v-else/>
            </swiper-slide>
            </swiper-slide>
        </swiper>
        <div class="act">
            <a href="javascript:;">查看全部{{titles}}</a>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props: ['MessArr', 'titles', 'views'],
    data() {
        return {
            swiperOption: {
                slidesPerView: this.views,
                lazyLoading : true 
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style scoped>
.actor {
    margin-top: .1rem;
    box-sizing: border-box;
    background: #fff;
}

.active {
    font-size: .16rem;
    line-height: .36rem;
    padding-left: .15rem;
}
.actorpic{
    padding: .1rem 0;
}
.actorpic dl{
    text-align: center;
}
.actorpic dl dd{
    text-align: left;
    padding-left: .15rem;
    font-size: .12rem;
}
.act {
    text-align: center;
    height: 0.3rem;
    line-height: 0.3rem;
}
</style>
