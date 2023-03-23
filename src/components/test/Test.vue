<script lang="ts" setup>
import {reactive} from "vue";
import Test1 from "@/components/test/Test1.vue";


const data = reactive<any>({

})

const init = () => {

}
init()
</script>

<template>
  <div class="container">
    <input v-model="data.n.test[0].tesd[0]">
    <Test1 :obj="data.n"></Test1>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
}

</style>