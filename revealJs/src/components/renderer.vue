<!--
 * @Author: wanqqq29
 * @Date: 2022-01-11 14:59:55
 * @LastEditTime: 2022-01-11 16:50:13
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\components\renderer.vue
-->
<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import { ref, onMounted, watchEffect, reactive } from "vue";
import Marpit from "@marp-team/marpit";

export default {
  name: "renderer",
  props: {
    from_index_input: String,
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

    const markdown = reactive({
      data: "",
    });

    // const { html, css } = marpit.render(markdown.data);
    const compiledMarkdown = ref('')
    const init = () => {
      const { html, css } = marpit.render(markdown.data);
       compiledMarkdown.value = html + "<style>" + css + "</style>";
    };

    watchEffect(() => {
      markdown.data = String(props.from_index_input);
      init();
    });
    onMounted(() => {
      init()
    });
    return {
      marpit,
      compiledMarkdown,
      markdown,
      init,
    };
  },
};
</script>
