<script lang="ts" setup>
import {fGetCommentsByPage} from "@/api";
import {reactive} from "vue";
import {getDateDiff} from "@/utils/totalUtil";
import {webImgUrl} from "@/env-config";
import ProPage from "@/components/common/proPage.vue";

// const emit = defineEmits([''])
const props = defineProps({
  toBlogId: {
    type: Number,
    default: null,
    required: true,
  },
})

defineExpose({
  init,
})

const data = reactive<any>({
  user: {},
  page: {
    current: 1,
    size: 10,
    total: 0,
  },
  comments: [],
  comment: {},
})

const toPage = (page: any) => {
  data.page.current = page;
  window.scrollTo({
    top: document.getElementById('commentInfo-title')!.offsetTop
  });
  getCommentsByPage(data.comment, data.page);
}

const getCommentsByPage = (comment: any, page: any) => {
  comment.toBlogId = props.toBlogId
  fGetCommentsByPage({
    comment: comment,
    page: page
  }).then(res => {
    console.log('fGetCommentsByPage', res)
    data.comments = res.data.data.records
    data.comments.forEach((item: any) => {
      if (item.createUserHeadImg) {
        item.createUserHeadImg = webImgUrl + item.createUserHeadImg
      }
      if (item.toUserHeadImg) {
        item.toUserHeadImg = webImgUrl + item.toUserHeadImg
      }
    })
    data.page.total = res.data.data.total
  })
}


function init() {
  data.comment = {}
  data.comment.toBlogId = props.toBlogId
  getCommentsByPage(data.comment, data.page)
}

init()
</script>

<template>
  <!-- 评论数量 -->
  <div id="commentInfo-title" class="commentInfo-title">
    <span style="font-size: 1rem;">评论列表 | </span>
    <span>{{ data.page.total }} 条留言</span>
  </div>
  <!-- 评论详情 -->
  <div v-if="data.comments.length > 0" class="commentInfo-detail"
       v-for="(item, index) in data.comments"
       :key="index">
    <!-- 头像 -->
    <el-avatar shape="square" class="commentInfo-avatar" :size="35" :src="item.createUserHeadImg"></el-avatar>

    <div style="flex: 1;padding-left: 12px">
      <!-- 评论信息 -->
      <div style="display: flex;justify-content: space-between">
        <div>
          <span class="commentInfo-username">{{ item.createUserName }}</span>
          <span class="commentInfo-master" v-if="item.createUserId === data.user.id">主人翁</span>
          <span class="commentInfo-other">{{ getDateDiff(item.createTime) }}</span>
        </div>
      </div>
      <!-- 评论内容 -->
      <div class="commentInfo-content">
        <span v-html="item.comment"></span>
      </div>
    </div>
  </div>
  <proPage :current="data.page.current"
           :size="data.page.size"
           :total="data.page.total"
           :buttonSize="6"
           color="#23d5ab"
           @toPage="toPage">
  </proPage>
</template>
<style scoped lang="less">
.container {
  max-width: 2000px;
  height: 100%;
  width: 100%;
}

.comment-head {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin: 40px 0 20px 0;
  user-select: none;
  color: var(--themeBackground);
}

.commentInfo-title {
  margin-bottom: 20px;
  color: var(--greyFont);
  user-select: none;
}

.commentInfo-detail {
  display: flex;
}

.commentInfo-avatar {
  border-radius: 5px;
}

.commentInfo-username {
  color: var(--orangeRed);
  font-size: 16px;
  font-weight: 600;
  margin-right: 5px;
}

.commentInfo-username-small {
  color: var(--orangeRed);
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
}

.commentInfo-master {
  color: var(--green);
  border: 1px solid var(--green);
  border-radius: 0.2rem;
  font-size: 12px;
  padding: 2px 4px;
  margin-right: 5px;
}

.commentInfo-other {
  font-size: 12px;
  color: var(--greyFont);
  user-select: none;
}

.commentInfo-reply {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: var(--white);
  background: var(--themeBackground);
  border-radius: 0.2rem;
  padding: 3px 6px;
}

.commentInfo-content {
  margin: 15px 0 25px;
  padding: 18px 20px;
  background: var(--commentContent);
  border-radius: 12px;
  color: var(--black);
  word-break: break-word;
}

.pagination-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.pagination {
  padding: 6px 20px;
  border: 1px solid var(--lightGray);
  border-radius: 3rem;
  color: var(--greyFont);
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
}

.pagination:hover {
  border: 1px solid var(--themeBackground);
  color: var(--themeBackground);
  box-shadow: 0 0 5px var(--themeBackground);
}

</style>