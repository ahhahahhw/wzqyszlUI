<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useStore } from "@/store";
import { fGetBlog, fSaveBlog } from "@/api";
import { ElMessage } from "element-plus";

let router = useRouter()
let route = useRoute()
let store: any = useStore()

const data = reactive<any>({
  blog: {},
  saveDialog: false,
  loading: false,
})

MdEditor.config({
  markedRenderer(renderer) {
    renderer.link = (href: any, title: any, text: any) => {
      return `${text}`;
    };

    return renderer;
  }
});


const options = [
  { value: '游戏', label: '游戏' },
  { value: '论坛', label: '论坛' },
  { value: '博客', label: '博客' },
]


const onSave = () => {
  if (store.userInfo.id) {
    fSaveBlog(data.blog).then(res => {
      if (res.data.message === 'ok') {
        ElMessage({
          showClose: true,
          type: 'success',
          message: "保存成功"
        })
      } else {
        ElMessage({
          showClose: true,
          type: "error",
          message: res.data.message
        })
      }
    })
  }
}

const init = () => {
  if (route.query.id) {
    data.loading = true
    fGetBlog(route.query.id).then(res => {
      data.blog = res.data.data
      data.loading = false
    })
  }
}
init()
</script>
<template>
  <div class="contaier" v-loading="data.loading">
    <div class="back-btn">
      <el-icon @click="router.push('/manage/BlogManage')" :size="20">
        <ArrowLeft />
      </el-icon>
    </div>
    <md-editor v-model="data.blog.content" :preview-only="false" :showCodeRowNumber="true" class="md-editor"
      @onSave="data.saveDialog = true" />
  </div>


  <el-dialog v-model="data.saveDialog" title="保存博客">
    <el-form :model="data.blog" label-width="120px" style="margin-right: 30px">
      <el-form-item label="Blog标题" prop="title">
        <el-input type="text" v-model="data.blog.title" clearable maxlength="50" show-word-limit>
          <template #prefix>
            <el-icon>
              <CopyDocument />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="封面地址" prop="coverSrc">
        <el-input v-model="data.blog.coverSrc" clearable type="text" maxlength="2000" show-word-limit>
          <template #prefix>
            <el-icon>
              <Picture />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="Blog类型" prop="type">
        <el-select v-model="data.blog.type" class="m-2" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
    <div style="width: 100%;"></div>
    <el-row>
      <el-col :span="20"></el-col>
      <el-col :span="4">
        <el-button @click="onSave()" round size="large" type="success">保存</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<style lang="less" scoped>
.contaier {
  //   max-width: 2000px;
  //   width: 100%;
  margin: 0 20px;

  .back-btn {
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    padding: 10px 20px 0 20px;
    width: 100%;
  }

  .md-editor {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    padding: 0 10px;
    border-radius: 0 0 15px 15px;
    border-top: none;
  }
}
</style>