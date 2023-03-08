<script lang="ts" setup>
import {reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {fGetBlog, fSaveComment} from "@/api";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {useStore} from "@/store";
import CommentBox from "@/components/common/CommentBox.vue";
import Comment from "@/components/common/Comment.vue";
import {ElMessage} from "element-plus";

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
    <md-editor v-model="data.blog.content"
               :preview-only="true" :showCodeRowNumber="true"
               style="border-radius: 15px;width: 60%;
               height:100%;margin: 0 auto;padding: 0 10px;"/>

    <div style="border-radius: 15px;width: 60%;margin: 10px auto;background-color: white;padding: 10px">
      <CommentBox @submit="submit"></CommentBox>
      <Comment ref="cCommment" v-if="data.blog.id" :toBlogId="data.blog.id"></Comment>
    </div>

  </div>
</template>
<style lang="less" scoped>
.container {
  width: 100%;
  border-radius: 5px;
}
</style>