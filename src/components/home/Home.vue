<script lang="ts" setup>
import {useRouter} from "vue-router";
import {reactive} from "vue";
import BgImage from "@/components/common/BgImage.vue";

let router = useRouter()

const data = reactive<any>({
  blogList: []
})

const init = () => {

}
init()
</script>

<template>
  <BgImage :bg-type="0" url="/img/世界的镇魂曲-雪.jpg"></BgImage>
  <div class="container">
    <div class="header"
         style="height: 60px;width:100%;background-color: var(--maxMask);
         display: flex;justify-content: flex-end;position: absolute">
      <div class="nav-li pointer" @click="router.push('/Home/BlogListView')">🏡 首页</div>
      <div class="nav-li pointer">🐟 关于</div>
    </div>
    <div class="body">
      <div style="height: 100px"></div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  width: 100%;

  .body {
    width: 100%;
  }

  .nav-li {
    color: white;
    align-self: center;
    width: 100px;
    margin-left: 10px;
  }
}
</style>