<template>
    <ul>
        <li v-for="(item, index) in menuList" @click="tabClick(index)" :class="{red: isActive == index}" :key="index">{{item}}<span></span></li>
    </ul>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      isActive: 0,
      menuList: ['正在热映', '即将上映']
    }
  },
  methods: {
    tabClick (index) {
      this.isActive = index
      this.$emit('tabList', index)
    }
  }
}
</script>

<style lang="less" scoped>
  ul{
    display: flex;
    li{
      display: block;
      padding: 0 .1rem;
      height: 0.45rem;
      font-size: .14rem;
      list-style: none;
      &.red{
        color: red;
        position: relative;
        span{
          width: 100%;
          height: .03rem;
          position: absolute;
          bottom: 0;
          left: 0;
          background: red;
        }        
      }      
    }
  }  
</style>
