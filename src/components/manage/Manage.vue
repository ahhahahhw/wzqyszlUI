<script lang="ts" setup>
import { useRouter } from "vue-router";

let router = useRouter()

const toRouter = (pathStr: any) => {
  router.push({ path: pathStr })
}

</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-active="'2'" style="border-right: none;">
            <el-menu-item index="1" @click="toRouter('/Home')">博客首页</el-menu-item>
            <el-menu-item index="2" @click="toRouter('/manage/ImageManage')">图片管理</el-menu-item>
            <el-menu-item index="3" @click="toRouter('/manage/BlogManage')">文章管理</el-menu-item>
            <el-menu-item index="4" @click="toRouter('/manage/UserManage')">用户管理</el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main style="padding: 0;">
        <router-view></router-view>
      </el-main>
    </el-container>
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

    .menu-li:hover {
      background-color: black;
      color: white;
    }
  }

  .body {
    flex: 20;
  }
}
</style>