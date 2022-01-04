<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:54:50
 * @LastEditTime: 2022-01-04 22:08:19
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \RevealJs\revealJs\src\components\preview.vue
-->
<template>This is Preview.vue</template>

<script>
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';



export default {
  name: "preview",

  setup() {
      let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();
  },
};
</script>
