<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 13:01:21
 * @LastEditTime: 2022-01-13 15:15:01
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\pages\Index.vue
-->
<template>
  <section>
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
      <div class="go" @click="go()">
        <span>GO!</span>
      </div>
      <a id="foot" href="https://blog.wanqqq29.cn/" target="_blank">
        &copy;闪梦Lab
      </a>
    </q-page>
  </section>
</template>
<style lang="scss" scoped src="../css/index.scss"></style>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageIndex",

  setup() {
    const go = () => {
      window.location.href = "#/edit";
    };
    return {
      go,
    };
  },
});
</script>
