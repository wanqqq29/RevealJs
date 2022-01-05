<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:54:50
 * @LastEditTime: 2022-01-04 23:58:23
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \RevealJs\revealJs\src\components\preview.vue
-->
<template>
  This is Preview.vue
  <div class="reveal" id="content">>
    <section data-markdown>
      <textarea data-template>
    ## Slide 1
    A paragraph with some text and a [link](http://hakim.se).
    ---
    ## Slide 2
    ---
    ## Slide 3
  </textarea
      >
    </section>
  </div>
</template>

<style>
@import url("/node_modules/reveal.js/dist/reveal.css");
@import url("/node_modules/reveal.js/dist/theme/black.css");
</style>

<script>
import { onMounted } from "vue";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";

export default {
  name: "preview",

  setup() {
    const init = () => {
      let deck = new Reveal({
        plugins: [RevealMarkdown],
      });
      deck.initialize();
    };

    onMounted(() => {
      init();
    });
  },
};
</script>
