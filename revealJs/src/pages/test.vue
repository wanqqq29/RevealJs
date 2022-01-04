<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:51:48
 * @LastEditTime: 2022-01-04 22:04:02
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \RevealJs\revealJs\src\pages\test.vue
-->
<template>
  <div class="row">
    <div class="col-6">
      <edit />
    </div>
    <div class="col-6">
      <preview />
    </div>
  </div>
</template>

<script>
import edit from "../components/edit.vue";
import preview from "../components/preview.vue";
export default {
  components: {
    edit: edit,
    preview: preview,
  },
  setup() {},
};
</script>
