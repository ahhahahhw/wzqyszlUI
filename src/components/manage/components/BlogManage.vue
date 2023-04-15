<script lang="ts" setup>
import { reactive } from "vue";
import { fGetBlogAll } from "@/api";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter()
const route = useRoute()

const init = () => {
  fGetBlogAll().then(res => {
    data.tableData = res.data.data
  })
}
init()

const data = reactive<any>({
  tableData: []
})

const handleEdit = (id: any) => {
  if (id) {
    router.push({ path: "/home/BlogEditView", query: { id } })
  } else {
    router.push({ path: "/home/BlogEditView" })
  }

}

const handleDelete = (id: any) => {
  ElMessage({
    showClose: true,
    type: 'warning',
    message: '暂时不支持删除博客'
  })
}

</script>
<template>
  <div class="container">

    <div id="body">
      <el-row class="mb-4">
        <div class="image-title">
          <el-button class="image-btn" @click="handleEdit()">新增Blog</el-button>
        </div>
        <!-- <el-button type="primary" round class="menu-li" @click="handleEdit()">新增Blog</el-button> -->
      </el-row>
      <el-table :data="data.tableData" style="width: 100%">
        <el-table-column prop="title" label="文章标题" width="200"/>
        <el-table-column prop="createUserName" label="创建人" width="200" />
        <el-table-column prop="type" label="文章类型" width="200" />
        <el-table-column prop="content" label="content" />
        <el-table-column prop="createTime" label="创建时间" width="200" />
        <el-table-column prop="coverSrc" label="封面链接" width="200" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  max-width: 2000px;
  height: 100%;
  width: 100%;
  // background-color: black;

  #body {
    width: 100%;
  }

  #menu {

    .menu-li {
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: white;
      border-bottom: solid 1px var(--el-border-color);
    }
  }

  .image-title {
    width: 100%;
    height: 60px;
    background-color: #cfdbef;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .image-btn {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #cfdbef;
      margin-left: 20px;
    }
  }
}
</style>