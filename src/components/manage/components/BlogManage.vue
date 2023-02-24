<script lang="ts" setup>
import {reactive} from "vue";
import {fGetBlogAll} from "@/api";
import {useRoute, useRouter} from "vue-router";
import {ElMessage} from "element-plus";

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
    router.push({path: "/home/editBlog", query: {id}})
  } else {
    router.push({path: "/home/editBlog"})
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
      <el-table :data="data.tableData" style="width: 100%">
        <el-table-column prop="title" label="文章标题" width="180"/>
        <el-table-column prop="createUserName" label="创建人" width="180"/>
        <el-table-column prop="type" label="文章类型" width="180"/>
        <el-table-column prop="createTime" label="创建时间" width="180"/>
        <el-table-column prop="coverSrc" label="封面链接" width="180"/>
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div id="menu">
      <div class="menu-li" @click="handleEdit()">新增Blog</div>
    </div>

  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;

  #body {
    flex: 22;
  }

  #menu {
    flex: 2;

    .menu-li {
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: white;
      border-bottom: solid 1px var(--el-border-color);
    }
  }
}
</style>