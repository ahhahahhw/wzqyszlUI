<script setup lang='ts'>
import {reactive} from "vue";
import {fGetRandomImage} from "@/api";
import {useRouter} from "vue-router";
import {useStore} from "@/store";

let router = useRouter()
let store = useStore()
const data = reactive<any>({
  containerStyle: {},
})


const init = () => {
  fGetRandomImage('背景图片').then(res => {
    store.containerStyle.backgroundImage = "url(http://localhost:8088" + res.data.data + ")"
    data.containerStyle = store.containerStyle
  })

}
init()
</script>
<template>
  <div class="container" :style="data.containerStyle">
  </div>
</template>
<style lang='less' scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9;
  height: 100%;
  font-family: sjxk, serif;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: opacity, background 1s ease-in-out 0s;
}
</style>

