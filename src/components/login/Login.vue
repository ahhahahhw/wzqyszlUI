<script setup lang='ts'>
import {reactive} from "vue";
import {fGetImageByType, fLogin} from "@/api";
import {ElMessage} from "element-plus";
import Vcode from "vue3-puzzle-vcode";
import {useRouter} from "vue-router";
import {useStore} from "@/store";
import {webImgUrl} from "@/env-config";
import BgImage from "@/components/common/BgImage.vue";

let router = useRouter()
let store: any = useStore()

const data = reactive<any>({
  userInfo: {
    username: null,
    password: null
  },
  isShow: false,
  imgs: [],
})


const submit = () => {
  fLogin(data.userInfo).then(async (res) => {
    data.isShow = false
    if (res.data.message === 'ok') {
      ElMessage({
        showClose: true,
        type: 'success',
        message: '登录成功'
      })
      store.userInfo = res.data.data
      router.push({path: '/Manage'})
    } else {
      ElMessage({
        showClose: true,
        type: 'error',
        message: '密码错误'
      })
    }
  })
}

const register = () => {
  router.push({path: '/register'})
}

const init = () => {
  fGetImageByType("验证码").then(res => {
    data.imgs = []
    res.data.data.forEach((obj: any) => {
      data.imgs.push(webImgUrl + obj);
    })
  })
}
init()
</script>
<template>
<!--  <BgImage></BgImage>-->
  <div id="container">
    <div class="login-box">
      <h2>Login</h2>
      <div class="user-box">
        <input type="text" v-model="data.userInfo.username">
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="data.userInfo.password">
        <label>Password</label>
      </div>
      <div class="button">
        <a @click="data.isShow = true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          登 录
        </a>
        <!--        <a @click="register()">-->
        <!--          <span></span>-->
        <!--          <span></span>-->
        <!--          <span></span>-->
        <!--          <span></span>-->
        <!--          注 册-->
        <!--        </a>-->
      </div>
      <Vcode :show="data.isShow" @success="submit" @close="data.isShow=false" :imgs="data.imgs"/>
    </div>
  </div>
</template>
<style lang='less' scoped>
#container {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  .button {
    display: flex;
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;


    h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    }

    a:hover {
      background: #03e9f4;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    }

    a {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      color: #03e9f4;
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: .5s;
      margin-top: 40px;
      letter-spacing: 4px;
      flex: 1;
      text-align: center;

      span {
        position: absolute;
        display: block;
      }

      span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;
      }

      span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
      }

      span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
      }

      span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s
      }
    }


    .user-box {
      position: relative;

      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }

      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
      }

      input:focus ~ label, input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
      }
    }
  }
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>

