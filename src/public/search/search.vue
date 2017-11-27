<template>
  <div class="wrap">
      <headerBar>
          <div class="left" slot="left-group">
              <input type="text" class="inpSearch" placeholder="影院名称或地址">
          </div>
          <a href="javascript:;" slot="right-group" @click="cancle">取消</a>
      </headerBar>
  </div>
</template>

<script>
import HeaderBar from '@/public/header/header.vue'
export default {
  data () {
    return {}
  },
  components: {
    HeaderBar
  },
  methods: {
    cancle () {
      this.$emit('searchCancel', -1)
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  width: 100%
  font-size: 0.14rem
  height: 0.44rem
  line-height: 0.44rem
  text-align: center
  position: fixed
  top: 0
  z-index: 1000
  background: #fff
  border-bottom: 1px solid #ccc
  .left,.right-group
    position: absolute
    top: 0
  .left
    left: .15rem
    width: 80%
    .inpSearch
      width: 100%
      outline: 0
      border: 0
      height: .3rem
      border: 1px solid #ccc
      font-size: .14rem
      margin-top: .05rem
      text-indent: .15rem
  .right-group
    right: .1rem
    a
      padding: 0 .05rem
      font-size: .14rem
</style>


