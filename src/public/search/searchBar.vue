<template>
    <a href="javascript:;" @click="filterShow = !filterShow">
        <i class="icon"></i>
        <span :class="{'filter-btn':true, 'filter-active': filterShow}">搜索</span>
        <div class="filter-panel-search" v-show='filterShow'>
            <div class="inp">
                <input type="text" class="inpSearch" placeholder="影院名称或地址" focus>
                <a href="javascript:;"  @click.stop="cancel">取消</a>
            </div>
            
        </div>
    </a>
</template>

<script>
export default {
  data() {
    return {
      filterShow: false
    }
  },
  methods: {
    cancel () {
      this.filterShow = false
    }
  }
}
</script>

<style scoped lang="less">
.filter-active {
    color: red!important;
}

.filter-panel-search {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #fff;
    z-index: 1300;
    text-align: center;
}

.filter-panel-search>div {
    float: left;
    text-align: center
}

h2 {
    text-align: left;
    font-size: .16rem;
    padding-left: .15rem;
    font-weight: normal;
}

.filter-panel .btn-group {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: .6rem;
    background: #fff;
    border-top: 1px solid #e2e2e2;
    display: flex;
    align-items: center;
}

.filter-panel .btn-group button {
    flex: 1;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    border-radius: 0.05rem;
    margin: 0 .1rem;
}

.filter-panel .btn-group .cancel-btn {
    background-color: transparent;
    border: 1px solid #908ca3;
    color: #8a869e;
}

.filter-panel .btn-group .confirm-btn {
    background-color: #ff4d64;
    border: 1px solid #ff4d64;
    color: #fff;
    float: right;
}
.inp{
    width: 100%;
    display: flex;
}
.inp .inpSearch{
    flex: 8;
    outline: 0;
    border: 0;
    height: .3rem;
    border: 1px solid #ccc;
    font-size: .14rem;
    margin-top: .05rem;
    text-indent: .15rem;
}
.inp a{
    flex: 2;
}
      
</style>
