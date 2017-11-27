<template>
    <div class="wrap">
        <section class="content">
            <div class="head">
                <div class="picleft">
                    <img src="static/images/titleimg/title1.jpg" alt="" />
                </div>
                <div class="contright">
                    <div class="top">
                        <h3>11111</h3>
                        <span>JD</span>
                        <span>IMAX</span>
                        <p>Spider-Man:Homecoming</p>
                    </div>
                    <div class="bottom">
                        <p>动作 冒险 科幻</p>
                        <p>美国 | 11分钟</p>
                        <p>1111 在中国大陆上映</p>
                    </div>
                </div>
            </div>
            <echartsBar></echartsBar>
        </section>
    </div>
</template>

<script>
import echartsBar from '../echarts/echarts'
export default {
  components: {
    echartsBar
  }
}
</script>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
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
    background: rgba(7, 17, 27, 0.5);
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
</style>

