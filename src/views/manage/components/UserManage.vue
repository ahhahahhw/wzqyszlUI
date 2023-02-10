<script lang="ts" setup>
import {fGetUserAll} from "@/api/api";
import {reactive} from "vue";

const init = () => {
  fGetUserAll().then(res => {
    res.data.data.forEach((item: any, index: any) => {
      if (item.gender === 1) {
        item.sex = '男'
      } else if (item.gender === 0) {
        item.sex = '女'
      }
    })
    data.tableData = res.data.data
  })
}
init()

const data = reactive<any>({
  tableData: []
})


</script>
<template>
  <div class="container">
    <el-table :data="data.tableData" style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180"/>
      <el-table-column prop="nickname" label="昵称" width="180"/>
      <el-table-column prop="level" label="权限" width="180"/>
      <el-table-column prop="sex" label="性别" width="180"/>
    </el-table>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  background-color: black;
}
</style>