<script lang="ts" setup>
import {reactive} from "vue";
import ProButton from "@/components/common/proButton.vue";
import {ElMessage} from "element-plus";

const props = defineProps({});

const emit = defineEmits(['submit'])

const data = reactive<any>({
  content: '',
})

const submit = () => {
  if (data.content) {
    emit('submit', data.content)
    data.content=''
  } else {
    ElMessage({
      message: '你还没写呢~',
      grouping: true,
      type: 'info',
    })
  }
}


const init = () => {

}
init()
</script>

<template>
  <!-- 框 -->
  <textarea
      class="comment-textarea"
      v-model="data.content"
      placeholder="写下点什么..."
      maxlength="1000"/>
  <!-- 按钮 -->
  <div class="myBetween" style="margin-bottom: 10px">
    <div style="display: flex">
      <div class="emoji-active">
        <i class="el-icon-orange myEmoji"></i>
      </div>
      <div @click="">
        <i class="el-icon-picture myPicture"></i>
      </div>
    </div>

    <div style="display: flex">
      <proButton info="提交"
                 @click.native="submit"
                 before="rgb(131, 123, 199)"
                 after="linear-gradient(45deg, #f43f3b, #ec008c)">
      </proButton>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
}


.comment-textarea {
  border: 1px solid var(--lightGray);
  width: 100%;
  font-size: 14px;
  padding: 15px;
  min-height: 180px;
  /* 不改变大小 */
  resize: none;
  /* 不改变边框 */
  outline: none;
  border-radius: 4px;
  background-image: var(--commentURL);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100%;
  margin-bottom: 10px;
}

.comment-textarea:focus {
  border-color: var(--themeBackground);
}

.myEmoji {
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s;
  margin-right: 12px;
}

.myEmoji:hover {
  transform: rotate(360deg);
  font-size: 22px;
}

.myPicture {
  font-size: 18px;
  cursor: pointer;
}

.emoji-active {
  color: var(--red);
}
</style>