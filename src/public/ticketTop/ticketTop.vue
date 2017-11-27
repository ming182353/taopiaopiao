<template>
  <div class="actor">
      <h3 class="active">票房</h3>
      <ul class="ticketmess">
          <li>
              <h4>2</h4>
              <p>今日票房排名</p>
          </li>
          <li>
              <h4>46169</h4>
              <p>首周票房（万）</p>
          </li>
          <li>
              <h4>68650</h4>
              <p>累计票房（万）</p>
          </li>
      </ul>
      <div class="act">
            <a href="/moviepro">查看详情</a>
        </div>
  </div>
</template>

<script>
export default {
  props: ['tickets'],
  mounted () {
      console.log(this.tickets)
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
.ticketmess{
    display: flex;
    text-align: center;
}
.ticketmess li{
    flex: auto;
}
.ticketmess li h4{
    font-size: .24rem;
    line-height: .36rem;
}
.ticketmess li p{
    font-size: .14rem;
}
.act{
    text-align: center;
    height: 0.36rem;
    line-height: 0.36rem;
    padding-bottom: .2rem;
    font-size: .14rem;
}
</style>
