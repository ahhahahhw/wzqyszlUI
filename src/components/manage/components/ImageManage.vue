<script lang="ts" setup>
import { reactive, ref } from "vue";
import 'element-plus'
import { ElMessage } from "element-plus/es";
import { fDeleteImage, fGetImageInfoAll, fUploadImage } from "@/api";
import { webImgUrl } from "@/env-config";


const init = () => {
  fGetImageInfoAll().then(res => {
    data.bgImage = res.data.data
    data.bgImageSrc = []
    res.data.data.forEach((item: any, index: number) => {
      data.bgImageSrc.push(webImgUrl + item.fileUrl)
    })
  })
}
init()

const data = reactive<any>({
  dialogTableVisible: false,
  type: "背景图片",
  previewImg: '',
  bgImage: [],
  bgImageSrc: []
})


const options = [
  { label: '背景图片', value: '背景图片' },
  { label: '用户头像', value: '用户头像' },
  { label: '手机背景', value: '手机背景' },
  { label: '验证码', value: '验证码' },
  { label: '商品图片', value: '商品图片' },
]

const upload = ref(null)


//上传文件到服务器
const submitUpload = () => {
  let input: HTMLInputElement = upload.value as unknown as HTMLInputElement

  if (input.files) {
    let file = input.files[input.files.length - 1]
    let uploadData = new FormData();
    uploadData.append('file', file)
    uploadData.append("createUserId", '10000')
    uploadData.append("createUserName", 'admin')
    uploadData.append("type", data.type)

    fUploadImage(uploadData).then(res => {
      if (res.data.message === 'ok') {
        ElMessage({
          showClose: true,
          type: 'success',
          message: '上传成功'
        })
        data.dialogTableVisible = false
        init()
      } else {
        ElMessage({
          showClose: true,
          type: 'error',
          message: res.data.message
        })
      }
    })
    data.previewImg = ''
    input.files = null
  } else {
    ElMessage({
      showClose: true,
      type: 'warning',
      message: "请上传文件"
    })
  }
}

//删除图片
const delImage = (id: any) => {
  fDeleteImage(id).then(res => {
    if (res.data.message === 'ok') {
      init()
      ElMessage({
        showClose: true,
        type: 'success',
        message: "删除成功"
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

//读取上传文件信息
const handleFileUpload = (event: any) => {
  event.preventDefault();
  let input: HTMLInputElement = upload.value as unknown as HTMLInputElement
  let files = input.files
  if (files) {
    var fileReader = new FileReader()
    fileReader.readAsDataURL(files[files.length - 1])
    fileReader.onload = (e: any) => {
      data.previewImg = e.currentTarget.result
    }
  }
}

const uploadBtn = () => {
  let input: HTMLInputElement = upload.value as unknown as HTMLInputElement
  input.click()
}

</script>
<template>
  <div class="container">
    <div class="body">
      <div class="image-title">
        <el-button class="image-btn" @click="data.dialogTableVisible = true">新增图片</el-button>
      </div>
      <div class="image-list">
        <div v-for="(img, index) in data.bgImage" :key="index" class="block">
          <el-image style="width: 100%; height: auto;border: 1px solid transparent;border-radius: 10px;"
            :src="webImgUrl + img.fileUrl" :preview-src-list="data.bgImageSrc" :initial-index="index" />
            <p>
              {{ img.fileName }}
              <el-tag style="margin-top: 5px;">{{ img.type }}</el-tag>
            </p>
              <el-button type="danger" @click="delImage(img.id)" style="width: 100%;">删除</el-button>
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="data.dialogTableVisible" width="300px" title="上传图片">
    <div class="upload">

      <div id="fileSubmit" @click="uploadBtn">
        <el-icon v-show="data.previewImg === ''" class="avatar-uploader-icon">
          <Plus />
        </el-icon>
        <img v-show="data.previewImg !== ''" :src="data.previewImg">
        <input ref="upload" style="display: none" id="upload" type="file" @change="handleFileUpload($event)">
      </div>

      <el-select v-model="data.type" style="margin-top: 20px" placeholder="Select" size="large">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button class="ml-3" style="margin-top: 20px" type="success" @click="submitUpload">
        上传
      </el-button>
    </div>
  </el-dialog>
</template>
<style scoped lang="less">
.upload {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .avatar-uploader-icon {
    font-size: 100px;
    color: #8c939d;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  #fileSubmit {
    width: 260px;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);

    img {
      width: 260px;
      height: 200px;
    }
  }


  #fileSubmit:hover {
    border-color: var(--el-color-primary);
  }
}

.container {
  max-width: 2000px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  .body {
    flex: 22;
  }

  .image-title {
    width: 88%;
    height: 60px;
    background-color: rgb(207, 219, 239);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .image-btn {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(207, 219, 239);
      float: right;
      margin-right: 20px;
    }
  }

  // .menu {
  //   flex: 2;

  //   .menu-li {
  //     width: 100%;
  //     height: 100px;
  //     line-height: 100px;
  //     text-align: center;
  //     color: white;
  //     border-bottom: solid 1px var(--el-border-color);
  //   }
  // }
}

.image-list {
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 80px);
  overflow: auto;
  margin-top: 60px;
  // margin-top: 60px;
  justify-content: space-between;
  align-items: flex-start;
}

.image-list .block {
  width: 20%;
  // margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // padding: 30px 0;
  // text-align: center;
  // border-right: solid 1px var(--el-border-color);
  // border-bottom: solid 1px var(--el-border-color);
  // display: inline-block;
  // display: flex;
  // justify-content: center;
  // flex-direction: column;

  // box-sizing: border-box;
  // vertical-align: top;
}

// .image-list .delImage {
//   display: block;
//   // color: white;
//   font-size: 14px;
//   margin-bottom: 20px;
//   margin-top: 20px;
// }
</style>