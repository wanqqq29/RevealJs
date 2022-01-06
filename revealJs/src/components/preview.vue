<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:54:50
 * @LastEditTime: 2022-01-06 22:21:30
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \RevealJs\revealJs\src\components\preview.vue
-->
<template>
  This is Preview.vue
  <div class="reveal" id="content">
    <div class="slides">
      <section
        :data-markdown=markdown_data
        data-separator="^\n\n\n"
        data-separator-vertical="^\n\n"
      ></section>
      <section data-markdown>## 1</section>
      <section data-markdown>## 2</section>
    </div>
  </div>
</template>

<style>
@import url("/node_modules/reveal.js/dist/reveal.css");
@import url("/node_modules/reveal.js/dist/theme/black.css");
</style>

<script>
import { onMounted,ref } from "vue";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
export default {
  name: "preview",

  setup() {
    const markdown_data = ref("# markdown \n --- \n # aaa")
    
    const init = () => {
      let deck = new Reveal({
        plugins: [RevealMarkdown],
      });
      deck.initialize();
    };

    onMounted(() => {
      init();
    });

    return{
      markdown_data
    }
  },
};
</script>
