<script lang="ts" setup>
import {fGetImageByType, fGetRandomImage} from "@/api";
import {reactive} from "vue";
import {webUrl} from "@/env-config";
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
  isMultiple: {
    type: Boolean,
    default: false,
    required: false,
  }
})

const getBgStyle = (obj: any, index: number) => {
  return {
    backgroundImage: "url(" + webUrl + obj + ")",
    animationDelay: index * 6 + "s",
    animationDuration: data.bgImage.length * 6 + "s"
  }
}

const init = () => {
  data.isMultiple = props.isMultiple
  if (data.isMultiple) {
    fGetImageByType("背景图片").then(res => {
      data.bgImage = res.data.data
    })
  } else {
    fGetRandomImage('背景图片').then(res => {
      store.containerStyle.backgroundImage = "url(" + webUrl + res.data.data + ")"
      data.containerStyle = store.containerStyle
    })
  }
}
init()
</script>
<template>
  <div v-if="!data.isMultiple" class="bgImg" :style="data.containerStyle"></div>
  <div v-if="data.isMultiple" class="cb-slideshow">
    <div v-for="(obj,index) in data.bgImage" v-if="data.bgImage.length>0">
      <span :style="getBgStyle(obj,index)"></span>
    </div>
  </div>
</template>
<style scoped lang="less">
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