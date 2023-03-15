<script lang="ts" setup>
import {fGetImageByType, fGetRandomImage} from "@/api";
import {reactive} from "vue";
import {webImgUrl} from "@/env-config";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "@/store";


let router = useRouter()
let route: any = useRoute()
let store: any = useStore()
const data = reactive<any>({
  bgImage: [],
  isMultiple: false,
  containerStyle: {},
})

const props = defineProps({
  //1:渐变,2:滚动,其他:随机单张
  bgType: {
    type: Number,
    default: 0,
    required: false,
  },
  //背景图片地址,当bgType=2时必填
  url: {
    type: String,
    default: '',
    required: false,
  },

})

const getBgStyle = (obj: any, index: number) => {
  return {
    backgroundImage: "url(" + webImgUrl + obj + ")",
    animationDelay: index * 6 + "s",
    animationDuration: data.bgImage.length * 6 + "s"
  }
}

const init = () => {
  //渐变
  if (props.bgType === 1) {
    fGetImageByType("背景图片").then(res => {
      data.bgImage = res.data.data
    })
  }
  //滚动
  else if (props.bgType === 2 && props.url) {
    data.containerStyle.animation = "gradientBG 80s ease infinite"
    data.containerStyle.backgroundImage = "url(" + webImgUrl + props.url + ")"
  }
  //默认随机单张
  else {
    fGetRandomImage('背景图片').then(res => {
      data.containerStyle.backgroundImage = "url(" + webImgUrl + res.data.data + ")"
    })
  }
}
init()
</script>
<template>

  <div v-if="props.bgType===1" class="cb-slideshow">
    <div v-for="(obj,index) in data.bgImage" v-if="data.bgImage.length>0">
      <span :style="getBgStyle(obj,index)"></span>
    </div>
  </div>
  <div v-else :style="data.containerStyle" class="bgImg"></div>
</template>
<style lang="less" scoped>
.bgImg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: opacity, background 1s ease-in-out 0s;

  //-webkit-animation: gradientBG 100s ease infinite;
  //animation: gradientBG 100s ease infinite;
}

.cb-slideshow, .cb-slideshow:after {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
}

.cb-slideshow:after {
  content: '';
}

.cb-slideshow div span {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: -2;

  animation-name: imageAnimation;
  //animation-duration: 36s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}


@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    transform: scale(1.1) rotate(0deg);
  }
  25% {
    opacity: 0;
    transform: scale(1.1) rotate(0deg);
  }
  100% {
    opacity: 0
  }
}

</style>