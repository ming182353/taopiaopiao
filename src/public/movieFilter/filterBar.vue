<template>
    <a href="javascript:;" @click="filterShow = !filterShow">
        <i class="icon"></i>
        <span :class="{'filter-btn':true, 'filter-active': filterShow}">筛选</span>
        <div class="filter-panel" v-show='filterShow'>
            <div>
                <h2>区域：{{filterArr[0]}}</h2>
                <RadioBar v-for="(item,index) in regionNames" :key="index" name="regionNames" :value="item" v-model="filterArr[0]" :label="item"></RadioBar>
            </div>

            <div>
                <h2>特色：{{filterArr[1]}}</h2>
                <RadioBar v-for="(item,ind) in supports" :key="ind" name="supports" :value="item.desc" v-model="filterArr[1]" :label="item.desc"></RadioBar>
            </div>
            <div class="btn-group">
                <button class="cancel-btn" @click="cancel">取消筛选</button>
                <button class="confirm-btn" @click="sure">确定</button>
            </div>
        </div>
    </a>
</template>

<script>
import RadioBar from '@/public/Radio/Radio'
export default {
  data() {
    return {
      filterShow: false,
      diqu1: '',
      diqu2: '',
      filterArr: ['', ''],
      regionNames: ["宝山区", "崇明县", "奉贤区", "虹口区", "黄浦区", "嘉定区", "静安区", "金山区", "卢湾区", "闵行区", "浦东新区", "普陀区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区", "长宁区"],
      supports: [
        {
          supportCode: "8",
          desc: "退票"
        },
        {
          supportCode: "23",
          desc: "改签"
        },
        {
          supportCode: "3",
          desc: "观影小食"
        },
        {
          supportCode: "11",
          desc: "IMAX厅"
        },
        {
          supportCode: "12",
          desc: "巨幕厅"
        },
        {
          supportCode: "17",
          desc: "realD厅"
        },
        {
          supportCode: "16",
          desc: "4K厅"
        },
        {
          supportCode: "20",
          desc: "4DX厅"
        },
        {
          supportCode: "13",
          desc: "4D厅"
        },
        {
          supportCode: "18",
          desc: "双机3D"
        },
        {
          supportCode: "15",
          desc: "杜比厅"
        }
      ]
    }
  },
  props: ['filterVal'],
  components: {
    RadioBar
  },
  created() {
    if (this.filterVal) {
      this.filterArr = this.filterVal
    }
  },
  watch: {
    'filterVal': function () {
      this.filterArr = this.filterVal
      if (this.filterArr.length <= 1) {
        this.filterArr = ['', '']
      }
    }
    // 'diqu': function () {
    //   this.diqu1 = this.diqu
    //   if (this.diqu1 === '') {
    //     this.duqu1 = ''
    //   }
    // }
  },
  methods: {
    cancel() {
    //   this.$set(this.filterArr, 0, '')
    //   this.$set(this.filterArr, 1, '')
      this.filterArr = []
      this.$emit('update:filterVal', this.filterArr)
    },
    sure() {
    //   this.filterArr.forEach((val, ind) => {
    //     if (val === '') return
    //   })
      this.$emit('update:filterVal', this.filterArr)
    }
  }
}
</script>

<style scoped lang="less">
.filter-active {
    color: red!important;
}

.filter-panel {
    position: fixed;
    top: 0.44rem;
    bottom: 0;
    right: 0;
    left: 0;
    background: #fff;
    z-index: 1200;
}

.filter-panel>div {
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
</style>
