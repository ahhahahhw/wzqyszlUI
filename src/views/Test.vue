<script lang="ts" setup>
import {reactive} from "vue";
import {fTest} from "@/api";

const data = reactive<any>({})

const test = () => {
  fTest().then(res=>{
    console.log(res)
  })
}

const init = () => {

}
init()
</script>
<template>
  <div class="container">
    <div id="test" class="pointer" @click="test()">测试</div>
  </div>
</template>
<style scoped lang="less">
#test{
  background-color: gainsboro;
  width: 100px;
  height: 100px;
  color: red;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
.container {
  height: 100%;
  width: 100%;
  background-color: black;
}
</style>