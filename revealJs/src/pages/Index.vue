<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 13:01:21
 * @LastEditTime: 2022-01-04 16:26:31
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\pages\Index.vue
-->
<template>
  <q-page class="flex flex-center" style="flex-direction: column">
    <img
      alt="S Dream logo"
      src="~assets/sm11.png"
      style="width: 300px; height: 300px"
    />
    <div id="Title">
      <strong>S Dream Lab</strong>
      <div class="name">MarkDown语法写幻灯片</div>
    </div>
    <div class="go">
      <span href="./md2ppt">GO!</span>
    </div>
  </q-page>
</template>
<style lang="scss" scoped src="../css/index.scss"></style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
