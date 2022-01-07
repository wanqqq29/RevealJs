<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:51:48
 * @LastEditTime: 2022-01-07 15:42:57
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\pages\test.vue
-->
<template>
  <div class="row mainbox">
    <div class="col-6 cRight">
      This is Edit.vue
      <textarea name="md_data" v-model="inp_md_data"> </textarea>
    </div>
    <div class="to" @click="BeginReveal">></div>
    <div class="col-6 cLeft">
      This is Preview.vue
      <div class="reveal" id="content">
        <div class="slides">
          <section data-markdown>
            {{ inp_md_data }}
          </section>
          <section data-markdown>## 2</section>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoop src="../../node_modules/reveal.js/dist/reveal.css"></style>
<style scoop src="../../node_modules/reveal.js/dist/theme/black.css"></style>
<style lang="scss" scoped src="../css/edit.scss"></style>
<script>
import { ref, onMounted, computed, reactive } from "vue";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

export default {
  setup() {
    let reveal = reactive(Object);

    const init = () => {
      reveal = new Reveal();
    };

    const inp_md_data = ref(
      
    );

    const BeginReveal = () => (
      reveal.initialize({
        plugins: [Markdown],
      }),
      console.log("11")
    );

    const comput_md_data = computed(() => {});
    console.log(comput_md_data.value);

    onMounted(() => {
      init();
    });
    return {
      reveal,
      inp_md_data,
      comput_md_data,
      init,
      BeginReveal,
    };
  },
};
</script>
