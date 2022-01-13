<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:51:48
 * @LastEditTime: 2022-01-13 15:13:33
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\pages\test.vue
-->
<template>
<section>
  <div class="row mainbox">
    <div class="col-6 cRight " >
      <div id="edit">
        <textarea :value="input" @input="update"></textarea>
      </div>
    </div>
    <div class="col-6 cLeft">
      <renderer :from_index_input="output" />
    </div>
  </div>
</section>
</template>
<style lang="scss" scoped src="../css/edit.scss"></style>
<script>
import { ref,computed } from "vue";
import renderer from "../components/renderer.vue";
export default {
  components: {
    renderer: renderer,
  },
  setup() {
    // 用户输入数据
    const input = ref(`---
  paginate: true
---

<!--_paginate: false -->
# **Hello!**

---
## 你好！`);

    // 经过处理后的数据
    const output = computed(()=>{
      return input.value
    })
    const update = (e) => {
      input.value = e.target.value;
    };
    return {
      input,
      output,
      update,
    };
  },
};
</script>
