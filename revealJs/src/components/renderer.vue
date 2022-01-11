<!--
 * @Author: wanqqq29
 * @Date: 2022-01-11 14:59:55
 * @LastEditTime: 2022-01-11 15:22:46
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\components\renderer.vue
-->
<template>
<div v-html="compiledMarkdown"></div>
</template>

<script>
import { ref, onMounted, computed, reactive } from "vue";
import Marpit from "@marp-team/marpit";

export default {
  name: "renderer",
  props:{
    input:String,
  },
  setup(props, context) {

    const marpit = new Marpit({
      inlineSVG: true,
    });
  
    const theme = `
    /* @theme example */

    section {
      background-color: #369;
      color: #fff;
      font-size: 30px;
      padding: 40px;
    }

    h1,
    h2 {
      text-align: center;
      margin: 0;
    }

    h1 {
      color: #8cf;
    }
    `;

    marpit.themeSet.default = marpit.themeSet.add(theme);

    const markdown = String(props.input)
    const { html, css } = marpit.render(markdown);
    const  compiledMarkdown = html+'<style>'+css+'</style>'

    onMounted(()=>{
        // context.emit('render_html',compiledMarkdown)
        // console.log(markdown);
        // console.log(typeof(markdown));
    })
    return {
      marpit,
      compiledMarkdown
    };
  },
};
</script>
