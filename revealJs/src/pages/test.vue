<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:51:48
 * @LastEditTime: 2022-01-11 16:01:10
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\pages\test.vue
-->
<template>
  <div class="row mainbox">
    <div class="col-6 cRight">
      <div id="edit">
        <textarea :value="input" @input="update"></textarea>
      </div>
    </div>
    <div class="col-6 cLeft">
      <renderer :input="output" />
    </div>
  </div>
</template>
<style lang="scss" scoped src="../css/edit.scss"></style>
<script>
import { ref, onMounted, computed, reactive } from "vue";
import renderer from "../components/renderer.vue";
export default {
  components: {
    renderer: renderer,
  },
  setup() {
    // 用户输入数据
    const input = ref(`# Hello!`);

    // 经过处理后的数据
    const output = ref("# Hello!");
    const update = () => {
      output.value = input.value;
      console.log(output.value, "1");
    };
    return {
      input,
      update,
      output,
    };
  },
};
</script>
