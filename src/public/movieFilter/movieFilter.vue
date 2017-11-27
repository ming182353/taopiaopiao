<template>
<transition name="fade">
  <div class="filter-panel" style="top: 36px;">
        <div class="selector-container">
            <div class="selector region-container">
                <h3>区域：</h3>
                <span class="selected-option" id="regionName">{{quyu}}</span>
                <div class="selector-mod region" data-tap="1">
                    <ul class="selector-in">
                        <li
                        v-for="(item,index) in addressinfo.area"
                        :key="index" @click="getInto(item, index)" :class="{red: (inddd == index)}">{{item}}</li>
                    </ul>
                </div>
            </div>
             <div class="selector support-container">

                <div class="selector-mod support">
                    <h3>特色：</h3>
                    <span class="selected-option" id="supportName">{{tese}}</span>
                    <ul class="selector-in">
                         <li
                        v-for="(item,index) in addressinfo.teature"
                        :key="index" @click="teseTicket(item,index)" :class="{red: (inddd1 == index)}">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="btn-group">
                <button class="cancel-btn" @click="del">取消筛选</button> <button class="confirm-btn" data-tap="1" @click="del">确定</button>
        </div>
    </div>
    </transition>
</template>
<script>
export default {
  data () {
    return {
      inddd: -1,
      inddd1: -1,
      quyu: '不限',
      tese: '不限',
      addressinfo: {
        area: ['宝山区', '崇明县', '奉贤区', '虹口区', '黄浦区', '嘉定区', '静安区', '金山区', '卢湾区', '闵行区', '浦东新区', '普陀区', '青浦区', '松江区', '徐汇区', '杨浦区', '闸北区', '长宁区'],
        teature: ['退票', '改签', '观影小食', 'IMAX厅', '巨幕厅', 'realD厅', '4K厅', '4DX厅', '4D厅', '双机3D', '杜比厅']
      }
    }
  },
  methods: {
    del () {
      this.$emit('sxFilter', -1)
    },
    getInto (val, index) {
      this.inddd = index
      this.quyu = val
    },
    teseTicket (val, index) {
      this.inddd1 = index
      this.tese = val
    }
  }
}
</script>

<style scoped lang="less">
.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.filter-panel {
    z-index: 1700;
    position: fixed;
    background-color: #fff;
    top: 2.6875rem;
    top: 11.5vmin;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}
.filter-panel .selector-container {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding-left:.15rem;
    overflow-y:scroll;

}
.selector h3 {
    display: inline-block;
    font-size: .14rem;
    color: #50505a;
    line-height: .4rem;
}
.filter-panel .selector-container .selector span {
    font-size: .12rem;
    color: #8a869e;
}
.selector-mod{
    width:100%;
    clear: both;
    ul{
        width:100%;
    li{
        float: left;
        border:1px solid #eee;
        color:#8a869e;;
        text-align:center;
        padding: .1rem .12rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin:.05rem;
        &.red{
            border: 1px solid red;
            color: red
        }
        }
    }
}
.selector support-container{
    width:100%;
    border:1px solid #ccc;
    clear: both;

}
.filter-panel .btn-group {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height:.6rem;
    background: #fff;
    border-top: 1px solid #e2e2e2;
    display:flex;
    align-items: center;
    button{
        flex:1;
        height:.3rem;
        text-align: center;
        line-height: .3rem;
        border-raidius:.05rem;
        margin:0 .1rem;
    }
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
</style>

