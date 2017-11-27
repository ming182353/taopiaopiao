<template>
    <div class="write">
        <p class="read">影片讲述了年轻的蜘蛛侠彼得·帕克，在钢铁侠的帮助下与终极大反派秃鹰进行斗争的故事。在经历了《美国队长3：内战》中与复仇者联盟成员惊心动魄的对战后，彼得回到和梅阿姨共同居住的家，并受到新导师托尼·斯塔克的暗中关注。彼得试图回归正常的日常生活，然而却经常被“企图证明自己不仅仅是一位友好邻居蜘蛛侠”的想法扰乱心绪，直到影片中的全新反派秃鹰的出现，对彼得来说重要的一切都开始受到威胁。 四大皆空符合你设计宽容对方沙龙东方卡了当然看过</p>
        <div class="centers"><a href="javascript:;" @click="showmore">{{showt}}</a></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      showt: '展开'
    }
  },
  methods: {
    showmore () {
        if(this.showt === '展开') {
            this.showt = '收起'
            $('.read').css({height: 'auto'})
            $('.write').css({height: 'auto'})
        } else {
            this.showt = '展开'
            $('.read').css({height: 0.9+ 'rem'})
        }
        
    }
  }
}
</script>

<style scoped>
.write{
    line-height: 0.2rem;
    margin-top: 10px;
    padding: 0 .15rem;
    background: #fff;
}

.content .write .read{
    height: 0.9rem;
    line-height: .3rem;
    text-indent: .2rem;
    overflow: hidden;
    font-size: .16rem;
    /* -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    -webkit-word-break: break-all;
    display: -webkit-box;
    overflow: hidden;  */
}

.centers{
    text-align: center;
    height: 0.3rem;
    line-height: 0.3rem;
}
.centers a{
    color: #007aff;
}
</style>
