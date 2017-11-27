<template>
   <ul>
        <li v-for="(item, index) in menuList" @click="tabClick(index)" :class="{red: isActive == index}" :key="index">{{item}}</li>
    </ul>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      isActive: -1,
      menuList: ['筛选', '搜索']
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
      flex: 1;
      padding: 0 .1rem;
      height: 0.45rem;
      font-size: .14rem;
      list-style: none;
      &.red{
        color: red;
      }      
    }
  }  
</style>
