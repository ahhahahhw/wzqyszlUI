<script lang="ts" setup>
import {useRouter} from "vue-router";

let router = useRouter()

const toRouter = (pathStr: any, param: any) => {
  router.push({path: pathStr, query: param})
}

const init = () => {
}
init()
</script>

<template>
  <div class="container">
    <div style="height: 50px"></div>
    <div class="body">

    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 75% 50%;
  background-repeat: no-repeat;
  background-image: url("http://wzqyszl.com:8080/img/93302401_p0.jpg");


}

@font-face {
  font-family: sjxk;
  src: url('../assets/font/SanJiXingKaiJianTi-Cu-2.ttf');
}

</style>