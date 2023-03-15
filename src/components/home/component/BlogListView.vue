<script lang="ts" setup>
import {reactive} from "vue";
import BlogList from "@/components/home/component/BlogList.vue";
import {fGetBlogAll} from "@/api";
import {webImgUrl} from "@/env-config";


const data = reactive<any>({
  blogList: [],
})
const init = () => {
  fGetBlogAll().then(res => {
    data.blogList = res.data.data
    data.blogList.forEach((obj: any) => {
      obj.coverSrc=webImgUrl+obj.coverSrc
    })
  })
}
init()
</script>
<template>
  <div class="container">
    <BlogList :blogs="data.blogList"></BlogList>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
}
</style>