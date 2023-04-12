<script lang="ts" setup>
import {useRouter} from "vue-router";

let router=useRouter()

const toRouter = (pathStr: any) => {
  router.push({path: pathStr})
}

</script>
<template>
  <div class="container">
    <div class="menu">
      <div class="menu-li pointer" @click="toRouter('/Home')">博客首页</div>
      <div class="menu-li pointer" @click="toRouter('/manage/ImageManage')">图片管理</div>
      <div class="menu-li pointer" @click="toRouter('/manage/BlogManage')">文章管理</div>
      <div class="menu-li pointer" @click="toRouter('/manage/UserManage')">用户管理</div>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  max-width: 2000px;
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;

  .menu {
    flex: 4;
    background-color: #f7f8fa;
    display: flex;
    flex-direction: column;

    .menu-li {
      color: black;
      line-height: 50px;
      margin: 10px 0px;
    }

    .menu-li:hover{
      background-color: black;
      color: white;
    }
  }

  .body {
    flex: 20;
  }
}
</style>