<template>
  <div class="wrap">
      <div class="logo">
          <img src="static/images/icon/taobao.png" alt="">
      </div>
      <div class="login-box" v-if="type == 'user'">
          <p><input type="text" v-model.trim="userName" placeholder="手机号/邮箱/会员名"></p>
          <p><input type="password" v-model.trim="passWord" placeholder="请输入密码"></p>
          <div class="btn-group">
                <button class="btn red" @click="loginDo('user')">登录</button>
                <button class="btn" @click="type='phone'">短信验证码登录</button>
            </div>
      </div>
      <div class="login-box" v-if="type == 'phone'">
          <p><input type="number" v-model.trim.number="userPhone" placeholder="请输入手机号码"></p>
          <p>
            <input type="number" v-model.trim.number="code" placeholder="校验码" />
            <button :disabled="noDisable" @click="getCode">{{codeName}}</button>
            </p>
          <div class="btn-group">
                <button class="btn red" @click="loginDo('phone')">登录</button>
                <button class="btn" @click="type='user'">账号密码登录</button>
            </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: 'user',
      userName: '',
      passWord: '',
      userPhone: '',
      code: '',
      time: null,
      noDisable: false
    }
  },
  methods: {
    loginDo (sta) {
      let loginData = {}
        if (sta === 'user') {
          if (this.userName !== '' && this.passWord !== '') {
            loginData['userName'] = this.userName
            loginData['passWord'] = this.passWord
           } else {
             alert('账号或密码不能为空')
             return false
           }
        } else {
            if (this.userPhone !== '' && this.code !== '') {
              loginData['userPhone'] = this.userPhone
              loginData['code'] = this.code
            } else {
              alert('手机号或验证码不能为空')
              return false
            }
        }
      window.localStorage.setItem('userInfo', JSON.stringify(loginData))
      console.log(window.localStorage.toPath)
      let path = window.localStorage.toPath
      this.$router.push(path)
    },
    getCode () {
      var timer = null,
          num=3,
          _this = this
        this.noDisable = true
      timer = setInterval(function(){
          _this.time = num--
          if (_this.time <= 0){
            clearInterval(timer)
            _this.noDisable = true
          }
      },1000)
    }
  },
  computed: {
    codeName: function () {
      return this.time > 0 ? this.time + 's 后重新获取' : '点击获取验证码';
    }
  }
}
</script>
<style scoped lang="less">
.logo{
    width: 100%;
    padding-bottom: .5rem;
    margin-top: .8rem;
    img{
        display: block;
        width: .9rem;
        height: auto;
        margin:  0 auto;
    }
}
.login-box{
    padding: 0 .2rem;
    .btn-group{
        margin-top: 0.5rem;
        .btn{
            width: 100%;
            display: block;
            height: 0.4rem;
            border-radius: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            border: 1px solid #ff4d64;
            background: transparent;
            color: #ff4d64;
            margin: 0.1rem 0;
            font-size: .16rem;
            &.red{
                background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;;
                color: #fff;
            }
        }
    }
    p{
        margin-top: .1rem;
        border-bottom: 1px solid #ff5000;
        display: flex;
        button{
            font-size: .16rem;
            color: #000;
            background: #fff;
            outline: 0;
            border: 0;
        }
        input{
            width: 100%;
            height: .36rem;
            outline: 0;
            border: 0;
            font-size: .16rem;
            text-indent: .05rem;
            flex: 1;
        }
    }
}
</style>

