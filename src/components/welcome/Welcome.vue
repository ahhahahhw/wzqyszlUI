<script lang="ts" setup>
import {useRouter} from "vue-router";
import BgImage from "@/components/common/BgImage.vue";

let router = useRouter()

</script>
<template>
  <BgImage  :bg-type="2" url="/img/世界的镇魂曲-雪.jpg"></BgImage>
  <div class="container">
    <div class="left"></div>
    <div class="main">
      <div class="body">
        <div class="title">
          向着星辰与深渊
        </div>
        <div class="content">
          <div class="enter" @click="router.push('/Home')">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            进入
          </div>
        </div>
      </div>
      <div class="bottom">
        <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022108861号-1</a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  max-width: 2000px;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: 75% 50%;
  background-repeat: no-repeat;

  .left {
    flex: 16;
  }

  .main {
    height: 100%;
    flex: 8;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;

    .body {
      flex: 23;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        flex: 6;
        width: 100%;
        text-align: center;
        margin-top: 100px;
        color: white;
        font-size: 50px;
      }

      .content {
        flex: 18;
        display: flex;
        justify-content: center;

        .enter:hover {
          color: #03e9f4;
          animation: enter 1s linear 1;
        }

        @keyframes enter {
          0% {
            color: white;
          }
          100% {
            color: #03e9f4;
          }
        }


        .enter {
          position: absolute;
          font-size: 50px;
          line-height: 100px;
          text-align: center;
          color: white;
          margin-top: 200px;
          height: 100px;
          width: 200px;
          overflow: hidden;
          cursor: pointer;

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
            animation-delay: 0.25s
          }

          span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, #03e9f4);
            animation: btn-anim3 1s linear infinite;
            animation-delay: 0.5s
          }

          span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #03e9f4);
            animation: btn-anim4 1s linear infinite;
            animation-delay: 0.75s
          }
        }
      }
    }

    .bottom {
      flex: 1;
      display: flex;
      justify-content: center;

      a {
        line-height: 15px;
        font-size: 15px;
        color: rgba(255, 255, 255, 0.8);

      }

      a:hover {
        animation: enter 1s linear 1;
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