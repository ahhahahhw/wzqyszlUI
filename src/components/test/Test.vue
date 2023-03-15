<script lang="ts" setup>
import {reactive, ref} from "vue";
import Comment from "@/components/common/Comment.vue";
import CommentBox from "@/components/common/CommentBox.vue";
import {fSaveComment} from "@/api";
import {ElMessage} from "element-plus";


const data = reactive<any>({})
const commentBox = ref<any>()

const submitComment = (content: string) => {
  if (!content) {
    return ElMessage({
      message: '你还没写呢~',
      grouping: true,
      type: 'warning',
    })
  }
  let comment: any = {}
  comment.comment = content
  comment.createUserId = 10000
  comment.toBlogId = 1
  fSaveComment(comment).then(res => {
    console.log(res)
    if (res.data) {
      ElMessage({
        message: '保存成功',
        grouping: true,
        type: 'success',
      })
      commentBox.value.init()
    } else {
      ElMessage({
        message: '操作失败',
        grouping: true,
        type: 'error',
      })
    }
  })
}

const init = () => {

}
init()
</script>

<template>
  <div class="container">
    <CommentBox @submit="submitComment"></CommentBox>
    <Comment ref="commentBox" :to-blog-id="1"></Comment>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
}

</style>