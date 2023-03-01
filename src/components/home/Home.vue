<script lang="ts" setup>
import {useRouter} from "vue-router";
import BlogList from "@/components/home/component/BlogList.vue";
import {reactive} from "vue";
import {fGetBlogAll} from "@/api";
import Header from "@/components/home/component/Header.vue";

let router = useRouter()

const data = reactive<any>({
  blogList: []
})

const toRouter = (pathStr: any, param: any) => {
  router.push({path: pathStr, query: param})
}

const init = () => {
  fGetBlogAll().then(res => {
    data.blogList = res.data.data
  })
}
init()
</script>

<template>
  <div class="container">
    <div style="height: 50px">
      <Header></Header>
    </div>
    <div class="body">
      <router-view></router-view>
      <BlogList :blogs="data.blogList"></BlogList>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;


}

@font-face {
  font-family: sjxk;
  src: url('../../assets/font/SanJiXingKaiJianTi-Cu-2.ttf');
}
</style>