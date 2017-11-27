<template>
<div class="radio-box">
    <input type="radio" :name='name' :value='value' :id="radioId" @change="up(value)" v-if="checked && checked == value" checked=""/>
    <input type="radio" :name='name' :value='value' :id="radioId" @change="up(value)" v-else/>
    <label :for="radioId">{{label}}</label>
</div>
</template>
<script type="text/babel">
  export default {
    model: {
      prop: 'checked',
      event: 'change'
    },
    data() {
      return {
        radioId: new Date() + Math.random()
      }
    },
    props: ['name', 'value', 'label', 'checked'],
    watch: {
      'checked': function (val, val2) {
        if (val === '') {
          $(this.$el).find('input').prop('checked', false)
        }
      }
    },
    methods: {
      up (val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style scope lang="less">
.radio-box{
    width: 25%;
    float: left;
    input {
        display: none;
        &:checked + label{
            border-color: #f00;
            color: #f00;
        }
    }
    label{
        padding: 0.05rem 0.1rem;
        border: 1px solid #ccc
    }
}
</style>