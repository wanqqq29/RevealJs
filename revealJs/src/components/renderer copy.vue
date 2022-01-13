<!--
 * @Author: wanqqq29
 * @Date: 2022-01-11 14:59:55
 * @LastEditTime: 2022-01-13 14:12:59
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\components\renderer copy.vue
-->

// TODO // 预览组件导出 // 主题定制

<template>
  <div style="height: 100vh">
    <div v-html="compiledMarkdown"></div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="print-hide">
      <q-fab
        color="amber"
        text-color="black"
        icon="keyboard_arrow_left"
        direction="left"
      >
        <q-fab-action
          color="amber"
          text-color="black"
          @click="export_pdf"
          icon="mail"
        />
        
      </q-fab>
    </q-page-sticky>

    <div>到底了</div>
  </div>
</template>
<style lang="scss" scoped src="../css/renderer.scss"></style>

<script>
import { ref, onMounted, watchEffect, reactive } from "vue";
import Marpit from "@marp-team/marpit";
import postcssPlugin from "@marp-team/marpit/plugin"
export default {
  name: "renderer",
  props: {
    from_index_input: String,
  },
  setup(props, context) {
    const marpit = new Marpit({
      inlineSVG: true,
      markdown: {
        html: true, // Enable HTML tags
        breaks: true, // Convert line breaks into `<br />`
      },
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
    const compiledMarkdown = ref("");
    const init = () => {
      const { html, css} = marpit.render(markdown.data);
      compiledMarkdown.value = html + "<style>" + css + "</style>";
    };

    const export_pdf = ()=>{
      postcssPlugin
    }

    watchEffect(() => {
      markdown.data = String(props.from_index_input);
      init();
    });
    onMounted(() => {
      init();
    });
    return {
      marpit,
      compiledMarkdown,
      markdown,
      init,
      export_pdf
    };
  },
};
</script>
