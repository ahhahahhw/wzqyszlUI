<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fGetBlog, fSaveComment } from "@/api";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useStore } from "@/store";
import CommentBox from "@/components/common/CommentBox.vue";
import Comment from "@/components/common/Comment.vue";
import { ElMessage } from "element-plus";

let router = useRouter()
let route = useRoute()
let store: any = useStore()

const data = reactive<any>({
  blog: {},
  style: {}
})
const cCommment = ref()
const submit = (content: any) => {
  let comment: any = {}
  if (store.userInfo.id) {
    comment.createUserId = store.userInfo.id
  }

  comment.toBlogId = data.blog.id
  comment.comment = content

  fSaveComment(comment).then(res => {
    if (res.data.message === 'ok') {
      ElMessage({
        showClose: true,
        type: 'success',
        message: "发表成功"
      })
      cCommment.value.init()

    } else {
      ElMessage({
        showClose: true,
        type: "error",
        message: res.data.message
      })
    }
  })
}


const init = () => {
  if (route.query.id) {
    fGetBlog(route.query.id).then(res => {
      data.blog = res.data.data
    })
  }
}
init()
</script>

<template>
  <div class="container">
    <!-- <div>返回</div> -->
    <div style="background-color: #fff;border-radius: 15px;padding: 0 10px; width: 60%;">
      <el-icon @click="router.push('/Home/BlogListView')" :size="20" style="margin-top: 15px;">
        <ArrowLeft />
      </el-icon>
      <md-editor v-model="data.blog.content" :preview-only="true" :showCodeRowNumber="true" />
    </div>
    <div style="border-radius: 15px;margin: 10px auto;background-color: #fff;padding: 10px;width: 60%;">
      <CommentBox @submit="submit"></CommentBox>
      <Comment ref="cCommment" v-if="data.blog.id" :toBlogId="data.blog.id"></Comment>
    </div>

  </div>
</template>
<style lang="less" scoped>
.container {
  max-width: 2000px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>